import React from "react";
import { Logo } from "../Logo";

export const Banner: React.FC = () => {
  return (
    <div className="w-[680px] h-[360px] portfolio-banner">
      <div
        className="portfolio-banner-fullscreen"
        style={{
          backgroundImage: "url(banner-img-1.jpg)",
        }}
      ></div>
      <div className="flex relative content">
        <div className="basis-5/12 pl-8 pr-2 py-4">
          <div className="flex flex-col gap-2">
            <div className="logo h-[64px] flex items-center gap-4">
              <Logo classes="w-[50px] h-[50px]" />
              <div className="flex flex-col">
                <h1 className="font-semibold text-lg leading-6 text-primary-5/80">
                  CUSTOM
                </h1>
                <h1 className="font-semibold text-lg leading-6 text-primary-5/80">
                  POS SYS
                </h1>
              </div>
            </div>
            <div className="flex flex-col py-2">
              <ul className="space-y-4">
                <li>Cross-platform</li>
                <li>Product / Stock Mng</li>
                <li>Expense / Credit Mng</li>
                <li>Daily Filter / Search</li>
                <li>Daily report export</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="basis-7/12 flex flex-col justify-end">
          <div className="mac">
            <img src={"/mac.png"} />
            <img src={"/projects/custom_pos1.png"} className="mockup-content" />
          </div>
          <div className="macbook">
            <img src={"/macbook.png"} />
            <img src={"/projects/custom_pos2.png"} className="mockup-content" />
          </div>
        </div>
      </div>
    </div>
  );
};
