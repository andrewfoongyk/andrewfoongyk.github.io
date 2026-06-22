# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Serve locally (standard)
bundle exec jekyll serve

# Serve with dev overrides (disables analytics, expands CSS, sets localhost URL)
bundle exec jekyll serve --config _config.yml,_config.dev.yml

# Live reload (uses the hawkins gem)
bundle exec jekyll liveserve --config _config.yml,_config.dev.yml
```

There are no tests. `_site/` is the generated output directory — never edit it directly.

## Architecture

This is a Jekyll static site using a heavily customised version of the [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme, hosted on GitHub Pages.

### Key structural facts

**The homepage (`_pages/about.md`) is the primary content file.** It contains the full About, Publications, Talks, and Blog sections written as raw HTML, not Liquid templates. The `_publications/` collection files exist but are not used for the main listing — they may be legacy artefacts.

**Navigation** (`_data/navigation.yml`) uses anchor links (`#publications`, `#talks`, etc.) that point to named anchors inside `about.md`, not separate pages.

**Content directories:**
- `_pages/` — static pages rendered at their permalink
- `_publications/` — legacy collection, not rendered on the homepage
- `files/` — PDFs (slides, CV) linked from about.md
- `assets/images/publications/` and `assets/images/talks/` — 50×50px thumbnails used in the homepage listings

### Adding a publication or talk

Publications and talks follow a fixed HTML template in `about.md`. Each entry is a flex row: a 50×50px `<img>` thumbnail on the left, and a content `<div>` on the right containing:

1. `<h3>` with a link to the paper/talk
2. `<p>` with the venue in italics
3. `<p>` with the author list (`<strong>` around Andrew's name)
4. `<p>` with a one-sentence summary
5. A `<details>` block with the full abstract

Section anchors use `<a id="..." style="display: block; position: relative; top: -50px; visibility: hidden;"></a>` for smooth scroll offset.

### Typography and styling

- **Primary font**: Crimson Pro SC (serif), set in `_sass/_variables.scss`
- **Small caps pattern**: `<span class="small-caps">text</span>` — used pervasively for acronyms (AI, LLM, NeurIPS, etc.)
- **Background**: `#F8F6F1` (warm off-white)
- **Custom overrides**: `assets/css/custom.scss` (currently only fixes hamburger menu colour)
- **SCSS source**: `_sass/` — `_variables.scss` controls fonts, colours, and breakpoints

### Config files

- `_config.yml` — production settings (Google Analytics placeholder, compressed CSS)
- `_config.dev.yml` — development overrides (localhost URL, expanded CSS, analytics disabled)
