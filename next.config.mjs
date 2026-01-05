/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split("/")?.[1]
const isGithubActions = process.env.GITHUB_ACTIONS === "true"
const isUserOrOrgSite = !!repoName && repoName.endsWith(".github.io")

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubActions && !isUserOrOrgSite && repoName ? `/${repoName}` : "",
  assetPrefix: isGithubActions && !isUserOrOrgSite && repoName ? `/${repoName}/` : "",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
