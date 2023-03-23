import RestaurantMenu from "@/components/Restaurant/Menu";
import RestaurantNavbar from "@/components/Restaurant/Navbar";

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavbar slug={slug} />
      <RestaurantMenu />
    </div>
  );
}
