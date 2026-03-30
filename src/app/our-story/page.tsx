import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Kitchen Three — Egypt's Culinary Consultancy Since 2013",
  description:
    "From a family cloud kitchen in 2013 to Egypt's leading culinary consultancy. The Kitchen Three story — built on quality, resilience, and a belief that food changes everything.",
};

export default function OurStoryPage() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="relative px-6 pt-32 pb-24 md:px-16 lg:px-24 max-w-5xl mx-auto">
        <p className="text-[#E8825A] uppercase tracking-[0.2em] text-xs font-semibold mb-6">
          Est. November 2013 · Cairo, Egypt
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-8">
          Our Story
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
          Twelve years. One conviction. Quality is the only recipe that lasts.
        </p>
        {/* Divider */}
        <div className="mt-16 h-px bg-gradient-to-r from-[#1a7f6e] via-[#E8825A] to-transparent" />
      </section>

      {/* Timeline Sections */}
      <section className="px-6 md:px-16 lg:px-24 max-w-5xl mx-auto pb-32 space-y-0">

        {/* 2013 */}
        <div className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-16 py-20 border-b border-white/10">
          <div className="flex flex-col">
            <span className="text-5xl font-bold text-[#1a7f6e] leading-none">2013</span>
            <span className="text-[#E8825A] text-xs uppercase tracking-widest mt-2">The Beginning</span>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              It started with cookies, pies, and a partnership.
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
              <p>
                In November 2013, Cookies &amp; Pies was born — a cloud kitchen family business built around a simple belief: that real food, made with premium ingredients and genuine care, could build something lasting. It was also a personal mission — to create a platform that empowered Hadil, my wife and partner in crime, to do what she does best.
              </p>
              <p>
                What started as a home kitchen operation quickly proved there was a serious market for quality. We baked. We delivered. We refined. And we listened closely to what the market was telling us it needed.
              </p>
            </div>
          </div>
        </div>

        {/* 2014–2016 */}
        <div className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-16 py-20 border-b border-white/10">
          <div className="flex flex-col">
            <span className="text-5xl font-bold text-[#1a7f6e] leading-none">2016</span>
            <span className="text-[#E8825A] text-xs uppercase tracking-widest mt-2">The School</span>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              We grew by following the gaps, not the crowd.
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
              <p>
                Between 2014 and 2016, we extended into bakery and pastry lines, rebranded, and built a proper digital presence. By 2016, a new chapter opened: the <span className="text-white font-semibold">Kitchen Three Culinary School</span>.
              </p>
              <p>
                Working alongside the Egyptian Chefs Association and a growing network of professional chefs, we began delivering structured culinary training — for seasoned professionals sharpening their craft, for food entrepreneurs turning passion into business, and for home cooks ready to take their kitchens seriously. The school became the beating heart of our training pillar, and it remains so today.
              </p>
              <p>
                Alongside it, we launched <span className="text-white font-semibold">kitchen rental</span> — giving operators, chefs, and food startups access to a fully equipped, professional kitchen for menu testing, chef evaluations, event execution, and hands-on courses. No overheads. No compromise on quality.
              </p>
            </div>
          </div>
        </div>

        {/* 2018 */}
        <div className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-16 py-20 border-b border-white/10">
          <div className="flex flex-col">
            <span className="text-5xl font-bold text-[#1a7f6e] leading-none">2018</span>
            <span className="text-[#E8825A] text-xs uppercase tracking-widest mt-2">Full Scale</span>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              We took on food retail head on.
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
              <p>
                In August 2018, we opened our own Kitchen Three cloud kitchen and went B2C and B2B with full conviction. We launched our frozen product line — vacuum packed, no preservatives, no additives — bringing chef-quality meals into Egyptian homes.
              </p>
              <p>
                We contracted school cafeterias, delivering nutritious daily meals to students across New Cairo and the New Capital. We secured corporate accounts, becoming the culinary partner of choice for companies, banks, and institutions needing consistent, high-quality food for their people.
              </p>
              <p>
                We were no longer just advising the food industry. We were operating inside it, at scale, every day.
              </p>
            </div>
          </div>
        </div>

        {/* Consultancy */}
        <div className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-16 py-20 border-b border-white/10">
          <div className="flex flex-col">
            <span className="text-5xl font-bold text-[#1a7f6e] leading-none">8</span>
            <span className="text-[#E8825A] text-xs uppercase tracking-widest mt-2">Pillars</span>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              We built what we wished existed.
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
              <p>
                By 2018, culinary consultancy had become a core offering in its own right. Clients kept asking us how we did what we did — how we developed recipes, structured kitchens, sourced suppliers, built brands. So we formalized it.
              </p>
              <p>
                Everything came together under one name: <span className="text-white font-semibold">Kitchen Three</span> — a full-service culinary consultancy operating across eight pillars, from concept and brand design to chef placement, technology, and site selection.
              </p>
            </div>
          </div>
        </div>

        {/* 2020–2021 */}
        <div className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-16 py-20 border-b border-white/10">
          <div className="flex flex-col">
            <span className="text-5xl font-bold text-[#1a7f6e] leading-none">2021</span>
            <span className="text-[#E8825A] text-xs uppercase tracking-widest mt-2">Resilience</span>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              We survived the hardest test.
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
              <p>
                In 2020, COVID-19 shut everything down. We lost accounts. We regrouped in silence.
              </p>
              <p>
                What came out of that period was clarity. In June 2021, we launched <span className="text-white font-semibold">Kitchen Hive</span> — an international-standard cloud kitchen facility in New Cairo&apos;s industrial zone, built to a specification no local competitor has matched since: HACCP certified, Codex Alimentarius compliant, fully equipped, and ready for serious food businesses.
              </p>
              <p>
                We didn&apos;t rebuild what we had. We built what the market needed next.
              </p>
            </div>
          </div>
        </div>

        {/* Today */}
        <div className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-16 py-20">
          <div className="flex flex-col">
            <span className="text-5xl font-bold text-[#1a7f6e] leading-none">Today</span>
            <span className="text-[#E8825A] text-xs uppercase tracking-widest mt-2">2026</span>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Where we are today.
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
              <p>
                Twelve years on, Kitchen Three is one of Egypt&apos;s culinary consultancies operating across all eight pillars of the F&amp;B business, offering a world-class service of chef matchmaking and an online culinary academy with hands-on training for a wide range of food industry B2C and B2B clients and partners.
              </p>
              <p>
                Our clients range from first-time Cairo investors and growing F&amp;B brands to international groups entering Egypt. What they all share is the same starting point we had in November 2013: a belief that quality, made with the right ingredients and the right people, is the only recipe that lasts.
              </p>
            </div>

            {/* Closing stamp */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-600 uppercase tracking-widest">
                Kitchen Three LLC · Est. November 2013 · Cairo, Egypt
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#111] border-t border-white/10 px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to write your own story?
            </h3>
            <p className="text-gray-400">
              Let&apos;s talk about your F&amp;B concept.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-block bg-[#1a7f6e] hover:bg-[#156b5c] text-white font-semibold px-8 py-4 rounded transition-colors duration-200 whitespace-nowrap"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
