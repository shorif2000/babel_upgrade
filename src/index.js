import registerServiceWorker from './registerServiceWorker';
import {registerApplication, start} from 'single-spa';

registerApplication(
  'CCP',          // Name of this single-spa application
  () => import('./root.app.js'),//loadingFunction, // Our loading function
  () => true//activityFunction // Our activity function
  //(location) => location.pathname === "" || location.pathname === "/" ||  location.pathname.startsWith('/home')
);

start();
registerServiceWorker();

