# STRAPI INITIALIZATION

## GETTING STARTED

```
npx create-strapi-app@latest my-strapi-backend --quickstart
```

## EXPECTED RESPONSE

```
Need to install the following packages:
create-strapi-app@5.36.1
Ok to proceed? (y)
```

## INITIATED AND QUESTION

```
Strapi v5.36.1 🚀 Let's create your new project

🚀 Welcome to Strapi! Ready to bring your project to life?

Create a free account and get:
30 days of access to the Growth plan, which includes:
✨ Strapi AI: content-type builder, media library and translations
✅ Live Preview
✅ Single Sign-On (SSO) login
✅ Content History
✅ Releases

? Please log in or sign up.
? Please log in or sign up. Skip
```

## AUTO SCAFFOLDING

```
Strapi Creating a new application at C:\Users\Hamid\OneDrive\Desktop\strappi\my-strapi-backend

To address issues that do not require attention, run:
npm audit fix

To address all issues possible (including breaking changes), run:
npm audit fix --force

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.

       ✓  Dependencies installed

    git   Initializing git repository.

       ✓  Initialized a git repository.

Strapi Your application was created!
Available commands in your project:

          Start Strapi in watch mode. (Changes in Strapi project files will trigger a server restart)
          npm run develop

          Start Strapi without watch mode.
          npm run start

          Build Strapi admin panel.
          npm run build

          Deploy Strapi project.
          npm run deploy

          Display all available commands.
          npm run strapi

          To get started run

          cd C:\Users\Hamid\OneDrive\Desktop\strappi\my-strapi-backend
          npm run develop

    Run   Running your Strapi application

> my-strapi-backend@0.1.0 develop
> strapi develop

⠧ Loading Strapi[2026-02-24 02:23:57.678] info: [discard-drafts] Migration started
[2026-02-24 02:23:57.682] info: [discard-drafts] Stage 1/5 – cloning published entries into draft rows
[2026-02-24 02:23:57.682] info: [discard-drafts] Stage 1/5 complete
[2026-02-24 02:23:57.682] info: [discard-drafts] Stage 2/5 – copying relations and components to drafts
[2026-02-24 02:23:57.683] info: [discard-drafts] Stage 2/5 complete
[2026-02-24 02:23:57.683] info: [discard-drafts] Stage 3/5 – fixing existing draft relations
[2026-02-24 02:23:57.683] info: [discard-drafts] Stage 3/5 complete
[2026-02-24 02:23:57.683] info: [discard-drafts] Stage 4/5 – fixing existing draft component relations
[2026-02-24 02:23:57.684] info: [discard-drafts] Stage 4/5 complete
[2026-02-24 02:23:57.684] info: [discard-drafts] Stage 5/5 – updating foreign key references to draft targets
[2026-02-24 02:23:57.684] info: [discard-drafts] Stage 5/5 complete
[2026-02-24 02:23:57.684] info: [discard-drafts] Migration completed successfully
[2026-02-24 02:23:58.801] info: The Users & Permissions plugin automatically generated a jwt secret and stored it in .env under the name JWT_SECRET.
[2026-02-24 02:23:58.803] warn: admin.auth.options.expiresIn is deprecated and will be removed in Strapi 6. Please configure admin.auth.sessions.maxRefreshTokenLifespan and admin.auth.sessions.maxSessionLifespan.
⠋ Building build context
⠇ Loading Strapi[INFO] Including the following ENV variables as part of the JS bundle: - ADMIN_PATH - STRAPI_ADMIN_BACKEND_URL - STRAPI_TELEMETRY_DISABLED - STRAPI_AI_URL - STRAPI_ANALYTICS_URL
✔ Building build context (156ms)
✔ Creating admin (854ms)
✔ Loading Strapi (4284ms)
✔ Generating types (813ms)
✔ Cleaning dist dir (54ms)
✔ Compiling TS (3973ms)

Project information

┌────────────────────┬──────────────────────────────────────────────────┐
│ Time │ Tue Feb 24 2026 02:24:05 GMT+0500 (Pakistan Sta… │
│ Launched in │ 9097 ms │
│ Environment │ development │
│ Process PID │ 26172 │
│ Version │ 5.36.1 (node v22.20.0) │
│ Edition │ Community │
│ Database │ sqlite │
│ Database name │ .tmp\data.db │
└────────────────────┴──────────────────────────────────────────────────┘

Actions available

One more thing...
Create your first administrator 💻 by going to the administration panel at:

┌─────────────────────────────┐
│ http://localhost:1337/admin │
└─────────────────────────────┘

[2026-02-24 02:24:05.484] info: Strapi started successfully
[2026-02-24 02:24:06.706] http: GET /admin (66 ms) 200
[2026-02-24 02:24:48.753] http: GET /admin/project-type (6 ms) 200
[2026-02-24 02:24:48.789] http: GET /favicon.ico (1 ms) 200
[2026-02-24 02:24:49.053] http: GET /admin/init (6 ms) 200
```

## STOP THE PROCESS

```
CTRL + C
```

## FIX DEPENDENCY

```
npm audit fix
```

## START SERVER AGAIN

```
npm run develop
```
