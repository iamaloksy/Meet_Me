import Image from "next/image";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="fixed z-50 flex items-center justify-between w-full px-6 py-4 bg-dark-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/me.png"
          width={50}
          height={50}
          alt="meet-me logo"
          className="max-sm:size-10" // ✅ Fixed shorthand issue
        />
        <p className="max-sm:hidden bg-gradient-to-r from-sky-400 to-orange-500 bg-clip-text text-[30px] font-extrabold italic text-transparent">
          MeetMe
        </p>
      </Link>
      <div className="flex items-center gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
