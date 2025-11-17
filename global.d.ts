declare global {
  interface Window {
    gtag?: Gtag.Gtag;
  }
}

export {};

declare namespace Gtag {
  type Command = "config" | "event" | "js";

  type ConfigParams = {
    page_path?: string;
    send_page_view?: boolean;
    [key: string]: unknown;
  };

  type EventParams = {
    [key: string]: unknown;
  };

  type Gtag = (
    command: Command,
    targetIdOrEventName: string | Date,
    params?: ConfigParams | EventParams
  ) => void;
}
