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
        className="main relative h-screen overflow-y-scroll overflow-x-hidden bg-primary-4"
        // style={{
        //   background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='85' height='85' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform=''%3E%3Crect width='100%25' height='100%25' fill='rgba(6, 6, 6,1)'/%3E%3Ccircle cx='40' cy='20' r='1' fill='rgba(25, 25, 25,1)'/%3E%3Ccircle cx='0' cy='20' r='1' fill='rgba(25, 25, 25,1)'/%3E%3Ccircle cx='20' cy='40' r='1' fill='rgba(25, 25, 25,1)'/%3E%3Ccircle cx='20' cy='0' r='1' fill='rgba(25, 25, 25,1)'/%3E%3Ccircle cx='38' cy='2' r='1' fill='rgba(0, 0, 0,1)'/%3E%3Ccircle cx='2' cy='38' r='1' fill='rgba(0, 0, 0,1)'/%3E%3Ccircle cx='38' cy='38' r='1' fill='rgba(0, 0, 0,1)'/%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(0, 0, 0,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")`,
        // }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="512"
          width="512"
          transform="rotate(60) translate(-148 56)"
          className="ionicon absolute"
          viewBox="0 0 512 512"
        >
          <path
            d="M416 448H96a32.09 32.09 0 01-32-32V96a32.09 32.09 0 0132-32h320a32.09 32.09 0 0132 32v320a32.09 32.09 0 01-32 32z"
            fill="none"
            stroke="#f4b06025"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="512"
          width="512"
          transform="rotate(60) translate(248 -56)"
          className="ionicon absolute right-0"
          viewBox="0 0 512 512"
        >
          <path
            d="M416 448H96a32.09 32.09 0 01-32-32V96a32.09 32.09 0 0132-32h320a32.09 32.09 0 0132 32v320a32.09 32.09 0 01-32 32z"
            fill="none"
            stroke="#f4b06025"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
        </svg>
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
                <Link href="/Christian+Mucyo+CV+Full-Stack-1.pdf">
                  <a
                    target="_blank"
                    type="button"
                    className="transition font-semibold rounded-md text-sm justify-center inline-flex items-center hover:duration-150 px-4 py-2.5 border border-secondary-1 text-secondary-1 hover:bg-secondary-1 hover:text-primary-4"
                  >
                    Resume
                  </a>
                </Link>
              </li>
            </ul>
          </>
        </Navbar>

        <Meta title="Home Page" />

        {/* <div className=" flex items-center "> */}
        <div className="py-16 px-32 flex gap-6 z-10 items-center justify-between">
          <div className="flex flex-col gap-6">
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
                classes="px-4 py-2.5 border border-secondary-1 bg-secondary-1 gap-2 hover:bg-secondary-1/0 hover:text-secondary-1"
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
                classes="px-4 py-2.5 border border-secondary-1 text-secondary-1 hover:bg-secondary-1 hover:text-primary-4"
              >
                <span>Portfolio</span>
              </Button>
            </div>
          </div>
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
        </div>
        <div className="skills px-32 flex-col py-16 bg-secondary-7">
          <div className="skills-header flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                width="32"
                className="ionicon"
                viewBox="0 0 512 512"
              >
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
          <div className="skills-items grid grid-cols-4 gap-4 pt-20">
            <div
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 items-center justify-center gap-4 bg-secondary-3"
              style={{
                flexBasis: "20%",
                height: "160px",
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
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 items-center justify-center gap-4 bg-secondary-3"
              style={{
                flexBasis: "20%",
                height: "160px",
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
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 items-center justify-center gap-4 bg-secondary-3"
              style={{
                flexBasis: "20%",
                height: "160px",
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
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 items-center justify-center gap-4 bg-secondary-3"
              style={{
                flexBasis: "20%",
                height: "160px",
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
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 items-center justify-center gap-4 bg-secondary-3"
              style={{
                flexBasis: "20%",
                height: "160px",
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
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 items-center justify-center gap-4 bg-secondary-3"
              style={{
                flexBasis: "20%",
                height: "160px",
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
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 items-center justify-center gap-4 bg-secondary-3"
              style={{
                flexBasis: "20%",
                height: "160px",
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
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 items-center justify-center gap-4 bg-secondary-3"
              style={{
                flexBasis: "20%",
                height: "160px",
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
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 items-center justify-center gap-4 bg-secondary-3"
              style={{
                flexBasis: "20%",
                height: "160px",
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
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 items-center justify-center gap-4 bg-secondary-3"
              style={{
                flexBasis: "20%",
                height: "160px",
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
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 items-center justify-center gap-4 bg-secondary-3"
              style={{
                flexBasis: "20%",
                height: "160px",
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
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 items-center justify-center gap-4 bg-secondary-3"
              style={{
                flexBasis: "20%",
                height: "160px",
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
            <div
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 items-center justify-center gap-4 bg-secondary-3"
              style={{
                flexBasis: "20%",
                height: "160px",
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
              className="rounded-md flex flex-col border-2 border-md border-secondary-3 items-center justify-center gap-4 bg-secondary-3"
              style={{
                flexBasis: "20%",
                height: "160px",
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
              className="rounded-md flex flex-col items-center justify-center gap-4 bg-transparent"
              style={{
                flexBasis: "20%",
                height: "160px",
              }}
            ></div>
            <div
              className="rounded-md flex flex-col items-center justify-center gap-4 bg-transparent"
              style={{
                flexBasis: "20%",
                height: "160px",
              }}
            ></div>
            <div
              className="rounded-md flex flex-col items-center justify-center gap-4 bg-transparent"
              style={{
                flexBasis: "20%",
                height: "160px",
              }}
            ></div>
            <div
              className="rounded-md flex flex-col items-center justify-center gap-4 bg-transparent"
              style={{
                flexBasis: "20%",
                height: "160px",
              }}
            ></div>
          </div>
        </div>
        <div className="portfolio px-32 flex-col items-center py-16">
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
          <div className="portfolio-items grid grid-cols-2 gap-4 w-full pt-20">
            <div className="relative flex items-end rounded transition duration-300 group transform cursor-pointer">
              <div className="figure px-4 py-2 flex justify-between items-center bg-gradient-to-b from-primary-4/5 via-primary-4/50 to-primary-4/75 z-10 absolute w-full h-1/4 text-white rounded-b opacity-0 transition-all duration-300 transform text-xl group-hover:opacity-100">
                <div className="flex flex-col gap-2 w-10/12">
                  <h2 className="text-primary-2 text-xl font-medium">
                    Applix website
                  </h2>
                  <p className="text-secondary-1 text-sm font-normal">
                    Php, Composer, Bootstrap
                  </p>
                </div>
              </div>
              <Image
                src={"/projects/applix.png"}
                className="rounded-md"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative flex items-end rounded transition duration-300 group transform cursor-pointer">
              <div className="figure px-4 py-2 flex items-center bg-gradient-to-b from-primary-4/5 via-primary-4/50 to-primary-4/75 z-10 w-full h-1/4 text-white rounded-b opacity-0 transition-all duration-300 transform text-xl group-hover:opacity-100">
                <div className="flex flex-col gap-2 w-10/12">
                  <h2 className="text-primary-2 text-xl font-medium">
                    Expense Tracker
                  </h2>
                  <p className="text-secondary-1 text-sm font-normal truncate ...">
                    Next.js, Node.js, Koa.js, Strapi, Postgres, Strapi, Postgres
                  </p>
                </div>
                {/* <div className="flex items-center justify-end basis-3/12">
                  <Link
                    type="button"
                    href={"https://github.com/muchristian/expense-app-tracker"}
                  >
                    <a className="transition font-semibold rounded-md text-sm justify-center inline-flex items-center hover:duration-150 px-2 py-1 bg-transparent border border-secondary-1 border-2 text-secondary-1 hover:bg-secondary-1 hover:text-primary-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ionicon"
                        viewBox="0 0 512 512"
                        style={{
                          height: "24px",
                        }}
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                          d="M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320"
                        />
                      </svg>
                    </a>
                  </Link>
                </div> */}
              </div>
              <Image
                src={"/projects/expense_tracker.png"}
                className="rounded-md"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="contact px-32 flex flex-col justify-center gap-8 items-end py-16">
          <div className="flex flex-col gap-4">
            <h6 className="self-end text-primary-2 text-5xl font-bold">
              It's my pleasure to
            </h6>
            <h6 className="self-end text-primary-2 text-5xl font-bold">
              hear from you!
            </h6>
          </div>
          <Button
            type="button"
            classes="px-4 py-2.5 border border-secondary-1 bg-secondary-1 gap-2 hover:bg-secondary-1/0 hover:text-secondary-1"
          >
            <>
              <span>Mail me</span>
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
        </div>
        <div className="footer px-32">
          <hr className="text-primary-2/10"></hr>
          <div className="flex items-center justify-between py-10">
            <h2 className="text-2xl text-primary-2 font-semibold">
              Mucyo Christian
            </h2>
            <div className="flex gap-4 items-center">
              <Link
                type="button"
                href={"https://www.linkedin.com/in/mucyo-c-a90064128"}
              >
                <a className="transition font-semibold fill-secondary-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon"
                    viewBox="0 0 512 512"
                    style={{
                      height: "32px",
                    }}
                  >
                    <title>Mucyo Christian</title>
                    <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
                  </svg>
                </a>
              </Link>
              <Link
                type="button"
                href={"https://discord.com/users/christian#4266"}
              >
                <a className="transition font-semibold fill-secondary-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon"
                    viewBox="0 0 512 512"
                    style={{
                      height: "32px",
                    }}
                  >
                    <title>christian#4266</title>
                    <path d="M464 66.52A50 50 0 00414.12 17L97.64 16A49.65 49.65 0 0048 65.52V392c0 27.3 22.28 48 49.64 48H368l-13-44 109 100zM324.65 329.81s-8.72-10.39-16-19.32C340.39 301.55 352.5 282 352.5 282a139 139 0 01-27.85 14.25 173.31 173.31 0 01-35.11 10.39 170.05 170.05 0 01-62.72-.24 184.45 184.45 0 01-35.59-10.4 141.46 141.46 0 01-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21-.49-.24-.73-.48-1-.48-4.36-2.42-6.78-4.11-6.78-4.11s11.62 19.09 42.38 28.26c-7.27 9.18-16.23 19.81-16.23 19.81-53.51-1.69-73.85-36.47-73.85-36.47 0-77.06 34.87-139.62 34.87-139.62 34.87-25.85 67.8-25.12 67.8-25.12l2.42 2.9c-43.59 12.32-63.44 31.4-63.44 31.4s5.32-2.9 14.28-6.77c25.91-11.35 46.5-14.25 55-15.21a24 24 0 014.12-.49 205.62 205.62 0 0148.91-.48 201.62 201.62 0 0172.89 22.95s-19.13-18.15-60.3-30.45l3.39-3.86s33.17-.73 67.81 25.16c0 0 34.87 62.56 34.87 139.62 0-.28-20.35 34.5-73.86 36.19z" />
                    <path d="M212.05 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.8 0 24.7-11.83 24.7-26.57.25-14.76-10.9-26.57-24.7-26.57zM300.43 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.81 0 24.7-11.83 24.7-26.57S314 218 300.43 218z" />
                  </svg>
                </a>
              </Link>
              <Link type="button" href={"https://github.com/muchristian"}>
                <a className="transition font-semibold fill-secondary-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon"
                    viewBox="0 0 512 512"
                    style={{
                      height: "32px",
                    }}
                  >
                    <title>mucyo chris</title>
                    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                  </svg>
                </a>
              </Link>
              <Link type="button" href={"https://gitlab.com/mchris"}>
                <a className="transition font-semibold fill-secondary-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon"
                    viewBox="0 0 512 512"
                    style={{
                      height: "32px",
                    }}
                  >
                    <title>m chris</title>
                    <path d="M494.07 281.6l-25.18-78.08a11 11 0 00-.61-2.1l-50.5-156.94a20.08 20.08 0 00-19.17-13.82 19.77 19.77 0 00-18.95 13.94l-48.14 149.55h-152L131.34 44.59a19.76 19.76 0 00-18.86-13.94h-.11a20.15 20.15 0 00-19.12 14L42.7 201.73c0 .14-.11.26-.16.4l-25.63 79.48a29.15 29.15 0 0010.44 32.46l221.44 162.41a11.25 11.25 0 0013.38-.07l221.48-162.34a29.13 29.13 0 0010.42-32.47m-331-64.51l61.73 191.76L76.63 217.09m209.64 191.8l59.19-183.84 2.55-8h86.52L300.47 390.44M398.8 59.31l43.37 134.83h-86.82M324.16 217l-43 133.58-25.66 79.56L186.94 217M112.27 59.31l43.46 134.83H69M40.68 295.58a6.19 6.19 0 01-2.21-6.9l19-59 139.61 180.59m273.26-114.69L313.92 410.22l.52-.69L453.5 229.64l19 59a6.2 6.2 0 01-2.19 6.92" />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
