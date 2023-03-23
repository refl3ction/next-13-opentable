import Navbar from "@/components/Navbar";
import ReservationForm from "@/components/Reservation/Form";
import ReservationHeader from "@/components/Reservation/Header";

export default function Page() {
  return (
    <>
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          <ReservationHeader />
          <ReservationForm />
        </div>
      </div>
    </>
  );
}
