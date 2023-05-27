import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";

// Must be exported or Fast Refresh won't update the context
export function App() {
  const ctx = require.context("./src/app");
  // @ts-expect-error Type '__WebpackModuleApi.RequireContext' is not assignable to type 'import("/home/kibuchi/Development/my-projects/rave/node_modules/expo-router/build/types").RequireContext'.
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
