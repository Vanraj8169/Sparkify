import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[60px] bg-black border-b border-white/60 p-3 flex justify-between items-center">
      <Link href={"/"}>
        <h2>Sparkify</h2>
      </Link>
    </div>
  );
};

export default Header;
