# Prize Portal Loyalty App 🏎️📱

![Supports Expo iOS](https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff)
[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)

- Expo
- [Expo Router](https://expo.github.io/router)
- expo-image
- [zustand](https://github.com/pmndrs/zustand) - state management
- [nativewind](https://nativewind.io/) - Tailwind CSS for React Native
- [axios](https://axios-http.com/) - Promise based HTTP client
- [i18next](https://www.i18next.com/) - Internationalization-framework
- [@shopify/flash-list](https://github.com/Shopify/flash-list) - React Native flash list component
- [OneSignal](https://onesignal.com/) - Push Notification delivery
- [Lottie](https://lottiefiles.com/) - Animated Splash Screen

## Installation

1. Clone the new repository.
2. Install dependencies.

```bash
yarn install
```

4. Run the project

```bash
yarn ios | yarn start  -> i (for ios)
```

## ENVIRONMENT VARIABLES

1. Create a .env file in the root of the project.
2. Define env variables inside the .env file
3. Use env variables everywhere by import env-loader

`import ENV from '_utils/env-loader';`

`const env_weather_api_key = ENV.WEATHER_API_KEY;`

That's it! Nice and simple way of dealing with environment variables.

## File Structure

```shell
- src - source code for the application.
	- /components - contains reusable components.
	- /screens - contains the application's screens.
	- /assets - contains the application's assets (all the assets stored here will be bundled into the app).
	- /config - contains the application's config files.
	- /constants - contains the application's constants.
	- /context - contains the application's theme.
	- /locales - contains the application's local files (i18n, i18next, expo-localization).
	- /store - contains the application's zustand store for state managment.
	- /utils - contains the application's utils for helper functions.

```

## Screens

Main screens:

- Login
- Signup
- Home Screen
- Secondary Screen
- Settings Screen
- Top Navigation , Bottom Navigation, Native Modal

## 🚧 Roadmap 🚧

I would like to thank the following people who've contributed to this project:
[@kewinzaq1](https://github.com/kewinzaq1)
