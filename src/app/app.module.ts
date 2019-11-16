import { ToastNotificationModule } from './toast-notification/toast-notification.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToastNotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[ToastNotificationModule]
})
export class AppModule { }
