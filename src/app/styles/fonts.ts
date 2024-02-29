import localFont from "next/font/local";

const FKGrotesk = localFont({
  display: "swap",
  variable: "--fk-grotesk-neue-trial",
  src: [
    {
      path: "./FKGroteskNeueTrial-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./FKGroteskNeueTrial-BoldItalic.woff2",
      weight: "bold",
      style: "italic",
    },
    {
      path: "./FKGroteskNeueTrial-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./FKGroteskNeueTrial-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./FKGroteskNeueTrial-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./FKGroteskNeueTrial-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./FKGroteskNeueTrial-Regular.woff2",
      weight: "normal",
      style: "normal",
    },
  ],
});

export { FKGrotesk };
