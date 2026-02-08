import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Used Roof Tiles',
    description: 'High-quality clay roof tiles in good condition. Perfect for renovation projects. These tiles are salvaged from well-maintained buildings and are thoroughly inspected.',
    price: '$2.50/piece',
    category: 'Roofing',
    stock: 'In Stock',
    specifications: ['Material: Clay', 'Condition: Good', 'Minimum Order: 100 pieces']
  },
  {
    id: 2,
    name: 'Construction Sand',
    description: 'Clean, washed sand suitable for concrete mixing and construction. Sourced from reliable suppliers and screened for quality.',
    price: '$25/ton',
    category: 'Materials',
    stock: 'In Stock',
    specifications: ['Type: Fine Sand', 'Clean & Washed', 'Minimum Order: 1 ton']
  },
  {
    id: 3,
    name: 'Used Bricks',
    description: 'Reclaimed red bricks, cleaned and ready for reuse. Eco-friendly option that maintains the character of traditional construction.',
    price: '$0.50/piece',
    category: 'Masonry',
    stock: 'In Stock',
    specifications: ['Type: Red Brick', 'Condition: Good', 'Minimum Order: 500 pieces']
  },
  {
    id: 4,
    name: 'Foundation Stones',
    description: 'Large natural stones ideal for foundations and retaining walls. Durable and weather-resistant.',
    price: '$45/ton',
    category: 'Materials',
    stock: 'In Stock',
    specifications: ['Type: Natural Stone', 'Size: Mixed', 'Minimum Order: 0.5 ton']
  },
  {
    id: 5,
    name: 'Cement Bags',
    description: 'Surplus cement from completed projects. Still in sealed bags and stored in dry conditions.',
    price: '$8/bag',
    category: 'Materials',
    stock: 'Limited Stock',
    specifications: ['Weight: 50kg/bag', 'Sealed & Dry', 'Minimum Order: 10 bags']
  },
  {
    id: 6,
    name: 'Wooden Beams',
    description: 'Reclaimed wooden beams from demolitions. Strong and character-rich, perfect for rustic designs.',
    price: '$15/piece',
    category: 'Timber',
    stock: 'In Stock',
    specifications: ['Type: Hardwood', 'Length: 2-4m', 'Condition: Good']
  },
  {
    id: 7,
    name: 'Gravel',
    description: 'Mixed size gravel for drainage, pathways, and landscaping projects.',
    price: '$30/ton',
    category: 'Materials',
    stock: 'In Stock',
    specifications: ['Size: 10-40mm', 'Clean & Sorted', 'Minimum Order: 1 ton']
  },
  {
    id: 8,
    name: 'Metal Roofing Sheets',
    description: 'Used corrugated metal roofing sheets in good condition. Suitable for sheds and outbuildings.',
    price: '$5/sheet',
    category: 'Roofing',
    stock: 'In Stock',
    specifications: ['Material: Galvanized Steel', 'Length: 2-3m', 'Condition: Good']
  }
]

export default function ProductsPage() {
  const categories = Array.from(new Set(products.map(p => p.category)))

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
          <h2 className="text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-xl text-green-100">
            Browse our complete catalog of quality used building materials
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-6xl">📦</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-green-600 font-semibold">
                      {product.category}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      product.stock === 'In Stock' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {product.stock}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Specifications:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {product.specifications.map((spec, idx) => (
                        <li key={idx}>• {spec}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-700">
                      {product.price}
                    </span>
                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-sm">
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
      <section className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Something Specific?</h2>
          <p className="mb-6">Contact us for custom orders or bulk pricing</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
          >
            Contact Us
          </Link>
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
