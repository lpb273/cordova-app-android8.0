cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-alipay-v2/www/alipay.js",
        "id": "cordova-plugin-alipay-v2.alipay",
        "pluginId": "cordova-plugin-alipay-v2",
        "clobbers": [
            "cordova.plugins.alipay"
        ]
    },
    {
        "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
        "id": "cordova-plugin-app-version.AppVersionPlugin",
        "pluginId": "cordova-plugin-app-version",
        "clobbers": [
            "cordova.getAppVersion"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-wechat/www/wechat.js",
        "id": "cordova-plugin-wechat.Wechat",
        "pluginId": "cordova-plugin-wechat",
        "clobbers": [
            "Wechat"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-alipay-v2": "1.0.0",
    "cordova-plugin-app-version": "0.1.9",
    "cordova-plugin-geolocation": "4.0.1",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-wechat": "2.1.0",
    "cordova-plugin-whitelist": "1.3.3"
}
// BOTTOM OF METADATA
});