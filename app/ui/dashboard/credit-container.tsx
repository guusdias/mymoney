import CreditCard from "@/app/ui/dashboard/credit-card";
import CardCarrousel from "@/app/ui/dashboard/card-carrousel";

export default function CreditContainer() {
  return (
    <div className="bg-darkPurple px-5 py-5 rounded-3xl flex flex-col justify-center">
      <div className="px-5">
        <h1 className="font-bold text-2xl mb-4">My Card</h1>
        <p className="text-sm font-thin">Card Balance</p>
        <p className="mb-3">${"14,443.44"}</p>
      </div>
      <div className="flex flex-col h-full w-full items-center">
        <CreditCard />
        <CardCarrousel />
      </div>
      <div></div>
    </div>
  );
}
