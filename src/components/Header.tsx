import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className=" flex h-full w-full flex-col items-center justify-center p-16 sm:p-20 lg:p-40">
      {/* Desktop Only */}
      <div className="hidden lg:block">
        {" "}
        <Image
          src="/images/header_web_logo.svg"
          alt="header"
          width={770}
          height={174}
        />
      </div>
      {/* Mobile Only */}
      <div className="mb-10 mt-10 lg:hidden">
        {" "}
        <Image
          src="/images/ml2.svg"
          alt="acorns"
          width={460}
          height={380}
          objectFit="contain"
        />
      </div>

      <button className="font-lato mb-40 hidden rounded-sm bg-brown px-6 py-4 font-light text-white sm:block">
        <Link href="#reserve">Reserve a Table </Link>
      </button>

      <div
        className="block sm:hidden"
        style={{ height: "490px", width: "288px" }}
      >
        <script
          type="text/javascript"
          src="//www.opentable.com/widget/reservation/loader?rid=278919&type=standard&theme=tall&color=1&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website"
          defer
        ></script>
      </div>
    </div>
  );
}
