# Review Queue — a concept for traide

A static, front-end-only prototype exploring a faster review workflow for low-confidence customs classification exceptions. Built as an independent design concept for traide AI — not affiliated with or endorsed by traide. All products, tariff codes, rulings, and people shown are sample data.

## The idea

Low AI confidence can come from different root causes — missing information, expert judgment calls, or master-data conflicts — and each demands a different mindset from the reviewer. This prototype groups the review queue by cause and isolates each item to the single decision block needed to resolve it, so reviewers can batch-process similar mental models faster without sacrificing decision quality.

Open the app and click **Read the brief** for the full design rationale, hypothesis, and success metrics. Toggle **Design notes** inside an item to see inline structural/strategic annotations.

## Try it

Three sample scenarios are available from the review queue:

- **Missing Information** — Insulated Bottle
- **Expert Judgment** — Smartwatch
- **Master-Data Conflict** — Control Cabinet Harness

## Project structure

- [index.html](index.html) — page shell, brief/modal content
- [styles.css](styles.css) — all styling
- [script.js](script.js) — app logic, sample data, and rendering (vanilla JS, no build step or dependencies)

## Running locally

No build step or dependencies are required — just serve the folder and open it in a browser:

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Author

Rakesh Patil — [rakesh-patil.com](https://www.rakesh-patil.com)
