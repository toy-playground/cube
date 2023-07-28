"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [x, setX] = useState(3);
  const spanList = useMemo(() => {
    return new Array(x).fill(0);
  }, [x]);

// useEffect(() => {
//     const links = document.getElementsByClassName("item");
//     // console.log(links);
//     for (let i = 0; i < links.length; i++) {
//       console.log(links[i]?.classList);
//       links[i].addEventListener(
//         "mouseover",
//         function () {
//           links[i]?.classList.add("hover");
//         },
//         false
//       );
//       links[i].addEventListener(
//         "touchend",
//         () => {
//           links[i]?.classList.remove("hover");
//         },
//         false
//       );
//     }
//   }, [x]);
  return (
    <main className="flex min-h-screen flex-col items-center p-24 overflow-hidden max-h-screen">
      <div className="flex items-center gap-x-4">
        <button
          className="flex gap-4 cursor-pointer"
          onClick={() => {
            if (x <= 5) setX(x + 1);
          }}
          disabled={x >= 5}
        >
          {" "}
          +1{" "}
        </button>
        <h1 className="text-3xl font-bold">Cube</h1>

        <button
          className="flex gap-4 cursor-pointer"
          onClick={() => {
            if (x >= 1) setX(x - 1);
          }}
          disabled={x <= 1}
        >
          {" "}
          -1{" "}
        </button>
      </div>
      <div className="relative p-10 h-[500px] ">
        <div className="relative flex justify-center items-center pt-[100px]" id='wrapper'>
          {spanList.map((_, index) => {
            return (
              <div
                key={index}
                className="cube relative"
                style={{
                  zIndex: x - index,
                  translate: `${30 * (index - 1)}px ${30 * (index - 1) * -1}px`,
                }}
              >
                {spanList.map((_, index2) => {
                  return (
                    <div
                      key={index2}
                      className={
                        "absolute top-0 left-0 flex flex-col gap-[30px]"
                      }
                      style={{
                        zIndex: x - index2,
                        translate: `calc(70px * (${index2 - x / 2})) 0`,
                      }}
                    >
                      {spanList.map((_, index3) => {
                        return <span key={index3} className={"item"}></span>;
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
