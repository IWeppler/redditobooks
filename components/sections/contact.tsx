import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative flex w-full justify-center bg-background border-t border-brand-assets">
      <div className="mx-auto w-full max-w-7xl border-x border-brand-assets pt-16">
        {/* HEADER */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end w-full px-6 border-b border-brand-assets pb-8">
          <h2 className="font-switzer text-5xl font-bold text-white md:text-6xl">
            Contact Us
          </h2>
          <p className="max-w-md text-base text-gray-400">
            No delays, no vague replies — we respond within 24 hours to schedule
            your personalized discovery call.
          </p>
        </div>

        {/* GRID DE CONTACTO (LAYOUT similar al de la imagen que enviaste) */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* COLUMNA IZQUIERDA: BLOQUES DE INFO */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* CARD 1: Chat to Sales */}
            <div className="group flex flex-col gap-6 border-b border-r border-brand-assets p-8 transition-colors hover:bg-white/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-main/20 text-brand-main transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </div>
              <h3 className="font-switzer text-xl font-semibold text-white">
                Chat to sales
              </h3>
              <p className="text-gray-400">Contact our sales team.</p>
              <a
                href="mailto:info@redditobooks.com"
                className="font-medium text-brand-main underline-offset-4 hover:underline"
              >
                info@redditobooks.com
              </a>
            </div>

            {/* CARD 2: Call Us */}
            <div className="group flex flex-col gap-6 border-b border-brand-assets p-8 transition-colors hover:bg-white/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-main/20 text-brand-main transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2 2c-1.12.0-3.24-.04-5.41-1.33-1.85-1.1-3.69-2.94-4.8-4.8S3 6.12 4.33 3.9c1.29-2.17 2-4.32 2-5.41a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2 15.06 15.06 0 0 1 1-1.32z" />
                </svg>
              </div>
              <h3 className="font-switzer text-xl font-semibold text-white">
                Call Us
              </h3>
              <p className="text-gray-400">Get instant help.</p>
              <a
                href="tel:+1(786)402-9312"
                className="font-medium text-brand-main underline-offset-4 hover:underline"
              >
                +1 (786)402-9312
              </a>
            </div>

            {/* CARD 3: Office (Ocupa todo el ancho en mobile, pero se adapta) */}
            <div className="col-span-1 md:col-span-2 group flex flex-col gap-6 hover:bg-white/5 p-8 transition-colors hover:border-brand-main">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-main/20 text-brand-main transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 10c0 4.14-6 11-6 11s-6-6.86-6-11a6 6 0 0 1 12 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="font-switzer text-xl font-semibold text-white">
                Office
              </h3>
              <p className="text-gray-400">
                Reach out to us any time for questions, support, or inquiries.
              </p>
              <address className="not-italic text-white">
                8325 NE 2nd Ave <br />
                Miami, FL 33138, USA
              </address>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO */}
          <div className="flex flex-col gap-6 border-b border-l border-brand-assets hover:bg-white/5 p-8">
            <h3 className="font-switzer text-xl font-semibold text-white">
              Send Us a Message
            </h3>
            <p className="text-gray-400">
              We&apos;ll get back to you within 24 hours.
            </p>

            <form className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your full name"
                  className="w-full rounded border border-brand-assets bg-black/50 p-3 text-white placeholder:text-gray-600 focus:border-brand-main focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@company.com"
                  className="w-full rounded border border-brand-assets bg-black/50 p-3 text-white placeholder:text-gray-600 focus:border-brand-main focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your business needs..."
                  className="w-full rounded border border-brand-assets bg-black/50 p-3 text-white placeholder:text-gray-600 focus:border-brand-main focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="rounded bg-brand-main py-3  uppercase tracking-widest text-white transition-colors hover:bg-brand-secondary cursor-pointer"
              >
                Send the message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
