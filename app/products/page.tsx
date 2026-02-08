import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Used Roof Tiles',
    description: 'High-quality clay roof tiles in good condition. Perfect for renovation projects. These tiles are salvaged from well-maintained buildings and are thoroughly inspected.',
    price: '$2.50/piece',
    category: 'Roofing',
    stock: 'In Stock',
    specifications: ['Material: Clay', 'Condition: Good', 'Minimum Order: 100 pieces'],
    icon: '🏠'
  },
  {
    id: 2,
    name: 'Construction Sand',
    description: 'Clean, washed sand suitable for concrete mixing and construction. Sourced from reliable suppliers and screened for quality.',
    price: '$25/ton',
    category: 'Materials',
    stock: 'In Stock',
    specifications: ['Type: Fine Sand', 'Clean & Washed', 'Minimum Order: 1 ton'],
    icon: '⛱️'
  },
  {
    id: 3,
    name: 'Used Bricks',
    description: 'Reclaimed red bricks, cleaned and ready for reuse. Eco-friendly option that maintains the character of traditional construction.',
    price: '$0.50/piece',
    category: 'Masonry',
    stock: 'In Stock',
    specifications: ['Type: Red Brick', 'Condition: Good', 'Minimum Order: 500 pieces'],
    icon: '🧱'
  },
  {
    id: 4,
    name: 'Foundation Stones',
    description: 'Large natural stones ideal for foundations and retaining walls. Durable and weather-resistant.',
    price: '$45/ton',
    category: 'Materials',
    stock: 'In Stock',
    specifications: ['Type: Natural Stone', 'Size: Mixed', 'Minimum Order: 0.5 ton'],
    icon: '🪨'
  },
  {
    id: 5,
    name: 'Cement Bags',
    description: 'Surplus cement from completed projects. Still in sealed bags and stored in dry conditions.',
    price: '$8/bag',
    category: 'Materials',
    stock: 'Limited Stock',
    specifications: ['Weight: 50kg/bag', 'Sealed & Dry', 'Minimum Order: 10 bags'],
    icon: '🏗️'
  },
  {
    id: 6,
    name: 'Wooden Beams',
    description: 'Reclaimed wooden beams from demolitions. Strong and character-rich, perfect for rustic designs.',
    price: '$15/piece',
    category: 'Timber',
    stock: 'In Stock',
    specifications: ['Type: Hardwood', 'Length: 2-4m', 'Condition: Good'],
    icon: '🪵'
  },
  {
    id: 7,
    name: 'Gravel',
    description: 'Mixed size gravel for drainage, pathways, and landscaping projects.',
    price: '$30/ton',
    category: 'Materials',
    stock: 'In Stock',
    specifications: ['Size: 10-40mm', 'Clean & Sorted', 'Minimum Order: 1 ton'],
    icon: '⚙️'
  },
  {
    id: 8,
    name: 'Metal Roofing Sheets',
    description: 'Used corrugated metal roofing sheets in good condition. Suitable for sheds and outbuildings.',
    price: '$5/sheet',
    category: 'Roofing',
    stock: 'In Stock',
    specifications: ['Material: Galvanized Steel', 'Length: 2-3m', 'Condition: Good'],
    icon: '📐'
  }
]

export default function ProductsPage() {
  const categories = Array.from(new Set(products.map(p => p.category)))

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-green-100">✨ Azkia Store</h1>
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

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up">Our Products</h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Browse our complete catalog of quality used building materials
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Filter by Category</h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full hover:shadow-glow transition-all transform hover:scale-105 font-semibold">
                All Products
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-white text-gray-700 rounded-full hover:bg-primary-50 hover:text-primary-700 transition-all border border-gray-200 hover:border-primary-300 font-medium hover:scale-105 transform"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift card-shine border border-gray-100 group"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <div className="h-48 bg-gradient-to-br from-primary-100 via-primary-50 to-green-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-green-500/10"></div>
                  <span className="text-7xl group-hover:scale-125 transition-transform duration-500 relative z-10">{product.icon}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-bold uppercase tracking-wide">
                      {product.category}
                    </span>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      product.stock === 'In Stock' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {product.stock}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-primary-600 transition-colors">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-4 bg-gray-50 rounded-lg p-3">
                    <h4 className="font-bold text-xs mb-2 text-gray-700 uppercase tracking-wide">Specifications:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {product.specifications.map((spec, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-1">✓</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-5 py-2.5 rounded-full hover:shadow-glow transition-all text-sm font-semibold transform hover:scale-105">
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Something Specific?</h2>
          <p className="mb-6 text-green-100 text-lg">Contact us for custom orders or bulk pricing</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary-700 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-all transform hover:scale-110 hover:shadow-2xl"
          >
            📞 Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; 2026 Azkia Store. All rights reserved. Built with 💚 for sustainability.</p>
        </div>
      </footer>
    </div>
  )
}
