"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";  

const NavButtons = () => {
  const router = useRouter();
  const path = usePathname();
  // const [activeButton, setActiveButton] = useState("inbox");
  return (
    <div className="min-[500px]:grid max-[500px]:flex max-[500px]:h-full max-[500px]:pl-7 max-[500px]:items-center max-[500px]:justify-start justify-center w-full gap-5 min-[500px]:mt-7">
      <button
        onClick={() => {
          router.push("/inbox");
          // setActiveButton("inbox");
        }}
        className={`w-9 rounded-md px-2 ${
          path == "/inbox" ? "bg-[#06D440]" : "bg-[#FEFEFE0D]"
        } flex place-items-center`}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.00008 16.6667H16.6667V14H6.00008V16.6667ZM6.00008 12.6667H22.0001V9.99999H6.00008V12.6667ZM6.00008 8.66666H22.0001V5.99999H6.00008V8.66666ZM0.666748 27.3333V3.33332C0.666748 2.59999 0.927859 1.97221 1.45008 1.44999C1.9723 0.927768 2.60008 0.666656 3.33341 0.666656H24.6667C25.4001 0.666656 26.0279 0.927768 26.5501 1.44999C27.0723 1.97221 27.3334 2.59999 27.3334 3.33332V19.3333C27.3334 20.0667 27.0723 20.6944 26.5501 21.2167C26.0279 21.7389 25.4001 22 24.6667 22H6.00008L0.666748 27.3333ZM4.86675 19.3333H24.6667V3.33332H3.33341V20.8333L4.86675 19.3333Z"
            fill="#E8EAED"
          />
        </svg>
      </button>
      <button
        onClick={() => {
          router.push("/profile");
          // setActiveButton("profile");
        }}
        className={`w-9 rounded-md px-2 py-1 ${
          path == "/profile" ? "bg-[#06D440]" : "bg-[#FEFEFE0D]"
        } flex place-items-center`}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9999 11C9.53325 11 8.2777 10.4778 7.23325 9.43334C6.18881 8.3889 5.66658 7.13334 5.66658 5.66668C5.66658 4.20001 6.18881 2.94445 7.23325 1.90001C8.2777 0.855566 9.53325 0.333344 10.9999 0.333344C12.4666 0.333344 13.7221 0.855566 14.7666 1.90001C15.811 2.94445 16.3333 4.20001 16.3333 5.66668C16.3333 7.13334 15.811 8.3889 14.7666 9.43334C13.7221 10.4778 12.4666 11 10.9999 11ZM0.333252 21.6667V17.9333C0.333252 17.1778 0.527696 16.4833 0.916585 15.85C1.30547 15.2167 1.82214 14.7333 2.46659 14.4C3.84436 13.7111 5.24436 13.1945 6.66658 12.85C8.08881 12.5056 9.53325 12.3333 10.9999 12.3333C12.4666 12.3333 13.911 12.5056 15.3333 12.85C16.7555 13.1945 18.1555 13.7111 19.5333 14.4C20.1777 14.7333 20.6944 15.2167 21.0833 15.85C21.4721 16.4833 21.6666 17.1778 21.6666 17.9333V21.6667H0.333252ZM2.99992 19H18.9999V17.9333C18.9999 17.6889 18.9388 17.4667 18.8166 17.2667C18.6944 17.0667 18.5333 16.9111 18.3333 16.8C17.1333 16.2 15.9221 15.75 14.6999 15.45C13.4777 15.15 12.2444 15 10.9999 15C9.75547 15 8.52214 15.15 7.29992 15.45C6.0777 15.75 4.86658 16.2 3.66658 16.8C3.46659 16.9111 3.30547 17.0667 3.18325 17.2667C3.06103 17.4667 2.99992 17.6889 2.99992 17.9333V19ZM10.9999 8.33334C11.7333 8.33334 12.361 8.07223 12.8833 7.55001C13.4055 7.02779 13.6666 6.40001 13.6666 5.66668C13.6666 4.93334 13.4055 4.30557 12.8833 3.78334C12.361 3.26112 11.7333 3.00001 10.9999 3.00001C10.2666 3.00001 9.63881 3.26112 9.11658 3.78334C8.59436 4.30557 8.33325 4.93334 8.33325 5.66668C8.33325 6.40001 8.59436 7.02779 9.11658 7.55001C9.63881 8.07223 10.2666 8.33334 10.9999 8.33334Z"
            fill="#FEFEFE"
            fillOpacity="0.8"
          />
        </svg>
      </button>
    </div>
  );
};

export default NavButtons;
