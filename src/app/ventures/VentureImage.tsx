'use client'

export default function VentureImage({
  src,
  alt,
  ventureName,
  height = 380,
  borderRadius = 'var(--radius)',
}: {
  src: string
  alt: string
  ventureName: string
  height?: number | string
  borderRadius?: string
}) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height,
        borderRadius,
        overflow: 'hidden',
        background:
          'linear-gradient(135deg, var(--teal-light) 0%, var(--cream) 100%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: 16,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--teal)',
            opacity: 0.55,
            marginBottom: 6,
          }}
        >
          Kitchen Three
        </div>
        <div
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 18,
            color: 'var(--muted)',
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          {ventureName}
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
        onError={(e) => {
          ;(e.currentTarget as HTMLImageElement).style.display = 'none'
        }}
      />
    </div>
  )
}
