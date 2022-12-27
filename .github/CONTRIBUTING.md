# Jexpe Contributing Guide

Hi! We, the maintainers, are really excited that you are interested in contributing to Jexpe. Before submitting your
contribution though, please make sure to take a moment and read through the [Code of Conduct](CODE_OF_CONDUCT.md), as
well as the appropriate section for the contribution you intend to make:

- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Guide](#development-guide)

**We strongly advise you to join the [Jexpe Discord](https://discord.com/invite/cfHmUnPDtM) to discuss your contribution
with the community.**

## Issue Reporting Guidelines

- The issue list of this repo is **exclusively** for bug reports and feature requests. Non-conforming issues will be
  closed immediately.

- If you have a question, you can get quick answers from the [Jexpe Discord](https://discord.com/invite/cfHmUnPDtM).

- Try to search for your issue, it may have already been answered or even fixed in the development branch (`dev`).

- Check if the issue is reproducible with the latest stable version of Jexpe. If you are using a pre-release, please
  indicate the specific version you are using.

- It is **required** that you clearly describe the steps necessary to reproduce the issue you are running into. Although
  we would love to help our users as much as possible, diagnosing issues without clear reproduction steps is extremely
  time-consuming and simply not sustainable.

- Use only the minimum amount of code necessary to reproduce the unexpected behavior. A good bug report should isolate
  specific methods that exhibit unexpected behavior and precisely define how expectations were violated. What did you
  expect the method or methods to do, and how did the observed behavior differ? The more precisely you isolate the
  issue, the faster we can investigate.

- Issues with no clear repro steps will not be triaged. If an issue labeled "need repro" receives no further input from
  the issue author for more than 5 days, it will be closed.

- If your issue is resolved but still open, don’t hesitate to close it. In case you found a solution by yourself, it
  could be helpful to explain how you fixed it.

- Most importantly, we beg your patience: the team must balance your request against many other responsibilities —
  fixing other bugs, answering other questions, new features, new documentation, etc. The issue list is not paid
  support, and we cannot make guarantees about how fast your issue can be resolved.

## Pull Request Guidelines

- It's OK to have multiple small commits as you work on the PR - we will let GitHub automatically squash it before
  merging.

- If adding new feature:

    - Provide convincing reason to add this feature. Ideally you should open a suggestion issue first and have it
      greenlighted before working on it.

- If fixing a bug:
    - If you are resolving a special issue, add `(fix: #xxxx[,#xxx])` (#xxxx is the issue id) in your PR title for a
      better release log, e.g. `fix: update entities encoding/decoding (fix #3899)`.
    - Provide detailed description of the bug in the PR, or link to an issue that does.

## Development Guide

**Jexpe is undergoing rapid development right now, and the docs match the latest published version. They
are horribly out of date when compared with the code in the development branch (`dev`). This contributor guide is up-to-date, but it
doesn't cover all of Jexpe's functions in depth. If you have any questions, don't hesitate to ask in
our [Jexpe Discord](https://discord.com/invite/cfHmUnPDtM)**

## Financial Contribution

Jexpe is an MIT-licensed open source project. Its ongoing development can be supported
via [Discord server](https://discord.com/invite/cfHmUnPDtM) boosts.