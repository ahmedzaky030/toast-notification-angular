import { Component, OnInit } from '@angular/core';
import { TOASTTYPE , TOASTPOSITION } from './toast-notification/model';
import { Observable, of } from 'rxjs';
import { concatAll} from 'rxjs/operators';
import { ToastNotification } from './toast-notification/model/notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'toast-notification-task';
  taostType = TOASTTYPE.SUCCESS;
  myPosition = TOASTPOSITION.BOTTOM_LEFT;
  fireNotification = false;
  notificationsfromParent: Observable<ToastNotification>;
  constructor() {}
  ngOnInit() {
  }

  setPosition(val) {
    this.myPosition = val;
  }

  toggleNotify() {
    this.fireNotification = !this.fireNotification;
  }

  generateNotification() {

    // const clicks = fromEvent(document.getElementById('generate') , 'click');
    const arrayofNotifications = of([
      new ToastNotification(4000 , 'heading warning 1' , 'subheading warning ' , 'message warning ', TOASTTYPE.WARNING),
      new ToastNotification(5000 , 'heading warning 2' , 'subheading warning ' , 'message warning', TOASTTYPE.WARNING),
      new ToastNotification(3000 , 'heading warning 3' , 'subheading warning ' , 'message warning', TOASTTYPE.WARNING),
      new ToastNotification(4000 , 'heading error 4' , 'subheading error' , 'message error', TOASTTYPE.ERROR),
      new ToastNotification(2000 , 'heading success 5' , 'subheading success' , 'message success', TOASTTYPE.SUCCESS),
      new ToastNotification(1000 , 'heading error 6' , 'subheading error' , 'message error', TOASTTYPE.ERROR),
      new ToastNotification(7000 , 'heading success 7' , 'subheading success' , 'message success', TOASTTYPE.SUCCESS),
      new ToastNotification(4000 , 'heading error 8' , 'subheading error' , 'message error', TOASTTYPE.ERROR),
      new ToastNotification(3000 , 'heading success 9' , 'subheading success' , 'message success', TOASTTYPE.SUCCESS),
      new ToastNotification(4000 , 'heading error 10' , 'subheading error' , 'message error', TOASTTYPE.ERROR),
      new ToastNotification(3000 , 'heading success 11' , 'subheading success' , 'messagesuccess', TOASTTYPE.SUCCESS)
    ]).pipe(concatAll());
    this.notificationsfromParent = arrayofNotifications;
  }
}
