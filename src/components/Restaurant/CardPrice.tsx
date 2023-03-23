import { PRICE } from "@prisma/client";

export default function RestaurantCardPrice({ price }: { price: string }) {
  let priceDisplay = "$";
  switch (price) {
    case PRICE.CHEAP:
      priceDisplay = "$";
      break;
    case PRICE.REGULAR:
      priceDisplay = "$$";
      break;
    case PRICE.EXPENSIVE:
      priceDisplay = "$$$";
      break;
    default:
      break;
  }
  return <p className="mr-3">{priceDisplay}</p>;
}
