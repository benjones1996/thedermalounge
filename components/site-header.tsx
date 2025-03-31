"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-muted">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-serif tracking-widest text-primary uppercase logo-text">THE DERMA LOUNGE</h1>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm tracking-wider"
          >
            Home
          </Link>
          <Link
            href="/price-list"
            className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm tracking-wider"
          >
            Price List
          </Link>
          <Link
            href="/laser-faqs"
            className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm tracking-wider"
          >
            Laser FAQs
          </Link>
          <Link
            href="/preparation"
            className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm tracking-wider"
          >
            Preparation
          </Link>
          <Link
            href="/aftercare"
            className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm tracking-wider"
          >
            Aftercare
          </Link>
          <Link
            href="/gallery"
            className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm tracking-wider"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm tracking-wider"
          >
            Contact
          </Link>
          <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase text-sm tracking-wider"
            >
              Book Now
            </Button>
          </a>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="sr-only">Toggle menu</span>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-b border-muted">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/price-list"
              className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              Price List
            </Link>
            <Link
              href="/laser-faqs"
              className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              Laser FAQs
            </Link>
            <Link
              href="/preparation"
              className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              Preparation
            </Link>
            <Link
              href="/aftercare"
              className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              Aftercare
            </Link>
            <Link
              href="/gallery"
              className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/faq"
              className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://the-derma-lounge.book.app/book-now"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                variant="outline"
                className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase text-sm tracking-wider w-full"
              >
                Book Now
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

