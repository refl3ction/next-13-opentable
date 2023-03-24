import db from "./db";

export const getLocations = async () => {
  const locations = await db.location.findMany({
    select: {
      name: true,
    },
  });
  return locations;
};
