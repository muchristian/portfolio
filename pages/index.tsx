import type { NextPage } from "next";
import Link from "next/link";
import { Button } from "../components/Button/Button";
import { Navbar } from "../components/Navbar/Navbar";
import { Meta } from "../layouts/Meta";
import { useEffect } from "react";
import Image from "next/image";

const Home: NextPage = () => {
  const frontend = [
    { id: 1, name: "Tailwind" },
    { id: 2, name: "TypeScript" },
    { id: 3, name: "React / Next" },
    { id: 4, name: "React Native" },
  ];
  const backend = [
    { id: 1, name: "Node / Nest" },
    { id: 2, name: "Django" },
    { id: 3, name: "GraphQL" },
    { id: 4, name: "Strapi" },
  ];

  const database = [
    { id: 1, name: "Mysql" },
    { id: 2, name: "Postgres" },
    { id: 3, name: "MongoDB" },
    { id: 4, name: "Redis" },
  ];

  const devops = [
    { id: 1, name: "Docker" },
    { id: 2, name: "Gitlab / Travis CI" },
    { id: 3, name: "Kubernetes" },
    { id: 4, name: "AWS" },
  ];

  return (
    <>
      <Navbar classes="absolute top-0 h-[4.5rem] px-32 z-20">
        <div className="container flex justify-between items-center h-full">
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
                <a className="text-primary-2">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="text-primary-2">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </Navbar>

      <Meta title="Home Page" />

      <section className="home bg-secondary-7">
        <div className="container small h-full flex items-center gap-2">
          <div className="basis-8/12">
            <div className="flex flex-col space-y-8">
              <h6 className="greeting text-secondary-3 text-sm font-medium">
                <span className="text-base">👋</span> Hello, I'm
              </h6>
              <h1 className="name text-primary-2 text-6xl font-semibold">
                Mucyo Christian
              </h1>
              <h2 className="title text-secondary-3 text-4xl font-semibold">
                Software Developer
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                iaculis diam varius diam ultricies lacinia.{" "}
                <b>
                  Mauris lacus tellus, ultrices eu volutpat sit amet, finibus a
                  ipsum.
                </b>{" "}
                Nullam sit amet pretium felis.
              </p>
              <div className="button-section flex gap-4">
                <Button
                  type="button"
                  classes="px-6 py-4 !rounded-3xl border bg-secondary-1/80 text-primary-2 border-secondary-1/60 space-x-4 hover:bg-secondary-1/0 hover:text-secondary-1"
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
                  classes="px-6 py-4 !rounded-3xl border border-secondary-1/60 text-secondary-1 space-x-4 hover:bg-secondary-1/80 hover:text-primary-2"
                >
                  <>
                    <span>Portfolio</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                      />
                    </svg>
                  </>
                </Button>
              </div>
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon w-[28px] h-[28px]"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fff"
                    d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon w-[28px] h-[28px]"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fff"
                    d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon w-[28px] h-[28px]"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fff"
                    d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon w-[28px] h-[28px]"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fff"
                    d="M28 28v456h456V28H28zm378.83 108.04l-24.46 23.45a7.162 7.162 0 00-2.72 6.86v172.28c-.44 2.61.61 5.26 2.72 6.86l23.88 23.45v5.15H286.13v-5.15l24.74-24.02c2.43-2.43 2.43-3.15 2.43-6.86V198.81l-68.79 174.71h-9.3l-80.09-174.71v117.1c-.67 4.92.97 9.88 4.43 13.44l32.18 39.03v5.15h-91.24v-5.15l32.18-39.03c3.44-3.57 4.98-8.56 4.15-13.44V180.5c.38-3.76-1.05-7.48-3.86-10.01l-28.6-34.46v-5.15h88.81l68.65 150.55 60.35-150.55h84.66v5.16z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon w-[28px] h-[28px]"
                  viewBox="0 0 512 512"
                >
                  <path fill="#fff" d="M392 440V320h40v160H64V320h40v120z" />
                  <path
                    fill="#fff"
                    d="M149.1 308.77l198.57 40.87 8.4-39.32-198.57-40.87zm26.27-93.12L359.22 300 376 263.76l-183.82-84.84zm50.95-89l156 127.78 25.74-30.52-156-127.78zM328 32l-33.39 23.8 120.82 160.37L448 192zM144 400h204v-40H144z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="basis-4/12 bg-secondary-3 h-[400px]"></div>
        </div>
      </section>
      <section className="skills pt-0 pb-16 bg-secondary-7">
        <div className="container small flex gap-6">
          <div className="flex flex-col basis-4/12 gap-6">
            <div className="">
              <h6 className="font-bold">Frontend</h6>
            </div>
            <ul className="space-y-4 text-left">
              {frontend.map((el) => (
                <li className="flex items-center space-x-3" key={el.id}>
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-secondary-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>{el.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col basis-4/12 gap-6">
            <div className="">
              <h6 className="font-bold">Backend</h6>
            </div>
            <ul className="space-y-4 text-left">
              {backend.map((el) => (
                <li className="flex items-center space-x-3" key={el.id}>
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-secondary-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>{el.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col basis-4/12 gap-6">
            <div className="">
              <h6 className="font-bold">Database</h6>
            </div>
            <ul className="space-y-4 text-left">
              {database.map((el) => (
                <li className="flex items-center space-x-3" key={el.id}>
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-secondary-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>{el.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col basis-4/12 gap-6">
            <div className="">
              <h6 className="font-bold">DevOps</h6>
            </div>
            <ul className="space-y-4 text-left">
              {devops.map((el) => (
                <li className="flex items-center space-x-3" key={el.id}>
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-secondary-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>{el.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="portfolio py-16 bg-primary-3">
        <div className="container small flex flex-col opacity-90">
          <div className="w-6/12 self-center">
            <div className="flex flex-col gap-8 text-center">
              <h3 className="text-primary-2 text-5xl font-bold">
                My <span className="text-secondary-1">Work</span>
              </h3>
              <p className="text-sm">
                View some freelance and side projects I’ve completed that
                highlight my technical expertise{" "}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 mt-12 gap-x-8 gap-y-10">
            <div className="relative flex flex-col gap-4 rounded transition">
              <div className="relative h-[220px] cursor-pointer">
                <Image
                  src={"/projects/applix.png"}
                  className="rounded-lg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <h6 className="text-primary-2 text-base font-bold cursor-pointer">
                  Applix Website
                </h6>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  iaculis diam varius diam ultricies lacinia.
                </p>
                <div className="flex space-x-2">
                  <div className="px-3 py-1.5 rounded-lg flex justify-center bg-secondary-3">
                    <h6 className="text-secondary-1 text-xs font-medium">
                      Php
                    </h6>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg flex justify-center bg-secondary-3">
                    <h6 className="text-secondary-1 text-xs font-medium">
                      Composer
                    </h6>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg flex justify-center bg-secondary-3">
                    <h6 className="text-secondary-1 text-xs font-medium">
                      Bootstrap
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col gap-4 rounded transition">
              <div className="relative h-[220px] cursor-pointer">
                <Image
                  src={"/projects/inv-demo-1.png"}
                  className="rounded-lg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <h6 className="text-primary-2 text-base font-bold cursor-pointer">
                  Applix Website
                </h6>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  iaculis diam varius diam ultricies lacinia.
                </p>
                <div className="flex space-x-2">
                  <div className="px-3 py-1.5 rounded-lg flex justify-center bg-secondary-3">
                    <h6 className="text-secondary-1 text-xs font-medium">
                      React
                    </h6>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg flex justify-center bg-secondary-3">
                    <h6 className="text-secondary-1 text-xs font-medium">
                      Typescript
                    </h6>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg flex justify-center bg-secondary-3">
                    <h6 className="text-secondary-1 text-xs font-medium">
                      Redux TLK
                    </h6>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg flex justify-center bg-secondary-3">
                    <h6 className="text-secondary-1 text-xs font-medium">
                      Express
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col gap-4 rounded transition">
              <div className="relative h-[220px] cursor-pointer">
                <Image
                  src={"/projects/expense_tracker.png"}
                  className="rounded-lg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <h6 className="text-primary-2 text-base font-bold cursor-pointer">
                  Applix Website
                </h6>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  iaculis diam varius diam ultricies lacinia.
                </p>
                <div className="flex space-x-2">
                  <div className="px-3 py-1.5 rounded-lg flex justify-center bg-secondary-3">
                    <h6 className="text-secondary-1 text-xs font-medium">
                      Php
                    </h6>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg flex justify-center bg-secondary-3">
                    <h6 className="text-secondary-1 text-xs font-medium">
                      Composer
                    </h6>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg flex justify-center bg-secondary-3">
                    <h6 className="text-secondary-1 text-xs font-medium">
                      Bootstrap
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog py-16 bg-secondary-7">
        <div className="container small flex flex-col">
          <div className="w-6/12 self-center">
            <div className="flex flex-col gap-8 text-center">
              <h3 className="text-primary-2 text-5xl font-bold">
                My <span className="text-secondary-1">Article</span>
              </h3>
              <p className="text-sm">
                View some freelance and side projects I’ve completed that
                highlight my technical expertise{" "}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 mt-12 gap-x-8 gap-y-10">
            <div className="relative flex flex-col gap-4 rounded-lg transition">
              <div className="relative h-[220px] cursor-pointer">
                <Image
                  src={"/projects/applix.png"}
                  className="rounded-lg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <h6 className="text-primary-2 text-base font-bold cursor-pointer">
                  Applix Website
                </h6>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  iaculis diam varius diam ultricies lacinia.
                </p>
                <div className="flex space-x-2">
                  <h6 className="text-secondary-1 text-sm font-medium">#php</h6>
                  <h6 className="text-secondary-1 text-sm font-medium">
                    #composer
                  </h6>
                  <h6 className="text-secondary-1 text-sm font-medium">
                    #bootstrap
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contacts bg-primary-3 py-16">
        <div className="container small flex flex-col items-center opacity-90">
          <div className="w-6/12 self-center">
            <div className="flex flex-col gap-8 text-center">
              <h3 className="text-primary-2 text-5xl font-bold">
                Get in <span className="text-secondary-1">Touch</span>
              </h3>
              <p className="text-sm">
                View some freelance and side projects I’ve completed that
                highlight my technical expertise{" "}
              </p>
            </div>
          </div>

          <form className="flex flex-col w-7/12 px-2 mt-12">
            <div className="flex gap-6">
              <div className="flex-1 mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Name
                </label>
                <input
                  type="email"
                  id="email"
                  className="h-[42px] outline-0 focus:outline-none focus:border focus:border-secondary-1 bg-secondary-3 text-gray-900 text-sm rounded block w-full p-2.5 transition duration-150 ease-in-out"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="flex-1 mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Phone #optional
                </label>
                <input
                  type="email"
                  id="email"
                  className="h-[42px] outline-0 focus:outline-none focus:border focus:border-secondary-1 bg-secondary-3 text-gray-900 text-sm rounded block w-full p-2.5 transition duration-150 ease-in-out"
                  placeholder="Enter your phone"
                  required
                />
              </div>
            </div>
            <div className="flex">
              <div className="flex-1 mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="h-[42px] outline-0 focus:outline-none focus:border focus:border-secondary-1 bg-secondary-3 text-gray-900 text-sm rounded block w-full p-2.5 transition duration-150 ease-in-out"
                  placeholder="Enter your Email"
                  required
                />
              </div>
            </div>
            <div className="flex">
              <div className="flex-1">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="outline-0 focus:outline-none focus:border focus:border-secondary-1 bg-secondary-3 text-gray-900 text-sm rounded block w-full p-2.5 transition duration-150 ease-in-out"
                  placeholder="Leave a message..."
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
