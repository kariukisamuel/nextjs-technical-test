// app/global.d.ts
declare global {
    interface Window {
      gtag: (...args: any[]) => void; // Declare gtag function
    }
  }
  
  export {};