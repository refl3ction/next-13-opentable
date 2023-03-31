import Link from "next/link";
import RestaurantCardPrice from "./CardPrice";
import { Cuisine, Location, Restaurant, Review } from "@prisma/client";
import { getRestaurantRating } from "@/lib/utils";
import { RestaurantModel } from "@/lib/models/Restaurant";

interface Props {
  restaurant: RestaurantModel;
}

export default function RestaurantCard({ restaurant }: Props) {
  const rating = getRestaurantRating(restaurant);
  return (
    <Link
      href={`/restaurant/${restaurant.slug}`}
      className="text-gray-700 text-2xl"
    >
      <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
        <img src={restaurant.main_image} alt="" className="w-full h-36" />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>
          <div className="flex items-start">
            <div className="text-yellow-500 flex mb-2">
              {rating.toFixed(1)}
              <svg
                className="w-5 h-8 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <p className="ml-2">{restaurant.reviews.length} reviews</p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className=" mr-3">{restaurant.cuisine.name}</p>
            <RestaurantCardPrice price={restaurant.price} />
            <p>{restaurant.location.name}</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </div>
    </Link>
  );
}
