import { Restaurant, Review } from "@prisma/client";
export function getRestaurantRating(
  restaurant: Restaurant & { reviews: Review[] }
) {
  const { reviews } = restaurant;

  if (!reviews) {
    return 0;
  }
  if (reviews.length === 0) {
    return 0;
  }
  const total = reviews.reduce((acc, review) => acc + review.rating, 0);
  return total / reviews.length;
}
