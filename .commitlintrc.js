// @ts-check
import { defineConfig } from 'cz-git';

/** @type {import('cz-git').UserConfig} */
const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
        'deps',
        'security',
        'i18n',
        'a11y',
      ],
    ],
    'scope-enum': [
      2,
      'always',
      ['rules', 'memory', 'validation', 'core', 'docs', 'test', 'config'],
    ],
    'scope-case': [2, 'always', ['lower-case']],
    'subject-case': [2, 'always', ['lower-case']],
    'subject-full-stop': [2, 'never', '.'],
    'subject-min-length': [2, 'always', 5],
    'subject-max-length': [2, 'always', 100],
    'body-max-line-length': [2, 'always', 100],
    'footer-max-line-length': [2, 'always', 100],
  },
  prompt: {
    alias: {
      fd: 'docs: fix typos',
      ur: 'docs: update README',
      br: 'build: update dependencies',
      sc: 'style: format code style',
    },
    useEmoji: true,
    emojiAlign: 'center',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    allowCustomScopes: true,
    allowEmptyScopes: false,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    markBreakingChangeMode: true,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixes: [
      { value: 'closed', name: 'closed:   ISSUES has been processed' },
    ],
    customIssuePrefixsAlign: 'top',
    emptyIssuePrefixsAlias: 'skip',
    customIssuePrefixsAlias: 'custom',
    confirmColorize: true,
    maxHeaderLength: 100,
    maxSubjectLength: 100,
    minSubjectLength: 5,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: '',
    messages: {
      type: "Select the type of change that you're committing:",
      scope: 'Denote the SCOPE of this change (optional):',
      customScope: 'Denote the SCOPE of this change:',
      subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking:
        'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      footerPrefix:
        'Select the ISSUES type of changeList by this change (optional):',
      customFooterPrefix: 'Input ISSUES prefix:',
      footer: 'List any ISSUES by this change. E.g.: #31, #34:\n',
      confirmCommit: 'Are you sure you want to proceed with the commit above?',
    },
    types: [
      {
        value: 'feat',
        name: 'feat:     ✨  A new feature',
        emoji: ':sparkles:',
      },
      { value: 'fix', name: 'fix:      🐛  A bug fix', emoji: ':bug:' },
      {
        value: 'docs',
        name: 'docs:     📝  Documentation only changes',
        emoji: ':memo:',
      },
      {
        value: 'style',
        name: 'style:    💄  Changes that do not affect the meaning of the code',
        emoji: ':lipstick:',
      },
      {
        value: 'refactor',
        name: 'refactor: ♻️   A code change that neither fixes a bug nor adds a feature',
        emoji: ':recycle:',
      },
      {
        value: 'perf',
        name: 'perf:     ⚡️  A code change that improves performance',
        emoji: ':zap:',
      },
      {
        value: 'test',
        name: 'test:     ✅  Adding missing tests or correcting existing tests',
        emoji: ':white_check_mark:',
      },
      {
        value: 'build',
        name: 'build:    📦️  Changes that affect the build system or external dependencies',
        emoji: ':package:',
      },
      {
        value: 'ci',
        name: 'ci:       🎡  Changes to our CI configuration files and scripts',
        emoji: ':ferris_wheel:',
      },
      {
        value: 'chore',
        name: "chore:    🔨  Other changes that don't modify src or test files",
        emoji: ':hammer:',
      },
      {
        value: 'revert',
        name: 'revert:   ⏪️  Reverts a previous commit',
        emoji: ':rewind:',
      },
      {
        value: 'deps',
        name: 'deps:     📌  Update dependencies',
        emoji: ':pushpin:',
      },
      {
        value: 'security',
        name: 'security: 🔒  Security improvements',
        emoji: ':lock:',
      },
      {
        value: 'i18n',
        name: 'i18n:     🌐  Internationalization and localization',
        emoji: ':globe_with_meridians:',
      },
      {
        value: 'a11y',
        name: 'a11y:     ♿️  Accessibility improvements',
        emoji: ':wheelchair:',
      },
    ],
    scopes: [
      { value: 'rules', name: 'rules:     Rule system changes' },
      { value: 'memory', name: 'memory:    Memory system' },
      { value: 'validation', name: 'validation: Validation rules' },
      { value: 'core', name: 'core:      Core functionality' },
      { value: 'docs', name: 'docs:      Documentation' },
      { value: 'test', name: 'test:      Testing infrastructure' },
      { value: 'config', name: 'config:    Configuration' },
    ],
  },
};

export default defineConfig(config);
