# Repository provenance

## What this repository is

This repository is a one-time public review snapshot derived from PeakTalk's
private production source repository. The private repository remains the source
of truth and was neither transferred nor rewritten for publication. There is no
automatic or bidirectional synchronization between the two repositories.

The review snapshot preserves meaningful development history rather than
replacing it with a synthetic initial commit.

## Public history accounting

Before the current review-hardening commit, the sanitized source history has:

- **351 historical commits**;
- **18 merge commits**;
- **five selected branch references**;
- **58 commits with no content delta after exclusions**.

Those 58 commits are retained because their original changes affected material
that is outside the public allowlist. Keeping the commits preserves parent
order, timing, and merge topology instead of silently flattening the graph.

For retained history, the rewrite preserves original author and committer
timestamps, including timezone offsets, ordered parent relationships, merge
structure, and commit subjects. The owner's author identity is normalized to a
single maintainer name and address. The five selected refs contain no genuine
bot-authored commit; their historical commits therefore use the canonical
maintainer identity rather than assigning authorship to an AI tool.

## Why commit IDs changed

Git commit IDs cover the commit's tree, parent IDs, author and committer
metadata, and message. Removing non-public files, normalizing owner metadata,
and removing attribution trailers therefore changes a commit ID; changed parent
IDs propagate to descendants.

As a result:

- public commit IDs do not match the private source repository;
- historical cryptographic commit signatures are no longer valid for rewritten
  commits and are not recreated;
- the private old-to-new commit map is access-controlled and is not part of
  this repository;
- GitHub-native pull requests, Issues, runs, deployments, and other repository
  objects were not fabricated in the new repository.

The selected branch tips and merge graph provide the public evidence of branch-
based development. See [Project history](docs/project-history.md).

## What was excluded

Publication uses a reviewer-safe content allowlist. Excluded categories include:

- credentials and secret-bearing material;
- raw research recordings, transcripts, quotations, and personal contact data;
- production access instructions, deployment credentials, and internal
  infrastructure topology;
- local agent and development-harness infrastructure;
- application deliverables, temporary output, generated binaries, large media,
  and duplicate source copies.

This document intentionally does not name sensitive historical paths or publish
their former commit IDs. Anonymized research implications are documented
separately without source text or participant identifiers.

## AI-assisted development

AI coding assistants were used during portions of implementation, analysis, and
review. Their output was selected, changed, and accepted by the human
maintainer, who remains responsible for the resulting product and repository.

AI tool names are not retained as Git author or co-author attribution because a
tool is not the accountable author. Removing those attribution trailers is not
a claim that development was AI-free; this section is the durable disclosure.

## Publication verification

Public visibility is gated on verification of every selected ref, including:

- Git object integrity and the expected branch manifest;
- preserved timestamps, ordered parent mapping, and merge count;
- absence of excluded paths, credentials, personal data, and AI attribution
  trailers throughout reachable history;
- canonical maintainer attribution without AI-authored commits;
- clean secret, dependency, code, and workflow security scans;
- passing backend and frontend checks from a fresh clone.

If a post-publication issue is found, making the repository private cannot
recall existing clones or forks. Applicable credentials must be treated as
compromised, affected refs removed, and the snapshot rebuilt from the controlled
source manifest.
