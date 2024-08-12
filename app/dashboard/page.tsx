import Header from "@/app/ui/dashboard/header";
import Card from "@/app/ui/dashboard/card-totals";
import AnalyticsChart from "@/app/ui/dashboard/chart";
import CreditContainer from "@/app/ui/dashboard/credit-container";

export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <section className="flex flex-grow flex-col gap-7 md:flex-row">
        <main className="flex flex-col flex-1 gap-7">
          <div className="card-container flex gap-7 flex-col md:flex-row">
            <Card type="income" amount={632000} percentageChange={1.29} />
            <Card type="outcome" amount={632000} percentageChange={-1.29} />
          </div>
          <div className="py-4 px-5 bg-darkPurple rounded-3xl">
            <AnalyticsChart />
          </div>
        </main>
        <aside className="flex-0 w-full md:w-3/12">
          <CreditContainer />
        </aside>
      </section>
    </div>
  );
}
