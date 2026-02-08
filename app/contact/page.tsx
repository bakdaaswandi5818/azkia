import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Azkia Store</h1>
              <p className="text-green-100 mt-1">Quality Used Home Appliances & Building Materials</p>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-green-200 transition">Home</Link>
              <Link href="/products" className="hover:text-green-200 transition">Products</Link>
              <Link href="/about" className="hover:text-green-200 transition">About</Link>
              <Link href="/contact" className="hover:text-green-200 transition">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-green-100">
            We're here to help with your building material needs
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Product Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  {/* Contact Cards */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">📍</div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Visit Us</h4>
                        <p className="text-gray-600">
                          Location details coming soon.<br />
                          Please contact us for pickup arrangements.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">📞</div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Call Us</h4>
                        <p className="text-gray-600">
                          Phone: Coming soon<br />
                          Hours: Monday - Saturday, 8:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">✉️</div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Email Us</h4>
                        <p className="text-gray-600">
                          General: info@azkia.com<br />
                          Sales: sales@azkia.com
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ */}
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-lg mb-4">Quick Questions?</h4>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <strong>Q: Do you deliver?</strong><br />
                        <span className="text-gray-600">A: Yes, delivery options available. Contact us for rates.</span>
                      </li>
                      <li>
                        <strong>Q: Can I inspect items before purchase?</strong><br />
                        <span className="text-gray-600">A: Absolutely! Schedule a visit to see our inventory.</span>
                      </li>
                      <li>
                        <strong>Q: Do you buy used materials?</strong><br />
                        <span className="text-gray-600">A: Yes, we purchase quality used building materials. Contact us!</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12">
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500">Map location coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; 2026 Azkia Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
