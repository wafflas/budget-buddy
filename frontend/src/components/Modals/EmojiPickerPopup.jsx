import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { LuImage } from "react-icons/lu";
import { HiOutlineX } from "react-icons/hi";

const EmojiPickerPopup = ({ icon, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div className="flex flex-col md:flex-row items-start mb-6 gap-2">
      <div
        className="flex items-center justify-center gap-4 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-12 h-12 flex items-center justify-center text-[26px] text-primary rounded-full drop-shadow-xl bg-white">
          {icon ? (
            <img src={icon} alt="icon" className="w-6 h-6" />
          ) : (
            <LuImage size={24} />
          )}
        </div>

        <p className="text-sm text-slate-700 font-semibold">
          {icon ? "Change Icon" : "Select Icon"}
        </p>
      </div>
      {isOpen && (
        <div className="relative">
          <button className="w-7 h-7 flex items-center justify-center absolute top-[-10px] right-[-10px] z-30 text-gray-700 text-xl cursor-pointer bg-white rounded-full p-1 drop-shadow-xl" onClick={() => setIsOpen(false)}>
            <HiOutlineX />
          </button>
          <EmojiPicker
            open={isOpen}
            onEmojiClick={(emoji) => onSelect(emoji?.imageUrl || "")}
          />
        </div>
      )}
    </div>
  );
};

export default EmojiPickerPopup;
