import type { NextPage } from "next";
import Link from "next/link";
import { Button } from "../components/Button/Button";
import { Navbar } from "../components/Navbar/Navbar";
import { Meta } from "../layouts/Meta";
import { gsap, Power3 } from "gsap";
import { useEffect } from "react";
import Image from "next/image";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home: NextPage = () => {
  let t1 = gsap.timeline({ delay: 0.6 });
  useEffect(() => {
    t1.to(".profile-img", {
      y: 20,
      opacity: 1,
      duration: 1,
      ease: Power3.easeOut,
    });

    t1.to(".greeting", { y: 30, ease: Power3.easeOut, opacity: 1 }, 0.15)
      .to(
        ".name",
        { y: 20, opacity: 1, ease: Power3.easeOut, delay: 0.2 },
        0.35
      )
      .to(
        ".title",
        { y: 10, opacity: 1, ease: Power3.easeOut, delay: 0.2 },
        0.35
      )
      .to(
        ".button-section",
        { y: -10, opacity: 1, ease: Power3.easeOut, delay: 0.4 },
        0.35
      );
    // gsap.from(".portfolio-header", {
    //   y: 20,
    //   opacity: 1,
    //   ease: Power3.easeIn,
    //   scrollTrigger: {
    //     trigger: ".portfolio-header",
    //   },
    // });
    // ScrollTrigger.batch("portfolio-items", {
    //   onEnter: (batch) => {
    //     batch.forEach((item, index) =>
    //       gsap.to(item.children, {
    //         y: 20,
    //         opacity: 1,
    //         ease: Power3.easeIn,
    //         delay: index * 0.3,
    //       })
    //     );
    //   },
    // });
  }, []);
  return (
    <>
      <div
        className="main relative h-screen overflow-y-scroll bg-primary-4"
        // style={{
        //   background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='85' height='85' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform=''%3E%3Crect width='100%25' height='100%25' fill='rgba(6, 6, 6,1)'/%3E%3Ccircle cx='40' cy='20' r='1' fill='rgba(25, 25, 25,1)'/%3E%3Ccircle cx='0' cy='20' r='1' fill='rgba(25, 25, 25,1)'/%3E%3Ccircle cx='20' cy='40' r='1' fill='rgba(25, 25, 25,1)'/%3E%3Ccircle cx='20' cy='0' r='1' fill='rgba(25, 25, 25,1)'/%3E%3Ccircle cx='38' cy='2' r='1' fill='rgba(0, 0, 0,1)'/%3E%3Ccircle cx='2' cy='38' r='1' fill='rgba(0, 0, 0,1)'/%3E%3Ccircle cx='38' cy='38' r='1' fill='rgba(0, 0, 0,1)'/%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(0, 0, 0,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")`,
        // }}
      >
        <Navbar classes="sticky top-0 h-[4.5rem] px-32 z-20 backdrop-blur-sm">
          <>
            <h1 className="text-primary-2">CHRIS</h1>
            <ul className="flex items-center gap-16">
              <li>
                <Link href="#">
                  <a className="text-primary-2">About</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-primary-2">Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-primary-2">Contact</a>
                </Link>
              </li>
              <li>
                <Button
                  type="button"
                  classes="px-4 py-2.5 border border-secondary-1 text-secondary-1"
                >
                  <span>Resume</span>
                </Button>
              </li>
            </ul>
          </>
        </Navbar>

        <Meta title="Home Page" />

        {/* <div className=" flex items-center "> */}
        <div className="py-16 px-32 flex flex-col gap-6 z-10 items-center justify-center">
          <div
            className="relative bg-secondary-7 rounded-full border-8 border-secondary-7"
            style={{ height: "180px", width: "180px" }}
          >
            <Image
              className="rounded-full"
              src="/IMG-20200111-WA0006~2.jpg"
              alt="chris avatar"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h6 className="greeting text-secondary-3 text-sm font-medium">
            <span className="text-base">👋</span> Hello, I'm
          </h6>
          <h1 className="name text-primary-2 text-5xl font-semibold">
            Mucyo Christian
          </h1>
          <h2 className="title text-secondary-3 text-4xl font-semibold">
            Software Developer
          </h2>
          <div className="button-section flex gap-4 mt-6">
            <Button
              type="button"
              classes="px-4 py-2.5 border border-secondary-1 bg-secondary-1 gap-2"
            >
              <>
                <span>Let's Talk</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-send"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </>
            </Button>
            <Button
              type="button"
              classes="px-4 py-2.5 border border-secondary-1 text-secondary-1"
            >
              <span>Portfolio</span>
            </Button>
          </div>
        </div>
        <div className="skills px-32 flex-col py-16 bg-secondary-7">
          <div className="skills-header flex flex-col gap-2 items-center">
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                width="32"
                className="ionicon"
                viewBox="0 0 512 512"
              >
                {/* <circle
                cx="256"
                cy="256"
                r="192"
                fill="none"
                stroke="#f4b060"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              /> */}
                <path
                  d="M416 448H96a32.09 32.09 0 01-32-32V96a32.09 32.09 0 0132-32h320a32.09 32.09 0 0132 32v320a32.09 32.09 0 01-32 32z"
                  fill="none"
                  stroke="#f4b060"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="40"
                />
              </svg>
              <h6 className="text-secondary-3 text-sm font-medium">
                MY SKILLS
              </h6>
            </div>

            <h3 className="text-primary-2 text-3xl font-semibold">
              My Skills And Tools
            </h3>
          </div>
          <div className="skills-items flex flex-wrap gap-8 pt-20 justify-center">
            <div
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 py-4 items-center gap-4 bg-secondary-3"
              style={{
                width: "128px",
              }}
            >
              <Image
                src="/1174949_js_react js_logo_react_react native_icon.svg"
                alt="react logo"
                width={80}
                height={80}
              />
              <h6 className="text-primary-2 text-sm font-semibold">React</h6>
            </div>
            <div
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 py-4 items-center gap-4 bg-secondary-3"
              style={{
                width: "128px",
              }}
            >
              <Image
                src="/next-js-seeklogo.com.svg"
                alt="react logo"
                width={80}
                height={80}
              />
              <h6 className="text-primary-2 text-sm font-semibold">Next.JS</h6>
            </div>
            <div
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 py-4 items-center gap-4 bg-secondary-3"
              style={{
                width: "128px",
              }}
            >
              <Image
                src="/typescript-seeklogo.com.svg"
                alt="react logo"
                width={80}
                height={80}
              />
              <h6 className="text-primary-2 text-sm font-semibold">
                Typescript
              </h6>
            </div>
            <div
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 py-4 items-center gap-4 bg-secondary-3"
              style={{
                width: "128px",
              }}
            >
              <Image
                src="/ethereum-seeklogo.com.svg"
                alt="react logo"
                width={80}
                height={80}
              />
              <h6 className="text-primary-2 text-sm font-semibold">Ethereum</h6>
            </div>
            <div
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 py-4 items-center gap-4 bg-secondary-3"
              style={{
                width: "128px",
              }}
            >
              <Image
                src="/tailwind-css-seeklogo.com.svg"
                alt="react logo"
                width={80}
                height={80}
              />
              <h6 className="text-primary-2 text-sm font-semibold">
                Tailwindcss
              </h6>
            </div>
            <div
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 py-4 items-center gap-4 bg-secondary-3"
              style={{
                width: "128px",
              }}
            >
              <Image
                src="/sass-seeklogo.com.svg"
                alt="react logo"
                width={80}
                height={80}
              />
              <h6 className="text-primary-2 text-sm font-semibold">Sass</h6>
            </div>
            <div
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 py-4 items-center gap-4 bg-secondary-3"
              style={{
                width: "128px",
              }}
            >
              <Image
                src="/nodejs-seeklogo.com.svg"
                alt="react logo"
                width={80}
                height={80}
              />
              <h6 className="text-primary-2 text-sm font-semibold">Node.JS</h6>
            </div>
            <div
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 py-4 items-center gap-4 bg-secondary-3"
              style={{
                width: "128px",
              }}
            >
              <Image
                src="/nestjs-seeklogo.com.svg"
                alt="react logo"
                width={80}
                height={80}
              />
              <h6 className="text-primary-2 text-sm font-semibold">Nest.JS</h6>
            </div>
            <div
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 py-4 items-center gap-4 bg-secondary-3"
              style={{
                width: "128px",
              }}
            >
              <Image
                src="/graphql-seeklogo.com.svg"
                alt="react logo"
                width={80}
                height={80}
              />
              <h6 className="text-primary-2 text-sm font-semibold">GraphQL</h6>
            </div>
            <div
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 py-4 items-center gap-4 bg-secondary-3"
              style={{
                width: "128px",
              }}
            >
              <Image
                src="/solidity-seeklogo.com.svg"
                alt="react logo"
                width={80}
                height={80}
              />
              <h6 className="text-primary-2 text-sm font-semibold">Solidity</h6>
            </div>
            <div
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 py-4 items-center gap-4 bg-secondary-3"
              style={{
                width: "128px",
              }}
            >
              <Image
                src="/postgresql-seeklogo.com.svg"
                alt="react logo"
                width={80}
                height={80}
              />
              <h6 className="text-primary-2 text-sm font-semibold">
                PostgresSQL
              </h6>
            </div>
            <div
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 py-4 items-center gap-4 bg-secondary-3"
              style={{
                width: "128px",
              }}
            >
              <Image
                src="/mongodb-icon.svg"
                alt="react logo"
                width={80}
                height={80}
              />
              <h6 className="text-primary-2 text-sm font-semibold">MongoDB</h6>
            </div>

            <div
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 py-4 items-center gap-4 bg-secondary-3"
              style={{
                width: "128px",
              }}
            >
              <Image
                src="/git-scm-icon.svg"
                alt="react logo"
                width={80}
                height={80}
              />
              <h6 className="text-primary-2 text-sm font-semibold">Git</h6>
            </div>
            <div
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 py-4 items-center gap-4 bg-secondary-3"
              style={{
                width: "128px",
              }}
            >
              <Image
                src="/docker-icon.svg"
                alt="react logo"
                width={80}
                height={80}
              />
              <h6 className="text-primary-2 text-sm font-semibold">Docker</h6>
            </div>
            <div
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 py-4 items-center gap-4 bg-secondary-3"
              style={{
                width: "128px",
                minHeight: "152px",
              }}
            >
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="/gitlab-seeklogo.com.svg"
                  alt="react logo"
                  width={36}
                  height={36}
                />
                <Image
                  src="/travis-ci-seeklogo.com.svg"
                  alt="react logo"
                  width={36}
                  height={36}
                />
              </div>
              <h6 className="text-primary-2 text-xs font-semibold">CI CD</h6>
            </div>
          </div>
        </div>
        <div className="portfolio min-h-screen px-32 flex-col items-center py-16">
          <div className="portfolio-header flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                flex-1
                width="32"
                className="ionicon"
                viewBox="0 0 512 512"
              >
                {/* <circle
                cx="256"
                cy="256"
                r="192"
                fill="none"
                stroke="#f4b060"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              /> */}
                <path
                  d="M416 448H96a32.09 32.09 0 01-32-32V96a32.09 32.09 0 0132-32h320a32.09 32.09 0 0132 32v320a32.09 32.09 0 01-32 32z"
                  fill="none"
                  stroke="#f4b060"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="40"
                />
              </svg>
              <h6 className="text-secondary-3 text-sm font-medium">MY WORKS</h6>
            </div>

            <h3 className="text-primary-2 text-3xl font-semibold">
              My Recent Projects
            </h3>
          </div>
          <div className="portfolio-items w-full pt-20">
            <div className="relative transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
              <div className="px-6 py-6 flex flex-col bg-primary-4 bg-opacity-90 z-10 absolute w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100">
                <h2 className="text-secondary-1 text-lg font-medium">
                  Applix websites
                </h2>
                <p className="mt-2 text-secondary-5 text-sm overflow-y-auto">
                  A software company's website, I built it with phtml, and php
                  composer using bootstrap framework
                </p>
                <div className="flex items-center gap-6 mt-auto">
                  <Link type="button" href={"https://applix.africa/"}>
                    <a className="transition font-semibold rounded-md text-sm justify-center inline-flex items-center hover:duration-150 px-4 py-2.5 border border-secondary-1 bg-secondary-1">
                      Demo
                    </a>
                  </Link>
                  <Link type="button" href={"/"}>
                    <a className="transition font-semibold rounded-md text-sm justify-center inline-flex items-center hover:duration-150 px-4 py-2.5 border border-secondary-1 text-secondary-1">
                      View Code
                    </a>
                  </Link>
                </div>
              </div>
              <Image
                src={"/projects/applix.png"}
                className="rounded-md"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
              <div className="px-6 py-6 flex flex-col bg-primary-4 bg-opacity-90 z-10 absolute w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100">
                <h2 className="text-secondary-1 text-lg font-medium">
                  Expense Tracker
                </h2>
                <p className="mt-2 text-secondary-5 text-sm overflow-y-auto">
                  An expense tracker app, built with Nextjs, Tailwindcss,
                  Nodejs, koaJs, Strapi cms and postgres, It also Redux toolkit
                  for state management
                </p>
                <div className="flex items-center gap-6 mt-auto">
                  <Link
                    type="button"
                    href={"https://expense-app-tracker.vercel.app"}
                  >
                    <a className="transition font-semibold rounded-md text-sm justify-center inline-flex items-center hover:duration-150 px-4 py-2.5 border border-secondary-1 bg-secondary-1">
                      Demo
                    </a>
                  </Link>
                  <Link
                    type="button"
                    href={"https://github.com/muchristian/expense-app-tracker"}
                  >
                    <a className="transition font-semibold rounded-md text-sm justify-center inline-flex items-center hover:duration-150 px-4 py-2.5 border border-secondary-1 text-secondary-1">
                      View Code
                    </a>
                  </Link>
                </div>
              </div>
              <Image
                src={"/projects/expense_tracker.png"}
                className="rounded-md"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
              <div className="px-6 py-6 flex flex-col bg-primary-4 bg-opacity-90 z-10 absolute w-full h-full text-white rounded-2xl transition-all duration-300 transform group-hover:scale-105 text-xl">
                <div className="flex items-center gap-4">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 -3.5 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMinYMin meet"
                  >
                    <g fill="#ffffff">
                      <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />
                      <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />
                    </g>
                  </svg>
                  <h2 className="text-secondary-1 text-lg font-medium">
                    Course progress tracker
                  </h2>
                </div>
                <p className="mt-2 text-secondary-5 text-sm overflow-y-auto">
                  A course progress tracker, for staying updated of how far is
                  the on going course. It is built with Reactjs, Bootstrap 4,
                  Sass, Python Django and mysql
                </p>
                <div className="flex items-center gap-6 mt-auto">
                  <Link type="button" href={"/"}>
                    <a className="transition font-semibold rounded-md text-sm justify-center inline-flex items-center hover:duration-150 px-4 py-2.5 border border-secondary-1 bg-secondary-1">
                      Demo
                    </a>
                  </Link>
                  <Link
                    type="button"
                    href={
                      "https://github.com/muchristian/Course-Progress-Tracker-frontend"
                    }
                  >
                    <a className="transition font-semibold rounded-md text-sm justify-center inline-flex items-center hover:duration-150 px-4 py-2.5 border border-secondary-1 text-secondary-1">
                      View Code
                    </a>
                  </Link>
                </div>
              </div>
              <Image
                src={"/background-img.png"}
                className="rounded-md"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
              <div className="px-6 py-6 flex flex-col bg-primary-4 bg-opacity-90 z-10 absolute w-full h-full text-white rounded-2xl transition-all duration-300 transform group-hover:scale-105 text-xl">
                <div className="flex items-center gap-4">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 -3.5 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMinYMin meet"
                  >
                    <g fill="#ffffff">
                      <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />
                      <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />
                    </g>
                  </svg>
                  <h2 className="text-secondary-1 text-lg font-medium">
                    Food menu app
                  </h2>
                </div>
                <p className="mt-2 text-secondary-5 text-sm overflow-y-auto">
                  A food menu app, Built with Reactjs and Firebase
                </p>
                <div className="flex items-center gap-6 mt-auto">
                  <Link type="button" href={"/"}>
                    <a className="transition font-semibold rounded-md text-sm justify-center inline-flex items-center hover:duration-150 px-4 py-2.5 border border-secondary-1 bg-secondary-1">
                      Demo
                    </a>
                  </Link>
                  <Link
                    type="button"
                    href={"https://github.com/muchristian/food-menu-app"}
                  >
                    <a className="transition font-semibold rounded-md text-sm justify-center inline-flex items-center hover:duration-150 px-4 py-2.5 border border-secondary-1 text-secondary-1">
                      View Code
                    </a>
                  </Link>
                </div>
              </div>
              <Image
                src={"/background-img.png"}
                className="rounded-md"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
              <div className="px-6 py-6 flex flex-col bg-primary-4 bg-opacity-90 z-10 absolute w-full h-full text-white rounded-2xl transition-all duration-300 transform group-hover:scale-105 text-xl">
                <div className="flex items-center gap-4">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 -10 256 256"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    preserveAspectRatio="xMidYMid"
                  >
                    <g>
                      <path
                        d="M128.07485,236.074667 L128.07485,236.074667 L175.17885,91.1043048 L80.9708495,91.1043048 L128.07485,236.074667 L128.07485,236.074667 Z"
                        fill="#E24329"
                      ></path>
                      <path
                        d="M128.07485,236.074423 L80.9708495,91.104061 L14.9557638,91.104061 L128.07485,236.074423 L128.07485,236.074423 Z"
                        fill="#FC6D26"
                      ></path>
                      <path
                        d="M14.9558857,91.1044267 L14.9558857,91.1044267 L0.641828571,135.159589 C-0.663771429,139.17757 0.766171429,143.57955 4.18438095,146.06275 L128.074971,236.074789 L14.9558857,91.1044267 L14.9558857,91.1044267 Z"
                        fill="#FCA326"
                      ></path>
                      <path
                        d="M14.9558857,91.1045486 L80.9709714,91.1045486 L52.6000762,3.79026286 C51.1408762,-0.703146667 44.7847619,-0.701927619 43.3255619,3.79026286 L14.9558857,91.1045486 L14.9558857,91.1045486 Z"
                        fill="#E24329"
                      ></path>
                      <path
                        d="M128.07485,236.074423 L175.17885,91.104061 L241.193935,91.104061 L128.07485,236.074423 L128.07485,236.074423 Z"
                        fill="#FC6D26"
                      ></path>
                      <path
                        d="M241.193935,91.1044267 L241.193935,91.1044267 L255.507992,135.159589 C256.813592,139.17757 255.38365,143.57955 251.96544,146.06275 L128.07485,236.074789 L241.193935,91.1044267 L241.193935,91.1044267 Z"
                        fill="#FCA326"
                      ></path>
                      <path
                        d="M241.193935,91.1045486 L175.17885,91.1045486 L203.549745,3.79026286 C205.008945,-0.703146667 211.365059,-0.701927619 212.824259,3.79026286 L241.193935,91.1045486 L241.193935,91.1045486 Z"
                        fill="#E24329"
                      ></path>
                    </g>
                  </svg>
                  <h2 className="text-secondary-1 text-lg font-medium">
                    Employee management backend
                  </h2>
                </div>
                <p className="mt-2 text-secondary-5 text-sm overflow-y-auto">
                  A backend built with Nestjs and postgresql for managing
                  employees
                </p>
                <div className="flex items-center gap-6 mt-auto">
                  <Link type="button" href={"/"}>
                    <a className="transition font-semibold rounded-md text-sm justify-center inline-flex items-center hover:duration-150 px-4 py-2.5 border border-secondary-1 bg-secondary-1">
                      Demo
                    </a>
                  </Link>
                  <Link
                    type="button"
                    href={"https://gitlab.com/mchris/employee-ms"}
                  >
                    <a className="transition font-semibold rounded-md text-sm justify-center inline-flex items-center hover:duration-150 px-4 py-2.5 border border-secondary-1 text-secondary-1">
                      View Code
                    </a>
                  </Link>
                </div>
              </div>
              <Image
                src={"/background-img.png"}
                className="rounded-md"
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* <div className="sm:basis-4/12 flex-1 invisible"></div>
            <div className="sm:basis-4/12 flex-1 invisible"></div>
            <div className="sm:basis-4/12 flex-1 invisible"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
