import { contentType } from "../types";
import { Button } from "./Button";

type RoofingProps = {
  _currentSection: {
    sectionTitle: string;
    content: contentType[];
  };
};

export const Roofing = ({ _currentSection }: RoofingProps) => {
  return (
    <>
      <div
        className={`relative w-full  text-cs-light bg-[url(https://allamericanpower.net/wp-content/uploads/2024/05/x65dddbcbe160c-1.webp.pagespeed.ic.KyWUUotzSs.webp)] bg-cover`}
      >
        <div className="h-full w-full flex flex-col gap-10 items-center justify-center py-14 desktop:py-30 bg-cs-dark/30">
          <div className="h-full max-w-[1024px] w-full px-4 flex flex-col gap-4 desktop:gap-6 ">
            <div className="w-full flex flex-col gap-4 desktop:flex-1">
              <h2
                className={`font-cs-title font-extrabold uppercase text-cs-h2-m desktop:text-cs-h2-d text-cs-sky-blue`}
              >
                {_currentSection.sectionTitle}
              </h2>
              <h4 className="font-cs-title uppercase font-extrabold text-cs-h3-m desktop:text-cs-h3-d">
                {_currentSection.content[0].content[0].conceptTitle}
              </h4>
              <div className={`w-full flex flex-col gap-0 py-4 md:gap-8`}>
                {_currentSection.content[0].content[0].paragraphs.map(
                  (cur, i) => (
                    <p key={i}>{cur as string}</p>
                  )
                )}
              </div>

              <div className="w-full flex flex-wrap items-center justify-center gap-6 py-8 md:flex-nowrap md:items-center md:justify-center">
                {_currentSection.content[0].content[1].paragraphs.map(
                  (cur, idx) => (
                    <div
                      key={idx}
                      className="max-h-[220px] flex flex-col gap-2 items-center justify-center"
                    >
                      <img src={cur.imgSrc} alt="" className="size-12" />
                      <p className="text-wrap text-center font-bold desktop:w-36 uppercase text-cs-navbar font-cs-title">
                        {cur.text}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center bg-cs-sky-blue/85 py-20 desktop:py-14">
          <h4 className="font-cs-title uppercase font-extrabold text-cs-h3-m desktop:text-cs-h3-d">
            {_currentSection.content[0].content[2].conceptTitle}
          </h4>
          <div
            className={`w-full flex flex-col text-center gap-0 py-4 md:gap-8`}
          >
            {_currentSection.content[0].content[2].paragraphs.map((cur, i) => (
              <p key={i}>{cur as string}</p>
            ))}
          </div>
          <Button _isLight={false}>
            {_currentSection.content[0].content[2].callToAction}
          </Button>
        </div>
      </div>
    </>
  );
};
