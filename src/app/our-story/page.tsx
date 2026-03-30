'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

const milestones = [
  {
    year: '2013',
    label: 'The Beginning',
    heading: 'It started with cookies, pies, women empowerment and a family partnership.',
    body: [
      'In November 2013, Cookies & Pies was born — a cloud kitchen family business built around a simple belief: that real food, made with premium ingredients and genuine care, could build something lasting. It was also a personal mission — to create a platform that empowered Hadil, my wife and partner in crime, to do what she does best.',
      'What started as a home kitchen operation quickly proved there was a serious market for quality. We baked. We delivered. We refined. And we listened closely to what the market was telling us it needed.',
    ],
    photos: [
      { src: '/images/our-story/cookies-pies-logo.jpg', alt: 'Cookies & Pies — where it all began' },
      { src: '/images/our-story/cookies-pies-stall.jpg', alt: 'Cookies & Pies market stall' },
      { src: '/images/our-story/cookies-pies-stall-2.jpg', alt: 'Kitchen Three retail stall' },
      { src: '/images/our-story/kt-outdoor-stall.jpg', alt: 'Kitchen Three outdoor stall' },
    ],
    video: null,
  },
  {
    year: '2016',
    label: 'The School',
    heading: 'We grew by following the gaps, not the crowd.',
    body: [
      'Between 2014 and 2016, we extended into bakery and pastry lines, rebranded, and built a proper digital presence. By 2016, a new chapter opened: the Kitchen Three Culinary School.',
      'Working alongside the Egyptian Chefs Association and a growing network of professional chefs, we began delivering structured culinary training — for seasoned professionals sharpening their craft, for food entrepreneurs turning passion into business, and for home cooks ready to take their kitchens seriously. The school became the beating heart of our training pillar, and it remains so today.',
      'Alongside it, we launched kitchen rental — giving operators, chefs, and food startups access to a fully equipped, professional kitchen for menu testing, chef evaluations, event execution, and hands-on courses. No overheads. No compromise on quality.',
    ],
    photos: [
      { src: '/images/our-story/hadil-teaching-class.jpg', alt: 'Hadil teaching culinary class' },
      { src: '/images/our-story/hadil-teaching.jpg', alt: 'Hadil teaching pastry class' },
      { src: '/images/our-story/training-class.jpg', alt: 'Kitchen Three culinary training' },
      { src: '/images/our-story/certificates-class.jpg', alt: 'Graduates with certificates' },
      { src: '/images/our-story/kids-pasta.jpg', alt: 'Kids pasta making class' },
    ],
    video: null,
  },
  {
    year: '2018',
    label: 'Full Scale',
    heading: 'We took on food retail head on.',
    body: [
      'In August 2018, we opened our own Kitchen Three cloud kitchen and went B2C and B2B with full conviction. We launched our frozen product line — vacuum packed, no preservatives, no additives — bringing chef-quality meals into Egyptian homes.',
      'We contracted school cafeterias, delivering nutritious daily meals to students across New Cairo and the New Capital. We secured corporate accounts, becoming the culinary partner of choice for companies, banks, and institutions needing consistent, high-quality food for their people.',
      'We were no longer just advising the food industry. We were operating inside it, at scale, every day.',
    ],
    photos: [
      { src: '/images/our-story/freezer-products.jpg', alt: 'Kitchen Three frozen product range' },
      { src: '/images/our-story/zucchini-soup-product.jpg', alt: 'Kitchen Three Zucchini Soup' },
      { src: '/images/our-story/beef-stock-product.jpg', alt: 'Kitchen Three Beef Stock' },
      { src: '/images/our-story/cloud-kitchen-pastry-1.jpg', alt: 'Cloud kitchen pastry production' },
      { src: '/images/our-story/sourdough-bread.jpg', alt: 'Freshly baked sourdough' },
      { src: '/images/our-story/baguettes.jpg', alt: 'Freshly baked baguettes' },
    ],
    video: null,
  },
  {
    year: '2018',
    label: 'Eight Pillars',
    heading: 'We built what we wished existed.',
    body: [
      'By 2018, culinary consultancy had become a core offering in its own right. Clients kept asking us how we did what we did — how we developed recipes, structured kitchens, sourced suppliers, built brands. So we formalized it.',
      'Everything came together under one name: Kitchen Three — a full-service culinary consultancy operating across eight pillars, from concept and brand design to chef placement, technology, and site selection.',
    ],
    photos: [
      { src: '/images/our-story/michelin-chef-event.jpg', alt: 'Michelin chef Giorgio Diana — Sous-vide masterclass 2018' },
      { src: '/images/our-story/corporate-training-1.jpg', alt: 'Corporate culinary training' },
      { src: '/images/our-story/corporate-event-1.jpg', alt: 'Corporate team building event' },
      { src: '/images/our-story/corporate-event-2.jpg', alt: 'Corporate culinary event' },
      { src: '/images/our-story/catering-aubergine.jpg', alt: 'Catering — stuffed aubergine dish' },
      { src: '/images/our-story/christmas-event.jpg', alt: 'Christmas event at Nefertari school' },
    ],
    video: null,
  },
  {
    year: '2021',
    label: 'Resilience',
    heading: 'We survived the hardest test.',
    body: [
      'In 2020, COVID-19 shut everything down. We lost accounts. We regrouped in silence.',
      'What came out of that period was clarity. In June 2021, we launched Kitchen Hive — an international-standard cloud kitchen facility in New Cairo\'s industrial zone, built to a specification no local competitor has matched since: HACCP certified, Codex Alimentarius compliant, fully equipped, and ready for serious food businesses.',
      'We didn\'t rebuild what we had. We built what the market needed next.',
    ],
    photos: [],
    video: 'https://www.youtube.com/embed/T77z1KpH_DY',
  },
  {
    year: 'Today',
    label: '2026',
    heading: 'Where we are today.',
    body: [
      'Twelve years on, Kitchen Three is one of Egypt\'s culinary consultancies operating across all eight pillars of the F&B business, offering a world-class service of chef matchmaking and an online culinary academy with hands-on training for a wide range of food industry B2C and B2B clients and partners.',
      'Our clients range from first-time Cairo investors and growing F&B brands to international groups entering Egypt. What they all share is the same starting point we had in November 2013: a belief that quality, made with the right ingredients and the right people, is the only recipe that lasts.',
    ],
    photos: [
      { src: '/images/our-story/kt-today-1.jpg', alt: 'Kitchen Three today' },
      { src: '/images/our-story/kt-today-2.jpg', alt: 'Kitchen Three team' },
    ],
    video: null,
  },
]

