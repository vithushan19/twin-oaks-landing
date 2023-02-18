import Image from "next/image";

export default function CareerSection() {
  return (
    <div
      id="careers"
      className="grid grid-cols-1 font-roboto text-white sm:grid-cols-2"
    >
      <div className="bg-greyBlue pt-0 pl-16 pr-16 sm:pr-32 sm:pl-36">
        <p className="mt-20 mb-5 font-playfair text-4xl">Careers</p>

        <div className="mb-16 h-px w-64 bg-brown" />
        <p className="mb-8 font-roboto text-lg font-light">
          Are you looking for an exciting, new opportunity in the hospitality
          industry?
        </p>
        <p className="font-roboto text-lg font-light">
          We are hiring all levels of kitchen staff and all levels of front of
          house staff. Send us your resume!
        </p>
        <div className="mt-16 mb-24">
          <button className="rounded-sm border-1 border-white p-4">
            <a
              href="mailto:careers@twinoaks.ie"
              className="font-roboto text-base font-light"
            >
              Send Resume
            </a>
          </button>
        </div>
      </div>
      <div className="bg-red-100">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image
            src="/images/Twin oaks bar .jpg"
            alt="careers"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
