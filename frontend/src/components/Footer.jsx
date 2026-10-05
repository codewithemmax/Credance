import { motion } from "framer-motion";

const links = {
  Product: [
    { label: "How it Works", href: "#how-it-works" },
    { label: "Market Score", href: "#score" },
    { label: "Squad APIs", href: "#squad-apis" },
    { label: "V2 Roadmap", href: "/v2" },
    { label: "Job Directory", href: "/jobs" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0D0A0A] border-t border-white/10 px-6 md:px-16 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div
              onClick={() => (window.location.href = "/")}
              className="font-['Bricolage_Grotesque'] font-bold text-xl text-white mb-4 cursor-pointer inline-block"
            >
              Credance
            </div>
            <p className="font-['Inter'] text-sm text-white/40 leading-relaxed">
              Trust infrastructure for Nigeria's informal economy. Built on
              Squad.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://github.com/SwiftDG/vouch-signal"
                target="_blank"
                rel="noreferrer"
                className="font-['Inter'] text-xs text-white/40 hover:text-white transition-colors no-underline flex items-center gap-2"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-.96-.825-.015-.84.885-.015 1.515.81 1.725 1.14.99 1.665 2.58 1.195 3.21.905.09-.705.375-1.195.675-1.47-2.375-.255-4.88-1.185-4.88-5.255 0-1.17.42-2.13 1.11-2.88-.12-.27-.48-1.38.12-2.86 0 0 .9-.285 2.97 1.11a10.34 10.34 0 0 1 5.4 0c2.07-1.395 2.97-1.11 2.97-1.11.6 1.48.24 2.59.12 2.86.69.75 1.11 1.71 1.11 2.88 0 4.08-2.52 4.995-4.905 5.25.39.345.735 1.02.735 2.07 0 1.5-.015 2.7-.015 3.075 0 .315.225.675.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-['Inter'] text-xs uppercase tracking-widest text-white/40 mb-4">
                {category}
              </h4>
              <ul className="space-y-3 list-none p-0 m-0">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-['Inter'] text-sm text-white/60 hover:text-white transition-colors no-underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-['Inter'] text-xs text-white/30">© 2026 Credance.</p>
          <p className="font-['Inter'] text-xs text-white/30">
            Powered by Squad · GTCo · HabariPay
          </p>
        </div>
      </div>
    </footer>
  );
}
