import React from "react";
import { HiOutlineX } from "react-icons/hi";

const Modal = ({ children, isOpen, onClose, title }) => {

  if(!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-2xl">
        <div className="relative bg-white rounded-lg shadow-md shadow-gray-100/50 border border-gray-200/50 overflow-hidden">
          <div className="flex justify-between items-center p-4 md:p-5 border-b border-gray-200/50">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <button className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 h-8 w-8 rounded-lg flex items-center justify-center cursor-pointer" onClick={onClose} type="button">
              <HiOutlineX className="text-2xl" />
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;