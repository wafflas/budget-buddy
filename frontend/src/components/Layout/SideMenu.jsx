import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SIDE_MENU_DATA } from "../../utils/data";
import { UserContext } from "../../context/UserContext";
import { LuUser } from "react-icons/lu";
import Modal from "../Modals/Modal";
import { createPortal } from "react-dom";

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === "/logout") {
      setOpenLogoutModal(true);
      return;
    }

    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    setOpenLogoutModal(false);
    navigate("/login");
  };

  return (
    <div className="w-64 fixed left-0 top-[64px] z-30 h-[calc(100vh-64px)] overflow-y-auto bg-white rounded-lg shadow-md shadow-gray-200/50 p-4">
      <div className="flex flex-col items-center justify-center gap-4 mt-3 mb-6">
        {user?.profileImageUrl ? (
          <img
            src={user?.profileImageUrl}
            alt="profile"
            className="w-20 h-20 rounded-full bg-slate-400"
          />
        ) : (
          <LuUser size={24} className="text-4xl text-primary" />
        )}
        <h5 className="text-gray-950 font-medium leading-6">
          {user?.fullName}
        </h5>

        {SIDE_MENU_DATA.map((item, index) => (
          <button
            key={`menu_${index}`}
            className={`w-full flex item-center gap-4 text-[15px] ${
              activeMenu === item.label
                ? "text-white bg-primary"
                : "text-gray-800 font-semibold hover:text-primary hover:bg-primary/10 cursor-pointer"
            } py-3 px-6 rounded-lg mb-3`}
            onClick={() => handleClick(item.path)}
          >
            <item.icon className="text-xl" />
            {item.label}
          </button>
        ))}
      </div>

      {openLogoutModal &&
        createPortal(
          <Modal
            isOpen={openLogoutModal}
            onClose={() => setOpenLogoutModal(false)}
            title="Confirm Logout"
          >
            <p className="text-lg text-gray-700">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-end gap-2 mt-6">
              <button
                type="button"
                className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => setOpenLogoutModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </Modal>,
          document.body
        )}
    </div>
  );
};

export default SideMenu;
