import { ToastNotificationState } from './../reducer/toast-notification.reducer';


export interface AppState {
    toastState: ToastNotificationState;
}

export const selectNextNotifications = (state: ToastNotificationState) => state.nextNotifications;