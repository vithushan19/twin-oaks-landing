import Image from 'next/image';

export default function Landing() {
  return (
    <div className='grid grid-cols-1'>
      <div className='flex h-16 items-center justify-around'>
        <div>Phone Number</div>
        <div>Menu</div>
        <div>Socials</div>
      </div>

      <div className='flex h-80 w-full flex-col items-center justify-center bg-green-100'>
        <Image src='/images/header-image.svg' alt='header' />
        <p>Opening Soon</p>
        <button>Reserve Now</button>
      </div>
      <div className='font-divlayfair flex w-full flex-col items-center bg-navyBlue text-xl text-white'>
        <h2>Our Story</h2>
        <p>
          Twin Oaks is a modern Irish gastro-pub located in the heart of
          Castleknock village. A place where you can bring family and friends to
          enjoy an elevated dining experience.
        </p>
        <p>
          Launching this Spring, Twin Oaks will serve contemporary Irish food,
          great cocktails and even greater pints.
        </p>
        <div className='h-16 w-16 bg-green-300' />
      </div>

      <div className='grid grid-cols-2 font-roboto text-xl text-white'>
        <div className='bg-greyBlue'>
          <h2>Careers</h2>
          <div className='h-px w-36 bg-brown' />
          <p>
            Are you looking for an exciting, new opportunity in the hospitality
            industry?
          </p>
          <p>
            We are hiring all levels of kitchen staff and all levels of front of
            house staff. Send us your resume!
          </p>
          <div>
            <button className='border-2 border-white p-4'>Send Resume</button>
          </div>
        </div>
        <div className='bg-red-100'></div>
      </div>

      <div className='grid grid-cols-2 font-roboto text-xl'>
        <div>
          <h2>Opening Hours</h2>

          <div className='flex flex-col'>
            <p>Lunch </p>
            <p>Thursday - Saturday </p>
            <p>12:30pm - 14:00 </p>
          </div>

          <div className='flex flex-col'>
            <p>Dinner </p>
            <p>Tuesday - Saturday</p>
            <p>18:30 - 21:30 </p>
          </div>

          <p>Contact </p>

          <div className='flex flex-col'>
            <p>Email </p>
            <p>info@twinoaksrestaurant </p>
          </div>

          <div className='flex flex-col'>
            <p>Phone</p>
            <p>+353 87 908 7089 </p>
          </div>

          <div className='flex flex-col'>
            <p>Address</p>
            <p>Unit 10, Ashleigh Retail Center, </p>
            <p>Castleknock Village, D15 H9YD</p>
          </div>
        </div>
        <div className='bg-blue-100'></div>
      </div>

      <div>Footer</div>
    </div>
  );
}
