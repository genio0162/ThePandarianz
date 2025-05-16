export default function Collection() {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">NFT Collection</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Coming soon! Our exclusive NFT collection will be available for minting shortly.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-gray-200 dark:bg-gray-800 rounded-xl aspect-square animate-pulse"></div>
          ))}
        </div>
      </div>
    )
  }