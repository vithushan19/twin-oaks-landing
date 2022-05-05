import Image from 'next/image';
import Link from 'next/link';

export default function Landing() {
  return (
    <div className='grid grid-cols-1 bg-marble'>
      <div className='hidden h-16 items-center justify-around bg-white bg-opacity-50 sm:flex '>
        <div className='flex items-center'>
          <div className='mr-4 flex flex-col items-center '>
            <Image src='/images/phone.svg' alt='phone' width={15} height={20} />
          </div>{' '}
          <p>647-431-4312</p>
        </div>
        <div className='flex'>
          <div className='mr-10'>
            <Link href='/'>About Us</Link>
          </div>
          <div className='mr-10'>
            <Link href='/'>Careers</Link>
          </div>
          <div className='mr-10'>
            <Link href='/'>Contact</Link>
          </div>
        </div>
        <div className='flex'>
          <div className='mr-10'>
            <Image
              src='/images/twitter.svg'
              alt='twitter'
              width={20}
              height={20}
            />
          </div>{' '}
          <div className='mr-10'>
            <Image
              src='/images/facebook.svg'
              alt='facebook'
              width={20}
              height={20}
            />
          </div>
          <div className='mr-10'>
          <a href='https://www.instagram.com/twinoaks.ie/'>
            <Image
              src='/images/Instagram.svg'
              alt='instagram'
              width={20}
              height={20}
            /a>
          </div>
        </div>
      </div>

      <div className='flex w-full flex-col items-center justify-center p-16 sm:p-40'>
        <Image
          src='/images/header_web_logo.svg'
          alt='header'
          width={770}
          height={174}
        />
    
        <button className='rounded-sm bg-brown px-6 py-4 text-white'>
          Reserve a table
        </button>
      </div>
      <div className='font-divlayfair flex w-full flex-col items-center bg-navyBlue px-16 text-center text-white sm:px-60'>
        <p className='mb-5 mt-20 font-playfair text-5xl'>Our Story</p>
        <div className='mb-16 h-px w-full bg-brown sm:w-110' />
        <p className='mb-8 font-roboto text-lg font-light'>
          Twin Oaks is a locally owned restaurant serving modern Irish cuisine. Simple, clean, unfussy and seasonal. A variety of tasty small plates, delicous mains & sharing dishes. 
        </p>
        <p className='mb-20 font-roboto text-lg font-light'>
          Launching this Summer, Twin Oaks is a beautifully designed restaurant, in a fantastic location next to the Phoenix Park.
        </p>
        <div className='mb-20'>
          <Image src='/images/acorns.svg' alt='acorns' width={48} height={48} />
        </div>
      </div>

      <div className='grid grid-cols-1 font-roboto text-white sm:grid-cols-2'>
        <div className='bg-greyBlue pt-0 pl-16 pr-16 sm:pr-32 sm:pl-36'>
          <p className='mt-20 mb-5 font-playfair text-5xl'>Careers</p>

          <div className='mb-16 h-px w-64 bg-brown' />
          <p className='mb-8 font-roboto text-lg font-light'>
            Are you looking for an exciting, new opportunity in the hospitality
            industry?
          </p>
          <p className='font-roboto text-lg font-light'>
            We are hiring all levels of kitchen staff and all levels of front of
            house staff. Send us your resume!
          </p>
          <div className='mt-16 mb-24'>
            <button className='rounded-sm border-1 border-2 border-white p-4'>
              <a
                href='mailto:careers@twinoaks.ie'
                className='font-roboto text-base font-light'
              >
                Send Resume
              </a>
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

      <div className='grid grid-cols-1 bg-marble font-roboto text-xl sm:grid-cols-2'>
        <div className='pl-16 sm:pl-36'>
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
        <div className='mx-16 mb-16 mt-16 bg-blue-100 sm:mx-24 sm:mt-48'>
          <p className='font-roboto text-base'>
            Please contact us if you have any questions regarding private
            dining, reservations & menus.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-3 items-center justify-center bg-navyBlue p-8 font-roboto font-light text-white'>
        <p className=''>Careers</p>
        <p className=''>Terms & Conditions</p>
        <p className=''>Cookie Policy</p>
        <p className='col-span-3 my-8'>© Twin Oaks 2022</p>
        <p className='col-span-3'>
          Designed by Winthya | Developed by{' '}
          <Link href='https://skillify.ca' passHref={true}>
            <span className='text-yellow-600'>Skillify</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
