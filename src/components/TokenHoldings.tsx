// File: src/components/TokenHoldings.tsx
'use client'

import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { FC, useState, ReactElement } from 'react'
import { GetProgramAccountsFilter } from '@solana/web3.js'
import { TOKEN_PROGRAM_ID } from "@solana/spl-token"
import { motion } from 'framer-motion'

const TokenHoldings: FC = () => {
    const { connection } = useConnection()
    const { publicKey } = useWallet()

    const [tokenTable, setTokenTable] = useState<ReactElement | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    async function getTokenAccounts(wallet: string) {
        setIsLoading(true)
        try {
            const filters:GetProgramAccountsFilter[] = [
                {
                  dataSize: 165, // number of bytes
                },
                {
                  memcmp: {
                    offset: 32, // number of bytes
                    bytes: wallet, // base58 encoded string
                  },            
                }]
            const accounts = await connection.getParsedProgramAccounts(
                TOKEN_PROGRAM_ID,
                {
                  filters: filters,
                }
              )
            console.log(`Found ${accounts.length} token account(s) for wallet ${wallet}: `)
            if(accounts.length === 0) {
                setTokenTable(
                    <div className="text-center py-8 text-lg text-gray-500">
                        No Token Accounts Found
                    </div>
                )
            }
            else{
                const rows = accounts.map((account,i)=>{
                    // Parse the account data
                    const parsedAccountInfo:any = account.account.data
                    const mintAddress:string = parsedAccountInfo["parsed"]["info"]["mint"]
                    const tokenBalance: number = parsedAccountInfo["parsed"]["info"]["tokenAmount"]["uiAmount"]
                    return (
                    <tr key={i+1} className="border-b border-gray-800">
                        <td className="py-4 px-4 text-center">{i+1}</td>
                        <td className="py-4 px-4 text-left font-mono text-sm truncate max-w-[200px]">{mintAddress}</td>
                        <td className="py-4 px-4 text-center font-bold">{tokenBalance}</td>
                    </tr>)
                })
                const header = (
                  <tr className="bg-gray-900 text-gray-400 uppercase text-xs tracking-wider">
                    <th className="py-4 px-4 text-center font-medium">Token No.</th>
                    <th className="py-4 px-4 text-left font-medium">Mint Address</th>
                    <th className="py-4 px-4 text-center font-medium">Qty</th>
                  </tr>
                )
                setTokenTable(
                  <div className="mt-8 overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700">
                    <table className="min-w-full divide-y divide-gray-700">
                      <thead>{header}</thead>
                      <tbody className="divide-y divide-gray-800">{rows}</tbody>
                    </table>
                  </div>
                )
            }
        } finally {
            setIsLoading(false)
        }
    }

    const onClick = async () => {
        if (!publicKey) {
            console.log('error', 'Wallet not connected!')
            return
        }
        try { 
            await getTokenAccounts(publicKey.toString())
        } catch (error: any) {
            console.log('error', `Error finding Token Accounts! ${error?.message}`)
            setIsLoading(false)
        }
    }

    return (
      <motion.div 
        className="rounded-3xl p-8 bg-gray-900/40 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-2">Your Token Holdings</h2>
        <p className="text-gray-400 mb-6">
          Connect your wallet and check all your Solana token accounts
        </p>
        <div className="text-center">
          <button
            className={`px-8 py-3 bg-gray-200 text-gray-900 font-bold rounded-full transition-all hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed ${isLoading ? 'animate-pulse' : ''}`}
            onClick={onClick}
            disabled={isLoading || !publicKey}
          >
            {isLoading ? 'Loading...' : 'Get Token Accounts'}
          </button>
        </div>
        {tokenTable}
      </motion.div>
    )
}

export default TokenHoldings