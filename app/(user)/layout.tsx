import NavButtons from "@/components/NavButtons";
import { ReactNode } from "react";

type Prop = Readonly<{
  children: ReactNode;
}>;

export default function UserLayout({ children }: Prop) {
  return (
    <main className="w-full  min-h-screen">
      <div className="bg-[#292929] hidden sm:block z-[100] w-full fixed top-0 right-0 left-0 h-16"></div>
      <div className="top-0 sm:top-[4rem] relative min-[500px]:grid min-[500px]:grid-cols-[4rem_1fr] h-[100dvh] sm:h-[calc(100dvh-4rem)]">
        {/* Fixed Navigation Buttons */}
        <div className="bg-[#FEFEFE08] fixed top-0 sm:top-[4rem] w-[100vw] max-[500px]:right-0 left-0 min-[500px]:w-[4rem] h-[4rem] min-[500px]:h-[100dvh] sm:h-[calc(100dvh-4rem)]">
          <NavButtons />
        </div>

        {/* Scrollable content */}
        <div className="min-[500px]:left-[4rem] relative max-[500px]:top-[4rem] max-[500px]:h-[calc(100dvh-4rem)] overflow-x-hidden min-[500px]:w-[calc(100vw-4rem)]">{children}</div>
      </div>
    </main>
  );
}
