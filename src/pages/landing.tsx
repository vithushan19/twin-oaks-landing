import Image from 'next/image';
import Link from 'next/link';

export default function Landing() {
  return (
    <div className='grid grid-cols-1'>
      <div className='flex h-16 items-center justify-around'>
        <div className='flex items-center'>
          <div className='mr-4 flex flex-col items-center '>
            <Image src='/images/phone.svg' alt='phone' width={15} height={20} />
          </div>{' '}
          <p>647-431-4312</p>
        </div>
        <div className='flex'>
          <div className='mr-4'>
            <Link href='/'>About Us</Link>
          </div>
          <div className='mr-4'>
            <Link href='/'>Careers</Link>
          </div>
          <div className='mr-4'>
            <Link href='/'>Contact</Link>
          </div>
        </div>
        <div className='flex'>
          <div className='mr-4'>
            <Image
              src='/images/twitter.svg'
              alt='twitter'
              width={20}
              height={20}
            />
          </div>{' '}
          <div className='mr-4'>
            <Image
              src='/images/facebook.svg'
              alt='facebook'
              width={20}
              height={20}
            />
          </div>
          <div className='mr-4'>
            <Image
              src='/images/Instagram.svg'
              alt='instagram'
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>

      <div className='flex h-80 w-full flex-col items-center justify-center bg-marble'>
        <Image
          src='/images/header-image.png'
          alt='header'
          width={770}
          height={174}
        />
        <p>Opening Soon</p>
        <button>Reserve Now</button>
      </div>
      <div className='font-divlayfair flex w-full flex-col items-center bg-navyBlue px-60 text-center text-white'>
        <p className='mt-20 mb-5 font-playfair text-5xl'>Our Story</p>
        <div className='mb-16 h-px w-110 bg-brown' />
        <p className='mb-8 font-roboto font-light'>
          Twin Oaks is a modern Irish gastro-pub located in the heart of
          Castleknock village. A place where you can bring family and friends to
          enjoy an elevated dining experience.
        </p>
        <p className='mb-20 font-roboto font-light'>
          Launching this Spring, Twin Oaks will serve contemporary Irish food,
          great cocktails and even greater pints.
        </p>
        <div className='mb-20'>
          <Image src='/images/acorns.svg' alt='acorns' width={48} height={48} />
        </div>
      </div>

      <div className='grid grid-cols-2 font-roboto text-white'>
        <div className='bg-greyBlue pt-20 pl-36 pr-32'>
          <p className='mt-20 mb-5 font-playfair text-5xl'>Careers</p>

          <div className='mb-16 h-px w-36 bg-brown' />
          <p className='mb-8 font-roboto text-base font-light'>
            Are you looking for an exciting, new opportunity in the hospitality
            industry?
          </p>
          <p className='font-roboto text-base font-light'>
            We are hiring all levels of kitchen staff and all levels of front of
            house staff. Send us your resume!
          </p>
          <div className='mt-16 mb-24'>
            <button className='border-2 border-white p-4'>
              <p className='font-roboto text-base font-light'>Send Resume</p>
            </button>
          </div>
        </div>
        <div className='bg-red-100'></div>
      </div>

      <div className='grid grid-cols-2 font-roboto text-xl'>
        <div>
          <Image
            src='/images/second-logo.svg'
            alt='acorns'
            width={268}
            height={258}
            objectFit='contain'
          />

          <p>Opening Hours</p>

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
