module.exports = {
    "expo": {
        "name": "medapp",
        "slug": "med-app",
        "version": "1.0.0",
        "orientation": "portrait",
        "icon": "./assets/images/icon.png",
        "scheme": "myapp",
        "userInterfaceStyle": "automatic",
        "splash": {
            "image": "./assets/images/splash.png",
            "resizeMode": "contain",
            "backgroundColor": "#ffffff"
        },
        "assetBundlePatterns": [
            "**/*"
        ],
        "ios": {
            "supportsTablet": true,
            "googleServicesFile": "./GoogleService-Info.plist",
            "bundleIdentifier": "com.proudname813.medapp"
        },
        "android": {
            "googleServicesFile": "./google-services.json",
            "adaptiveIcon": {
                "foregroundImage": "./assets/images/adaptive-icon.png",
                "backgroundColor": "#ffffff"
            },
            "package": "com.proudname813.medapp"
        },
        "web": {
            "favicon": "./assets/images/favicon.png"
        },
        "plugins": [],
        extra: {
            "eas": {
                "projectId": "9b764022-c5f3-4517-8fbe-c7931dd7783c"
            },
            adminUrl: "http://localhost:1337",
        }
    }
}
