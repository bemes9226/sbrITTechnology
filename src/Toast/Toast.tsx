import { Info, ThumbsUp, Warning, WarningCircle } from "@phosphor-icons/react";
import React from "react";

type ToastProps = {
  message: string;
  type: string;
  onClose: () => void;
};

export const Toast = (props: ToastProps) => {
  const { message, type, onClose } = props;
  function getIcon(type: string) {
    switch (type) {
      case "success":
        return <ThumbsUp size={32} />;
      case "error":
        return <WarningCircle size={32} />;
      case "warning":
        return <Warning size={32} weight="fill" />;
      default:
        return <Info size={32} />;
    }
  }

  return (
    <>
      <div role="alert" id="alert-1" className={`aegov-alert alert-${type}`}>
        <div className="alert-icon">{getIcon(type)}</div>
        <div className="alert-content">
          <p>{message}</p>
        </div>
        <div className="alert-dismiss">
          <button
            data-dismiss-target="#alert-1"
            aria-label="Close"
            onClick={onClose}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
