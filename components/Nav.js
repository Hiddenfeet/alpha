import React, { useState } from "react";

import Link from "next/link";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img
            src="https://shopinose.com/wp-content/uploads/2023/03/78b4ba1d-c647-4d6f-aab6-a2eff6d6957e-removebg-preview-e1680104061890-150x150.png"
            className=""
          />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link href="/" className="elementor-item elementor-item-active">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/mint" className="elementor-item">
                Mint
              </Link>
            </li>
            <li>
              <Link href="/stake" className="elementor-item">
                Stake
              </Link>
            </li>
            <li>
              <Link href="/swap" className="elementor-item">
                Swap
              </Link>
            </li>
            <li>
              <Link
                href="/whitePaper"
                target="_blank"
                className="elementor-item"
                passHref
              >
                Whitepaper
              </Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <img
                src="https://theclubappe-asad-ghouri.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhamburger.bd56af02.png&w=96&q=75"
                width={60}
                height={40}
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
