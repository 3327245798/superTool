/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-4c647889'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/layout-theme-auroraGreen.css",
    "revision": "dfacfb5783252d8b3f113cb76f5a53bb"
  }, {
    "url": "assets/layout-theme-default.css",
    "revision": "6f3d5ed01c80d8a92de19f4d4cca471a"
  }, {
    "url": "assets/layout-theme-dusk.css",
    "revision": "2ebbb65dd2b0892d64d9a59aa37a0d96"
  }, {
    "url": "assets/layout-theme-light.css",
    "revision": "4bdcb66f12703a369846e6e9c2f12dfe"
  }, {
    "url": "assets/layout-theme-mingQing.css",
    "revision": "d1c6905694e8ebaa440602bec7c465b5"
  }, {
    "url": "assets/layout-theme-pink.css",
    "revision": "e0e62146a30ce232e6197e15992488e2"
  }, {
    "url": "assets/layout-theme-saucePurple.css",
    "revision": "c2a03c0fc019066758e09d6f4b5a354f"
  }, {
    "url": "assets/layout-theme-volcano.css",
    "revision": "737a3dba193f20485f0a9b6b6f08e0d2"
  }, {
    "url": "assets/layout-theme-yellow.css",
    "revision": "9a79da931f7460ecf5d036d89602af87"
  }, {
    "url": "index.html",
    "revision": "15b0bdf39a4769f00dd39f98bfb23f4c"
  }, {
    "url": "registerSW.js",
    "revision": "2ad28613cfb91390f5e21a329b493137"
  }, {
    "url": "static/css/dataComparison-02d4d507.css",
    "revision": null
  }, {
    "url": "static/css/fileIsExist-5d8b63a9.css",
    "revision": null
  }, {
    "url": "static/css/frameView-1656eb55.css",
    "revision": null
  }, {
    "url": "static/css/handsontable-b547a9fb.css",
    "revision": null
  }, {
    "url": "static/css/index-a076da47.css",
    "revision": null
  }, {
    "url": "static/css/index-a36fb668.css",
    "revision": null
  }, {
    "url": "static/css/index-a3829429.css",
    "revision": null
  }, {
    "url": "static/js/403-0fa31bd1.js",
    "revision": null
  }, {
    "url": "static/js/404-77bccd94.js",
    "revision": null
  }, {
    "url": "static/js/500-8fa86d93.js",
    "revision": null
  }, {
    "url": "static/js/dark-3d4c508b.js",
    "revision": null
  }, {
    "url": "static/js/dataComparison-d617a445.js",
    "revision": null
  }, {
    "url": "static/js/fileIsExist-69dc4493.js",
    "revision": null
  }, {
    "url": "static/js/frameView-03fb68fe.js",
    "revision": null
  }, {
    "url": "static/js/guojihua-5400c404.js",
    "revision": null
  }, {
    "url": "static/js/handsontable.full-f77fcab0.js",
    "revision": null
  }, {
    "url": "static/js/index-0ee80bff.js",
    "revision": null
  }, {
    "url": "static/js/index-2419965a.js",
    "revision": null
  }, {
    "url": "static/js/index-604cd259.js",
    "revision": null
  }, {
    "url": "static/js/index-638a3680.js",
    "revision": null
  }, {
    "url": "static/js/index-9d1ee5ec.js",
    "revision": null
  }, {
    "url": "static/js/index-c3adaec0.js",
    "revision": null
  }, {
    "url": "static/js/index-fa4e09e6.js",
    "revision": null
  }, {
    "url": "static/js/redirect-f774cae8.js",
    "revision": null
  }, {
    "url": "se.svg",
    "revision": "0989a1989d3183da3606162d1e553ac0"
  }, {
    "url": "appicon_schneiderelectric.png",
    "revision": "99a4175c48018d815d0a1dd878c234f8"
  }, {
    "url": "logo_se_black_screen.png",
    "revision": "e2c2eb4fbd27439d66f5cf4a8661c6fc"
  }, {
    "url": "se-192x192.png",
    "revision": "b1dde6e8740584fe1c937401b1209d94"
  }, {
    "url": "se-512x512.png",
    "revision": "49560ddf336b2ecdc9df6bc83d22742f"
  }, {
    "url": "se.png",
    "revision": "0c7c23f5d7f038264a59803e038276c6"
  }, {
    "url": "serverConfig.json",
    "revision": "b1a11930232a3458890907893a2b785f"
  }, {
    "url": "manifest.webmanifest",
    "revision": "0711f86ecfb504c67af685a5e23bd39f"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
