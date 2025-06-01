import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const navLink = target.closest('a[href^="#"]');

      if (navLink) {
        e.preventDefault();
        const targetId = navLink.getAttribute("href")?.slice(1);
        const targetElement = document.getElementById(targetId || "");

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    document.addEventListener("click", handleNavClick);
    return () => document.removeEventListener("click", handleNavClick);
  }, []);
};
