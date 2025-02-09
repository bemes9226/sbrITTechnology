import React from "react";

type ToastContextType = {
  // Define the properties of ToastContextType here

  addToast: (message: string,type:string) => void;
  removeToast(id: number): void;
};

export const ToastContext = React.createContext<ToastContextType>({

    addToast: (message: string, type: string) => {},
  
    removeToast: (id: number) => {},
  
  });
