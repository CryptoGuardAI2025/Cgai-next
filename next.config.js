/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

// !!! Repo-Name hier eintragen:
const repo = 'Cgai-next' // <--- GENAU dein Repo-Name

const nextConfig = {
  output: 'export',              // statischer Export (erzeugt /out)
  trailingSlash: true,           // für GitHub Pages Ordnerstruktur
  images: { unoptimized: true }, // keine Image-Optimierung auf Pages
  reactStrictMode: true,
  assetPrefix: isProd ? `/${repo}/` : '',
  basePath: isProd ? `/${repo}` : '',
}

module.exports = nextConfig
