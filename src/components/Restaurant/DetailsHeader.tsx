export default function RestaurantDetailsHeader({ name }: { name: string }) {
  const nameList = name.split("-");
  nameList[nameList.length - 1] = "(" + nameList[nameList.length - 1] + ")";
  const title = nameList.join(" ");

  return (
    <div className="h-96 overflow-hidden">
      <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
        <h1 className="text-7xl text-white capitalize text-shadow text-center">
          {title}
        </h1>
      </div>
    </div>
  );
}
