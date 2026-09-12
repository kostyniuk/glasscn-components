/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next 16.3 writes AGENTS.md/CLAUDE.md on every dev run; we manage those ourselves.
  agentRules: false,
}

export default nextConfig
