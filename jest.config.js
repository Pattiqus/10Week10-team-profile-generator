const config = {
  // A list of paths to directories that Jest should use to search for files in
  roots: ['./', './tests/'],
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
};

module.exports = () => {
  return config;
};
