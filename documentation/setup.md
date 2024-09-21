## Getting Started

To get this project up and running on your local machine, follow these steps:

### Ignored Files and Folders

On commit to the GitHub repository, the following folders and files are omitted:

#### Dependencies
- `/node_modules`
- `/.pnp`
- `.pnp.js`
- `.yarn/install-state.gz`

#### Testing
- `/coverage`

#### Next.js
- `/.next/`
- `/out/`

#### Production
- `/build`

#### Miscellaneous
- `.DS_Store`
- `*.pem`

#### Debugging
- `npm-debug.log*`
- `yarn-debug.log*`
- `yarn-error.log*`

#### Local Environment Files
- `.env*.local`

#### Vercel
- `.vercel`

#### TypeScript
- `*.tsbuildinfo`
- `next-env.d.ts`

#### VSCode
- `.vscode`

### Installation

1. First, ensure you have Node.js installed.
2. Install the project dependencies by running one of the following commands:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
3. Create an .env.local file to and create two variable namely(You may need to create a TMDB account if you dont have one already):
```
TMDB_API_URL=https://api.themoviedb.org/3/
TMDB_API_SECRET_KEY={your_key} 
```

4. After setting up spin up the development server
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```