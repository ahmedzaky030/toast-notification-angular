import { Action, createReducer, on } from '@ngrx/store';

import * as notificationsActions from '../actions/toast-notifications.actions';
import { ToastNotification } from '../model/notification';
export interface ToastNotificationState {
    // To save all notifications
    totalNotifications: ToastNotification[]; 
    // To get the next group of notifications will be shown
    nextNotifications: ToastNotification[];
    // To limit the maximum number of the next notifications can be shown at the same time
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
  // addNotifications function : to collect all the notifications in one store 
  on(notificationsActions.addNotification , (state: ToastNotificationState , action) => {
    return {...state , totalNotifications: [...state.totalNotifications , action.notification]};
  }),
  // fetchNotificationgroup: to get the next group of notifications will be shown and remove them from the totalNotifications (store) 
  on(notificationsActions.fetchNotificationGroup , (state: ToastNotificationState , action ) => {
    const nextNotifications = state.totalNotifications.slice(0 , state.maxOfVisibleNotifications);
    const totalNotification = state.totalNotifications.filter(v => !nextNotifications.includes(v));
    // tslint:disable-next-line: max-line-length
    return {...state , nextNotifications:  [...nextNotifications]  , totalNotifications: [...totalNotification]};
  }),
  // setMaxvisibleNotification: To set the maximum number of group of notifications
  on(notificationsActions.setMaxVisibleNotification , (state: ToastNotificationState , action) => {
    return {...state , maxOfVisibleNotifications : action.max};
  }),
);

export function appReducer(state: ToastNotificationState | undefined , action: Action ) {
    return  notificationReducer(state , action);
}
