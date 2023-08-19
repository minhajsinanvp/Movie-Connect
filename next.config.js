/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        
        serverComponentsExternalPackages: ["mongoose"],
      },

    images:{
        domains: ['occ-0-3933-116.1.nflxso.net','via.placeholder.com']
    }
}




module.exports = nextConfig

