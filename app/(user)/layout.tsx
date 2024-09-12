import NavButtons from "@/components/NavButtons";
import { ReactNode } from "react";

type Prop = Readonly<{
  children: ReactNode;
}>;

export default function UserLayout({ children }: Prop) {
  return (
    <main className="w-full  min-h-screen">
      <div className="bg-[#292929] hidden sm:block z-[100] w-full fixed top-0 right-0 left-0 h-16"></div>
      <div className="top-0 sm:top-[4rem] relative grid grid-cols-[4rem_1fr] h-[100dvh] sm:min-h-[calc(100dvh-4rem)]">
        {/* Fixed Navigation Buttons */}
        <div className="bg-[#FEFEFE08] fixed top-0 sm:top-[4rem] left-0 w-[4rem] h-[100dvh] sm:h-[calc(100dvh-4rem)]">
          <NavButtons />
        </div>

        {/* Scrollable content */}
        <div className="left-[4rem] relative overflow-x-hidden w-[calc(100vw-4rem)]">{children}</div>
      </div>
    </main>
  );
}
