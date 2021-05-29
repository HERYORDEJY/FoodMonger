//module.exports = {
  //transformer: {
    //assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  //},
//};


// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

module.exports = getDefaultConfig(__dirname);