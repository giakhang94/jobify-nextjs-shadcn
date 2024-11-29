import Image from "next/image";
import Logo from "../assets/logo.svg";
import LadingImg from "../assets/main.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={Logo} alt="app logo" />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr_400px] items-center">
        <div className="">
          <h1 className="capitalize text-4xl md:text-7xl font-bold tracking-[2px]">
            job
            <span className="text-primary">tracking</span>
          </h1>
          <p className="leading-loose max-w-md mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            nostrum veniam aperiam consequuntur neque temporibus tempora
            blanditiis, consequatur fugit delectus, aspernatur quos dolorum
            numquam, praesentium rerum corporis ratione? Ex, in?
          </p>
          <Button asChild className="mt-4">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <Image src={LadingImg} alt="lading img" className="hidden lg:block" />
      </section>
    </main>
  );
}
