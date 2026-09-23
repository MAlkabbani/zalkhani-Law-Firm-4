# Demo Deployment Record

## Purpose

This release prepares the Zalkhani Law Firm prototype for an initial client demonstration on Railway.

## White-label changes

- Replaced legacy favicon and manifest branding with a generic Zalkhani `ZL` icon.
- Added Open Graph and Twitter summary-card metadata with a 1200 × 630 Zalkhani social image.
- Added WebeWorx author, creator, publisher, and footer attribution.
- Preserved every pre-existing website image and asset.

## Deployment target

- Railway service: `zalkhani-Law-Firm-4`
- Custom demo URL: https://zalkhani-4.webeworx.com
- Railway URL: https://zalkhani-law-firm-4-production.up.railway.app
- Deployment branch: `main`

Railway uses Railpack to run the existing `npm run build` and `npm start` scripts. No environment variables or additional Railway configuration are required for this static prototype.

## Release checklist

1. Run `npm run type-check`.
2. Run `npm run build`.
3. Start the production server with `npm start`.
4. Confirm the title, favicon, Open Graph/Twitter metadata, and footer attribution on the homepage.
5. Merge the release PR into `main` and confirm the Railway deployment is healthy at the custom demo URL.
