import { TOASTTYPE } from './type';

export class ToastNotification {
      public constructor(
      public timeout: number,
      public headingTitle: string,
      public subheadingTitle: string,
      public message: string,
      public type: TOASTTYPE,
      public show?: boolean
    ) {
      this.show = true;
      this.timeout = timeout || 5000;
    }
}

