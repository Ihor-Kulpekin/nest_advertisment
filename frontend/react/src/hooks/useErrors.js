import { useSelector } from "react-redux";

export const useErrors = (key) => {
  const { error } = useSelector((state) => state[key]);

  return {
    error
  }
}
