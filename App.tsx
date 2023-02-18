import {Provider} from "react-redux";
import store, {persistor} from "./state/store";
import {PersistGate} from "redux-persist/integration/react";
import AppContent from "./components/AppContent";

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppContent/>
            </PersistGate>
        </Provider>
    );
}
