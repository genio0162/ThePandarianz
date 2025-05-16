export default function About() {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About The Pandarianz</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            The Pandarianz is an exclusive NFT collection on the Solana blockchain, featuring unique panda characters with varied traits and attributes.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Our mission is to create a vibrant community of collectors and enthusiasts, while pushing the boundaries of digital art and blockchain technology.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Each Pandarianz NFT grants access to exclusive benefits, including airdrops, merchandise, and participation in community events.
          </p>
          <h2 className="text-2xl font-bold mt-12 mb-6">The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Founder', 'Lead Artist', 'Developer'].map((role, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto bg-gray-200 dark:bg-gray-800 rounded-full mb-4"></div>
                <h3 className="font-bold text-xl mb-2">Panda {index + 1}</h3>
                <p className="text-gray-600 dark:text-gray-400">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }