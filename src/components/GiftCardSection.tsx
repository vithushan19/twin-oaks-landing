import Link from "next/link";

export default function GiftCardSection() {
  return (
    <div
      id="giftcards"
      className="font-divlayfair flex w-full flex-col items-center bg-red-50 h px-16 text-center text-black sm:px-60"
    >
      <p className="mb-5 mt-20 font-playfair text-4xl">Gift Vouchers</p>
      <div className="mb-16 h-px w-full bg-brown sm:w-110" />
      <p className="mb-8 font-roboto text-lg font-light from-stone-900">
        Give the gift of dining at the Twin Oaks! E-gift vouchers are available
        to purchase at any value.
      </p>
      <button className="font-lato mb-40 rounded-sm bg-brown px-6 py-4 font-light text-white">
        <Link href="https://gift.loylap.com/twinoaks/5898/">Buy a Voucher</Link>
      </button>
    </div>
  );
}
