import React from "react";
import Logofooter from "@/components/Logofooter";

export const Coofooter: React.FC = () => {
  const items = [
    {
      title: "Responsive design",
      description: "Your new website will look good on all screen sizes.",
      svg: (
        <svg
          height="48px"
          width="48px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 478.306 478.306"
          xmlSpace="preserve"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path
                style={{ fill: "#020202" }}
                d="M86.649,65.425c0-1.386,1.128-2.506,2.513-2.506h318.124c1.386,0,2.513,1.12,2.513,2.506v215.91 c0,1.386-1.127,2.505-2.513,2.505H243.98v31.649h163.306c18.839,0,34.164-15.322,34.164-34.154V65.425 c0-18.832-15.324-34.155-34.164-34.155H89.163c-18.839,0-34.164,15.324-34.164,34.155v69.297h31.65V65.425z"
              ></path>{" "}
              <path
                style={{ fill: "#020202" }}
                d="M465.888,328.441H243.98v44.96h201.792c17.97,0,32.534-14.564,32.534-32.542 C478.306,333.999,472.747,328.441,465.888,328.441z"
              ></path>{" "}
              <path
                style={{ fill: "#020202" }}
                d="M175.27,166.371H37.061C16.625,166.371,0,182.994,0,203.431v206.545 c0,20.436,16.625,37.061,37.061,37.061H175.27c20.437,0,37.061-16.625,37.061-37.061V203.431 C212.331,182.994,195.707,166.371,175.27,166.371z M31.65,203.431c0-2.982,2.426-5.411,5.411-5.411H175.27 c2.984,0,5.411,2.428,5.411,5.411v191.825H31.65V203.431z M106.163,432.894c-4.997,0-9.202-2.928-11.331-7.086 c-0.899-1.752-1.526-3.664-1.526-5.77c0-7.103,5.755-12.858,12.858-12.858c7.101,0,12.856,5.755,12.856,12.858 c0,2.105-0.625,4.017-1.526,5.77C115.362,429.966,111.158,432.894,106.163,432.894z"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      ),
    },
    {
      title: "Easy customization",
      description: "Easily adjust colors, fonts, layout, pages and graphics.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48px"
          height="48px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15.4998 5.49994L18.3282 8.32837M3 20.9997L3.04745 20.6675C3.21536 19.4922 3.29932 18.9045 3.49029 18.3558C3.65975 17.8689 3.89124 17.4059 4.17906 16.9783C4.50341 16.4963 4.92319 16.0765 5.76274 15.237L17.4107 3.58896C18.1918 2.80791 19.4581 2.80791 20.2392 3.58896C21.0202 4.37001 21.0202 5.63634 20.2392 6.41739L8.37744 18.2791C7.61579 19.0408 7.23497 19.4216 6.8012 19.7244C6.41618 19.9932 6.00093 20.2159 5.56398 20.3879C5.07171 20.5817 4.54375 20.6882 3.48793 20.9012L3 20.9997Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Simple setup",
      description: "Setup your website in no time following our tutorials.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
        >
          <circle cx="7" cy="13" r="6" stroke="black" strokeWidth="3" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.5 7.28674V0H5.5V7.15771L8.5 7.28674ZM8.5 19H7L5.5 18.9171V40H8.5V19Z"
            fill="black"
          />
          <circle cx="34" cy="10" r="6" stroke="black" strokeWidth="3" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M35.5 4.28704V0H32.5V4.15762L35.5 4.28704ZM35.5 16H33.9975L32.5 15.9169V40H35.5V16Z"
            fill="black"
          />
          <circle
            cx="21"
            cy="29"
            r="6"
            transform="rotate(-180 21 29)"
            stroke="black"
            strokeWidth="3"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.5 34.713V40H22.5V34.8424L19.5 34.713ZM19.5 23H21.0025L22.5 23.0831V22.5V0H19.5V22.5V23Z"
            fill="black"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Layout flex: em telas maiores, exibe em linha; em telas menores, empilha verticalmente */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {item.svg}
            <h3 className="mt-4 text-base font-semibold text-black">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-black/80">{item.description}</p>
          </div>
        ))}
      </div>
      <Logofooter />
    </div>
  );
};
