"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "react-feather";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleScroll() {
    if (window.pageYOffset > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <button
      className={`fixed bottom-4 right-4 z-10 rounded-full bg-secondary-500 text-white p-3 transition-opacity ${
        showButton ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleScrollToTop}
      style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}
    >
      <ArrowUp size={24} color="#fff" />
    </button>
  );
}
