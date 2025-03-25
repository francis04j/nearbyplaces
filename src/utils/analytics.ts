type EventParams = {
  category: string;
  action: string;
  label?: string;
  value?: number;
};

export const trackEvent = ({ category, action, label, value }: EventParams) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Add type definition for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}