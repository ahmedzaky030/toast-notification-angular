
import { createAction, props } from '@ngrx/store';
import { ToastNotification} from '../model/notification';


export const addNotification = createAction('ADD_Notification' , props<{notification: ToastNotification}>(),);
export const fetchNotificationGroup = createAction('FETCH_Notification_GROUP' , props<{}>());
export const setMaxVisibleNotification = createAction('SET_MAX_VISIBLE_NOTIFICATION' , props<{max: number}>());


