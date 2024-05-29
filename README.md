# Rave

> Stay up-to-date on upcoming events happening across your own and other campuses.

## Table of Contents

- [Description](#description)
- [Project Structure](#project-structure)
- [Quickstart](#quickstart)
- [Project Status](#project-status)

## Description

- Rave enables campus students to stay up-to-date on upcoming events happening across their own and other campuses.
- Whether it's club meetings, parties, sports, games, cultural events, volunteer opportunities, or workshops, Rave is the go-to for students who want to stay connected and make the most of their campus experience.

## Project Structure

This project is based on the [create-t3-turbo](https://github.com/t3-oss/create-t3-turbo) template repository, a monorepo built off the [T3 Stack](https://create.t3.gg).

It uses [Turborepo](https://turbo.build/repo) and contains:

```text
.github
  └─ workflows
      └─ CI with pnpm cache setup
.vscode
  └─ Recommended extensions and settings for VSCode users
apps
  ├─ expo
  |   ├─ Expo SDK 51
  |   ├─ React Native using React 18
  |   ├─ Navigation using Expo Router
  |   ├─ Tailwind using NativeWind
  |   └─ Typesafe API calls using tRPC
  └─ next.js
      ├─ Next.js 14
      ├─ React 18
      ├─ Tailwind CSS
      └─ E2E Typesafe API Server & Client
packages
  ├─ api
  |   └─ tRPC v11 router definition
  ├─ db
  |   └─ Typesafe db calls with Drizzle
  └─ ui
      └─ Beautiful, modern UI powered by shadcn-ui
tooling
  ├─ eslint
  |   └─ Shared, fine-grained, ESLint presets
  ├─ prettier
  |   └─ Shared Prettier configuration
  ├─ tailwind
  |   └─ Shared Tailwind configuration
  └─ typescript
      └─ Shared tsconfig you can extend from
```

## Quickstart

To get it running, follow the steps below:

### 1. Setup dependencies

```bash
# Install dependencies
pnpm i

# Configure environment variables
# There is an `.env.example` in the root directory you can use for reference
cp .env.example .env

# Push the Drizzle schema to the database
pnpm db:push
```

### 2. Configure Expo `dev`-script

#### Use iOS Simulator

1. Make sure you have XCode and XCommand Line Tools installed [as shown on Expo docs](https://docs.expo.dev/workflow/ios-simulator).

   > **NOTE:** If you just installed XCode, or if you have updated it, you need to open the simulator manually once. Run `npx expo start` from `apps/expo`, and then enter `I` to launch Expo Go. After the manual launch, you can run `pnpm dev` in the root directory.

   ```diff
   +  "dev": "expo start --ios",
   ```

2. Run `pnpm dev` at the project root folder.

#### Use Android Emulator

1. Install Android Studio tools [as shown on Expo docs](https://docs.expo.dev/workflow/android-studio-emulator).

2. Change the `dev` script at `apps/expo/package.json` to open the Android emulator.

   ```diff
   +  "dev": "expo start --android",
   ```

3. Run `pnpm dev` at the project root folder.

> **TIP:** It might be easier to run each app in separate terminal windows so you get the logs from each app separately. This is also required if you want your terminals to be interactive, e.g. to access the Expo QR code. You can run `pnpm --filter expo dev` and `pnpm --filter nextjs dev` to run each app in a separate terminal window.

## Project Status

🚧 **In Development** 🚧

Rave is currently _early_ in its development cycle.
