"use client";

import { getRestaurantRating } from "@/lib/utils";
import { Restaurant, Review } from "@prisma/client";

export default function RestaurantDetails({
  restaurant,
}: {
  restaurant: Restaurant & { reviews: Review[] };
}) {
  const rating = getRestaurantRating(restaurant);
  return (
    <>
      <div className="mt-4 border-b pb-6">
        <h1 className="font-bold text-6xl">{restaurant.name}</h1>
      </div>
      <div className="flex items-end">
        <div className="ratings mt-2 text-yellow-500 flex items-end">
          {rating.toFixed(1)}
          <svg
            className="w-5 h-6 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        </div>
        <div>
          <p className="text-reg ml-4">{restaurant.reviews.length} Reviews</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-lg font-light">{restaurant.description}</p>
      </div>
      <div>
        <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
          {restaurant.images.length} photos
        </h1>
        <div className="flex flex-wrap">
          {restaurant.images.map((image) => {
            return (
              <img
                key={image}
                className="w-56 h-44 mr-1 mb-1"
                src={image}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
