module.exports = {
  root: true,
  extends: [
    'oriflame',
    'oriflame/future',
    'oriflame/node',
    'oriflame/typescript',
    'oriflame/prettier',
  ],
  ignorePatterns: [
    '.next/',
    'build/',
    'coverage/',
    'dist/',
    'node_modules/',
    'public/',
    '*.json',
    '*.md',
    '*.mdx',
    '*.d.ts',
  ],
};
