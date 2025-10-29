import React from "react";

export default function Footer(){
  return (
    <footer className="bg-white border-t border-bgLight">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-textGray">
        © {new Date().getFullYear()} D — All rights reserved.
      </div>
    </footer>
  );
}
