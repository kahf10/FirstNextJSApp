import AppLogo from "@/components/shared/app-logo";
import { roboto } from "@/components/shared/fonts";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-purple-400">
      <div className="flex h-20 shrink-0 items-center rounded-lg p-4 md:h-40 bg-white">
        <AppLogo />
      </div>

      <div className="flex items-center justify-center mt-8">
        <Image
          src="/NextJs.png"
          width={100}
          height={100}
          alt="Screenshots of the dashboard project showing desktop version"
          className="hidden md:block"
        />
        <Image
          src="/NextJs.png"
          width={100}
          height={100}
          alt="Screenshots of the dashboard project showing mobile version"
          className="block md:hidden"
        />
      </div>

      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-10">
        <p
          className={`${roboto.className} text-2xl md:text-4xl font-bold mb-6`}
        >
          Welcome to my first app
        </p>

        <Button asChild className="px-6 py-3 text-lg">
          <Link href="/login">
            <span>Log in</span>
            <ArrowRightIcon className="w-6 ml-2" />
          </Link>
        </Button>
      </div>
    </main>
  );
}
