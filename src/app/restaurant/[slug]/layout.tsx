import RestaurantDetailsHeader from "@/components/Restaurant/DetailsHeader";
import React from "react";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const slug = params.slug;
  return (
    <>
      <RestaurantDetailsHeader name={slug} />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </>
  );
}
