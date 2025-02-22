# VS Code Configuration for Cursor AI Rules

This directory contains VS Code settings and recommendations for maintaining consistent markdown formatting and linting in Cursor AI rules.

## Files

- `settings.json`: Workspace-specific VS Code settings
- `extensions.json`: Recommended VS Code extensions
- `README.md`: This file

## Required Extensions

1. **markdownlint** (DavidAnson.vscode-markdownlint)

   - Provides markdown linting and formatting
   - Enforces consistent styling
   - Configured to match our standards

2. **Markdown All in One** (yzhang.markdown-all-in-one)

   - Keyboard shortcuts
   - Table of contents
   - List editing
   - Preview

3. **GitHub Markdown Preview** (bierner.markdown-preview-github-styles)

   - GitHub-style markdown preview
   - Matches how rules appear in GitHub

4. **Code Spell Checker** (streetsidesoftware.code-spell-checker)
   - Catches spelling mistakes
   - Supports technical terms

## Settings Overview

### Markdown Settings

- Format on save enabled
- Word wrap enabled
- 80 character line limit
- Trailing whitespace trimmed
- Final newline inserted

### Markdownlint Rules

- MD001: Disabled - Headers can increment by more than one level
- MD012: Disabled - Multiple consecutive blank lines allowed
- MD024: Disabled - Allow multiple headers with same content
- MD025: Single title per file (ignores YAML front matter)
- MD026: Disabled - Trailing punctuation in headers allowed
- MD029: Disabled - Ordered list item prefix can be any number
- MD031: Enabled - Blank lines around fenced code blocks required
- MD032: Enabled - Lists should be surrounded by blank lines
- MD033: Disabled - Inline HTML allowed (for details/summary)
- MD034: Enabled - No bare URLs
- MD036: Disabled - Emphasis used as headers allowed
- MD037: Disabled - Spaces inside emphasis markers allowed
- MD040: Enabled - Language specified for fenced code blocks
- MD041: Disabled - First line can be front matter
- MD046: Enabled - Consistent code block style

### File Associations

- `.mdc` files are treated as markdown

## Usage

1. Install the recommended extensions
2. Reload VS Code
3. Settings will automatically apply to markdown files
4. Use "Format Document" (Shift+Alt+F) to manually format

## Troubleshooting

If formatting isn't working:

1. Check that all recommended extensions are installed
2. Ensure `.mdc` files are recognized as markdown
3. Try reloading VS Code
4. Check the markdownlint output panel for errors
