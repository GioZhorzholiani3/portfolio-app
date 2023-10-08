import { useState } from "react";

const useNavController = () => {
  const [activeNav, setActiveNav] = useState<string>("#");

  const handleNavClick = (navId: string) => {
    setActiveNav(navId);
  };

  return {
    activeNav,
    handleNavClick,
  };
};

export default useNavController;
