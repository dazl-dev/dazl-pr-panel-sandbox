# dazl-pr-panel-sandbox

Throwaway repo for exercising the Dazl Git panel and pull request tabs.
Each open PR covers one state: failing checks, draft, merge conflict, inline review comments.

## Solar system app

A small React Router app under `app/`, so the repo has something to preview.

- `/` overview of the solar system
- `/planets` all eight planets
- `/planets/:planetId` facts about one planet

```sh
npm install
npm run dev
```

The cart module in `src/` is what the PRs change; `npm test` runs its tests.
