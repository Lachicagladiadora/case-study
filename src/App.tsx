import { Header } from "./components/Header";
import { useState } from "react";
import { page } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./components/Button";
import { ALL_CONTENT, RECENT_PROJECTS_IMAGE } from "./constants";
import { Concept } from "./components/Concept";
import { Roofing } from "./components/Roofing";
import { OurPartners } from "./components/OurPartners";
import { Footer } from "./components/Footer";

function App() {
  const [page, setPage] = useState<page>("home");
  return (
    <>
      <Header currentPage={page} updatePage={setPage} />
      <div className="relative w-full h-dvh overflow-hidden">
        <video
          src="https://perfectoholic.pro/cairns/wp-content/uploads/2024/03/Clips-9-1.mp4"
          autoPlay
          muted
          loop
          className="h-full w-full object-cover"
        ></video>
        <div className="absolute w-full h-full bg-cs-middle-blue  opacity-50 top-0 right-0"></div>
        <div className="absolute top-0 left-[50%] -translate-x-[50%] z-10 h-full max-w-[1024px] flex flex-col items-center justify-center text-cs-light gap-4 desktop:gap-5">
          <h1 className="text-cs-h1-m text-center font-extrabold font-cs-title desktop:text-cs-h1-d">
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
      <main className="h-full">
        {/* About us */}
        {ALL_CONTENT[0].content.map((cur) =>
          cur.content.map((c, i) => (
            <Concept
              key={i}
              _bgColor={cur.bgColor}
              _callToAction={c.callToAction ?? ""}
              _conceptTitle={c.conceptTitle ?? ""}
              _hasSectionTitle={cur.bgColor === "light" ? true : false}
              _hasSubtitle={Boolean(cur.subTitle?.length)}
              _imageSrc={c.imageSrc ?? []}
              _isImgLeft={c.isImgLeft ?? false}
              _paragraphs={c.paragraphs}
              _sectionTitle={ALL_CONTENT[0].sectionTitle}
              _subTitle={i === 0 ? cur.subTitle : ""}
            />
          ))
        )}
        {/* Benefits */}
        {ALL_CONTENT[1].content.map((cur) =>
          cur.content.map((c, i) => (
            <Concept
              key={i}
              _bgColor={cur.bgColor}
              _callToAction={c.callToAction ?? ""}
              _conceptTitle={c.conceptTitle ?? ""}
              _hasSectionTitle={true}
              _hasSubtitle={Boolean(cur.subTitle?.length)}
              _imageSrc={c.imageSrc ?? []}
              _isImgLeft={c.isImgLeft ?? false}
              _paragraphs={c.paragraphs}
              _sectionTitle={ALL_CONTENT[1].sectionTitle}
              _subTitle={i === 0 ? cur.subTitle : ""}
            />
          ))
        )}
        {/* Roofing */}
        <Roofing _currentSection={ALL_CONTENT[2]} />
        {/* Our partners */}
        <OurPartners _currentSection={ALL_CONTENT[3]} />
        {/* Recent Projects */}
        <div className="bg-[url(https://allamericanpower.net/wp-content/uploads/2024/05/x65cdba15afbab.webp.pagespeed.ic.a_6KZL737U.webp)] bg-cover">
          <div className="w-full h-full flex flex-col items-center justify-center bg-cs-sky-blue/90">
            <div className="max-w-[1024px] w-full px-4 flex flex-col items-center justify-center gap-4 py-16 text-cs-light md:py-28 desktop:gap-6">
              <h4 className="font-cs-title uppercase font-extrabold text-cs-h3-m desktop:text-cs-h3-d md:flex-1">
                Recent Projects
              </h4>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 desktop:grid-cols-4">
                {RECENT_PROJECTS_IMAGE.map((c, i) => (
                  <img src={c} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
