import Toast from 'react-native-root-toast';

export type ToastType = 'warn' | 'error' | 'success' | 'info';

const getColorByType = (type: ToastType) => {
    switch (type) {
        case "success":
            return 'green';
        case "error":
            return 'red'
        case 'warn':
            return 'yellow';
        case "info":
            return 'grey'
    }
}

// Add a Toast on screen.
export const toast = (message: string, type: ToastType = 'info') => Toast.show(message, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.TOP,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor: getColorByType(type),
    onShow: () => {
        // calls on toast\`s appear animation start
    },
    onShown: () => {
        // calls on toast\`s appear animation end.
    },
    onHide: () => {
        // calls on toast\`s hide animation start.
    },
    onHidden: () => {
        // calls on toast\`s hide animation end.
    }
});