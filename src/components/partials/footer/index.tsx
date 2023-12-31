import React from "react";
import useFooterType from "@/hooks/useFooterType";
const Footer = ({ className = "custom-class" }) => {
  const [footerType] = useFooterType();
  const footerclassName = () => {
    switch (footerType) {
      case "sticky":
        return "sticky bottom-0 z-[999]";
      case "static":
        return "static";
      case "hidden":
        return "hidden";
    }
  };
  return (
    <footer className={className + " " + footerclassName()}>
      <div className="site-footer px-6 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-300 py-4">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5">
          <div className="text-center md:text-start  text-sm">
            COPYRIGHT &copy; 2023 BITSCOPE. All rights Reserved
          </div>
          <div className="md:text-right text-center text-sm">
            Made by{" "}
            <a
              href="https://bitscope.global"
              target="_blank"
              className="text-primary-500 font-semibold hover:text-black-500"
            >
              BitScope
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
