import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex border-t-1 border-white flex-col items-center justify-center bg-navyBlue p-8 font-roboto font-light text-white">
      {/* <div className="flex flex-col items-center justify-center sm:flex-row">
        <p className="sm:mr-10">Careers</p>
        <p className="sm:mr-10">Terms & Conditions</p>
        <p className="">Cookie Policy</p>
      </div> */}
      <p className="text-center">© Twin Oaks 2022</p>
      <Link href="https://skillify.ca" passHref={true}>
        <p className="col-span-12 text-center sm:col-span-4 sm:col-start-5">
          Designed & Developed by{" "}
          <span className="text-yellow-600">Skillify</span>
        </p>
      </Link>
    </div>
  );
}
