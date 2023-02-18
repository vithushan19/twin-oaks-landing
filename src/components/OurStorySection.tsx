import Image from "next/image";

export default function OurStorySection() {
  return (
    <div
      id="aboutus"
      className="font-divlayfair flex w-full flex-col items-center bg-navyBlue px-16 text-center text-white sm:px-60"
    >
      <p className="mb-5 mt-20 font-playfair text-4xl">Our Story</p>
      <div className="mb-16 h-px w-full bg-brown sm:w-110"></div>
      <p className="mb-8 font-roboto text-lg font-light">
        Twin Oaks is a neighbourhood restaurant, bar & terrace. A place to catch
        up with an old pal, share a delicious meal with family or celebrate a
        special milestone.
      </p>
      <div className="mb-20">
        <Image src="/images/acorns.svg" alt="acorns" width={48} height={48} />
      </div>
    </div>
  );
}
