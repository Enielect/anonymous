import React, { useEffect, useRef } from "react";

type ModalProp = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, className, children }: ModalProp) => {
  const modalElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (
        modalElement.current &&
        isOpen &&
        !modalElement.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[60] flex w-full justify-center overflow-auto bg-black/[70%] backdrop-blur-[2px]">
      <div ref={modalElement} className={`relative my-auto ${className}`}>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

