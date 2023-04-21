import React from "react";

export const Banner: React.FC = () => {
  return (
    <div className="w-[480px] h-[260px] portfolio-banner">
      <div
        className="portfolio-banner-fullscreen"
        style={{
          backgroundImage: "url(banner-img-1.jpg)",
        }}
      ></div>
      <div className="flex relative content">
        <div className="basis-5/12 pl-6 pr-2 py-4">
          <div className="flex flex-col gap-4">
            <div className="flex logo items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[32px] h-[32px]"
                viewBox="0 96 960 960"
              >
                <path d="M431 922H180q-24 0-42-18t-18-42V280q0-24 15.5-42t26.5-18h202q7-35 34.5-57.5T462 140q36 0 63.5 22.5T560 220h202q24 0 42 18t18 42v203h-60V280H656v130H286V280H180v582h251v60Zm189-25L460 737l43-43 117 117 239-239 43 43-282 282ZM480 276q17 0 28.5-11.5T520 236q0-17-11.5-28.5T480 196q-17 0-28.5 11.5T440 236q0 17 11.5 28.5T480 276Z" />
              </svg>
              <h1 className="font-bold text-lg text-primary-1">INV MS</h1>
            </div>
            <div className="flex flex-col px-2 py-2">
              <ul>
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
            <img src={"/projects/inv-ms-1.png"} className="mockup-content" />
          </div>
          <div className="macbook">
            <img src={"/macbook.png"} />
          </div>
        </div>
      </div>
    </div>
  );
};
