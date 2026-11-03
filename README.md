# Coimbra Tech Atlas

An independent, bilingual visual directory of technology companies and the innovation ecosystem in Coimbra, Portugal.

[Explore the English edition](https://rgilsimoes.github.io/coimbra-tech-atlas/) · [Explorar a versão portuguesa](https://rgilsimoes.github.io/coimbra-tech-atlas/pt/)

## Purpose

Coimbra Tech Atlas makes the region's technology ecosystem easier to discover and understand. It brings together companies with a confirmed presence in Coimbra, their sectors, locations, missions, people and primary sources, alongside the institutions and places that connect the ecosystem.

The project covers software, artificial intelligence and data, health technology, aerospace, cybersecurity, mobility, energy, advanced engineering and sustainability. It is an editorial directory rather than an official commercial register, so it is deliberately selective and evolves as the ecosystem changes.

## What the site includes

- A searchable directory of 36 companies, available in English and European Portuguese.
- Sector filters for Software, AI & Data, Deep Tech / Tecnologia Avançada and Health Tech / Tecnologia da Saúde.
- Company profiles with a short mission, Coimbra presence, founding year, people or context, and a primary-source link.
- An ecosystem view connecting the University of Coimbra, Instituto Pedro Nunes (IPN), downtown Coimbra, iParque, Taveiro and Critical's Coimbra Editora cooperation point.
- Context on Go Coimbra, the municipal investment and innovation agency.
- A curated people section and a transparent source-and-method section.
- Model-friendly project resources for AI assistants and research tools.

## Public resources

| Resource | URL | Purpose |
| --- | --- | --- |
| English site | <https://rgilsimoes.github.io/coimbra-tech-atlas/> | Main public edition |
| Portuguese site | <https://rgilsimoes.github.io/coimbra-tech-atlas/pt/> | European Portuguese edition |
| `llms.txt` | <https://rgilsimoes.github.io/coimbra-tech-atlas/llms.txt> | Concise guidance for AI agents and discovery tools |
| English company profiles | <https://rgilsimoes.github.io/coimbra-tech-atlas/companies.md> | All directory entries as Markdown |
| Portuguese company profiles | <https://rgilsimoes.github.io/coimbra-tech-atlas/pt/empresas.md> | All directory entries in European Portuguese Markdown |

The two HTML editions link to `llms.txt` through `rel="describedby"` and show visible links to the AI guide and Markdown company profiles in the sources section.

## Editorial scope and sources

An entry should have a confirmed presence in Coimbra or a nearby business district included in the Atlas scope. A company may be headquartered locally, have an office, operate from IPN or iParque, or have another well-evidenced regional presence. These relationships should be described precisely; incubator participation does not automatically mean a University of Coimbra spin-off.

Each profile links to a company page, careers page, contact page or another relevant primary source whenever possible. Ecosystem context is cross-checked against:

- [Instituto Pedro Nunes](https://www.ipn.pt/incubadora/)
- [IPN incubated companies](https://www.ipn.pt/incubadora-empresas-2/)
- [Coimbra Tech District](https://coimbratechdistrict.com/)
- [Coimbra Tech District Open Data](https://coimbratechdistrict.com/open-data)
- [Coimbra iParque](https://www.coimbraiparque.pt/oparque)
- [Municipality of Coimbra / Go Coimbra](https://www.coimbra.pt/2026/09/municipio-avanca-com-go-coimbra-como-agencia-de-investimento-e-inovacao/)

Facts such as office locations, leadership, company status and founding information change over time. Confirm them at the cited primary source before treating them as definitive.

## Repository structure

```text
dist/
├── index.html             # English site
├── app.js                 # English directory data and interactions
├── styles.css             # Shared visual design
├── go-coimbra.css         # Go Coimbra section styles
├── language.css           # Bilingual and responsive refinements
├── llms.txt               # LLM discovery and usage guidance
├── companies.md           # English Markdown directory
└── pt/
    ├── index.html         # Portuguese (Portugal) site
    ├── app.js             # Portuguese directory data and interactions
    └── empresas.md        # Portuguese Markdown directory

.github/workflows/pages.yml # GitHub Pages deployment workflow
```

The site is deliberately buildless: `dist/` contains the deployable static files and has no package-install or compilation step.

## Run locally

Serve the `dist/` directory with any static HTTP server. For example:

```bash
# from the repository root
python3 -m http.server 4173 --directory dist
```

Then open:

- <http://127.0.0.1:4173/> for English
- <http://127.0.0.1:4173/pt/> for Portuguese
- <http://127.0.0.1:4173/llms.txt> for the AI guide

## Updating the directory

When adding or revising a company:

1. Verify a local presence and company facts using a primary source or a reliable ecosystem source.
2. Add or update the corresponding record in both `dist/app.js` and `dist/pt/app.js`.
3. Keep the two editions equivalent in scope and use natural European Portuguese in the Portuguese edition.
4. Update the directory total shown in `dist/index.html` and `dist/pt/index.html` if the number of profiles changes.
5. Update `dist/companies.md` and `dist/pt/empresas.md` so the model-friendly directories match the visual directory.
6. Update `dist/llms.txt` whenever a public AI resource, scope note or directory total changes.
7. Test search, sector filters, company modal content and responsive layout locally.

## Deployment

GitHub Pages deploys automatically on every push to `main` through [`.github/workflows/pages.yml`](.github/workflows/pages.yml). The workflow publishes the contents of `dist/`.

## Language policy

The Portuguese edition is written in Portuguese from Portugal. Do not introduce Brazilian Portuguese terminology or spelling in `dist/pt/` content.

## Contributing a company

Suggestions are welcome when they include a company name, an official website or contact page, a confirmed Coimbra-area presence and a concise explanation of its technology activity. The Atlas aims to remain useful and verifiable rather than exhaustive.
