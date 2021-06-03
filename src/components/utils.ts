export const getShuffle = (arr: any[]): any[] => {
  return arr.sort(() => 0.5 - Math.random());
};

export default getShuffle;
