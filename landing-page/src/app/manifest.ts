import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Swip3 - Web3 Talent Matcher',
    short_name: 'Swip3',
    description: 'A decentralized platform to match web3 job seekers with opportunities through a swipe card like gamification experience, enhanced by AI-powered association algorithms, smart contract for salary renegotiation and verifiable skill NFTs. Also, we introduce Rate My Web3 Profile, a social trend that gamifies profile optimization and helps users highlight their contributions to the Web3 space.',
    start_url: '/app',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
    ],
  }
}
