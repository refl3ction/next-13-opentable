import { Item } from "@prisma/client";

export default function RestaurantMenu({ items }: { items: Item[] }) {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          {items.length > 0 ? (
            items.map((item) => {
              return (
                <div key={item.id} className=" border rounded p-3 w-[49%] mb-3">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="font-light mt-1 text-sm">{item.description}</p>
                  <p className="mt-7">{item.price}</p>
                </div>
              );
            })
          ) : (
            <div className="flex flex-wrap">
              <p>This restaurant has no menu items</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
