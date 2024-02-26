import Cursor from "@/components/cursor";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="grid min-h-[30rem] place-items-center">
      <div className="absolute top-7 left-7">
        <Link className="flex items-center gap-3 hover:font-bold hover:dark:text-white/40 hover:scale-125 transition-all duration-300" href="/">
          <FaLongArrowAltLeft /> Go Back
        </Link>
      </div>
      <div className="text-center">
        <h1 className="text-8xl font-bold">404 Error</h1>
        <h2 className="text-5xl font-semibold">Page could not be located.</h2>
      </div>
      <Cursor />
    </div>
  );
}
