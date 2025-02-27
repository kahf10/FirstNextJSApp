import { APP_NAME } from "@/lib/constants";
import { openSans } from "./fonts";
import Link from "next/link";
import Image from "next/image";

export default function AppLogo() {
  return (
    <Link href="/" className="flex-start">
      <div
        className={`${openSans.className} flex flex-row items-end space-x-2`}
      >
        <Image
          src="/NextJs.png"
          width={32}
          height={32}
          alt={`${APP_NAME} Logo`}
          priority
        />
        <span className="text-xl">{APP_NAME}</span>
      </div>
    </Link>
  );
}
