# Review and contribution guide

PeakTalk is public for engineering review, not as an open contribution program.
Unsolicited feature pull requests may be closed, and no open-source license is
granted. Reviewers are welcome to inspect the code, run the checks, and report
security findings through the private process in [SECURITY.md](SECURITY.md).
Public-repository rights provided by GitHub's Terms of Service still apply; no
additional open-source license is granted.

The conventions below define the standard for maintainer-authored changes and
for any contribution requested in advance.

## Before changing code

1. Read [the MVP boundaries](docs/product/mvp-boundaries.md) and
   [core-flow specification](docs/specs/core-flow.md).
2. Keep product behavior, storage, authentication, billing, and migrations out
   of a change unless the relevant decision is explicit.
3. Use only synthetic local data. Never copy a real document, credential,
   production response, or interview transcript into the repository.
4. Prefer one bounded concern per branch and pull request.

Suggested branch names use a short type and purpose, for example
`fix/session-expiry` or `docs/local-setup`.

## Local checks

Backend:

```bash
cd backend
python3.12 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.lock
pytest
```

Frontend:

```bash
cd frontend
test -f .env.local || cp .env.example .env.local
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```

Run `git diff --check` before handing off a change. CI remains the authoritative
repository gate; a local pass does not bypass required checks.

## Change quality

- Add or update tests for observable behavior.
- Keep API and database changes backward-compatible unless a reviewed migration
  says otherwise.
- Make loading, empty, error, and incomplete-input states explicit in UI work.
- Keep external providers behind existing adapters and use test doubles in
  automated tests.
- Do not weaken authentication, ownership checks, rate limits, or file
  validation to make a test pass.
- Update durable documentation when a contract or architectural boundary moves.

## Pull-request checklist

- [ ] The change has one stated purpose and bounded scope.
- [ ] Product and architectural decisions are documented where needed.
- [ ] Tests cover the changed behavior and pass locally.
- [ ] Frontend lint, typecheck, tests, and build pass when applicable.
- [ ] No secrets, personal data, generated artifacts, or production details are
      present in the diff or earlier commits on the branch.
- [ ] Logs and errors do not expose user material, tokens, or stable identifiers.
- [ ] Documentation and safe examples match the implemented behavior.

## Commit history

Use imperative, specific commit subjects. Preserve useful intermediate commits
when they explain the development path; do not manufacture a single polished
commit solely to hide iteration. Do not add AI tools as authors or co-authors.
AI-assisted work remains the submitting human's responsibility and should be
reviewed with the same standard as any other change.

## Security reports

Do not demonstrate a vulnerability in a public pull request. Follow
[SECURITY.md](SECURITY.md), including for secrets or personal data found in Git
history.
