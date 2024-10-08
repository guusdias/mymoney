import CreditCard from "@/app/ui/dashboard/credit-card";
import CardCarrousel from "@/app/ui/dashboard/card-carrousel";

export default function CreditContainer() {
  return (
    <div className="bg-darkPurple px-6 py-6 rounded-3xl flex flex-col justify-center">
      <div className="">
        <h1 className="font-bold text-2xl mb-4">My Card</h1>
        <p className="text-sm font-thin">Card Balance</p>
        <p className="mb-3 font-bold">${"14,443.44"}</p>
      </div>
      <div className="flex flex-col h-full w-full items-center">
        <CreditCard />
        <CardCarrousel />
      </div>
      <div></div>
    </div>
  );
}
