export default function Token() {
    const tokenDetails = [
      { label: 'Token Name', value: '$CANE' },
      { label: 'Total Supply', value: '1,000,000,000' },
      { label: 'Blockchain', value: 'Solana' },
      { label: 'Token Type', value: 'SPL Token' }
    ]
  
    const tokenUtility = [
      'Governance voting rights',
      'Exclusive merchandise purchases',
      'Access to premium features',
      'Staking rewards',
      'Community event participation'
    ]
  
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">$CANE Token</h1>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-6">Token Details</h2>
            <div className="space-y-4">
              {tokenDetails.map((detail, index) => (
                <div key={index} className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{detail.label}</span>
                  <span className="text-gray-900 dark:text-white">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-6">Token Utility</h2>
            <ul className="space-y-3">
              {tokenUtility.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#14F195] mt-2 mr-3"></span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-6">Token Distribution</h2>
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Token distribution chart - coming soon</p>
            </div>
          </div>
        </div>
      </div>
    )
  }