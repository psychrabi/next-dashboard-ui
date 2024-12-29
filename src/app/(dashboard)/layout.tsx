import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[16%] xl:w-[8%]  p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">School Lama</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%] md:w-[92%] l:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
