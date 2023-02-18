import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      {/* Mobile Only - Social Links */}
      <div className="mt-4 flex justify-center p-4 lg:hidden">
        <div className="mr-10">
          <a href="tel:015671759">
            <Image src="/images/phone.svg" alt="phone" width={15} height={20} />
          </a>
        </div>{" "}
        <div className="mr-10">
          <a
            target="_blank"
            href="https://twitter.com/twinoak02355553"
            rel="noreferrer"
          >
            <Image
              src="/images/twitter.svg"
              alt="twitter"
              width={20}
              height={20}
            />
          </a>
        </div>
        <div className="mr-10">
          <a
            target="_blank"
            href="https://www.facebook.com/Twin-Oaks-Restaurant-105746908840426"
            rel="noreferrer"
          >
            <Image
              src="/images/facebook.svg"
              alt="facebook"
              width={20}
              height={20}
            />
          </a>
        </div>
        <div className="">
          <a
            target="_blank"
            href="https://www.instagram.com/twinoaks.ie/"
            rel="noreferrer"
          >
            <Image
              src="/images/Instagram.svg"
              alt="instagram"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>
      <div className="hidden h-16 items-center justify-between bg-white bg-opacity-50 lg:flex">
        {/* Phone */}
        <div className="flex items-center">
          <div className="ml-8 flex items-center">
            <a href="tel:015671759">
              <div className="flex">
                <Image
                  src="/images/phone.svg"
                  alt="phone"
                  width={15}
                  height={20}
                />
                <p className="ml-4">015671759</p>
              </div>
            </a>
          </div>{" "}
          <p></p>
        </div>
        {/* Nav Menu */}
        <div className="flex items-center">
          <div className="flex">
            <div className="mr-14">
              <Link href="#menu">MENU</Link>
            </div>
            <div className="mr-14">
              <Link href="#aboutus">OUR STORY</Link>
            </div>
            <div className="mr-14">
              <Link href="#giftcards">GIFT VOUCHERS</Link>
            </div>
            <div className="mr-14">
              <Link href="#careers">CAREERS</Link>
            </div>
            <div className="">
              <Link href="#hours">CONTACT</Link>
            </div>
          </div>
        </div>
        {/* Social Links */}
        <div className="flex">
          <div className="mr-10">
            <a
              target="_blank"
              href="https://twitter.com/twinoak02355553"
              rel="noreferrer"
            >
              <Image
                src="/images/twitter.svg"
                alt="twitter"
                width={20}
                height={20}
              />
            </a>
          </div>{" "}
          <div className="mr-10">
            <a
              target="_blank"
              href="https://www.facebook.com/Twin-Oaks-Restaurant-105746908840426"
              rel="noreferrer"
            >
              <Image
                src="/images/facebook.svg"
                alt="facebook"
                width={20}
                height={20}
              />
            </a>
          </div>
          <div className="mr-10">
            <a
              target="_blank"
              href="https://www.instagram.com/twinoaks.ie/"
              rel="noreferrer"
            >
              <Image
                src="/images/Instagram.svg"
                alt="instagram"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
