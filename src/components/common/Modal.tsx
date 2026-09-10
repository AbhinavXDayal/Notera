import React, { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  maxWidth?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  maxWidth = "max-w-xl",
  children,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />
      <div
        className={`bg-surface border border-outline-variant rounded-2xl w-full ${maxWidth} p-6 sm:p-8 shadow-2xl relative z-10 max-h-[90vh] overflow-y-auto transform transition-all duration-300 fade-in`}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-secondary hover:text-on-surface p-1.5 rounded-full hover:bg-surface-container transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {(title || subtitle) && (
          <div className="mb-6 pr-8">
            {title && (
              <h2 className="font-display text-2xl sm:text-3xl text-on-surface">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xs sm:text-sm text-secondary mt-1">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </div>
  );
};
