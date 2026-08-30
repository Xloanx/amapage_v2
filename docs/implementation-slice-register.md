# Portfolio Implementation Slice Register

## Purpose

This register defines the implementation order for evolving the portfolio into a credible, maintainable, accessible, and secure representation of Abiodun Muhammad-Ahmad Odukaye's work. Update it whenever a slice changes status or materially changes content, architecture, security, or user experience.

## Product objective

Present a coherent senior profile centred on full-stack and AI engineering, enterprise workflow architecture, secure systems integration, AI-assisted software delivery, technical leadership, and operational automation.

## Status definitions

- **Planned**: defined but not started.
- **Ready**: dependencies and decisions are resolved.
- **In progress**: implementation has started.
- **Implemented locally**: implementation and local verification pass.
- **Implemented**: implementation, relevant documentation, and verification are committed as a focused change.
- **Deployed**: live and post-deployment checks pass.
- **Blocked**: requires a named decision, asset, or dependency.
- **Deferred**: intentionally outside the current delivery sequence.

## Governing principles

1. Evidence must precede claims; planned features must not appear as implemented work.
2. Public content must not expose credentials, personal data, private code, internal URLs, or sensitive organizational details.
3. Prefer server rendering and introduce client JavaScript only for valuable interactions.
4. Manage content through one typed, validated model rather than component-specific interfaces.
5. Accessibility, responsive behaviour, and reduced-motion support are acceptance criteria.
6. Security headers, safe links, dependency minimization, and privacy-conscious contact options are release requirements.
7. Every slice must pass its stated verification before advancing status.
8. After each slice, update the register and every relevant slice document, then commit the implementation and documentation as one focused change.

## Phase 0 — Baseline and content decisions

| ID | Slice | Status | Depends on | Outcome |
| --- | --- | --- | --- | --- |
| P00 | [Baseline audit and verification commands](slices/P00-baseline-audit-and-verification.md) | Implemented | None | Established working lint, type-check, build, and combined verification commands. |
| P01 | Professional positioning and evidence boundary | Ready | None | Approve headline, summary, capability pillars, ownership wording, and confidentiality rules. |
| P02 | Project inventory and publication classification | Ready | P01 | Classify projects by category, status, contribution, evidence, confidentiality, and priority. |
| P03 | Portfolio asset inventory | Planned | P02 | Identify safe screenshots, logos, resume, social image, and missing assets. |

## Phase 1 — Maintainable content architecture

| ID | Slice | Status | Depends on | Outcome |
| --- | --- | --- | --- | --- |
| P04 | Typed portfolio domain model | Planned | P01, P02 | Centralize types for profile, capabilities, skills, experience, projects, links, and status. |
| P05 | Runtime content validation | Planned | P04 | Validate content with Zod and fail clearly during development/build. |
| P06 | Server-rendered page foundation | Planned | P05 | Remove unnecessary page-level client state and render static content on the server. |
| P07 | Content and encoding normalization | Planned | P05 | Repair malformed punctuation, inconsistent titles, outdated dates, URLs, and resume references. |
| P08 | Component and dependency cleanup | Planned | P06 | Remove dead hooks, commented code, unused PDF generation, packages, and UI components where safe. |

## Phase 2 — Narrative and information architecture

| ID | Slice | Status | Depends on | Outcome |
| --- | --- | --- | --- | --- |
| P09 | Hero and professional positioning | Planned | P01, P06, P07 | Add an evidence-oriented value proposition and focused calls to action. |
| P10 | Capability pillars | Planned | P01, P06 | Add enterprise workflow, secure integration, and AI engineering/assisted-delivery pillars. |
| P11 | Evidence-aligned skills taxonomy | Planned | P02, P05 | Replace the broad tool inventory with demonstrated competencies. |
| P12 | Experience narrative revision | Planned | P01, P02, P05 | Reflect technical leadership, architecture, security, integration, automation, and AI delivery. |
| P13 | Navigation and section architecture | Planned | P09, P10 | Add logical section order, skip navigation, anchors, and compact responsive navigation. |

## Phase 3 — Project evidence and case studies

| ID | Slice | Status | Depends on | Outcome |
| --- | --- | --- | --- | --- |
| P14 | Featured-project selection | Planned | P02 | Select four primary projects for the general portfolio narrative. |
| P15 | Accessible project grid | Planned | P06, P14 | Replace the carousel with a responsive, keyboard-accessible grid. |
| P16 | Status and contribution labels | Planned | P14, P15 | Show deployed/pilot/development/prototype status and personal contribution. |
| P17 | Progressive project filtering | Planned | P15 | Filter enterprise, AI, workflow, security, and full-stack projects. |
| P18 | Case-study route foundation | Planned | P04, P14 | Generate `/projects/[slug]` pages from validated content. |
| P19 | Enterprise ecosystem case study | Planned | P18 | Present Workspace, Flow, SIWES, Reimbursement, and PromoIntel with sanitized evidence. |
| P20 | AI project case studies | Planned | P18 | Present selected AI systems with honest implementation boundaries. |
| P21 | Project media optimization | Planned | P03, P15 | Replace placeholders with sanitized, responsive images and useful alt text. |

