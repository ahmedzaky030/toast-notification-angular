import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { appReducer } from '../toast-notification/reducer/toast-notification.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [ToastNotificationComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({toaster : appReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 6
    })
  ],
  exports: [
    ToastNotificationComponent
  ]
})
export class ToastNotificationModule { }
