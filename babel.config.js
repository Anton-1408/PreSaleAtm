module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@components": "./src/components",
          "@lib": "./src/lib",
          "@navigation": "./src/navigation",
          "@pages": "./src/pages",
          "@redux": "./src/redux",
          "@styles": "./src/styles",
          "@types": "./src/types",
        }
      }
    ]
  ]
};
