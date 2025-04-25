import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./Button";

export const Footer = () => {
  return (
    <footer className="bg-[url(https://allamericanpower.net/wp-content/uploads/2024/05/x6.jpg.pagespeed.ic.K_MXq5yoeX.webp)] bg-cover">
      <div className="w-full h-full flex flex-col items-center justify-center bg-cs-dark-blue/90">
        <div className="max-w-[1024px] w-full px-4 flex flex-col items-center justify-center gap-4  text-cs-light desktop:gap-6">
          <div className="py-16 flex items-center justify-center flex-col gap-10 md:flex-row">
            <h4 className="font-cs-title uppercase font-extrabold text-cs-h3-m desktop:text-cs-h3-d md:flex-1">
              Take the First Step Towards{" "}
              <span className="text-cs-sky-blue">Solar Freedom!</span>
            </h4>
            <Button _isLight>Talk to Us Today</Button>
          </div>
          <div className="w-full flex gap-10 justify-start py-4 flex-wrap md:items-start md:py-10 md:flex-nowrap md:justify-between md:flex-row md:gap-20 desktop:py-10 desktop:gap-60 border-t border-b border-cs-light/40">
            <div className="flex flex-col gap-6">
              <h3 className="font-cs-title uppercase font-bold text-[20px] desktop:text-cs-h3-m">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="hover:text-cs-sky-blue">
                  <a>Home</a>
                </li>
                <li className="hover:text-cs-sky-blue">
                  <a>About us</a>
                </li>
                <li className="hover:text-cs-sky-blue">
                  <a>Roofing</a>
                </li>
                <li className="hover:text-cs-sky-blue">
                  <a>Contact us</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-cs-title uppercase font-bold text-[20px] desktop:text-cs-h3-m">
                Legal
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="hover:text-cs-sky-blue">
                  <a>Privacy Policy</a>
                </li>
                <li className="hover:text-cs-sky-blue">
                  <a>Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-cs-title uppercase font-bold text-[20px] desktop:text-cs-h3-m">
                Contact
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="hover:text-cs-sky-blue">
                  <a>
                    <FontAwesomeIcon icon={faPhone} /> 631-521-3640
                  </a>
                </li>
                <li className="hover:text-cs-sky-blue">
                  <a>
                    <FontAwesomeIcon icon={faPhone} /> 516-647-5957
                  </a>
                </li>
                <li className="hover:text-cs-sky-blue">
                  <a>
                    <FontAwesomeIcon icon={faEnvelope} />{" "}
                    info@allamericanpower.net
                  </a>
                </li>
                <li className="hover:text-cs-sky-blue">
                  <a>
                    <FontAwesomeIcon icon={faLocationDot} /> Long Island, New
                    York
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-cs-navbar p-6 text-center">
            Copyright © 2025 All American Power. All Rights Reserved. By Roseny
          </div>
        </div>
      </div>
    </footer>
  );
};
