import Image from "next/image";

export default function HoursAndContactSection() {
  return (
    <div
      id="hours"
      className="grid grid-cols-1 bg-marble bg-repeat-round font-roboto text-xl sm:grid-cols-2 text-black"
    >
      <div className="px-16 sm:px-36">
        <div className="mt-16">
          <Image
            src="/images/ml2.svg"
            alt="acorns"
            width={230}
            height={190}
            objectFit="contain"
          />
        </div>

        <p className="mt-10 mb-8 font-playfair text-2xl">Opening Hours</p>

        <div className="mt-5 flex flex-col">
          <p className="font-regular font-roboto text-xl text-amber-900">
            Monday & Tuesday{" "}
          </p>
          <p className="mt-2 font-roboto text-xl font-light">Open from 9am - 4pm </p>
          <p className="mt-2 font-roboto text-xl font-light">Breakfast served 9am - 12pm </p>
          <p className="mt-2 font-roboto text-xl font-light">Lunch served 12pm - 3pm </p>
        </div>

        <div className="mt-5 flex flex-col">
          <p className="font-regular font-roboto text-xl text-amber-900">
            Wednesday & Thursday{" "}
          </p>
          <p className="mt-2 font-roboto text-xl font-light">Open from 9am - 11pm </p>
          <p className="mt-2 font-roboto text-xl font-light">Breakfast served 9am - 12pm </p>
          <p className="mt-2 font-roboto text-xl font-light">Lunch served 12pm - 3pm </p>
          <p className="mt-2 font-roboto text-xl font-light">Dinner served 5pm - 9pm </p>
        </div>
        <div className="mt-5 flex flex-col">
          <p className="font-regular font-roboto text-xl text-amber-900">
            Friday{" "}
          </p>
          <p className="mt-2 font-roboto text-xl font-light">Open from 9am - 12am </p>
           <p className="mt-2 font-roboto text-xl font-light">Breakfast served 9am - 12pm </p>
          <p className="mt-2 font-roboto text-xl font-light">Lunch served 12pm - 3pm </p>
          <p className="mt-2 font-roboto text-xl font-light">Dinner served 5pm - 9pm </p>
        </div>
        <div className="mt-5 flex flex-col">
          <p className="font-regular font-roboto text-xl text-amber-900">
            Saturday{" "}
          </p>
          <p className="mt-2 font-roboto text-xl font-light">Open from 10am - 12am </p>
           <p className="mt-2 font-roboto text-xl font-light">Brunch served 10am - 3:30pm</p>
          <p className="mt-2 font-roboto text-xl font-light">Dinner served 5pm-9pm </p>
        </div>
        <div className="mt-5 flex flex-col">
          <p className="font-regular font-roboto text-xl text-amber-900">
            Sunday{" "}
          </p>
          <p className="mt-2 font-roboto text-xl font-light">Open from 10am - 9pm </p>
           <p className="mt-2 font-roboto text-xl font-light">Brunch served 10am - 2:30pm</p>
          <p className="mt-2 font-roboto text-xl font-light">Dinner served 3:30pm-8pm </p>
        </div>

        <p className="mt-10 mb-8 font-playfair text-2xl">Contact</p>

        <div className="mt-5 flex flex-col">
          <div className="flex items-center">
            <div className="mr-0 flex flex-col items-center"></div>
            <p className="font-regular text-amber-900">Email</p>
          </div>
          <p className="mt-2 font-roboto text-xl font-light">
            twinoaksdublin@gmail.com{" "}
          </p>
        </div>

        <div className="mt-5 flex flex-col">
          <div className="flex">
            <div className="mr-0"></div>
            <p className="font-regular text-amber-900">Phone</p>
          </div>

          <p className="mt-2 font-roboto text-xl font-light">(01) 567 1759 </p>
        </div>

        <div className="mt-5 mb-20 flex flex-col">
          <div className="flex">
            <div className="mr-0"></div>
            <p className="font-regular text-amber-900">Address</p>
          </div>
          <p className="mt-2 font-roboto text-xl font-light">
            Unit 10, Ashleigh Retail Center,{" "}
          </p>
          <p className="font-roboto text-xl font-light">
            Castleknock Village, D15 H9YD{" "}
          </p>
        </div>
      </div>
      <div id="reserve" className="mx-16 mb-16 mt-16 sm:mx-24 sm:mt-48">
        <p className="font-roboto text-lg font-light">
          Please contact us if you have any questions regarding private dining,
          reservations & menus.
        </p>
        <div
          className="mt-10 hidden sm:block"
          style={{ height: "490px", width: "288px" }}
        >
          <script
            type="text/javascript"
            src="//www.opentable.com/widget/reservation/loader?rid=278919&type=standard&theme=tall&color=1&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website"
            defer
          ></script>
        </div>
      </div>
    </div>
  );
}
