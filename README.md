# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Publishing to Cloudflare Pages

`npm run build` uses Nitro's `cloudflare-pages` preset. The Pages deployment output is `dist` and includes both the static assets and the server-rendered Pages Function at `dist/_worker.js`.

### Git-connected deployments

1. Push the code to the GitHub repository and create a Cloudflare Pages project connected to it.
2. Set the production branch, the build command (`npm run build`), and the build output directory (`dist`).
3. Add any required environment variables in the Pages project settings for both Preview and Production. Keep secrets in Cloudflare, not in the repository.
4. Push changes or open a pull request. Cloudflare builds a preview for pull requests and deploys the production branch to the live site.
5. Review the deployment logs and preview URL, then check the live site after a production deployment.

### Manual deployments

Deploy the Pages output directory with Wrangler:

```sh
npx wrangler pages deploy dist --project-name <CLOUDFLARE_PAGES_PROJECT>
```

Replace the project-name placeholder with your Cloudflare Pages project name. The `dist` directory contains the Pages Function and assets; do not deploy `.output/public`.

### Release checks and rollback

- Run `npm run build` and the relevant tests before publishing.
- Check the preview deployment for broken routes, assets, and environment-dependent behavior before promoting changes to production.
- After deployment, verify the live URL and Cloudflare deployment logs.
- If the production deployment has a problem, use the Cloudflare dashboard to roll back to a previous successful deployment.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
