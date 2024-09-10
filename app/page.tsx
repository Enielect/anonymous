import Image from "next/image";
import RenderRegForm from "@/components/RenderRegForm";

export default function Home() {
  return (
    <main className="h-full">
      {/*creating an inbox*/}
      <RenderRegForm />
    </main>
  );
}
