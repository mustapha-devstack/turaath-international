import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function UnderConstructionPage() {
  return (
    <>
      <Head>
        <title>Site — Under Construction</title>
        <meta name="description" content="This page is under construction." />
      </Head>

      {/* The theme CSS you provided should live in globals.css (or imported into _app.tsx).
          If you haven't done that yet, copy the CSS you sent into styles/globals.css.
      */}

      <main className="min-h-screen flex items-center justify-center p-6 bg-[var(--turaath-light)]">
        <section className="max-w-3xl text-center">
          <div className="inline-flex items-center justify-center w-36 h-36 rounded-full bg-white/60 shadow-2xl mx-auto mb-6 animate-pulse">
            {/* Simple gear / construction SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="64"
              height="64"
              aria-hidden="true"
              className="fill-[var(--turaath-dark)]"
            >
              <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm9.4 4a7.9 7.9 0 0 0-.6-2.7l1.8-1.4-2-3.4-2.1.9A8.1 8.1 0 0 0 14 2.6V.5h-4v2.1A8.1 8.1 0 0 0 4.5 4.8L2.4 4 1 7.4l2 1.5A7.9 7.9 0 0 0 3 12c0 .9.2 1.7.5 2.5L1.2 16 3 19l2.1-1.2A8.1 8.1 0 0 0 10 21.4V23.5h4v-2.1c1-.2 1.9-.6 2.7-1.1l2.1 1.1 1.4-3.4-1.8-1.3c.4-.7.6-1.5.6-2.6z" />
            </svg>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-[var(--turaath-dark)]">
            Under Construction
          </h1>

          <p className="text-lg sm:text-xl mb-6 text-gray-700 max-w-xl mx-auto">
            Thanks for visiting — we are busy building something great. Check back soon or
            explore other parts of the site.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link href="/"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border-2 border-[var(--turaath-green)] bg-white text-[var(--turaath-dark)] font-semibold shadow-md hover:scale-[1.02] transition-transform"
                aria-label="Go to homepage">
                Home
            </Link>

            <Link href="/contact" 
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[var(--turaath-green)] text-white font-semibold shadow-md hover:brightness-105 transition"
                aria-label="Contact us"
              >
                Contact
            </Link>
          </div>

          <footer className="mt-8 text-sm text-gray-500">
            <p>
              <span className="text-turaath-green font-medium">Remotenest</span> — Crafting the
              future. &nbsp;• &nbsp;Last updated: <span className="font-medium">{new Date().toLocaleDateString()}</span>
            </p>
          </footer>
        </section>
      </main>
    </>
  );
}
