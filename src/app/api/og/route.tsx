import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "nowrap",
          backgroundColor: "white",
          backgroundImage: "linear-gradient(135deg,#0b48ea,#0f38b4 50%,#133795 60%,#11235a 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: 0,
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
            backgroundColor: "transparent",
            backgroundImage:
              "radial-gradient(circle at 25px 25px, #b9dbff 2%, transparent 0%), radial-gradient(circle at 75px 75px, #51a5ff 2%, transparent 0%)",
            backgroundSize: "100px 100px",
          }}
        ></div>
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="140"
            height="128"
            viewBox="0 0 370 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M369.991 68.9309C369.991 32.3302 338.232 2.50738 299.143 2.50738C271.572 2.50738 247.613 17.3479 235.926 39.0195L235.705 38.9309L195.604 127.637V68.0006C195.604 30.5227 165.034 0 127.489 0H68.3279C30.7919 0 0.221844 30.5227 0.221844 68.0095V160.774L0 291.06C0 327.661 31.7592 357.484 70.848 357.484C98.4188 357.484 122.378 342.643 134.065 320.972L134.286 321.06L174.387 232.354V291.991C174.387 329.477 204.957 360 242.502 360H301.663C339.208 360 369.778 329.477 369.778 291.991V199.226L370 68.9398L369.991 68.9309ZM172.399 179.619L141.696 247.54L114.738 307.177C114.427 307.885 114.116 308.541 113.815 309.206C106.405 324.489 89.9444 335.148 70.8924 335.148C44.9101 335.148 23.7817 315.372 23.7817 291.016L23.6042 127.646L23.5154 68.0095C23.5154 43.2989 43.6322 23.2132 68.3811 23.2132H127.542C152.291 23.2132 172.408 43.2989 172.408 68.0095V179.628L172.399 179.619ZM301.654 336.778H242.493C217.744 336.778 197.627 316.692 197.627 291.982V180.363L228.331 112.442L255.289 52.8057C255.6 52.0969 255.91 51.4412 256.212 50.7767C263.621 35.4932 280.082 24.8346 299.134 24.8346C325.117 24.8346 346.245 44.6102 346.245 68.9663L346.422 232.336L346.511 291.973C346.556 316.683 326.394 336.769 301.645 336.769L301.654 336.778Z"
              fill="#FF5F00"
            />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 900,
              color: "#ff790a",
              marginLeft: 20,
              whiteSpace: "pre-wrap",
            }}
          >
            <p>AngelsHub</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 42,
            fontStyle: "normal",
            color: "#ff790a",
            lineHeight: 1.8,
            whiteSpace: "pre-wrap",
            borderBottom: "solid 2px #ffffff",
          }}
        >
          <b>Comprehensive iGaming Solutions</b>
        </div>
      </div>
    ),
    {
      width: 800,
      height: 600,
      emoji: "twemoji",
      status: 200,
    }
  );
}
