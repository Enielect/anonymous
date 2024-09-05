import NavButtons from "@/components/NavButtons";
import { ReactNode } from "react";

type Prop = Readonly<{
  children: ReactNode;
}>;

export default function UserLayout({ children }: Prop) {
  return (
    <main className="w-full">
      <div className="bg-[#080809] w-full fixed top-0 right-0 left-0 h-16"></div>
      <div className="w-[52px] mt-[4rem] fixed min-h-[calc(100vh-49px)] bg-[#FEFEFE08]">
        <NavButtons />
      </div>
      <div className="ml-[3.7rem]  pt-[4rem]">{children}</div>
    </main>
  );
}
