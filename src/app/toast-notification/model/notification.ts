import { TOASTTYPE } from './type';

export class ToastNotification {
      public constructor(
      public show: boolean,
      public timeout: number,
      public headingTitle: string,
      public subheadingTitle: string,
      public message: string,
      public type: TOASTTYPE
    ) {
      this.show = show;
      this.timeout = timeout || 5000;
    }
}

