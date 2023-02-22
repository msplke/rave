module.exports = function (api) {
  api.cache(true);
  return {
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
    plugins: ["nativewind/babel", require.resolve("expo-router/babel")],
    presets: ["babel-preset-expo"],
  };
};
