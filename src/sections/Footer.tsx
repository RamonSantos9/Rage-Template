import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <Logo className="h-6 w-6" />
            <div className="font-medium">Rage</div>
          </div>
          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
            <a
              href="#"
              className="text-black/70 hover:text-black text-xs md:text-sm transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-black/70 hover:text-black text-xs md:text-sm transition"
            >
              Developers
            </a>
            <a
              href="#"
              className="text-black/70 hover:text-black text-xs md:text-sm transition"
            >
              Company
            </a>
            <a
              href="#"
              className="text-black/70 hover:text-black text-xs md:text-sm transition"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-black/70 hover:text-black text-xs md:text-sm transition"
            >
              Changelog
            </a>
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <XSocial className="text-black/40 hover:text-black transition" />
            <InstSocial className="text-black/40 hover:text-black transition" />
            <YTSocial className="text-black/40 hover:text-black transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};
