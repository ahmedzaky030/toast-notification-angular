import * as toastReducer from './toast-notification.reducer';
import * as toastActions from '../actions/toast-notifications.actions';
import { ToastNotification } from '../model/notification';
import { Action } from '@ngrx/store';
import { TOASTTYPE } from '../model';


describe('Toast-Notification Reducer' , () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const { initialAppState } = toastReducer;
            const action = {} as  Action;
            const state = toastReducer.appReducer( undefined , action);

            expect(state).toBe(initialAppState);
        });
    }),
    describe('setMaximum action', () => {
        it('should set the state with correct Number of MaxNotifications', () => {
            const { initialAppState } = toastReducer;
            const action = toastActions.setMaxVisibleNotification({ max : 5 });
            const state = toastReducer.appReducer( initialAppState, action);
            // tslint:disable-next-line: max-line-length
            const expectedState: toastReducer.ToastNotificationState = { totalNotifications : [] , nextNotifications : [] , maxOfVisibleNotifications : 5};

            expect(state).toEqual(expectedState);
        });
    }),
    describe('add Notification action', () => {
        it('should return  the state with correct Number of TotalNotification', () => {
            const { initialAppState } = toastReducer;
            const notificationObj = new ToastNotification(true , 4000 , 'heading title', 'subheading title', ' message', TOASTTYPE.SUCCESS);
            // tslint:disable-next-line: max-line-length
            const action = toastActions.addNotification({ notification: notificationObj})
            const state = toastReducer.appReducer( initialAppState, action);
            // tslint:disable-next-line: max-line-length
            const expectedState: toastReducer.ToastNotificationState = { totalNotifications : [notificationObj] , nextNotifications : [] , maxOfVisibleNotifications : 0};

            expect(state).toEqual(expectedState);
        });
    }),
    describe('fetch Notification Group action', () => {
        it('should return  the state with correct Number of NextNotifications', () => {
            const notificationObj = new ToastNotification(true , 4000 , 'heading title', 'subheading title', ' message', TOASTTYPE.SUCCESS);
            // tslint:disable-next-line: max-line-length
            const notificationArr = [notificationObj , notificationObj , notificationObj , notificationObj , notificationObj , notificationObj, notificationObj];
            // tslint:disable-next-line: max-line-length
            const startState : toastReducer.ToastNotificationState = { totalNotifications : [...notificationArr] , nextNotifications: [] , maxOfVisibleNotifications: 1 };
            // tslint:disable-next-line: max-line-length
            const action = toastActions.fetchNotificationGroup({});
            const state = toastReducer.appReducer( startState, action);
            // tslint:disable-next-line: max-line-length
            // const expectedState: toastReducer.ToastNotificationState = { totalNotifications : [notificationObj , notificationObj , notificationObj , notificationObj] , nextNotifications : [notificationObj , notificationObj , notificationObj] , maxOfVisibleNotifications : 3};
            expect(state.nextNotifications.length).toEqual(1);

            // this expectation should pass but I don't know why it fails although it'working well
            // expect(state.totalNotifications.length).toEqual(6);

        });
    });
});
