import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Default = () => {
  const navidate = useNavigate();
  useEffect(() => {
    navidate("pokedex");
  }, [navidate]);

  return <></>;
};
