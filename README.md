# Rave

> A mobile app that allows campus students to stay up-to-date on upcoming events happening across their own and other campuses.

## Table of Contents

- [Description](#description)
- [Project Structure](#project-structure)
- [Quickstart](#quickstart)
- [Project Status](#project-status)
- [Contact](#contact)

## Description

- Rave is a mobile app that allows campus students to stay up-to-date on upcoming events happening across their own and other campuses. The app provides an easy-to-use interface that makes it simple for users to browse events by date, category, or location. Users can also RSVP to events, receive event reminders, and share events with friends.
- Whether it's club meetings, parties, sports games, cultural events, volunteer opportunities, or workshops, our app is the go-to destination for students who want to stay connected and make the most of their campus experience.

## Project Structure

This project is based on the [create-t3-turbo](https://github.com/t3-oss/create-t3-turbo) template repository, a monorepo built off the [T3 Stack](https://create.t3.gg/).

It uses [Turborepo](https://turborepo.org/) and contains:

```
.github
  └─ workflows
        └─ CI with pnpm cache setup
.vscode
  └─ Recommended extensions and settings for VSCode users
apps
  ├─ expo
  |   ├─ Expo SDK 48
  |   ├─ React Native using React 18
  |   ├─ Navigation using Expo Router
  |   ├─ Tailwind using Nativewind
  |   └─ Typesafe API calls using tRPC
  └─ next.js
      ├─ Next.js 13
      ├─ React 18
      ├─ Tailwind CSS
      └─ E2E Typesafe API Server & Client
packages
 ├─ api
 |   └─ tRPC v10 router definition
 ├─ auth
     └─ authentication using next-auth. **NOTE: Only for Next.js app, not Expo**
 └─ db
     └─ typesafe db-calls using Prisma
```

## Quickstart

To get it running, follow the steps below:

### 1. Setup dependencies

```diff
# Install dependencies
pnpm i

# In packages/db/prisma update schema.prisma provider to use sqlite
# or use your own database provider
- provider = "postgresql"
+ provider = "sqlite"

# Configure environment variables.
# There is an `.env.example` in the root directory you can use for reference
cp .env.example .env

# Push the Prisma schema to your database
pnpm db:push
```

### 2. Configure Expo `dev`-script

#### Use iOS Simulator

1. Make sure you have XCode and XCommand Line Tools installed [as shown on expo docs](https://docs.expo.dev/workflow/ios-simulator/).
   > **NOTE:** If you just installed XCode, or if you have updated it, you need to open the simulator manually once before you can run it using the turbo `dev`-script.

```diff
+  "dev": "npx expo start --ios",
```

3. Run `pnpm dev` at the project root folder.

> **TIP:** It might be easier to run each app in separate terminal windows so you get the logs from each app separately. This is also required if you want your terminals to be interactive, e.g. to access the Expo QR code. You can run `pnpm --filter expo dev` and `pnpm --filter nextjs dev` to run each app in a separate terminal window.

#### For Android

1. Install Android Studio tools [as shown on expo docs](https://docs.expo.dev/workflow/android-studio-emulator/).
2. Change the `dev` script at `apps/expo/package.json` to open the Android emulator.

```diff
+  "dev": "npx expo start --android",
```

3. Run `pnpm dev` at the project root folder.

## Project Status

🚧 **In Development** 🚧

Rave is currently _early_ in its development cycle. The app is not yet functional but is being actively developed. You may "watch" the project and leave a star to receive updates.

## Contact

MSPL KE — makesomethingpeopleloveke@gmail.com.

©2023, MSPL KE. All rights reserved.
