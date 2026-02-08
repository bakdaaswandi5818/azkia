import Link from 'next/link'
import Image from 'next/image'

// Product data
const products = [
  {
    id: 1,
    name: 'Used Roof Tiles',
    description: 'High-quality clay roof tiles in good condition. Perfect for renovation projects.',
    price: '$2.50/piece',
    image: '/images/roof-tiles.jpg',
    category: 'Roofing'
  },
  {
    id: 2,
    name: 'Construction Sand',
    description: 'Clean, washed sand suitable for concrete mixing and construction.',
    price: '$25/ton',
    image: '/images/sand.jpg',
    category: 'Materials'
  },
  {
    id: 3,
    name: 'Used Bricks',
    description: 'Reclaimed red bricks, cleaned and ready for reuse. Eco-friendly option.',
    price: '$0.50/piece',
    image: '/images/bricks.jpg',
    category: 'Masonry'
  },
  {
    id: 4,
    name: 'Foundation Stones',
    description: 'Large natural stones ideal for foundations and retaining walls.',
    price: '$45/ton',
    image: '/images/foundation-stones.jpg',
    category: 'Materials'
  },
  {
    id: 5,
    name: 'Cement Bags',
    description: 'Surplus cement from completed projects. Still in sealed bags.',
    price: '$8/bag',
    image: '/images/cement.jpg',
    category: 'Materials'
  },
  {
    id: 6,
    name: 'Wooden Beams',
    description: 'Reclaimed wooden beams from demolitions. Strong and character-rich.',
    price: '$15/piece',
    image: '/images/wooden-beams.jpg',
    category: 'Timber'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sustainable Building Materials
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Quality used materials at affordable prices
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Reduce waste, save money, and build sustainably with our selection of 
            reclaimed and surplus building materials.
          </p>
          <Link 
            href="/products" 
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition transform hover:scale-105"
          >
            Browse Products
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Reduce waste by reusing quality materials</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Affordable</h3>
              <p className="text-gray-600">Save up to 70% compared to new materials</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">Quality Checked</h3>
              <p className="text-gray-600">All materials inspected for quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Products</h2>
          <p className="text-center text-gray-600 mb-12">
            Browse our selection of quality used building materials
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-6xl">📦</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-green-600 font-semibold mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-700">
                      {product.price}
                    </span>
                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">Contact us today for a quote or to check availability</p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Azkia Store</h3>
              <p className="text-gray-400">
                Your trusted source for quality used building materials and home appliances.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="/products" className="text-gray-400 hover:text-white">Products</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📍 Location: TBD</li>
                <li>📞 Phone: TBD</li>
                <li>✉️ Email: info@azkia.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Azkia Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
