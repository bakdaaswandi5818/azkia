import Link from 'next/link'

// Product data
const products = [
  {
    id: 1,
    name: 'Used Roof Tiles',
    description: 'High-quality clay roof tiles in good condition. Perfect for renovation projects.',
    price: '$2.50/piece',
    image: '/images/roof-tiles.jpg',
    category: 'Roofing',
    icon: '🏠'
  },
  {
    id: 2,
    name: 'Construction Sand',
    description: 'Clean, washed sand suitable for concrete mixing and construction.',
    price: '$25/ton',
    image: '/images/sand.jpg',
    category: 'Materials',
    icon: '⛱️'
  },
  {
    id: 3,
    name: 'Used Bricks',
    description: 'Reclaimed red bricks, cleaned and ready for reuse. Eco-friendly option.',
    price: '$0.50/piece',
    image: '/images/bricks.jpg',
    category: 'Masonry',
    icon: '🧱'
  },
  {
    id: 4,
    name: 'Foundation Stones',
    description: 'Large natural stones ideal for foundations and retaining walls.',
    price: '$45/ton',
    image: '/images/foundation-stones.jpg',
    category: 'Materials',
    icon: '🪨'
  },
  {
    id: 5,
    name: 'Cement Bags',
    description: 'Surplus cement from completed projects. Still in sealed bags.',
    price: '$8/bag',
    image: '/images/cement.jpg',
    category: 'Materials',
    icon: '🏗️'
  },
  {
    id: 6,
    name: 'Wooden Beams',
    description: 'Reclaimed wooden beams from demolitions. Strong and character-rich.',
    price: '$15/piece',
    image: '/images/wooden-beams.jpg',
    category: 'Timber',
    icon: '🪵'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="group">
              <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-green-100 transition-all">
                ✨ Azkia Store
              </h1>
              <p className="text-green-100 mt-1 text-sm md:text-base">Quality Used Home Appliances & Building Materials</p>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-green-200 transition-all hover:scale-110 font-medium">Home</Link>
              <Link href="/products" className="hover:text-green-200 transition-all hover:scale-110 font-medium">Products</Link>
              <Link href="/about" className="hover:text-green-200 transition-all hover:scale-110 font-medium">About</Link>
              <Link href="/contact" className="hover:text-green-200 transition-all hover:scale-110 font-medium">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-24 md:py-32">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-float"></div>
          <div className="absolute w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-slide-in-up">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="block">Sustainable Building</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-white">
                Materials
              </span>
            </h2>
            <p className="text-xl md:text-3xl mb-6 text-green-100 font-light">
              Quality used materials at affordable prices
            </p>
            <p className="text-base md:text-lg max-w-3xl mx-auto mb-10 text-green-50 leading-relaxed">
              Reduce waste, save money, and build sustainably with our curated selection of 
              reclaimed and surplus building materials.
            </p>
            <Link 
              href="/products" 
              className="inline-block bg-white text-primary-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all transform hover:scale-110 hover:shadow-2xl shadow-glow"
            >
              🛍️ Browse Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100 hover-lift card-shine">
              <div className="text-6xl mb-6 animate-float">♻️</div>
              <h3 className="text-2xl font-bold mb-3 gradient-text">Eco-Friendly</h3>
              <p className="text-gray-600 leading-relaxed">Reduce waste by reusing quality materials and help create a sustainable future</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100 hover-lift card-shine" style={{animationDelay: '0.2s'}}>
              <div className="text-6xl mb-6 animate-float" style={{animationDelay: '0.5s'}}>💰</div>
              <h3 className="text-2xl font-bold mb-3 gradient-text">Affordable</h3>
              <p className="text-gray-600 leading-relaxed">Save up to 70% compared to new materials without compromising on quality</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100 hover-lift card-shine" style={{animationDelay: '0.4s'}}>
              <div className="text-6xl mb-6 animate-float" style={{animationDelay: '1s'}}>✅</div>
              <h3 className="text-2xl font-bold mb-3 gradient-text">Quality Checked</h3>
              <p className="text-gray-600 leading-relaxed">All materials thoroughly inspected and verified for durability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured Products</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Browse our handpicked selection of quality used building materials
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift card-shine border border-gray-100 group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="h-56 bg-gradient-to-br from-primary-100 via-primary-50 to-green-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-green-500/10"></div>
                  <span className="text-8xl group-hover:scale-125 transition-transform duration-500 relative z-10">{product.icon}</span>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-3">
                    {product.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-primary-600 transition-colors">{product.name}</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-glow transition-all transform hover:scale-105">
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-20 top-0 right-0 animate-float"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl md:text-2xl mb-10 text-green-100">Contact us today for a quote or to check availability</p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-primary-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all transform hover:scale-110 hover:shadow-2xl"
          >
            📞 Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-300">✨ Azkia Store</h3>
              <p className="text-gray-400 leading-relaxed">
                Your trusted source for quality used building materials and home appliances.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-all hover:translate-x-2 inline-block">→ Home</Link></li>
                <li><Link href="/products" className="text-gray-400 hover:text-white transition-all hover:translate-x-2 inline-block">→ Products</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-all hover:translate-x-2 inline-block">→ About</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-all hover:translate-x-2 inline-block">→ Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center"><span className="mr-2">📍</span> Location: TBD</li>
                <li className="flex items-center"><span className="mr-2">📞</span> Phone: TBD</li>
                <li className="flex items-center"><span className="mr-2">✉️</span> Email: info@azkia.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-10 pt-8 text-center">
            <p className="text-gray-400">&copy; 2026 Azkia Store. All rights reserved. Built with 💚 for sustainability.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
