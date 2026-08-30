# P00 — Baseline Audit and Verification Commands

## Status

Implemented

## Objective

Establish a repeatable local quality gate that detects TypeScript, lint, and production-build regressions before later portfolio slices are committed.

## Starting state

- The `lint` script used `next lint`, which was not a working command in the installed Next.js toolchain.
- No dedicated type-check command existed.
- No combined verification command existed.
- Dependencies were not installed in the working copy.
- The lockfile selected a withdrawn `napi-postinstall@0.3.1` tarball, preventing a clean install.

## Implementation

- Changed `lint` to run `eslint .` directly.
- Added `typecheck` using `tsc --noEmit`.
- Added `verify` to run type checking, linting, and the production build sequentially.
- Excluded generated output and dependency directories from flat-config ESLint traversal so verification remains repeatable after a build.
- Added a narrow npm override selecting available `napi-postinstall@0.3.4`.
- Refreshed the lockfile and installed the resolved dependencies.

## Files changed

- `package.json`
- `package-lock.json`
- `eslint.config.mjs`
- `docs/implementation-slice-register.md`
- `docs/slices/P00-baseline-audit-and-verification.md`

## Practical use case

Contributors can run one command before committing or deploying:

```bash
npm run verify
```

This catches type errors, lint problems, and production-build failures through a consistent local gate. The dependency override also restores clean installation after the previously selected transitive tarball was withdrawn.

## Visible UI change

None. This slice changes development and verification infrastructure only.

## Verification

- `npm run typecheck`: passed.
- `npm run lint`: passed with one pre-existing warning for unused `setLoading` in `hooks/usePortfolioData.ts`.
- `npm run build`: passed; `/` and `/_not-found` were generated as static routes.
- `npm run verify`: passed end to end.

## Known follow-up

- The unused state warning remains assigned to the server-rendering/component-cleanup work in P06/P08.
- Installation reported 15 dependency audit findings: 1 low, 2 moderate, 9 high, and 3 critical. These require deliberate dependency-security analysis; no forced upgrade was applied in P00.
- npm reported four packages with install scripts awaiting explicit allow-script review. This should be evaluated during dependency and security hardening.

## Rollback

Revert the focused P00 commit. If reverting only the dependency override, confirm that the registry again serves every lockfile-selected tarball before relying on `npm ci`.

## Next best implementable slice

P01 — Professional positioning and evidence boundary.
