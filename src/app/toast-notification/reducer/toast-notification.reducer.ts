import { Action, createReducer, on } from '@ngrx/store';

import * as notificationsActions from '../actions/toast-notifications.actions';
import { ToastNotification } from '../model/notification';
export interface ToastNotificationState {
    totalNotifications: ToastNotification[];
    nextNotifications: ToastNotification[];
    maxOfVisibleNotifications: number;
}



export const initialAppState: ToastNotificationState = {
    totalNotifications: [],
    nextNotifications: [] ,
    maxOfVisibleNotifications: 0
  };

const notificationReducer = createReducer(
  initialAppState ,
  // tslint:disable-next-line: max-line-length
  on(notificationsActions.addNotification , (state: ToastNotificationState , action) => {
    return {...state , totalNotifications: [...state.totalNotifications , action.notification]};
  }),
  on(notificationsActions.fetchNotificationGroup , (state: ToastNotificationState , action ) => {
    const nextNotifications = state.totalNotifications.slice(0 , state.maxOfVisibleNotifications);
    const totalNotification = state.totalNotifications.filter(v => !nextNotifications.includes(v));
    // tslint:disable-next-line: max-line-length
    return {...state , nextNotifications:  [...nextNotifications]  , totalNotifications: [...totalNotification]};
  }),
  on(notificationsActions.setMaxVisibleNotification , (state: ToastNotificationState , action) => {
    return {...state , maxOfVisibleNotifications : action.max};
  }),
);

export function appReducer(state: ToastNotificationState | undefined , action: Action ) {
    return  notificationReducer(state , action);
}
