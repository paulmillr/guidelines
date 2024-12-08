# paulmillr/guidelines

Development & release guidelines for noble (https://paulmillr.com/noble), scure and other packages.

- [Release order](#release-order)
- [Coding practices](#coding-practices)
- [Duplicated code](#duplicated-code)
- [Testing and fuzzing](#testing-and-fuzzing)
- [TODO](#todo)

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

- There should be no bigint literals. Instead of `123n`, use `BigInt(123)` or `BigInt('123')`
    - For compatibility with React Native and others
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

- Coverage calculation. Can be done by switching from micro-should to jest
- CI utility which compares NPM code to GitHub
- CI utility which checks NPM for malware
- Fuzzing documentation
- CI server set-up documentation
- minified file build & upload (update JSBT)
