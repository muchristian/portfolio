import type { NextPage } from "next";
import Link from "next/link";
import { Button } from "../components/Button/Button";
import { Navbar } from "../components/Navbar/Navbar";
import { Meta } from "../layouts/Meta";
import React, {
  LegacyRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { Banner } from "../components/banner/banner";
import { render } from "@react-email/render";
import { EmailTemplate } from "../components/EmailTemplate";

const SplashScreen: NextPage = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          background: "rgb(255, 255, 255)",
          display: "block",
          shapeRendering: "auto",
        }}
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <rect x="17.5" y="30" width="15" height="40" fill="#f4b060">
          <animate
            attributeName="y"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="18;30;30"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.2s"
          />
          <animate
            attributeName="height"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="64;40;40"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.2s"
          />
        </rect>
        <rect x="42.5" y="30" width="15" height="40" fill="#f4b060">
          <animate
            attributeName="y"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="20.999999999999996;30;30"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.1s"
          />
          <animate
            attributeName="height"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="58.00000000000001;40;40"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.1s"
          />
        </rect>
        <rect x="67.5" y="30" width="15" height="40" fill="#f4b060">
          <animate
            attributeName="y"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="20.999999999999996;30;30"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          />
          <animate
            attributeName="height"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="58.00000000000001;40;40"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          />
        </rect>
      </svg>
    </div>
  );
};

export default SplashScreen;
