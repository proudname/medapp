import {FontAwesome} from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect, useState} from 'react';
import {useAuth} from "./useAuth";

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = useState(false);
    const [dataLoaded, setDataLoaded] = useState(false);
    const {isUninitialized: isAuthUninitialized} = useAuth();

    async function loadResourcesAndDataAsync() {
        try {
            // Load fonts
            await Font.loadAsync({
                ...FontAwesome.font,
                'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
            });
        } catch (e) {
            // We might want to provide this error information to an error reporting service
            console.warn(e);
        } finally {
            setDataLoaded(true);
        }
    }

    // Load any resources or data that we need prior to rendering the app
    useEffect(() => {
        SplashScreen.preventAutoHideAsync();
        loadResourcesAndDataAsync();
    }, []);

    useEffect(() => {
        if (!isAuthUninitialized && dataLoaded) {
            setLoadingComplete(true);
            SplashScreen.hideAsync();
        }
    }, [isAuthUninitialized, dataLoaded])

    return isLoadingComplete;
}
