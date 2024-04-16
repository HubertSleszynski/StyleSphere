import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { setIsOpen, isOpen } = useContext(SidebarContext);
  return (
    <header>
      <div>Header</div>
      <div
        className="cursor-pointer flex relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BsBag className="text-2xl " />
      </div>
    </header>
  );
};

export default Header;
