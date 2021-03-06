# What is it ? 
It's my solution for test task I've received when I applied for a job . Here it it the task description ['Task Description'](http://prntscr.com/qmm8k1)

# Toast Notification Module

This is module for making toast notification alerts , and can be used in any shared module .

# How to start

To start  and run the application , please run the following commands:

```
$ npm install
$ ng serve

```
Then navigate to ` http:\\localhost:4200` in your browser.
Or you can view it online directly throught this link [NotificationToast](https://ahmedzak030.000webhostapp.com/)

# Usage 

First , you need to import  ToastNotificationModule in your App Module or any Featured Module you want. 

Second , you can now use toastNotification component in target component's html by writing:

```sh
<app-toast-notification [maxNotifications]="4"  [notifications]="notificationsfromParent"  [position]="myPosition" ></app-toast-notification>
```

| Input Prop | type | Description |
| ------ | ------ | ------------  |
| maxNotifications | number | Set the maximum number of notifications can be shown at the same time (Default : 5) |
| notifications | Observable<ToastNotification> | Set the observable stream of type ToastNotification which will be shown |
| position | TOASTPOSITION enum | Set the position and flow for the toast notifications |


As a developer , you can customize your notification alert in different ways :

# ToastNotification 

| Field | Description | type |
| ----- | ----------- | ---- |
| headingTitle | Set the heading of the notification | string
| subheadingTitle | Set the subheading of notification (Optional) | string
| messageTitle | Set the message of the notification | string
| type | Set the type of Notification ( Success , Warning  or Error) | TOASTTYPE enum
| timeout | Set the time for the message to be displayed (default : 5 secs) | number * 1000


# Npm packages used
1. NgRx : for state management
2. lodash

# Unit testing

I've made unit tests only for ngrx reducer because it has the most logic there. and you can run it by:
` ng test`

# Further improvements
1. Add Animations for the toast notifications. 
2. Make e2e tests for the notifications. 


# Help
 Feel free to add any recommended improvements to this exciting module 


