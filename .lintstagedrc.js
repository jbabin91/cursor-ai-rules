/** @type {import("lint-staged").Config} */
export default {
  // Format files
  '*.(ts|tsx|js|jsx|cjs|mjs|json|md|mdc|mdx)': (files) =>
    `pnpm prettier -uc ${files.join(' ')}`,
};
