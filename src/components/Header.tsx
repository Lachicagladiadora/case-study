import {
  faBars,
  faChevronDown,
  faPhoneFlip,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { page } from "../types";
import { useState } from "react";

type HeaderProps = { currentPage: page; updatePage: (_p: page) => void };

export const Header = ({ currentPage, updatePage }: HeaderProps) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="fixed z-10 h-[82px] w-dvw bg-cs-dark-blue opacity-90 text-cs-light flex flex-col items-center font-cs-title">
      <nav className="h-full flex justify-between items-center max-w-[1024px] w-full py-6 px-4">
        <h2 className="p-1 font-bold text-cs-h3-m desktop:text-cs-h3-d ">
          🔆 Maelo Solar
        </h2>
        <div className="text-cs-navbar capitalize flex gap-6 w-0 overflow-hidden desktop:w-auto">
          <a
            className={`p-1  border-b-2 capitalize ${
              currentPage === "home"
                ? "border-cs-sky-blue"
                : "border-cs-dark-blue"
            }`}
            onClick={() => updatePage("home")}
          >
            Home
          </a>
          <a
            className={`p-1  border-b-2 capitalize ${
              currentPage === "roofing"
                ? "border-cs-sky-blue"
                : "border-cs-dark-blue"
            }`}
            onClick={() => updatePage("roofing")}
          >
            Roofing
          </a>
          <a
            className={`p-1  border-b-2 capitalize ${
              currentPage === "about"
                ? "border-cs-sky-blue"
                : "border-cs-dark-blue"
            }`}
            onClick={() => updatePage("about")}
          >
            About
          </a>
          <a
            className={`p-1  border-b-2 capitalize ${
              currentPage === "contact"
                ? "border-cs-sky-blue"
                : "border-cs-dark-blue"
            }`}
            onClick={() => updatePage("contact")}
          >
            Contact Us
          </a>
          <button
            className={`p-1  border-b-2 capitalize ${
              currentPage === "affiliates"
                ? "border-cs-sky-blue"
                : "border-cs-dark-blue"
            }`}
            onClick={() => updatePage("affiliates")}
          >
            Affiliates <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <p className="py-1 px-4 text-cs-navbar hidden desktop:inline">
          <FontAwesomeIcon icon={faPhoneFlip} /> 631-521-3640
        </p>
        <button
          className="px-4 inline desktop:hidden hover:text-cs-sky-blue"
          onClick={() => setShowMenu((p) => !p)}
        >
          {showMenu ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        {showMenu && (
          <div className="absolute top-[100%] right-0 w-full text-cs-navbar capitalize inline desktop:hidden">
            <a
              className="block w-full px-4 py-8 bg-cs-dark-blue hover:bg-cs-sky-blue hover:text-cs-dark-blue"
              onClick={() => updatePage("home")}
            >
              Home
            </a>
            <a
              className="block w-full px-4 py-8 bg-cs-dark-blue hover:bg-cs-sky-blue hover:text-cs-dark-blue"
              onClick={() => updatePage("roofing")}
            >
              Roofing
            </a>
            <a
              className="block w-full px-4 py-8 bg-cs-dark-blue hover:bg-cs-sky-blue hover:text-cs-dark-blue"
              onClick={() => updatePage("about")}
            >
              About
            </a>
            <a
              className="block w-full px-4 py-8 bg-cs-dark-blue hover:bg-cs-sky-blue hover:text-cs-dark-blue"
              onClick={() => updatePage("contact")}
            >
              Contact Us
            </a>
            <button
              className="block w-full px-4 py-8 text-start bg-cs-dark-blue hover:bg-cs-sky-blue hover:text-cs-dark-blue"
              onClick={() => updatePage("affiliates")}
            >
              Affiliates
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
