"use client";
import { links } from "@/utils/links";
import Logo from "@/assets/logo.svg";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="py-4 px-8 bg-muted h-full">
      <Image src={Logo} alt="logo" className="mx-auto" />
      <div className="flex flex-col mt-20 gap-y-4">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Button
              asChild
              key={link.href}
              variant={link.href === pathname ? "default" : "link"}
            >
              <Link href={link.href}>
                <span>{Icon}</span>
                <span>{link.label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
}
export default Sidebar;
