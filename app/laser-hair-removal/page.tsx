import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export const metadata = {
  title: "Laser Hair Removal | THE DERMA LOUNGE",
  description:
    "Professional laser hair removal treatments at THE DERMA LOUNGE in Newport, Wales. Safe, effective, and long-lasting results for all skin types.",
}

export default function LaserHairRemovalPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          title="Laser Hair Removal"
          description="Safe, effective, and long-lasting hair reduction treatments for all skin types."
        />

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif tracking-widest text-primary mb-6 uppercase logo-text">
                  About Laser Hair Removal
                </h2>
                <p className="text-muted-foreground mb-4">
                  Laser hair removal is a non-invasive treatment that uses concentrated light to target hair follicles.
                  The pigment in the follicles absorbs the light, which damages the follicle and inhibits future hair
                  growth.
                </p>
                <p className="text-muted-foreground mb-4">
                  At THE DERMA LOUNGE, we use advanced laser technology that is safe and effective for all skin types.
                  Our treatments provide long-lasting results, reducing the need for regular shaving, waxing, or
                  plucking.
                </p>
                <p className="text-muted-foreground mb-6">
                  Most clients require 6-8 sessions for optimal results, with maintenance sessions as needed. The number
                  of sessions may vary depending on the treatment area, hair type, and individual factors.
                </p>
                <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-none uppercase tracking-wider">
                    Book Your Treatment
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
              Treatment Areas
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-primary/20 p-6 bg-white">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Face</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>Upper Lip</li>
                  <li>Chin</li>
                  <li>Sideburns</li>
                  <li>Full Face</li>
                  <li>Neck</li>
                </ul>
                <p className="text-primary font-medium">From £30</p>
              </div>

              <div className="border border-primary/20 p-6 bg-white">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Body</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>Underarms</li>
                  <li>Arms</li>
                  <li>Chest</li>
                  <li>Back</li>
                  <li>Stomach</li>
                </ul>
                <p className="text-primary font-medium">From £50</p>
              </div>

              <div className="border border-primary/20 p-6 bg-white">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Legs</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>Bikini Line</li>
                  <li>Brazilian</li>
                  <li>Hollywood</li>
                  <li>Half Legs</li>
                  <li>Full Legs</li>
                </ul>
                <p className="text-primary font-medium">From £60</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                We offer package deals and discounts for multiple areas. Contact us for more information or to book a
                consultation.
              </p>
              <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none uppercase tracking-wider">
                  View All Treatments
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-serif tracking-widest text-primary mb-12 text-center uppercase logo-text">
              The Process
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-serif mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-serif tracking-widest text-primary mb-2 uppercase">Consultation</h3>
                <p className="text-muted-foreground">
                  We'll discuss your goals, assess your skin and hair type, and create a personalized treatment plan.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-serif mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-serif tracking-widest text-primary mb-2 uppercase">Preparation</h3>
                <p className="text-muted-foreground">
                  Shave the treatment area 24 hours before your appointment. Avoid sun exposure and tanning.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-serif mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-serif tracking-widest text-primary mb-2 uppercase">Treatment</h3>
                <p className="text-muted-foreground">
                  The laser targets hair follicles while our cooling technology keeps you comfortable.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-serif mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-serif tracking-widest text-primary mb-2 uppercase">Aftercare</h3>
                <p className="text-muted-foreground">
                  Follow our aftercare instructions for optimal results and schedule your next session.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="container text-center">
            <h2 className="text-3xl font-serif tracking-widest text-white mb-6 uppercase logo-text">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Book your laser hair removal consultation or treatment today. Take the first step towards smooth,
              hair-free skin.
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

