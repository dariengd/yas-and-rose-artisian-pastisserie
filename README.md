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

**Check the deployment target before publishing.** The current `npm run build` output is a Cloudflare Workers module (`.output/server/index.mjs` with `.output/server/wrangler.json`), not a Cloudflare Pages build. Deploying only `.output/public` to Pages would publish static assets without the server-rendered app. To use Pages, first configure a Pages-compatible Nitro output and confirm the build produces the Pages worker and assets in the format expected by Cloudflare Pages. Do not assume `.output/public` is the complete deployment.

If you want to publish the current build without changing its target, deploy it as a Cloudflare Worker instead of a Pages project.

### Git-connected deployments

Once the app is configured to produce a Pages-compatible build:

1. Push the code to the GitHub repository and create a Cloudflare Pages project connected to it.
2. Set the production branch and the build command (`npm run build`). Set the build output directory to the directory produced by the Pages-compatible configuration; verify it from the build before saving the settings.
3. Add any required environment variables in the Pages project settings for both Preview and Production. Keep secrets in Cloudflare, not in the repository.
4. Push changes or open a pull request. Cloudflare builds a preview for pull requests and deploys the production branch to the live site.
5. Review the deployment logs and preview URL, then check the live site after a production deployment.

### Manual deployments

After configuring and building the Pages-compatible output, deploy that verified output directory with Wrangler:

```sh
npx wrangler pages deploy <PAGES_OUTPUT_DIRECTORY> --project-name <CLOUDFLARE_PAGES_PROJECT>
```

Replace both placeholders with the actual Pages output directory and project name. Do not use `.output/public` unless the Pages build configuration confirms it contains the complete Pages deployment. If Wrangler is not available in the project, run it with `npx` as above or install and pin it as a development dependency for repeatable deployments.

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
