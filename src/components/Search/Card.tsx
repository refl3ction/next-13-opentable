import Link from "next/link";
import RestaurantCardPrice from "../Restaurant/CardPrice";
import { getRestaurantRating } from "@/lib/utils";
import { RestaurantModel } from "@/lib/models/Restaurant";

export default function SearchCard({
  restaurant,
}: {
  restaurant: RestaurantModel;
}) {
  const rating = getRestaurantRating(restaurant);
  return (
    <>
      <div className="border-b flex pb-5">
        <img src={restaurant.main_image} alt="" className="w-44 h-36 rounded" />
        <div className="pl-5">
          <h2 className="text-3xl">{restaurant.name}</h2>
          <div className="flex items-start">
            <div className="flex mb-2">
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
            <p className="ml-2 text-sm">Awesome</p>
          </div>
          <div className="mb-9">
            <div className="font-light flex text-reg">
              <RestaurantCardPrice price={restaurant.price} />
              <p className="mr-4 capitalize">{restaurant.cuisine?.name}</p>
              <p className="mr-4 capitalize">{restaurant.location?.name}</p>
            </div>
          </div>
          <div className="text-red-600">
            <Link href={`/restaurant/${restaurant.slug}`}>
              View more information
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
