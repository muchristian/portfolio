import "../styles/globals.scss";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
  loading: () => (
    <div className="h-screen flex items-center justify-center dark:bg-secondary-7">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="m-auto"
        style={{
          shapeRendering: "auto",
        }}
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <path
          d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
          fill="#f4b060"
          stroke="none"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="0.3333333333333333s"
            repeatCount="indefinite"
            keyTimes="0;1"
            values="0 50 51;360 50 51"
          />
        </path>
      </svg>
    </div>
  ),
});
