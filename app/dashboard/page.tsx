import Header from "@/app/ui/dashboard/header";
import Card from "@/app/ui/dashboard/card-totals";

export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <section className="flex flex-grow flex-row">
        <main className="flex-1">
          <div className="card-container flex gap-7 flex-col md:flex-row">
            <Card type="income" amount={632000} percentageChange={1.29} />
            <Card type="outcome" amount={632000} percentageChange={-1.29} />
          </div>
        </main>
        <aside className="flex-0 w-5/12">esse é o aside por enquanto</aside>
      </section>
    </div>
  );
}
