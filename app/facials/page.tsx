import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export const metadata = {
  title: "Facial Treatments | THE DERMA LOUNGE",
  description:
    "Luxurious facial treatments at THE DERMA LOUNGE in Newport, Wales. Customized facials to address your specific skin concerns and goals.",
}

export default function FacialsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          title="Facial Treatments"
          description="Customized facial treatments to address your specific skin concerns and enhance your natural beauty."
        />

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif tracking-widest text-primary mb-6 uppercase logo-text">
                  About Our Facials
                </h2>
                <p className="text-muted-foreground mb-4">
                  At THE DERMA LOUNGE, we offer a range of luxurious facial treatments designed to address your specific
                  skin concerns and enhance your natural beauty. Our facials combine advanced techniques with premium
                  products to deliver exceptional results.
                </p>
                <p className="text-muted-foreground mb-4">
                  Each facial begins with a thorough consultation to assess your skin type, concerns, and goals. Our
                  experienced estheticians will then customize your treatment to provide the best possible results for
                  your skin.
                </p>
                <p className="text-muted-foreground mb-6">
                  Whether you're looking to hydrate dry skin, control oil production, reduce signs of aging, or simply
                  indulge in a relaxing treatment, we have the perfect facial for you.
                </p>
                <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-none uppercase tracking-wider">
                    Book Your Facial
                  </Button>
                </a>
              </div>
              <div className="relative h-[400px] bg-primary/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-primary/40 text-2xl font-serif tracking-widest uppercase">Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container">
            <h2 className="text-3xl font-serif tracking-widest text-primary mb-12 text-center uppercase logo-text">
              Our Facial Treatments
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-primary/20 p-6 bg-white">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Signature Facial</h3>
                <p className="text-muted-foreground mb-4">
                  Our signature facial is a comprehensive treatment that includes deep cleansing, exfoliation,
                  extraction, mask, and massage. This facial is customized to address your specific skin concerns and
                  leaves your skin refreshed, balanced, and glowing.
                </p>
                <p className="text-muted-foreground mb-4">Duration: 60 minutes</p>
                <div className="flex justify-between items-center">
                  <p className="text-primary font-medium">£95</p>
                  <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-wider"
                    >
                      Book
                    </Button>
                  </a>
                </div>
              </div>

              <div className="border border-primary/20 p-6 bg-white">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Hydrating Facial</h3>
                <p className="text-muted-foreground mb-4">
                  Perfect for dry or dehydrated skin, this facial focuses on restoring moisture and improving skin
                  texture. It includes gentle cleansing, hydrating mask, and nourishing serums to leave your skin soft,
                  supple, and radiant.
                </p>
                <p className="text-muted-foreground mb-4">Duration: 45 minutes</p>
                <div className="flex justify-between items-center">
                  <p className="text-primary font-medium">£75</p>
                  <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-wider"
                    >
                      Book
                    </Button>
                  </a>
                </div>
              </div>

              <div className="border border-primary/20 p-6 bg-white">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Anti-Aging Facial</h3>
                <p className="text-muted-foreground mb-4">
                  This facial targets fine lines, wrinkles, and loss of elasticity. It includes advanced exfoliation,
                  anti-aging serums, and a firming mask to stimulate collagen production and improve skin texture and
                  tone.
                </p>
                <p className="text-muted-foreground mb-4">Duration: 75 minutes</p>
                <div className="flex justify-between items-center">
                  <p className="text-primary font-medium">£110</p>
                  <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-wider"
                    >
                      Book
                    </Button>
                  </a>
                </div>
              </div>

              <div className="border border-primary/20 p-6 bg-white">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Clarifying Facial</h3>
                <p className="text-muted-foreground mb-4">
                  Designed for oily or acne-prone skin, this facial focuses on deep cleansing, extraction, and balancing
                  oil production. It includes antibacterial and anti-inflammatory ingredients to calm and clear the
                  skin.
                </p>
                <p className="text-muted-foreground mb-4">Duration: 60 minutes</p>
                <div className="flex justify-between items-center">
                  <p className="text-primary font-medium">£85</p>
                  <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-wider"
                    >
                      Book
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-serif tracking-widest text-primary mb-12 text-center uppercase logo-text">
              Benefits of Regular Facials
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-primary/20">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-serif tracking-widest text-primary mb-2 uppercase">Deep Cleansing</h3>
                <p className="text-muted-foreground">
                  Facials provide deeper cleansing than regular at-home routines, removing impurities, dead skin cells,
                  and excess oil.
                </p>
              </div>

              <div className="text-center p-6 border border-primary/20">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-serif tracking-widest text-primary mb-2 uppercase">Improved Circulation</h3>
                <p className="text-muted-foreground">
                  Facial massage stimulates blood flow, bringing oxygen and nutrients to the skin for a healthy glow.
                </p>
              </div>

              <div className="text-center p-6 border border-primary/20">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-serif tracking-widest text-primary mb-2 uppercase">Stress Relief</h3>
                <p className="text-muted-foreground">
                  Facials provide a relaxing experience that reduces stress and promotes overall wellbeing.
                </p>
              </div>

              <div className="text-center p-6 border border-primary/20">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="1" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-serif tracking-widest text-primary mb-2 uppercase">Anti-Aging</h3>
                <p className="text-muted-foreground">
                  Regular facials can help reduce fine lines, improve elasticity, and promote collagen production.
                </p>
              </div>

              <div className="text-center p-6 border border-primary/20">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-serif tracking-widest text-primary mb-2 uppercase">Expert Advice</h3>
                <p className="text-muted-foreground">
                  Our estheticians provide personalized skincare recommendations based on your skin's needs.
                </p>
              </div>

              <div className="text-center p-6 border border-primary/20">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-lg font-serif tracking-widest text-primary mb-2 uppercase">Enhanced Results</h3>
                <p className="text-muted-foreground">
                  Professional treatments enhance the effectiveness of your daily skincare routine.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="container text-center">
            <h2 className="text-3xl font-serif tracking-widest text-white mb-6 uppercase logo-text">
              Ready for Radiant Skin?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Book your facial treatment today and experience the difference professional skincare can make.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white hover:bg-white/90 text-primary rounded-none px-8 py-6 uppercase tracking-wider w-full sm:w-auto">
                  Book Now
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 rounded-none px-8 py-6 uppercase tracking-wider w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

