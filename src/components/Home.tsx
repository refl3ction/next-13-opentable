"use client";

import Header from "./Header";
import RestaurantCard from "./Restaurant/Card";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {/* <RestaurantCard /> */}
      </div>
    </main>
  );
}
