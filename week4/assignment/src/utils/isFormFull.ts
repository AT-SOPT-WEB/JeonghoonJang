export const isFormFull = (id: string, passWd: string): boolean => {
  return id.trim() !== "" && passWd.trim() !== "";
};
