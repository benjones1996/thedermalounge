import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif tracking-widest mb-4 uppercase logo-text">THE DERMA LOUNGE</h3>
            <div className="w-16 h-px bg-white mb-4"></div>
            <p className="text-white/80 uppercase tracking-widest subtitle-text mb-4">SKIN AND LASER CLINIC</p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/thedermalounge_uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:thedermaloungeuk@gmail.com" className="text-white hover:text-white/80 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-white transition-colors uppercase tracking-wider text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/price-list"
                  className="text-white/80 hover:text-white transition-colors uppercase tracking-wider text-sm"
                >
                  Price List
                </Link>
              </li>
              <li>
                <Link
                  href="/laser-faqs"
                  className="text-white/80 hover:text-white transition-colors uppercase tracking-wider text-sm"
                >
                  Laser FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/preparation"
                  className="text-white/80 hover:text-white transition-colors uppercase tracking-wider text-sm"
                >
                  Preparation
                </Link>
              </li>
              <li>
                <Link
                  href="/aftercare"
                  className="text-white/80 hover:text-white transition-colors uppercase tracking-wider text-sm"
                >
                  Aftercare
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-white transition-colors uppercase tracking-wider text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4 uppercase tracking-wider">Location</h3>
            <p className="text-white/80 mb-2">242 Stow Hill, Newport, Wales, NP20 4HA</p>
            <p className="text-white/80 mb-4">Please contact us via Instagram for appointment inquiries.</p>
            <a
              href="https://www.instagram.com/thedermalounge_uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors uppercase tracking-wider text-sm"
            >
              @thedermalounge_uk
            </a>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} THE DERMA LOUNGE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

