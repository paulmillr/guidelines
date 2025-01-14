// github to JSR package map
const gh_jsr = {
  'noble-ciphers': '@noble/ciphers',
  'noble-curves': '@noble/curves',
  'noble-hashes': '@noble/hashes',
  'noble-post-quantum': '@noble/post-quantum',
  'noble-secp256k1': '@noble/secp256k1',
  'noble-ed25519': '@noble/ed25519',
  'scure-base': '@scure/base',
  'scure-bip32': '@scure/bip32',
  'scure-bip39': '@scure/bip39',
  'scure-btc-signer': '', // '@scure/btc-signer',
  'scure-starknet': '',

  'micro-eth-signer': '', // '@paulmillr/micro-eth-signer',
  'micro-sol-signer': '',
  'micro-ordinals': '',
  'micro-key-producer': '@paulmillr/micro-key-producer',
  'micro-packed': '@paulmillr/micro-packed',
  'micro-ftch': '',
  'qr': '@paulmillr/qr',
  'micro-sr25519': ''
}
function table(list) {
  const strs = list.map(badges).join('\n');
  console.log(`
| Project | Status | JSR |
|---------|--------|-----|
${strs}
`);
}

function badges(pkg) {
  const jsr_name = gh_jsr[pkg];

  const ci = `[![Run JS tests](https://github.com/paulmillr/${pkg}/actions/workflows/test-js.yml/badge.svg)](https://github.com/paulmillr/${pkg}/actions/workflows/test-js.yml)`;

  const jsr = jsr_name ? `[![JSR version](https://jsr.io/badges/${jsr_name})](https://jsr.io/${jsr_name}) [![JSR Score](https://jsr.io/badges/${jsr_name}/score)](https://jsr.io/${jsr_name})` : '';

  return `| ${pkg} | ${ci} | ${jsr} |`;
}

table(Object.keys(gh_jsr));