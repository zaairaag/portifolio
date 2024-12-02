declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: {
        page_path?: string;
        page_location?: string;
        [key: string]: any;
      }
    ) => void;
  }
}
