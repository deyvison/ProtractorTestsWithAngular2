// conf.js
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js']
};

// roda os teste sem startar o server
// exports.config = {
//     directConnect: true,
//     specs: ['spec.js']
// }