## Phase 4 — Visual system and responsive UX

| ID | Slice | Status | Depends on | Outcome |
| --- | --- | --- | --- | --- |
| P22 | Visual direction and design tokens | Planned | P09, P13 | Define typography, spacing, colour, elevation, borders, and interaction tokens. |
| P23 | Responsive layout refinement | Planned | P15, P22 | Verify hierarchy across mobile, tablet, laptop, and wide desktop. |
| P24 | Interaction and motion policy | Planned | P22 | Standardize feedback, remove disruptive scaling, and respect reduced motion. |
| P25 | Dark-mode decision | Deferred | P22 | Add only if it improves the experience without disproportionate maintenance. |
| P26 | Private and unavailable states | Planned | P15, P16 | Handle absent repositories, demos, and images intentionally. |

## Phase 5 — Accessibility

| ID | Slice | Status | Depends on | Outcome |
| --- | --- | --- | --- | --- |
| P27 | Semantic structure and landmarks | Planned | P13, P15 | Correct landmarks, heading hierarchy, lists, controls, and accessible names. |
| P28 | Keyboard and focus experience | Planned | P13, P15, P24 | Make navigation, filters, cards, and actions keyboard operable with visible focus. |
| P29 | Colour, typography, zoom, and reflow | Planned | P22, P23 | Meet contrast requirements and preserve usability at zoom/narrow widths. |
| P30 | Automated and manual accessibility checks | Planned | P27–P29 | Complete automated, keyboard, screen-reader smoke, motion, and zoom checks. |

## Phase 6 — Security and privacy

| ID | Slice | Status | Depends on | Outcome |
| --- | --- | --- | --- | --- |
| P31 | External URL and content validation | Planned | P05 | Permit expected schemes and handle optional external links safely. |
| P32 | Security response headers | Planned | P06 | Add CSP, referrer/permissions policies, content-type protection, and frame restrictions. |
| P33 | Public contact privacy decision | Blocked | User decision | Decide whether phone/WhatsApp remain public or use a safer channel. |
| P34 | Confidentiality and media review | Planned | P03, P19, P20 | Remove sensitive organizational, personal, authentication, and infrastructure details. |
| P35 | Dependency and client-bundle reduction | Planned | P08 | Remove unnecessary packages and minimize client code. |
| P36 | Protected contact form | Deferred | P33 | If approved, add validation, rate limiting, spam protection, and safe delivery. |

## Phase 7 — Discoverability and professional trust

| ID | Slice | Status | Depends on | Outcome |
| --- | --- | --- | --- | --- |
| P37 | Metadata and canonical identity | Planned | P01, P07 | Replace generic branding and keyword stuffing with accurate metadata. |
| P38 | Open Graph/social assets | Planned | P03, P37 | Publish a real social-preview image. |
| P39 | Structured data | Planned | P37 | Add conservative `Person`, `ProfilePage`, and selected `CreativeWork` data. |
| P40 | Sitemap, robots, and not-found review | Planned | P18, P37 | Make valid routes discoverable and invalid routes recoverable. |
| P41 | Resume and portfolio consistency | Planned | P07, P12, P14 | Align titles, dates, links, status, claims, and the downloadable resume. |
| P42 | Evidence and credibility links | Planned | P14, P34 | Add safe repositories, demos, case studies, credentials, and proof. |

## Phase 8 — Quality gates and release

| ID | Slice | Status | Depends on | Outcome |
| --- | --- | --- | --- | --- |
| P43 | Content-schema and rendering tests | Planned | P05, P18 | Test required content, statuses, optional links, and case-study routes. |
| P44 | Link and asset validation | Planned | P21, P37, P42 | Detect broken anchors, missing assets, malformed links, and missing social images. |
| P45 | Performance/Core Web Vitals audit | Planned | P21, P23, P35 | Optimize images, fonts, JavaScript, layout stability, and loading. |
| P46 | Cross-device/browser verification | Planned | P23, P30, P45 | Verify key flows on supported mobile and desktop browsers. |
| P47 | Security verification | Planned | P31, P32, P34, P35 | Verify headers, links, exposure, dependencies, and production configuration. |
| P48 | Deployment and smoke test | Planned | P30, P41, P44–P47 | Deploy and verify navigation, projects, resume, metadata, preview, and contact actions. |
| P49 | Maintenance documentation | Planned | P48 | Replace the starter README with content, asset, test, deployment, and security guidance. |

## Acceptance criteria by workstream

### Content foundation (P04–P08)

