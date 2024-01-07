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
        Twin Oaks is your neighborhood restaurant.
      </p>
      <p className="mb-8 font-roboto text-lg font-light">
      Focusing on the best local produce & warm hospitality served in a beautifully designed space.
      We source the very best Steaks, Seafood & Veg from local suppliers in North Co Dublin. 
      We are passionate about cocktails, we do all the classics and a few with our own twist.
     </p>
      <p className="mb-8 font-roboto text-lg font-light">
We serve breakfast Monday to Friday & Brunch on Weekends - from Homemade Scones & Pastries, Blueberry pancakes, Avocado toast, a Full Irish and more. All served with fresh locally Roasted Coffee.
      </p>
      <p className="mb-8 font-roboto text-lg font-light">
      Our Lunch Menu has Soups, Sandwiches, Salads, Fish & Chips, Fresh Pastas and Burgers, alongside weekly specials. 
      </p>
      <p className="mb-8 font-roboto text-lg font-light">
      We serve our Weekend Roast on Saturdays & Sundays with a prime cut of slowly Roasted Irish Beef alongside all the trimmings.
      </p>
      <p className="mb-8 font-roboto text-lg font-light">
      We have 10 beers on tap and a wide range of wines. Book your table on our website or call us at 01 567 1759.
      </p>
      <div className="mb-20">
        <Image src="/images/acorns.svg" alt="acorns" width={48} height={48} />
      </div>
    </div>
  );
}
