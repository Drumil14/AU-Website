"use client";

export function ContactForm() {
  return (
    <form className="rounded-lg border border-steel-200 bg-white p-6 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="name">
            Name
          </label>
          <input className="field-input" id="name" name="name" type="text" autoComplete="name" placeholder="Your name" />
        </div>
        <div>
          <label className="field-label" htmlFor="email">
            Email
          </label>
          <input
            className="field-input"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="phone">
            Phone
          </label>
          <input className="field-input" id="phone" name="phone" type="tel" autoComplete="tel" placeholder="0400 000 000" />
        </div>
        <div>
          <label className="field-label" htmlFor="service">
            Service
          </label>
          <select className="field-input" id="service" name="service" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            <option>Geotechnical engineering</option>
            <option>Civil engineering</option>
            <option>Residential engineering</option>
            <option>Project enquiry</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label className="field-label" htmlFor="message">
          Message
        </label>
        <textarea
          className="field-input min-h-36 resize-y"
          id="message"
          name="message"
          placeholder="Tell us about the site, project stage, and required timeframe."
        />
      </div>
      <button
        type="button"
        className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 sm:w-auto"
      >
        Send enquiry
      </button>
      <p className="mt-4 text-xs leading-5 text-steel-500">
        This is a front-end form UI. Connect it to your preferred form handler or CRM before production submissions.
      </p>
    </form>
  );
}
