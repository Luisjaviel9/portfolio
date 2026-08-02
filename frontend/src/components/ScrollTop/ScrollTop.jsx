import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const controlarScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {0
        setVisible(false);
      }
    };

    window.addEventListener("scroll", controlarScroll);

    return () => {
      window.removeEventListener("scroll", controlarScroll);
    };
  }, []);

  const volverArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      onClick={volverArriba}
      className="fixed bottom-6 right-6 w-12 h-12 bg-cyan-500 hover:bg-cyan-600 text-white text-2xl font-bold rounded-full shadow-lg flex items-center justify-center transition duration-300 cursor-pointer"
      aria-label="Volver arriba"
    >
      ↑
    </button>
  );
}