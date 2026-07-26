# Changelog

All notable changes to this project are documented here.

## 1.1.0 - 2026-07-26

### Added

- Options-based `formatCurrency` API and typed formatting options
- Options-based overloads for `format` and `formatUnit`
- Currency-aware compact notation
- Package exports, source maps, declaration maps, and publish checks

### Fixed

- CommonJS output no longer conflicts with an ESM package declaration
- Negative values now work with legacy abbreviation formatting
- Custom unit separators now use `Intl.formatToParts`, avoiding fragile regexes
- Tests and source files are excluded from the published build

### Changed

- Minimum supported Node.js version is 18
- Package metadata and documentation now match the public API

## 1.0.3

- Added unit formatting.
