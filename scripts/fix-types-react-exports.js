// Newer @types/react patch releases ship a package.json "exports" map that
// only resolves the "types" condition, so Node's require.resolve('@types/react/index.d.ts')
// (used by Next.js 10's TypeScript dependency check) fails with
// ERR_PACKAGE_PATH_NOT_EXPORTED. Add an explicit subpath entry so it resolves.
const fs = require('fs');
const path = require('path');

const pkgPath = path.join(
  __dirname,
  '..',
  'node_modules',
  '@types',
  'react',
  'package.json'
);

if (!fs.existsSync(pkgPath)) {
  process.exit(0);
}

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

if (pkg.exports && !pkg.exports['./index.d.ts']) {
  pkg.exports['./index.d.ts'] = './index.d.ts';
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 4) + '\n');
}
