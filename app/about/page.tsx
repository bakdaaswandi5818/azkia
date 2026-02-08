import Link from 'next/link'

export default function AboutPage() {
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
          <h2 className="text-4xl font-bold mb-4">About Azkia Store</h2>
          <p className="text-xl text-green-100">
            Your trusted partner in sustainable building materials
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Our Story */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-4">Our Story</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Azkia Store was founded with a simple mission: to make quality building materials 
                accessible while promoting sustainability and reducing construction waste. We believe 
                that used doesn't mean unusable, and that with proper care and inspection, reclaimed 
                materials can serve just as well as new ones.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our journey began when we noticed the enormous amount of perfectly good building 
                materials being discarded from renovation and demolition projects. We saw an 
                opportunity to connect people who need affordable materials with suppliers who 
                have surplus inventory or salvaged goods.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-green-700">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide affordable, quality building materials while promoting environmental 
                  sustainability through the reuse and recycling of construction materials.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-green-700">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To become the leading marketplace for sustainable building materials, making 
                  eco-friendly construction accessible to everyone.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-6">Our Values</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">🌱</div>
                  <h4 className="text-xl font-semibold mb-2">Sustainability</h4>
                  <p className="text-gray-600">
                    Reducing waste and promoting eco-friendly practices
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">✨</div>
                  <h4 className="text-xl font-semibold mb-2">Quality</h4>
                  <p className="text-gray-600">
                    Every item is inspected to ensure it meets our standards
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">🤝</div>
                  <h4 className="text-xl font-semibold mb-2">Trust</h4>
                  <p className="text-gray-600">
                    Building lasting relationships with our customers
                  </p>
                </div>
              </div>
            </div>

            {/* What We Offer */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-4">What We Offer</h3>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Quality Inspection:</strong> All materials are thoroughly inspected 
                      before listing to ensure they meet our quality standards.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Competitive Pricing:</strong> Save up to 70% compared to new materials 
                      without compromising on quality.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Wide Selection:</strong> From roof tiles to foundation stones, we offer 
                      a diverse range of building materials.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Expert Advice:</strong> Our team is here to help you choose the right 
                      materials for your project.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-green-700 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Sustainable Project?</h3>
              <p className="mb-6">
                Browse our products or get in touch with us for personalized assistance.
              </p>
              <div className="space-x-4">
                <Link
                  href="/products"
                  className="inline-block bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
                >
                  View Products
                </Link>
                <Link
                  href="/contact"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition border-2 border-white"
                >
                  Contact Us
                </Link>
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
