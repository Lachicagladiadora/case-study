import { bgColor, paragraphType } from "../types";
import { Button } from "./Button";

type ConceptProps = {
  // _type: "two-img" | "single-img" | "img";
  _isImgLeft: boolean;
  _hasSectionTitle: boolean;
  _hasSubtitle: boolean;
  _bgColor: bgColor;
  _sectionTitle?: string;
  _subTitle?: string;
  _conceptTitle: string;
  _imageSrc: string[];
  _paragraphs: paragraphType[];
  _callToAction: string;
};

const getBackgroundColor = (bgColor: bgColor) => {
  if (bgColor === "dark-blue") return "bg-cs-dark-blue text-cs-light";
  if (bgColor === "light-blue") return "bg-cs-light-blue text-cs-light";
  if (bgColor === "dark") return "bg-cs-dark text-cs-light";
  return "bg-cs-light text-cs-dark";
};

export const Concept = ({
  // _type,
  _isImgLeft,
  _hasSectionTitle,
  _hasSubtitle,
  _bgColor,
  _sectionTitle,
  _subTitle,
  _conceptTitle,
  _imageSrc,
  _paragraphs,
  _callToAction,
}: ConceptProps) => {
  return (
    <>
      <div
        className={`relative w-full flex flex-col gap-10 items-center justify-center ${getBackgroundColor(
          _bgColor
        )}
        ${typeof _paragraphs[0] === "string" ? "py-14 desktop:py-30" : ""}
          `}
      >
        {_hasSubtitle && (
          <h3 className="font-cs-title uppercase font-extrabold text-cs-h3-m desktop:text-cs-h3-d">
            {_subTitle}
          </h3>
        )}
        <div
          className={`w-full flex items-center  ${getBackgroundColor(_bgColor)}
        ${
          typeof _paragraphs[0] === "string"
            ? "w-full justify-center"
            : "bg-linear-[180deg,white_50%,#101a38_40%,#101a38] justify-evenly"
        }
          `}
        >
          <div
            className={`h-full max-w-[1024px] w-full px-4 flex flex-col gap-7 desktop:gap-14 ${
              _isImgLeft ? "desktop:flex-row" : "desktop:flex-row-reverse"
            }`}
          >
            {/* image */}
            {typeof _paragraphs[0] === "string" && (
              <div
                className={`relative w-full desktop:w-1/2 ${
                  _imageSrc.length === 1 ? "p-0" : "pt-8 pr-8"
                }`}
              >
                {_imageSrc.map((cur, i) => (
                  <img
                    src={cur}
                    key={i}
                    className={`${
                      i === 1
                        ? "absolute  -top-[10%] -right-[5%] h-1/2"
                        : "object-cover h-full"
                    }`}
                  />
                ))}
              </div>
            )}
            {/* conceptTitle-text-paragraphs */}
            <div className="w-full flex flex-col gap-4 desktop:flex-1">
              {/* paragraphs text */}
              {_hasSectionTitle && typeof _paragraphs[0] === "string" && (
                <h2
                  className={`font-cs-title font-extrabold uppercase text-cs-h2-m desktop:text-cs-h2-d ${
                    _bgColor === "light"
                      ? "text-cs-light-blue"
                      : "text-cs-sky-blue"
                  }`}
                >
                  {_sectionTitle}
                </h2>
              )}

              <h4 className="font-cs-title uppercase font-extrabold text-cs-h3-m desktop:text-cs-h3-d">
                {_conceptTitle}
              </h4>
              <div
                className={`w-full flex  ${
                  typeof _paragraphs[0] === "string"
                    ? "flex-col gap-0 py-4 md:gap-8"
                    : "flex-col gap-8 py-8 md:flex-row md:items-center md:justify-center bg-linear-90 from-cs-light-blue to-cs-sky-blue"
                }`}
              >
                {_paragraphs.map((cur, i) => {
                  if (typeof cur === "string") return <p key={i}>{cur}</p>;
                  // paragraphs image
                  return (
                    <div
                      key={i}
                      className="max-h-[220px] flex flex-col gap-4 items-center justify-center px-6"
                    >
                      <img src={cur.imgSrc} alt="" className="size-12" />
                      <p className="text-wrap text-center font-bold desktop:w-36 uppercase text-cs-navbar font-cs-title">
                        {cur.text}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* button call to action */}
              {_callToAction && (
                <Button _isLight={_bgColor !== "light"}>{_callToAction}</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
