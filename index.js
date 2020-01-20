/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import App from './src/home/container/index';
// import App from './src/home/container/tabbar';
// import App from './src/home/container/searchAll';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);