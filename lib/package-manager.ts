export type PackageManager = "pnpm" | "yarn" | "npm" | "bun";

export function convertNpmCommand(command: string): Record<PackageManager, string> {
  const pnpm = command
    .replace(/^npm install/, "pnpm add")
    .replace(/^npx create-(\S+)/, "pnpm create $1")
    .replace(/^npx/, "pnpm dlx")
    .replace(/^npm run/, "pnpm");

  const yarn = command
    .replace(/^npm install/, "yarn add")
    .replace(/^npx create-(\S+)/, "yarn create $1")
    .replace(/^npx/, "yarn dlx")
    .replace(/^npm run/, "yarn");

  const bun = command
    .replace(/^npm install/, "bun add")
    .replace(/^npx create-(\S+)/, "bunx --bun create-$1")
    .replace(/^npx/, "bunx --bun")
    .replace(/^npm run/, "bun");

  return { npm: command, pnpm, yarn, bun };
}
