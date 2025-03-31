import { PageHeader } from "@/components/page-header"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Price List | THE DERMA LOUNGE",
  description:
    "View our comprehensive price list for laser hair removal and facial treatments at THE DERMA LOUNGE in Newport, Wales.",
}

export default function PriceListPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          title="Price List"
          description="View our complete pricing for laser hair removal treatments and facial services."
        />

        {/* Laser Hair Removal Pricing */}
        <section className="py-16">
          <div className="container max-w-5xl">
            <h2 className="text-3xl font-serif tracking-widest text-primary mb-12 text-center uppercase logo-text">
              Laser Hair Removal
            </h2>

            <div className="grid md:grid-cols-2 gap-10 mb-16">
              {/* Single Sessions */}
              <div className="border border-primary/30 p-8 rounded-sm">
                <h3 className="text-2xl font-serif tracking-widest text-primary mb-6 uppercase text-center">
                  Single Sessions
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                      Large Areas - £129
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Full Leg</span>
                        <span>£129</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Chest & Abs</span>
                        <span>£129</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Full Back</span>
                        <span>£129</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Hollywood</span>
                        <span>£129</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                      Medium Areas - £89
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Half Leg</span>
                        <span>£89</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Full Arm</span>
                        <span>£89</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Half Back</span>
                        <span>£89</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Brazilian</span>
                        <span>£89</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                      Small Areas - £49
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Underarm</span>
                        <span>£49</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Half Arm</span>
                        <span>£49</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Bikini</span>
                        <span>£49</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Buttocks</span>
                        <span>£49</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Half Face</span>
                        <span>£49</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Peri Anal</span>
                        <span>£49</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                      Micro Areas - £29
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Upper Lip</span>
                        <span>£29</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Chin</span>
                        <span>£29</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Fingers & Toes</span>
                        <span>£29</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Monobrow</span>
                        <span>£29</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Neck</span>
                        <span>£29</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Other Areas</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Nipples</span>
                        <span>£39</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Lower Stomach</span>
                        <span>£39</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Full Face</span>
                        <span>£80</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Course Packages */}
              <div className="border border-primary/30 p-8 rounded-sm">
                <h3 className="text-2xl font-serif tracking-widest text-primary mb-6 uppercase text-center">
                  Course Packages
                </h3>
                <p className="italic text-muted-foreground mb-6 text-center">Save on courses of 3 or 6 treatments</p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Upper Lip</h4>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Course of 3</span>
                      <span>£70</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Course of 6</span>
                      <span>£140</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Half Leg</h4>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Course of 3</span>
                      <span>£213</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Course of 6</span>
                      <span>£427</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Full Leg</h4>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Course of 3</span>
                      <span>£309</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Course of 6</span>
                      <span>£619</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-primary/20">
                    <h4 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                      Combined Packages
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Full Leg, Hollywood & Underarms</p>
                        <div className="flex justify-between text-muted-foreground">
                          <span>Per Session</span>
                          <span>£300</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                          <span>Course of 6</span>
                          <span>£1440</span>
                        </div>
                      </div>

                      <div>
                        <p className="font-medium">Full Body (Full Leg, Arms, Hollywood, Face & Underarms)</p>
                        <div className="flex justify-between text-muted-foreground">
                          <span>Per Session</span>
                          <span>£470</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                          <span>Course of 6</span>
                          <span>£2250</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">Add Peri Anal for £20 per session</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 p-8 text-center mb-8">
              <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Payment Options</h3>
              <p className="text-muted-foreground mb-2">
                Option to pay in full at the time of your first treatment, or split the cost over three installments for
                packages of 6.
              </p>
              <p className="text-muted-foreground">
                Course of treatment requirements and payment plans will be discussed at consultation.
              </p>
            </div>

            <div className="bg-primary/10 p-8 text-center">
              <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Booking Policy</h3>
              <p className="text-muted-foreground mb-6">
                A 25% non-refundable deposit will be taken during your initial consultation to secure your first
                treatment session. This is redeemable against your treatment.
              </p>
              <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Cancellation Policy</h3>
              <p className="text-muted-foreground">
                Cancellations must be made no later than 48 hours before your appointment for a full refund.
              </p>
            </div>
          </div>
        </section>

        {/* Facial Treatments Pricing */}
        <section className="py-16 bg-secondary/30">
          <div className="container max-w-5xl">
            <h2 className="text-3xl font-serif tracking-widest text-primary mb-12 text-center uppercase logo-text">
              Facial Treatments
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white border border-primary/30 p-8 rounded-sm">
                <h3 className="text-2xl font-serif tracking-widest text-primary mb-6 uppercase text-center">
                  The Jeanne Facial
                </h3>
                <p className="text-3xl font-serif text-primary text-center mb-8">£40</p>

                <h4 className="uppercase tracking-wider text-center mb-4">Includes:</h4>
                <ul className="space-y-2 text-center">
                  <li className="text-muted-foreground uppercase tracking-wider">Cleanse</li>
                  <li className="text-muted-foreground uppercase tracking-wider">Analysis</li>
                  <li className="text-muted-foreground uppercase tracking-wider">Double Cleanse</li>
                  <li className="text-muted-foreground uppercase tracking-wider">Exfoliate</li>
                  <li className="text-muted-foreground uppercase tracking-wider">Tone</li>
                  <li className="text-muted-foreground uppercase tracking-wider">Massage</li>
                  <li className="text-muted-foreground uppercase tracking-wider">Moisturise</li>
                  <li className="text-muted-foreground uppercase tracking-wider">SPF</li>
                </ul>

                <div className="mt-8 text-center">
                  <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-wider"
                    >
                      Book Now
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-white border border-primary/30 p-8 rounded-sm">
                <h3 className="text-2xl font-serif tracking-widest text-primary mb-6 uppercase text-center">
                  The Jeanne Extended
                </h3>
                <p className="text-3xl font-serif text-primary text-center mb-8">£50</p>

                <h4 className="uppercase tracking-wider text-center mb-4">Includes:</h4>
                <p className="text-center text-muted-foreground uppercase tracking-wider mb-4">
                  All that is listed under The Jeanne Facial
                </p>
                <p className="text-center text-muted-foreground uppercase tracking-wider">
                  Plus Facial Electrics Treatment
                </p>

                <div className="mt-8 text-center">
                  <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-wider"
                    >
                      Book Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="container text-center">
            <h2 className="text-3xl font-serif tracking-widest text-white mb-6 uppercase logo-text">Ready to Book?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us to discuss which treatment options are best for you, or book your appointment online today.
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

