import {Provider} from "react-redux";
import store, {persistor} from "./state/store";
import {PersistGate} from "redux-persist/integration/react";
import AppContent from "./components/AppContent";
import {RootSiblingParent} from 'react-native-root-siblings';

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RootSiblingParent>
                    <AppContent/>
                </RootSiblingParent>
            </PersistGate>
        </Provider>
    );
}
