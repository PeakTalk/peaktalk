# Project history

## Why the graph is included

This showcase preserves the development graph so reviewers can inspect how the
product changed, including intermediate decisions, corrections, reverts, and
merged branches. It is not a newly generated repository with one artificial
commit.

At the sanitization boundary, the source history contains **351 historical
commits** and **18 merge commits**. One current-date hardening commit adds the
public review material and repository controls after that source-history
boundary.

## Selected branches

Five refs are published:

| Branch | Purpose visible in history |
| --- | --- |
| `main` | Review snapshot tip and complete selected graph |
| `chore/repo-cleanup` | Repository cleanup work |
| `cod-eon/style/dashboard-analytics-redesign` | Dashboard and analytics design iteration |
| `feature/maintenance-screen-update` | Maintenance-state work |
| `fix/ci-eslint-changed-files` | CI lint-scope correction |

The four non-`main` tips are already reachable from `main`; they do not add
unmerged source commits at the snapshot boundary. They remain as honest branch
landmarks. GitHub-native pull-request objects were not copied or synthetically
recreated, although historical merge subjects may still reference the original
pull-request numbers.

## How to inspect it

```bash
# Complete selected graph with branches and merges
git log --graph --decorate --date-order --all

# Product's main-line progression
git log --first-parent --date=iso-strict main

# Merge commits retained in the snapshot
git log --merges --oneline --all

# Relationship between a selected branch and main
git log --graph --oneline main chore/repo-cleanup
```

Useful review areas include the initial frontend and backend foundations,
document and draft handling, simulation and reporting, authentication changes,
responsive interface iterations, background work, notification and billing
boundaries, tests, and the later narrowing of the product contract around
high-stakes decision defense.

## Sanitization effects

History filtering changes object IDs. The public graph preserves author and
committer timestamps, timezone offsets, ordered parent relationships, merge
topology, and commit subjects, but file exclusions and attribution normalization
change commit contents or metadata. Descendant IDs necessarily change as well.

Exactly **58 historical commits** have no content delta after the public
allowlist is applied. They were not removed: retaining them preserves the
sequence and topology reviewers are meant to inspect. Their presence should not
be interpreted as fabricated activity.

Any historical cryptographic signatures over the original commits are invalid
after rewriting and were not recreated. The old-to-new commit map and private
source manifest are intentionally unavailable in the public repository.

See [Repository provenance](../PROVENANCE.md) for excluded categories and the
verification model.
