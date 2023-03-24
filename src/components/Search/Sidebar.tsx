"use client";

import Link from "next/link";
import { PRICE } from "@prisma/client";

interface Props {
  locations: { name: string }[];
  cuisines: { name: string }[];
  searchParams: { location?: string; cuisine?: string; price?: PRICE };
}

export default function SearchSidebar({
  locations,
  cuisines,
  searchParams,
}: Props) {
  const prices = [
    { value: PRICE.CHEAP, label: "$" },
    { value: PRICE.REGULAR, label: "$$" },
    { value: PRICE.EXPENSIVE, label: "$$$" },
  ];
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => {
          return (
            <Link
              key={location.name}
              href={{
                pathname: "/search",
                query: { ...searchParams, location: location.name },
              }}
            >
              <p className="font-light text-reg capitalize hover:bg-gray-100">
                {location.name}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => {
          return (
            <Link
              key={cuisine.name}
              href={{
                pathname: "/search",
                query: { ...searchParams, cuisine: cuisine.name },
              }}
            >
              <p className="font-light text-reg capitalize hover:bg-gray-100">
                {cuisine.name}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="border-b mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {prices.map((price) => {
            return (
              <Link
                href={{
                  pathname: "/search",
                  query: { ...searchParams, price: price.value },
                }}
                className="border w-full text-reg text-center font-light p-2 hover:bg-gray-100"
              >
                {price.label}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-3 pb-4">
        <div className="flex">
          <Link
            href={{
              pathname: "/search",
              query: {},
            }}
            className="border w-full text-reg text-center font-light p-2 hover:bg-gray-100"
          >
            <p className="font-bold">Clear Filters</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