function PhotoGrid({ photos }: { photos: { src: string; alt: string }[] }) {
  const [showAll, setShowAll] = useState(false)
  const limit = 6
  const visible = showAll ? photos : photos.slice(0, limit)
  const hasMore = photos.length > limit

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        {visible.map((photo, k) => (
          <div
            key={k}
            className="relative overflow-hidden rounded-sm bg-gray-100"
            style={{ aspectRatio: '4/3' }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
      {hasMore && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 text-sm font-semibold uppercase tracking-widest text-[#1a7f6e] border border-[#1a7f6e] px-6 py-2 rounded-sm hover:bg-[#1a7f6e] hover:text-white transition-colors duration-200"
        >
          {`Show all ${photos.length} photos`}
        </button>
      )}
    </div>
  )
}

export default function OurStoryPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* Hero */}
      <section className="px-5 md:px-16 lg:px-24 pt-28 md:pt-36 pb-12 md:pb-20 max-w-6xl mx-auto">
        <p className="text-[#1a7f6e] uppercase tracking-[0.25em] text-xs font-semibold mb-4 md:mb-5">
          Est. November 2013 · Cairo, Egypt
        </p>
        <h1
          className="font-extrabold tracking-tight leading-none text-gray-900 mb-6 md:mb-10"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 'clamp(40px, 8vw, 96px)',
          }}
        >
          Our<br />Story
        </h1>
        <p
          className="text-gray-500 leading-relaxed font-light"
          style={{ fontSize: 'clamp(16px, 2.5vw, 22px)', maxWidth: 480 }}
        >
          Twelve years. One conviction.<br />
          Quality is the only recipe that lasts.
        </p>
        <div className="mt-10 md:mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />
          <div className="w-2 h-2 rounded-full bg-[#E8825A]" />
          <div className="h-px w-12 bg-[#1a7f6e]" />
        </div>
      </section>

      {/* Timeline */}
      <section className="px-5 md:px-16 lg:px-24 max-w-6xl mx-auto pb-20 md:pb-32">
        {milestones.map((m, i) => (
          <div
            key={i}
            className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-20 py-10 md:py-16 border-b border-gray-100 last:border-0"
          >
            {/* Year */}
            <div className="flex md:flex-col flex-row items-center md:items-start gap-3 md:gap-1 md:pt-1">
              <span
                className="text-[#1a7f6e] font-extrabold leading-none"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: m.year === 'Today' ? 'clamp(28px, 5vw, 45px)' : 'clamp(32px, 6vw, 56px)',
                }}
              >
                {m.year}
              </span>
              <span className="text-[#E8825A] text-xs uppercase tracking-[0.2em] font-semibold">
                {m.label}
              </span>
            </div>

            {/* Content */}
            <div>
              <h2
                className="font-bold text-gray-900 mb-5 md:mb-6 leading-snug"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: 'clamp(18px, 3vw, 30px)',
                }}
              >
                {m.heading}
              </h2>
              <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                {m.body.map((para, j) => (
                  <p key={j} className="text-gray-600 leading-relaxed text-base md:text-lg">
                    {para}
                  </p>
                ))}
              </div>

              {/* YouTube video */}
              {m.video && (
                <div
                  className="mb-6 md:mb-8 rounded-sm overflow-hidden w-full"
                  style={{ aspectRatio: '16/9' }}
                >
                  <iframe
                    src={m.video}
                    title="Kitchen Hive — Cloud Kitchen Facility"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              )}

              {/* Photos */}
              {m.photos.length > 0 && <PhotoGrid photos={m.photos} />}
            </div>
          </div>
        ))}

        <p className="mt-12 md:mt-16 text-xs md:text-sm text-gray-400 uppercase tracking-widest text-center">
          Kitchen Three LLC · Est. November 2013 · Cairo, Egypt
        </p>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f5f2] border-t border-gray-200 px-5 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
          <div>
            <h3
              className="font-bold text-gray-900 mb-2"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 'clamp(22px, 4vw, 40px)',
              }}
            >
              Ready to write your own story?
            </h3>
            <p className="text-gray-500 text-base md:text-lg">
              {"Let's talk about your F&B concept."}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-[#1a7f6e] hover:bg-[#156b5c] text-white font-semibold px-8 md:px-10 py-4 rounded-sm transition-colors duration-200 whitespace-nowrap text-xs md:text-sm uppercase tracking-widest text-center"
          >
            Get in Touch
          </Link>
        </div>
      </section>

    </main>
  )
}
