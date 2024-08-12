import Header from "@/app/ui/dashboard/header";
import Card from "@/app/ui/dashboard/card-totals";

export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <div className="flex gap-7 flex-col md:flex-row">
        <Card type="income" amount={632000} percentageChange={1.29} />
        <Card type="outcome" amount={632000} percentageChange={-1.29} />
      </div>
    </div>
  );
}
