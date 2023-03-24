import db from "./db";

export const getCuisines = async () => {
  const cuisines = await db.cuisine.findMany({
    select: {
      name: true,
    },
  });
  return cuisines;
};
