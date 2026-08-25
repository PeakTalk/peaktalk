# Security policy

## Scope

This policy covers the source code and GitHub Actions workflows in this public
PeakTalk review snapshot. The snapshot contains no supported production
deployment configuration and is not a security certification of any running
service.

Only the current `main` branch is maintained for security changes in this
snapshot. Historical and review branches are retained for inspection and should
not be treated as supported release lines.

## Report privately

Use GitHub's **Report a vulnerability** form in the repository's Security tab.
Do not open a public Issue, pull request, or Discussion for a suspected
vulnerability.

Include, where possible:

- the affected component and revision;
- steps to reproduce with non-sensitive test data;
- expected and observed behavior;
- the likely impact and prerequisites;
- a minimal proof of concept that does not access another person's data.

Never attach credentials, tokens, personal data, confidential documents, or
production exports. If a report itself contains sensitive material, describe it
without pasting it and wait for a secure handling path.

The maintainer will coordinate triage and disclosure through the private report.
This review-stage project does not promise a contractual response or resolution
time.

## Relevant findings

Reports are particularly useful for:

- authentication, authorization, or object-ownership bypasses;
- unsafe file parsing, upload handling, or stored-document access;
- prompt or tool injection that crosses a defined trust boundary;
- payment or webhook verification failures;
- workflow, dependency, or build-chain compromise;
- accidental credentials or personal data in a published Git object.

General product suggestions, model-quality disagreements, and unsupported local
configuration are not security vulnerabilities.

## Safe research expectations

- Use only accounts and data you control.
- Do not test a production service without explicit written authorization.
- Do not use denial-of-service, social engineering, persistence, or destructive
  techniques.
- Stop if you encounter data belonging to another person.
- Preserve confidentiality until a fix or coordinated disclosure decision.

## Repository security model

This showcase is designed to have no production secrets, deployment keys, or
production environment. Example configuration uses localhost values and clear
placeholders. CI is limited to build, test, and security checks; it cannot
deploy PeakTalk.

Secret scanning reduces risk but is not a substitute for review. If a real
credential is ever found, treat it as compromised even if the repository is
later rewritten or made private.
