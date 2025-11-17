import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { Dictionary } from "@/lib/types";

export const Footer = ({ dict }: { dict: Dictionary }) => {
  return (
    <footer className="w-full border-t border-brand-assets bg-background pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          {/* BRAND */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logowhite.png"
                alt="logo de reddito"
                height={120}
                width={120}
              />
            </Link>

            <p className="max-w-sm text-base text-gray-400 leading-relaxed">
              {dict.footer.brand.description}
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-2">
              <SocialLink
                href="https://www.linkedin.com/company/redditobooks/"
                icon={<LinkedInIcon />}
                label="LinkedIn"
              />
              <SocialLink href="https://www.instagram.com/marcos_accounting/" icon={<InstagramIcon />} label="Instagram" />
              <SocialLink href="https://www.facebook.com/redditobooks" icon={<FacebookIcon />} label="Facebook" />
            </div>
          </div>

          {/* COMPANY */}
          <div className="flex flex-col gap-4">
            <h4 className="font-switzer text-sm font-bold uppercase tracking-widest text-white">
              {dict.footer.company.title}
            </h4>
            <ul className="flex flex-col gap-3">
              <FooterLink href="#about">{dict.footer.company.about}</FooterLink>
              <FooterLink href="#services">
                {dict.footer.company.services}
              </FooterLink>
              <FooterLink href="#testimonials">
                {dict.footer.company.clients}
              </FooterLink>
              <FooterLink href="#booking">
                {dict.footer.company.contact}
              </FooterLink>
            </ul>
          </div>

          {/* OFFICE */}
          <div className="flex flex-col gap-4">
            <h4 className="font-switzer text-sm font-bold uppercase tracking-widest text-white">
              {dict.footer.office.title}
            </h4>
            <address className="not-italic flex flex-col gap-3 text-gray-400 text-sm">
              <p>{dict.footer.office.phone}</p>
              <p>{dict.footer.office.address}</p>
              <p>{dict.footer.office.area}</p>

              <a
                href="mailto:info@redditobooks.com"
                className="text-brand-main hover:text-white transition-colors"
              >
                info@redditobooks.com
              </a>
            </address>
          </div>
        </div>

        <div className="my-16 h-px w-full bg-linear-to-r from-transparent via-brand-assets to-transparent"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-500 sm:flex-row">
          <div className="flex gap-6">
            <span>&copy; {new Date().getFullYear()} Reddito Books.</span>
            <span className="hidden sm:inline">|</span>
            <span>{dict.footer.bottom.rights}</span>
          </div>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              {dict.footer.legal.privacy}
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              {dict.footer.legal.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- SUBCOMPONENTES ---
const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link
      href={href}
      className="text-sm text-gray-400 transition-colors hover:text-brand-main hover:translate-x-1 inline-block"
    >
      {children}
    </Link>
  </li>
);

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <Link
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-assets text-gray-400 transition-all hover:border-brand-main hover:bg-brand-main hover:text-white"
  >
    {icon}
  </Link>
);

// --- ICONOS SVG ---
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <g clipPath="url(#linkedin_svg__a)">
      <path d="M5.583 3.174c0 1.217-1.008 2.174-2.291 2.174C2.008 5.348 1 4.39 1 3.174S2.008 1 3.292 1s2.291.957 2.291 2.174m0 3.913H1V21h4.583zm7.334 0H8.333V21h4.584v-7.304c0-4.087 5.5-4.435 5.5 0V21H23v-8.783C23 5.347 14.842 5.61 12.917 9z"></path>
    </g>
    <defs>
      <clipPath id="linkedin_svg__a">
        <path fill="#fff" d="M1 1h22v20H1z"></path>
      </clipPath>
    </defs>
  </svg>
);
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <g clipPath="url(#instagram_svg__a)">
      <path d="M12 3.833c2.667 0 3 0 4.083.084 2.75.083 4 1.416 4.084 4.083.083 1.083.083 1.333.083 4s0 3-.083 4c-.084 2.667-1.417 4-4.084 4.083-1.083.084-1.333.084-4.083.084-2.667 0-3 0-4-.084C5.25 20 4 18.667 3.917 16c-.084-1.083-.084-1.333-.084-4s0-3 .084-4C4 5.333 5.333 4 8 3.917c1-.084 1.333-.084 4-.084M12 2c-2.75 0-3.083 0-4.083.083C4.25 2.25 2.25 4.25 2.083 7.917 2 8.917 2 9.25 2 12s0 3.083.083 4.083c.167 3.667 2.167 5.667 5.834 5.834C8.917 22 9.25 22 12 22s3.083 0 4.083-.083c3.667-.167 5.667-2.167 5.834-5.834C22 15.083 22 14.75 22 12s0-3.083-.083-4.083C21.75 4.25 19.75 2.25 16.083 2.083 15.083 2 14.75 2 12 2m0 4.833c-2.833 0-5.167 2.334-5.167 5.167S9.167 17.167 12 17.167s5.167-2.334 5.167-5.167S14.833 6.833 12 6.833m0 8.5A3.343 3.343 0 0 1 8.667 12c0-1.833 1.5-3.333 3.333-3.333s3.333 1.5 3.333 3.333-1.5 3.333-3.333 3.333M17.333 5.5c-.666 0-1.166.5-1.166 1.167 0 .666.5 1.166 1.166 1.166.667 0 1.167-.5 1.167-1.166C18.5 6 18 5.5 17.333 5.5"></path>
    </g>
    <defs>
      <clipPath id="instagram_svg__a">
        <path fill="#fff" d="M2 2h20v20H2z"></path>
      </clipPath>
    </defs>
  </svg>
);
const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <g clipPath="url(#facebook_svg__a)">
      <path d="M10.267 9.355H8.053v3.247h2.214v9.742h3.69v-9.742h2.657l.295-3.247h-2.952v-1.38c0-.73.148-1.055.812-1.055h2.14V2.86h-2.804c-2.657 0-3.838 1.3-3.838 3.735z"></path>
    </g>
    <defs>
      <clipPath id="facebook_svg__a">
        <path fill="#fff" d="M2 2h20.368v20.368H2z"></path>
      </clipPath>
    </defs>
  </svg>
);
