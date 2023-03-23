"use client";

import { Restaurant } from "@/app/restaurant/[slug]/page";

export default function RestaurantDetails({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  return (
    <>
      <div className="mt-4 border-b pb-6">
        <h1 className="font-bold text-6xl">{restaurant.name}</h1>
      </div>
      <div className="flex items-end">
        <div className="ratings mt-2 flex items-center">
          <p>*****</p>
          <p className="text-reg ml-3">4.9</p>
        </div>
        <div>
          <p className="text-reg ml-4">600 Reviews</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-lg font-light">
          The classics you love prepared with a perfect twist, all served up in
          an atmosphere that feels just right. That’s the Milestones promise.
          So, whether you’re celebrating a milestone, making the most of Happy
          Hour or enjoying brunch with friends, you can be sure that every
          Milestones experience is a simple and perfectly memorable one.
        </p>
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
