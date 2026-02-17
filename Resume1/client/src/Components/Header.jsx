import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-[#0b1d26] text-white min-h-screen">
        {/* HEADER */}
        <header className="w-full">
          <div className="max-w-[1200px] mx-auto flex justify-between items-center py-6 px-6">
            {/* Logo */}
            <h1 className="text-lg font-semibold tracking-wide">Yugant Nath</h1>

            {/* Menu */}
            <nav>
              <ul className="flex gap-10 text-sm text-gray-300">
                <li className="hover:text-orange-400 cursor-pointer">Home</li>
                <li className="hover:text-orange-400 cursor-pointer">About</li>
                <li className="hover:text-orange-400 cursor-pointer">
                  Projects
                </li>
                <li className="hover:text-orange-400 cursor-pointer">
                  Contacts
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="max-w-[1200px] mx-auto px-6 py-20 flex items-center justify-between">
          {/* LEFT SIDE */}
          <div>
            <p className="text-3xl font-semibold mb-4">
              He<span className="hover:text-orange-400">llo.</span>
            </p>

            <p className="text-gray-300  hover:text-orange-400 transition duration-300">
              I'm Yugant-Nath
            </p>

            <h1 className="text-5xl font-bold mb-6">Software Developer</h1>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded">
                Got a project?
              </button>

              <button className="border border-orange-500 px-6 py-3 rounded hover:bg-orange-500">
                My resume
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            {/* Orange circle */}
            <div className="w-[300px] h-[300px] rounded-full border-[20px] border-orange-500 absolute top-5 left-5"></div>

            {/* Image */}
            <img
              src="./assets/yug.png"
              alt="profile"
              className="relative w-[320px] z-10"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
