import Image from 'next/image';
import Link from 'next/link';

export default function Landing() {
  return (
    <div className='grid grid-cols-1 bg-marble'>
      <div className='flex h-16 items-center justify-around bg-white bg-opacity-50 '>
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

      <div className='flex w-full flex-col items-center justify-center p-40'>
        <Image
          src='/images/header-image.svg'
          alt='header'
          width={770}
          height={174}
        />
        <p className='mb-20 font-roboto text-5xl font-light'>opening soon</p>
        <button className='rounded-md bg-brown px-6 py-4 text-white'>
          Reserve a table
        </button>
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
        <div className='bg-greyBlue pt-0 pl-36 pr-32'>
          <p className='mt-20 mb-5 font-playfair text-5xl'>Careers</p>

          <div className='mb-16 h-px w-64 bg-brown' />
          <p className='mb-8 font-roboto text-base font-light'>
            Are you looking for an exciting, new opportunity in the hospitality
            industry?
          </p>
          <p className='font-roboto text-base font-light'>
            We are hiring all levels of kitchen staff and all levels of front of
            house staff. Send us your resume!
          </p>
          <div className='mt-16 mb-24'>
            <button className='rounded-md border-1 border-2 border-white p-4'>
              <p className='font-roboto text-base font-light'>Send Resume</p>
            </button>
          </div>
        </div>
        <div className='bg-red-100'>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image
              src='/images/careers.png'
              alt='careers'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 bg-marble font-roboto text-xl'>
        <div className='pl-36'>
          <div className='mt-16'>
            <Image
              src='/images/tree.svg'
              alt='acorns'
              width={268}
              height={158}
              objectFit='contain'
            />
            <p className='font-playfair text-5xl'>TWIN OAKS</p>
          </div>

          <p className='mt-10 font-playfair text-3xl'>Opening Hours</p>

          <div className='mt-5 flex flex-col'>
            <p className='font-roboto text-xl font-bold'>Lunch </p>
            <p className='font-roboto text-xl font-light'>
              Thursday - Saturday{' '}
            </p>
            <p className='font-roboto text-xl font-light'>12:30pm - 14:00 </p>
          </div>

          <div className='mt-5 flex flex-col'>
            <p className='font-roboto text-xl font-bold'>Dinner </p>
            <p className='font-roboto text-xl font-light'>Tuesday - Saturday</p>
            <p className='font-roboto text-xl font-light'>18:30 - 21:30</p>
          </div>

          <div className='mt-5 flex flex-col'>
            <p className='font-roboto text-xl font-bold'>Closed </p>
            <p className='font-roboto text-xl font-light'>Sun & Mon</p>
          </div>

          <p className='mt-10 font-playfair text-3xl'>Contact</p>

          <div className='mt-5 flex flex-col'>
            <div className='flex items-center'>
              <div className='mr-2 flex flex-col items-center'>
                <Image
                  src='/images/email.svg'
                  alt='address'
                  width={20}
                  height={20}
                />
              </div>
              <p className='font-bold'>Email</p>
            </div>
            <p>info@twinoaksrestaurant </p>
          </div>

          <div className='mt-5 flex flex-col'>
            <div className='flex'>
              <div className='mr-2'>
                <Image
                  src='/images/phone.svg'
                  alt='address'
                  width={15}
                  height={20}
                />
              </div>
              <p className='font-bold'>Phone</p>
            </div>

            <p>+353 87 908 7089 </p>
          </div>

          <div className='mt-5 flex flex-col'>
            <div className='flex'>
              <div className='mr-2'>
                <Image
                  src='/images/address.svg'
                  alt='address'
                  width={15}
                  height={20}
                />
              </div>
              <p className='font-bold'>Address</p>
            </div>
            <p>Unit 10, Ashleigh Retail Center, </p>
            <p>Castleknock Village, D15 H9YD</p>
          </div>
        </div>
        <div className='mx-24 mt-48 bg-blue-100'>
          <p className='font-roboto text-base'>
            Please contact us if you have any questions regarding private
            dining, reservations & menus.
          </p>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center bg-navyBlue p-8 font-roboto font-light text-white'>
        <div className='mb-8 flex'>
          <p className='ml-16'>Careers</p>
          <p className='ml-16'>Terms & Conditions</p>
          <p className='ml-16'>Cookie Policy</p>
        </div>
        <p className='mb-8'>© Twin Oaks 2022</p>
        <p className=''>
          Designed by Winthya | Developed by{' '}
          <Link href='https://skillify.ca' passHref={true}>
            <span className='text-yellow-600'>Skillify</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
