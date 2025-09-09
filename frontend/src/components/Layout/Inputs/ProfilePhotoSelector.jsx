import React from "react";
import { useRef, useState } from "react";
import { LuUser, LuTrash, LuUpload } from "react-icons/lu";
const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }

    //generate preview url from file
    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="file"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
        accept="image/*"
      />
      {!image ? (
        <div className="w-24 h-24 rounded-full bg-[color:rgba(42,182,166,0.12)] flex items-center justify-center relative">
          <LuUser size={24} className="text-4xl text-primary" />

          <button
            type="button"
            onClick={onChooseFile}
            className="w-8 h-8 flex items-center bg-primary justify-center text-white rounded-full absolute bottom-0 right-0 cursor-pointer"
          >
            <LuUpload size={18} />
          </button>
        </div>
      ) : (
        <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center relative   ">
          <img
            src={previewUrl}
            alt="profile"
            className="w-full h-full object-cover rounded-full"
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="w-8 h-8 flex items-center bg-red-500 justify-center text-white rounded-full absolute bottom-0 right-0 cursor-pointer"
          >
            <LuTrash size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
