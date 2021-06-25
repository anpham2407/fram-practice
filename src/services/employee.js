import { EMPLOYEE } from "../constant";
export const list = async () => {
  const res = await fetch(EMPLOYEE);
  const result = await res.json();
  return result;
};

export default {
  list,
};