- Shared types exist once and content is build-time validated.
- Static data no longer requires page-level client state.
- Encoding errors and outdated links are removed.
- Dead code and demonstrably unused dependencies are removed safely.

### Narrative and projects (P09–P21)

- The opening viewport states role, specialization, evidence, and a primary action.
- Skills emphasize demonstrated capabilities rather than an unqualified tool inventory.
- Featured work is visible without carousel interaction.
- Cards are concise, comparable, and honest about status and contribution.
- Private repositories and unavailable demos render as intentional states.
- Public descriptions and media are sanitized.

### UX and accessibility (P22–P30)

- Layout and interactions are consistent across breakpoints.
- Keyboard users can identify and activate every control.
- Focus is visible and logical; motion respects user preferences.
- Contrast, zoom, reflow, semantics, and screen-reader smoke checks pass.

### Security and trust (P31–P42)

- Unsafe URL schemes are rejected.
- Production responses include approved security headers.
- Contact exposure reflects an explicit privacy decision.
- Search/social metadata and structured data contain no unsupported claims.
- Resume and portfolio agree on dates, titles, links, and status.

### Release quality (P43–P49)

- The combined verification command passes.
- Content, routes, links, assets, accessibility, security, performance, and responsiveness are checked.
- The deployed site passes a documented smoke test.
- Maintenance instructions enable safe future content updates.

## Recommended implementation order

1. P00 — Establish reliable verification.
2. P01 — Approve positioning and evidence rules.
3. P02 — Inventory and classify projects.
4. P03 — Inventory safe assets.
5. P04–P08 — Build the validated server-rendered content foundation and remove dead code.
6. P09–P13 — Implement narrative, capabilities, skills, experience, and navigation.
7. P14–P16 — Replace the carousel and add status/contribution evidence.
8. P22–P24 and P26 — Apply the responsive visual system.
9. P18–P21 — Add case studies and optimized media.
10. P27–P30 — Complete accessibility implementation and verification.
11. P31–P35 — Complete security, privacy, and confidentiality controls.
12. P37–P42 — Align metadata, resume, structured data, and proof.
13. P17 — Add filtering only after the catalogue justifies it.
14. P43–P49 — Complete quality gates, deploy, smoke-test, and document maintenance.
15. Reassess deferred P25 and P36 after the core portfolio is stable.

## Initial release definition

The first meaningful release should include P00–P16, P22–P24, P26–P35 excluding deferred P36, P37–P42, and the applicable P43–P49 gates.

If detailed case studies or approved imagery are not ready, P17–P21 may follow as an enhancement release. The initial release must still contain four evidence-backed project cards with status and contribution labels.

## Decisions required

1. Confirm the primary headline and short summary.
2. Confirm project-specific ownership verbs: architected, built, led, co-developed, or contributed to.
3. Confirm the four default featured projects.
4. Confirm which enterprise projects and screenshots may be shown publicly.
5. Decide whether the public phone number and WhatsApp link remain.
6. Supply or approve the current downloadable resume.
7. Supply approved credentials, certification dates, and measurable outcomes intended for publication.

## Original next best slice

Start with **P00 — Baseline audit and verification commands**. It creates the quality gate needed to distinguish pre-existing issues from regressions during the refactor.

After P00, complete P01 and P02 as the first content-decision milestone before changing the visible portfolio.

## Implementation log

### P00 — Baseline audit and verification commands

**Status:** Implemented

**What changed**

- Replaced the obsolete `next lint` script with direct ESLint execution.
- Added `typecheck` using `tsc --noEmit`.
- Added `verify` to run type checking, linting, and the production build in sequence.
- Excluded generated output and dependency directories from ESLint traversal so repeated verification does not lint `.next` build artifacts.
- Added a narrow npm override from the withdrawn transitive `napi-postinstall@0.3.1` tarball to available version `0.3.4` and refreshed the lockfile.
- Installed lockfile-resolved dependencies locally so verification can run.

**Practical use case**

Contributors now have one repeatable command, `npm run verify`, that detects TypeScript errors, lint violations, and production-build regressions before portfolio changes are released. The transitive override also restores reproducible clean installation after the previously selected tarball was withdrawn.

**Visible UI change**

None. This slice changes development and verification infrastructure only.

**Verification**

- `npm run typecheck`: passed.
- `npm run lint`: passed with one pre-existing unused-`setLoading` warning in `hooks/usePortfolioData.ts`; cleanup remains assigned to P06/P08.
- `npm run build`: passed; `/` and `/_not-found` were generated as static routes.
- `npm run verify`: passed end to end.
- Dependency audit baseline: 15 known findings (1 low, 2 moderate, 9 high, 3 critical). Remediation requires a dedicated dependency-security review and was not forced into P00.

**Next best implementable slice**

P01 — Professional positioning and evidence boundary. After P01, complete P02 before changing the visible project catalogue.
