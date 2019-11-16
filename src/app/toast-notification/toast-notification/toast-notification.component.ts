import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TOASTPOSITION } from '../model';
import { Observable } from 'rxjs';
import { ToastNotification } from '../model/notification';
import * as notificationsActions from '../actions/toast-notifications.actions';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.css']
})
export class ToastNotificationComponent implements OnInit , OnChanges {

  @Input() position: TOASTPOSITION;
  @Input() maxNotifications = 5;
  @Input() notifications: Observable<ToastNotification> ;
  visibleNotifications: Array<ToastNotification> = [];

  constructor(private readonly store: Store<any>) { }

  ngOnChanges(changes: SimpleChanges) {
    // tslint:disable-next-line: forin
    for (const ch in changes) {
      if (ch === 'notifications') {
        if (ch === 'notifications' && !changes[ch].firstChange) {
          this.notifications.subscribe(data => {
            this.store.dispatch(notificationsActions.addNotification({notification : data}));
          });
          this.store.dispatch(notificationsActions.fetchNotificationGroup({}));
        }
      }

      if (ch === 'maxNotifications') {
          this.store.dispatch(notificationsActions.setMaxVisibleNotification({max: changes[ch].currentValue}));
      }
    }
  }

  ngOnInit() {
    this.store.select(state => state).subscribe(data => {
      this.visibleNotifications = [...data.toaster.nextNotifications];
      if (this.visibleNotifications && this.visibleNotifications.length) {
        const maxTimeOut = _.maxBy(this.visibleNotifications , 'timeout').timeout;
        this.visibleNotifications.forEach((v) => {
          setTimeout(() => { v.show = false; } , v.timeout);
        });
        setTimeout(() => {
            this.store.dispatch(notificationsActions.fetchNotificationGroup({}));
          }, maxTimeOut);
      }
    });
  }
}




