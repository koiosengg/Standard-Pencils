import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // or "smooth"
    });
  }, [hash, pathname]);

  return null;
}

export default ScrollToTop;
