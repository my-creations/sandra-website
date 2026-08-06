import React from 'react';
import { ImInstagram } from 'react-icons/im';
import { FaTiktok } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="hidden items-center lg:flex">
      <ul className="flex items-center gap-x-4">
        <li>
          <a
            href="https://www.instagram.com/sandra_camil0"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-lg text-cocoa-light transition hover:text-blush-deep"
          >
            <ImInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com/@sandra_camil0"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="text-lg text-cocoa-light transition hover:text-blush-deep"
          >
            <FaTiktok />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
