import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";
// import { signOut } from "@/auth";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-darkPurple">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-purple p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40 text-2xl font-bold">
          Mymoney
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-0 md:flex-col md:space-x-0 md:space-y-5">
        <NavLinks />
        <span className="border-b w-10/12 border-purple self-center border-r-8 hidden md:block"></span>
        <div className="hidden h-auto w-full grow rounded-md bg-darkPurple md:block"></div>
        <form
          action={async () => {
            "use server";
            //await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-darkPurple p-3 text-sm font-medium hover:bg-lightPurple md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
