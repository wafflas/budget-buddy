import React from "react";

const DeleteAlert = ({ content, onDelete }) => {
  return (
    <div>
      <p className="text-sm text-gray-700 font-medium">{content}</p>
      <div className="flex justify-end gap-2 mt-6">
        <button type="button" onClick={onDelete} className="cursor-pointer hover:bg-red-500/80 bg-red-500 text-white px-4 py-2 rounded-md">
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteAlert;
