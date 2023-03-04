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
        "updates": {
            "fallbackToCacheTimeout": 0
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
            "permissions": [
                "android.permission.INTERNET"
            ],
            "package": "com.proudname813.medapp"
        },
        "web": {
            "favicon": "./assets/images/favicon.png"
        },
        "plugins": [
            [
                "expo-image-picker",
                {
                    "photosPermission": "The app accesses your photos to apply a contract form"
                }
            ]
        ],
        extra: {
            "eas": {
                "projectId": "9b764022-c5f3-4517-8fbe-c7931dd7783c"
            },
            adminUrl: "https://b64f-2a0b-6204-1e24-5100-8c12-e036-a5c5-b595.eu.ngrok.io"
        }
    }
}
