export default function Roadmap() {
    const roadmapItems = [
      {
        phase: 'Phase 1',
        title: 'Launch',
        items: [
          'Website launch',
          'Community building',
          'Whitelist registration',
          'Artwork finalization'
        ]
      },
      {
        phase: 'Phase 2',
        title: 'Mint',
        items: [
          'Presale for whitelist',
          'Public mint',
          '$CANE token airdrop to holders',
          'Secondary marketplace listings'
        ]
      },
      {
        phase: 'Phase 3',
        title: 'Expansion',
        items: [
          'Merchandise store',
          'Partnerships and collaborations',
          'Community events and contests',
          'DAO formation for governance'
        ]
      },
      {
        phase: 'Phase 4',
        title: 'Metaverse',
        items: [
          'Virtual gallery in the metaverse',
          'Interactive experiences',
          'Gaming integrations',
          'Expanded utility for holders'
        ]
      }
    ]
  
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Roadmap</h1>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#9945FF] to-[#14F195]"></div>
            
            {roadmapItems.map((item, index) => (
              <div key={index} className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-10 md:pl-0' : 'md:pl-10 md:pr-0'}`}>
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Circle on timeline */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/4 md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-[#9945FF] bg-white dark:bg-black"></div>
                  
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 pl-12' : 'md:pl-16 pl-12'}`}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white text-sm font-bold rounded-full mb-4">
                        {item.phase}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                      <ul className="space-y-2">
                        {item.items.map((listItem, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#14F195] mt-2 mr-2"></span>
                            <span className="text-gray-600 dark:text-gray-400">{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }