import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 mt-5 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">&copy; 2024 notkoyo. All rights reserved.</small>
      <p className="text-xs">
        <span className="font-semibold">This site was built with:</span> Next.js / React, TypeScript,
        Tailwind CSS, Framer Motion and React Email & Resend.
      </p>
    </footer>
  );
}
