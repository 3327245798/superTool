if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/taibai/supertool/sw.js', { scope: '/taibai/supertool/' })})}