import { NextResponse, type NextRequest } from 'next/server'

/**
 * Geo routing for the Arabic site.
 *
 * Visitors detected in Egypt are sent from /ar/* to the English equivalent.
 * Arabic remains available to everyone outside Egypt.
 *
 * Next 16 calls this file `proxy.ts`; it is the successor to `middleware.ts`.
 * `NextRequest.geo` no longer exists in this version, so the country comes
 * from the `x-vercel-ip-country` header that Vercel injects at the edge.
 */

const AR_PREFIX = '/ar'
const REDIRECT_COUNTRY = 'EG'

/** Read client-side to hide the language switcher for blocked visitors. */
export const COUNTRY_COOKIE = 'kt-country'

function englishEquivalent(pathname: string): string | null {
  // Guard against paths that merely begin with the letters "ar" (/arabic, /archive…).
  if (pathname === AR_PREFIX) return '/'
  if (!pathname.startsWith(AR_PREFIX + '/')) return null
  const rest = pathname.slice(AR_PREFIX.length)
  return rest === '/' ? '/' : rest
}

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // The override exists so the site can be checked from inside Egypt without a
  // VPN. It is ignored in production, where only the real header counts.
  const isProduction = process.env.VERCEL_ENV === 'production'
  const override = isProduction ? null : searchParams.get('forceGeo')

  // Absent off Vercel — locally, in CI, anywhere without the edge header. When
  // it is missing we do nothing rather than guess at the visitor's location.
  const headerCountry = request.headers.get('x-vercel-ip-country')

  const country = (override ?? headerCountry ?? '').toUpperCase()
  const isBlocked = country === REDIRECT_COUNTRY

  if (isBlocked) {
    const target = englishEquivalent(pathname)
    if (target) {
      const url = request.nextUrl.clone()
      url.pathname = target
      url.searchParams.delete('forceGeo')
      // 307, never 301: a permanent redirect gets cached by browsers and
      // crawlers and is painful to undo if this rule ever changes.
      const redirect = NextResponse.redirect(url, 307)
      setCountryCookie(redirect, country)
      return redirect
    }
  }

  const response = NextResponse.next()
  setCountryCookie(response, country)
  return response
}

function setCountryCookie(response: NextResponse, country: string) {
  if (!country) return
  response.cookies.set(COUNTRY_COOKIE, country, {
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // a day; short enough that travel corrects itself
  })
}

export const config = {
  // Every page, so the country cookie is available to hide the switcher on the
  // English pages too. Static assets, the API, and the Sanity Studio are skipped.
  matcher: ['/((?!_next/static|_next/image|favicon.ico|studio|api|.*\\..*).*)'],
}
