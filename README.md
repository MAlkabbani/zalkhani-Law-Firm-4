# Zalkhani Law Firm Demo

Client-facing prototype for Zalkhani Law Firm, designed and engineered by [WebeWorx](https://webeworx.com).

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To validate the deployable production build:

```bash
npm run type-check
npm run build
npm start
```

## Railway demo deployment

Railway deploys the `main` branch through the existing `zalkhani-Law-Firm-4` service. The client demo is available at:

- https://zalkhani-4.webeworx.com
- https://zalkhani-law-firm-4-production.up.railway.app

The project uses Railway's Railpack detection with the package `build` and `start` scripts; no separate Railway configuration is required.

See [the deployment record](docs/DEMO_DEPLOYMENT.md) for release and verification details.
