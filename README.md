# paulmillr/guidelines

Development & release guidelines for noble (https://paulmillr.com/noble), scure and other packages.

- [Status](#status)
- [Release order](#release-order)
- [Coding practices](#coding-practices)
- [Duplicated code](#duplicated-code)
- [Testing and fuzzing](#testing-and-fuzzing)
- [TODO](#todo)

## Status

| Project | Status | JSR | Misc |
|---------|--------|-----|------|
| [noble-ciphers](https://github.com/paulmillr/noble-ciphers) | [![Run JS tests](https://github.com/paulmillr/noble-ciphers/actions/workflows/test-js.yml/badge.svg)](https://github.com/paulmillr/noble-ciphers/actions/workflows/test-js.yml) | [![JSR version](https://jsr.io/badges/@noble/ciphers)](https://jsr.io/@noble/ciphers) [![JSR Score](https://jsr.io/badges/@noble/ciphers/score)](https://jsr.io/@noble/ciphers) |  |
| [noble-curves](https://github.com/paulmillr/noble-curves) | [![Run JS tests](https://github.com/paulmillr/noble-curves/actions/workflows/test-js.yml/badge.svg)](https://github.com/paulmillr/noble-curves/actions/workflows/test-js.yml) | [![JSR version](https://jsr.io/badges/@noble/curves)](https://jsr.io/@noble/curves) [![JSR Score](https://jsr.io/badges/@noble/curves/score)](https://jsr.io/@noble/curves) |  |
| [noble-hashes](https://github.com/paulmillr/noble-hashes) | [![Run JS tests](https://github.com/paulmillr/noble-hashes/actions/workflows/test-js.yml/badge.svg)](https://github.com/paulmillr/noble-hashes/actions/workflows/test-js.yml) | [![JSR version](https://jsr.io/badges/@noble/hashes)](https://jsr.io/@noble/hashes) [![JSR Score](https://jsr.io/badges/@noble/hashes/score)](https://jsr.io/@noble/hashes) | [![Run slow tests](https://github.com/paulmillr/noble-hashes/actions/workflows/test-slow.yml/badge.svg)](https://github.com/paulmillr/noble-hashes/actions/workflows/test-slow.yml) |
| [noble-post-quantum](https://github.com/paulmillr/noble-post-quantum) | [![Run JS tests](https://github.com/paulmillr/noble-post-quantum/actions/workflows/test-js.yml/badge.svg)](https://github.com/paulmillr/noble-post-quantum/actions/workflows/test-js.yml) | [![JSR version](https://jsr.io/badges/@noble/post-quantum)](https://jsr.io/@noble/post-quantum) [![JSR Score](https://jsr.io/badges/@noble/post-quantum/score)](https://jsr.io/@noble/post-quantum) |  |
| [noble-secp256k1](https://github.com/paulmillr/noble-secp256k1) | [![Run JS tests](https://github.com/paulmillr/noble-secp256k1/actions/workflows/test-js.yml/badge.svg)](https://github.com/paulmillr/noble-secp256k1/actions/workflows/test-js.yml) | [![JSR version](https://jsr.io/badges/@noble/secp256k1)](https://jsr.io/@noble/secp256k1) [![JSR Score](https://jsr.io/badges/@noble/secp256k1/score)](https://jsr.io/@noble/secp256k1) |  |
| [noble-ed25519](https://github.com/paulmillr/noble-ed25519) | [![Run JS tests](https://github.com/paulmillr/noble-ed25519/actions/workflows/test-js.yml/badge.svg)](https://github.com/paulmillr/noble-ed25519/actions/workflows/test-js.yml) | [![JSR version](https://jsr.io/badges/@noble/ed25519)](https://jsr.io/@noble/ed25519) [![JSR Score](https://jsr.io/badges/@noble/ed25519/score)](https://jsr.io/@noble/ed25519) |  |
| [scure-base](https://github.com/paulmillr/scure-base) | [![Run JS tests](https://github.com/paulmillr/scure-base/actions/workflows/test-js.yml/badge.svg)](https://github.com/paulmillr/scure-base/actions/workflows/test-js.yml) | [![JSR version](https://jsr.io/badges/@scure/base)](https://jsr.io/@scure/base) [![JSR Score](https://jsr.io/badges/@scure/base/score)](https://jsr.io/@scure/base) |  |
| [scure-bip32](https://github.com/paulmillr/scure-bip32) | [![Run JS tests](https://github.com/paulmillr/scure-bip32/actions/workflows/test-js.yml/badge.svg)](https://github.com/paulmillr/scure-bip32/actions/workflows/test-js.yml) | [![JSR version](https://jsr.io/badges/@scure/bip32)](https://jsr.io/@scure/bip32) [![JSR Score](https://jsr.io/badges/@scure/bip32/score)](https://jsr.io/@scure/bip32) |  |
| [scure-bip39](https://github.com/paulmillr/scure-bip39) | [![Run JS tests](https://github.com/paulmillr/scure-bip39/actions/workflows/test-js.yml/badge.svg)](https://github.com/paulmillr/scure-bip39/actions/workflows/test-js.yml) | [![JSR version](https://jsr.io/badges/@scure/bip39)](https://jsr.io/@scure/bip39) [![JSR Score](https://jsr.io/badges/@scure/bip39/score)](https://jsr.io/@scure/bip39) |  |
| [scure-btc-signer](https://github.com/paulmillr/scure-btc-signer) | [![Run JS tests](https://github.com/paulmillr/scure-btc-signer/actions/workflows/test-js.yml/badge.svg)](https://github.com/paulmillr/scure-btc-signer/actions/workflows/test-js.yml) |  |  |
| [scure-starknet](https://github.com/paulmillr/scure-starknet) | [![Run JS tests](https://github.com/paulmillr/scure-starknet/actions/workflows/test-js.yml/badge.svg)](https://github.com/paulmillr/scure-starknet/actions/workflows/test-js.yml) |  |  |
| [micro-eth-signer](https://github.com/paulmillr/micro-eth-signer) | [![Run JS tests](https://github.com/paulmillr/micro-eth-signer/actions/workflows/test-js.yml/badge.svg)](https://github.com/paulmillr/micro-eth-signer/actions/workflows/test-js.yml) |  |  |
| [micro-sol-signer](https://github.com/paulmillr/micro-sol-signer) | [![Run JS tests](https://github.com/paulmillr/micro-sol-signer/actions/workflows/test-js.yml/badge.svg)](https://github.com/paulmillr/micro-sol-signer/actions/workflows/test-js.yml) |  |  |
| [micro-ordinals](https://github.com/paulmillr/micro-ordinals) | [![Run JS tests](https://github.com/paulmillr/micro-ordinals/actions/workflows/test-js.yml/badge.svg)](https://github.com/paulmillr/micro-ordinals/actions/workflows/test-js.yml) |  |  |
| [micro-key-producer](https://github.com/paulmillr/micro-key-producer) | [![Run JS tests](https://github.com/paulmillr/micro-key-producer/actions/workflows/test-js.yml/badge.svg)](https://github.com/paulmillr/micro-key-producer/actions/workflows/test-js.yml) | [![JSR version](https://jsr.io/badges/@paulmillr/micro-key-producer)](https://jsr.io/@paulmillr/micro-key-producer) [![JSR Score](https://jsr.io/badges/@paulmillr/micro-key-producer/score)](https://jsr.io/@paulmillr/micro-key-producer) |  |
| [micro-packed](https://github.com/paulmillr/micro-packed) | [![Run JS tests](https://github.com/paulmillr/micro-packed/actions/workflows/test-js.yml/badge.svg)](https://github.com/paulmillr/micro-packed/actions/workflows/test-js.yml) | [![JSR version](https://jsr.io/badges/@paulmillr/micro-packed)](https://jsr.io/@paulmillr/micro-packed) [![JSR Score](https://jsr.io/badges/@paulmillr/micro-packed/score)](https://jsr.io/@paulmillr/micro-packed) |  |
| [micro-ftch](https://github.com/paulmillr/micro-ftch) | [![Run JS tests](https://github.com/paulmillr/micro-ftch/actions/workflows/test-js.yml/badge.svg)](https://github.com/paulmillr/micro-ftch/actions/workflows/test-js.yml) |  |  |
| [qr](https://github.com/paulmillr/qr) | [![Run JS tests](https://github.com/paulmillr/qr/actions/workflows/test-js.yml/badge.svg)](https://github.com/paulmillr/qr/actions/workflows/test-js.yml) | [![JSR version](https://jsr.io/badges/@paulmillr/qr)](https://jsr.io/@paulmillr/qr) [![JSR Score](https://jsr.io/badges/@paulmillr/qr/score)](https://jsr.io/@paulmillr/qr) |  |
| [micro-sr25519](https://github.com/paulmillr/micro-sr25519) | [![Run JS tests](https://github.com/paulmillr/micro-sr25519/actions/workflows/test-js.yml/badge.svg)](https://github.com/paulmillr/micro-sr25519/actions/workflows/test-js.yml) |  |  |

## Release order

Before a release, integration tests should be ran. For example, if curves depend on hashes, they should install latest commit from github and try to run tests with it.

Release order is as follows:

1. noble-hashes, noble-ciphers, scure-base
2. noble-curves
3. scure-bip32, scure-bip39
4. micro-packed, scure-btc-signer
5. ethereum-cryptography

After that, 6. pull requests to consumers (such as ethereumjs-monorepo) can also be done.

## Coding practices

- Don't use bigint literals: instead of `123n`, use `BigInt(123)` or `BigInt('123')`
    - For compatibility with React Native and others
- Don't use array destruction, such as `let [a, b] = arr`
    - It overloads GC when used often, because it calls iterator protocol
    - Object destruction `{a, b} = obj` is fine
- Minimize `for-of`
    - Also uses iterator protocol, sometimes slow
- Minimize backtick quotes
    - Unfriendly to minifiers, sometimes even unsupported in subtle ways
- Don't use `\n` in strings: prefer `String.fromCharCode(10)`
    - Unfriendly to minifiers
- Typescript and prettier updates should be limited to once per 3-6 months
    - Their version diffs should be sanity-checked
- Helper packages are used to simplify development
    - paulmillr/jsbt is used to build files
    - micro-should is tiny 300-line testing framework
    - micro-bmark is tiny benchmarking framework

## Duplicated code

Some code is duplicated between packages, because it's better than adding an additional dependency.

Every time a method is changed, it should also be changed in other places.

- `hexToBytes`, `bytesToHex`, `concatBytes`, `isBytes` / `abytes` are identical within:
    - noble curves, ciphers, hashes
    - noble secp256k1, ed25519 (vars renamed for compactness)
    - scure-base, micro-packed
- Tests for `hexToBytes`, `bytesToHex`, `concatBytes` must be present within all those packages

## Testing and fuzzing

- hashes should run `test:dos` and `test:big`
- curves should adjust fast-check `NUM_RUNS` when ran on CI server

## TODO

- Fuzzing documentation
- CI server set-up documentation
- minified file build & upload (update JSBT)

New CI tasks:

- Calculate coverage. Can be done by switching from micro-should to jest
- Compare NPM code to GitHub
- Scan NPM for malware
- Check for performance regressions, compare with previous commits / releases
