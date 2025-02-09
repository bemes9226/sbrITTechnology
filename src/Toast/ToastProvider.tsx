import React from "react";
import { Toast } from "./Toast"; // Import the Toast component
import { ToastContext } from "./ToastContext"; // Import the ToastContext

type Props = {
  children: React.ReactNode;
};

export const ToastProvider = (props: Props) => {
  type Toast = {
    message: string;
    type: string;
    id: number;
  };

  const [toasts, setToasts] = React.useState<Toast[]>([]);
  const addToast = (message: string, type: string) => {
    const toast = { message, type, id: Math.random() };
    setToasts((toasts) => [...toasts, toast]);
  };
  const removeToast = (id: number) => {
    setToasts((toasts) => toasts.filter((t) => t.id !== id));
  };
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {props.children}
      <div className="toasts">
        {toasts.map((t) => (
          <Toast
            key={t.id}
            message={t.message}
            type={t.type}
            onClose={() => removeToast(t.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
