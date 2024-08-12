import Image from "next/image";

export default function CreditCard() {
  return (
    <main className="bg-gradient-to-br from-darkPurple to-lighterPurple p-6 rounded-3xl max-w-xs text-white flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="text-sm font-thin">Current Balance</p>
        <Image alt="card brand" src="/master-card.png" width={40} height={40} />
      </div>
      <h2 className="text-2xl font-medium mt-1">${"4,443.20"}</h2>
      <div className="mt-4 flex justify-between items-center text-lg">
        <p className="text-xs">5282 3456 7890 1289</p>
        <p className="text-xs">09/25</p>
      </div>
    </main>
  );
}
