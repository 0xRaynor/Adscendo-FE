export const commas = (x: number) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const normalizeNumber = (x: number, decimal = 2) => {
  const zerosCount =
    (String(x).split(".")?.[1] || "").match(/^0+/)?.[0]?.length || 0;
  return x.toFixed(zerosCount + decimal).replace(/\.?0+$/, "");
};