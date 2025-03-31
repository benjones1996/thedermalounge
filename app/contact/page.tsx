import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Instagram, Mail, MapPin } from "lucide-react"

export const metadata = {
  title: "Contact Us | THE DERMA LOUNGE",
  description:
    "Get in touch with THE DERMA LOUNGE. Visit us at 242 Stow Hill, Newport, Wales or contact us via Instagram @thedermalounge_uk.",
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          title="Contact Us"
          description="We'd love to hear from you. Get in touch with any questions or to book your appointment."
        />

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif tracking-widest text-primary mb-6 uppercase logo-text">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Whether you have questions about our treatments, want to book an appointment, or just want to say
                  hello, we're here to help. Reach out to us using the contact information below or fill out the form
                  and we'll get back to you as soon as possible.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium uppercase tracking-wider text-sm mb-1">Visit Us</h3>
                      <p className="text-muted-foreground">242 Stow Hill, Newport, Wales, NP20 4HA</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium uppercase tracking-wider text-sm mb-1">Email Us</h3>
                      <p className="text-muted-foreground">thedermaloungeuk@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Instagram className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium uppercase tracking-wider text-sm mb-1">Follow Us</h3>
                      <a
                        href="https://www.instagram.com/thedermalounge_uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        @thedermalounge_uk
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 p-6">
                  <h3 className="font-medium uppercase tracking-wider text-sm mb-4">Opening Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>

              <form
                action="https://formspree.io/f/mdkelpqp"
                method="POST"
                className="space-y-4 bg-white p-6 border border-primary/20"
              >
                <h2 className="text-2xl font-serif tracking-widest text-primary mb-6 uppercase logo-text">
                  Send Us a Message
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium uppercase tracking-wider">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      className="w-full p-2 border border-primary/20 focus:border-primary outline-none"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium uppercase tracking-wider">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      className="w-full p-2 border border-primary/20 focus:border-primary outline-none"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="w-full p-2 border border-primary/20 focus:border-primary outline-none"
                    type="email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium uppercase tracking-wider">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className="w-full p-2 border border-primary/20 focus:border-primary outline-none"
                    type="tel"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium uppercase tracking-wider">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full p-2 border border-primary/20 focus:border-primary outline-none"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="treatment">Treatment Information</option>
                    <option value="pricing">Pricing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full p-2 border border-primary/20 focus:border-primary outline-none min-h-[120px]"
                    required
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-none uppercase tracking-wider"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container">
            <h2 className="text-3xl font-serif tracking-widest text-primary mb-12 text-center uppercase logo-text">
              Find Us
            </h2>
            <div className="aspect-[16/9] w-full border border-primary/20 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5636521290366!2d-3.0095899233838897!3d51.58682870583787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1caa79f1c5e5%3A0x8c3f9f58d7dab9f!2s242%20Stow%20Hill%2C%20Newport%20NP20%204HA%2C%20UK!5e0!3m2!1sen!2sus!4v1711825953089!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Derma Lounge location"
                className="w-full h-full"
                aria-label="Map showing The Derma Lounge location at 242 Stow Hill, Newport, Wales, NP20 4HA"
              ></iframe>
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                We're located at 242 Stow Hill, Newport, Wales, NP20 4HA. Our clinic is easily accessible with parking
                available nearby.
              </p>
              <a
                href="https://maps.google.com/?q=242+Stow+Hill,+Newport,+Wales,+NP20+4HA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="outline"
                  className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-wider"
                >
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

