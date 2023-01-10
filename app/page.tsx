import Image from "next/image";
import { Poppins } from "@next/font/google";
import Nav from "./Nav";
import HeaderContent from "./HeaderContent";

const pop = Poppins({ weight: "300" });

export default function Home() {
  return (
    <main className="bg-[#2F2F2F] w-screen h-screen p-3">
      {/* header */}
      <section className=" h-[400px] rounded-md" id="grad">
        {/* navBar */}
        <Nav />
        {/* headerContent */}
        <HeaderContent />
      </section>
    </main>
  );
}
