import { Header } from "./components/Header";
import { useState } from "react";
import { page } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./components/Button";

function App() {
  const [page, setPage] = useState<page>("home");
  //#region todo:
  // - footer
  // general for main
  //   each part from main
  return (
    <>
      <Header currentPage={page} updatePage={setPage} />
      <div className="relative w-full h-dvh ">
        <video
          src="https://perfectoholic.pro/cairns/wp-content/uploads/2024/03/Clips-9-1.mp4"
          autoPlay
          muted
          loop
          className="h-full object-cover"
        ></video>
        <div className="absolute w-full h-full bg-cs-middle-blue  opacity-50 top-0 right-0"></div>
        <div className="absolute top-0 left-[50%] -translate-x-[50%] z-10 h-full max-w-[1024px] flex flex-col items-center justify-center text-cs-light gap-4 desktop:gap-5">
          <h1 className="text-cs-h1-m text-center font-extrabold font-cs-title desktop:text-cs-h1-d desktop:px-[100px]">
            POWERING AMERICAS PRESENT AND FUTURE ONE{" "}
            <span className="text-cs-sky-blue">HOUSE AT A TIME.</span>
          </h1>
          <p className="w-full py-5 text-center font-bold">
            We have served the industry for over a decade with verified,
            exceptional reviews and reputation.
          </p>
          <Button _isLight>Get a Free Quote</Button>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-4xl font-thin mt-4"
          />
        </div>
      </div>
      <main className="h-[400dvh]">
        <section>About us</section>
        <section>Benefits</section>
        <section>Roofing</section>
        <section>Our partners</section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
