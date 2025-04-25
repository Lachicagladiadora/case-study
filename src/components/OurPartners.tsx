import { contentType } from "../types";

type OurPartnersProps = {
  _currentSection: {
    sectionTitle: string;
    content: contentType[];
  };
};

export const OurPartners = ({ _currentSection }: OurPartnersProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-cs-light py-20 desktop:py-14">
      <div className="h-full max-w-[1024px] w-full px-4 flex flex-col items-center justify-center gap-4 desktop:gap-6 ">
        <h2
          className={`font-cs-title font-extrabold uppercase text-cs-h2-m desktop:text-cs-h2-d text-cs-sky-blue`}
        >
          {_currentSection.sectionTitle}
        </h2>
        <h4 className="font-cs-title uppercase font-extrabold text-cs-h3-m desktop:text-cs-h3-d">
          {_currentSection.content[0].subTitle}
        </h4>
        <div
          className={`w-full flex  items-center justify-center gap-0 md:flex-wrap`}
        >
          {_currentSection.content[0].content[0].paragraphs.map((cur, idx) => (
            <div
              key={idx}
              className="max-h-[320px] flex flex-col gap-2 items-center justify-center"
            >
              <img src={cur.imgSrc} alt="" className="size-36" />
              <p className="text-wrap text-center font-bold desktop:w-36 uppercase text-cs-navbar font-cs-title">
                {cur.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
