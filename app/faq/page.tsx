import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export const metadata = {
  title: "FAQ | THE DERMA LOUNGE",
  description:
    "Find answers to frequently asked questions about our treatments, booking process, and more at THE DERMA LOUNGE.",
}

export default function FAQPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          title="Frequently Asked Questions"
          description="Find answers to common questions about our treatments, booking process, and more."
        />

        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="space-y-8">
              <div className="border border-primary/20 p-6">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  What is laser hair removal?
                </h3>
                <p className="text-muted-foreground">
                  Laser hair removal is a non-invasive treatment that uses concentrated light to target hair follicles.
                  The pigment in the follicles absorbs the light, which damages the follicle and inhibits future hair
                  growth. It's a long-lasting solution for unwanted hair.
                </p>
              </div>

              <div className="border border-primary/20 p-6">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  Is laser hair removal painful?
                </h3>
                <p className="text-muted-foreground">
                  Most clients describe the sensation as a mild pinching or warm feeling. Discomfort levels vary
                  depending on the treatment area and individual pain tolerance. Our advanced laser technology includes
                  cooling features to minimize discomfort during treatment.
                </p>
              </div>

              <div className="border border-primary/20 p-6">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  How many sessions will I need?
                </h3>
                <p className="text-muted-foreground">
                  Most clients require 6-8 sessions for optimal results, spaced 4-6 weeks apart. This is because hair
                  grows in cycles, and the laser is most effective on hair in the active growth phase. Maintenance
                  sessions may be needed periodically after the initial treatment course.
                </p>
              </div>

              <div className="border border-primary/20 p-6">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  What should I do before my laser hair removal appointment?
                </h3>
                <p className="text-muted-foreground">
                  Avoid sun exposure for at least 2 weeks before treatment. Shave the treatment area 24 hours before
                  your appointment (but don't wax or pluck). Avoid applying lotions, creams, or deodorants to the area
                  on the day of treatment. Wear loose, comfortable clothing.
                </p>
              </div>

              <div className="border border-primary/20 p-6">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  What facial treatments do you offer?
                </h3>
                <p className="text-muted-foreground">
                  We offer a range of customized facial treatments to address various skin concerns, including deep
                  cleansing facials, hydrating treatments, anti-aging facials, and treatments for acne-prone skin. Each
                  facial is tailored to your specific skin needs and goals.
                </p>
              </div>

              <div className="border border-primary/20 p-6">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  How do I book an appointment?
                </h3>
                <p className="text-muted-foreground">
                  You can book an appointment through our online booking system, by sending us a message on Instagram
                  @thedermalounge_uk, or by filling out the contact form on our website. We recommend booking in advance
                  to secure your preferred date and time.
                </p>
              </div>

              <div className="border border-primary/20 p-6">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  What is your cancellation policy?
                </h3>
                <p className="text-muted-foreground">
                  We require at least 24 hours' notice for cancellations or rescheduling. Late cancellations or no-shows
                  may be subject to a fee. We understand that emergencies happen, so please contact us as soon as
                  possible if you need to change your appointment.
                </p>
              </div>

              <div className="border border-primary/20 p-6">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  Do you offer gift vouchers?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we offer gift vouchers for all our treatments. They make perfect gifts for birthdays,
                  anniversaries, or any special occasion. Contact us directly to purchase a gift voucher.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Have a question that's not answered here? We're happy to help! Contact us directly and we'll provide the
                information you need.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6 uppercase tracking-wider w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
                <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-wider w-full sm:w-auto"
                  >
                    Book Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

