import Image from 'next/image';
import Link from 'next/link';

export default function Landing() {
  return (
    <div className='grid h-full grid-cols-1 bg-marble bg-repeat-round'>
      {/* Mobile Only - Social Links */}
      
      <div className='flex justify-center p-4 mt-4 lg:hidden'>
        <div className='mr-10'>
        <a href='tel:+442071234567'>
             
               
                <Image
                  src='/images/phone.svg'
                  alt='phone'
                  width={15}
                  height={20}
                />
               
             
            </a>
            </div>{' '}
            <div className='mr-10'>
          <a
            target='_blank'
            href='https://twitter.com/twinoak02355553'
            rel='noreferrer'
          >
            <Image
              src='/images/twitter.svg'
              alt='twitter'
              width={20}
              height={20}
            />
          </a>
          </div>
        <div className='mr-10'>
          <a
            target='_blank'
            href='https://www.facebook.com/Twin-Oaks-Restaurant-114943181204346 '
            rel='noreferrer'
          >
            <Image
              src='/images/facebook.svg'
              alt='facebook'
              width={20}
              height={20}
            />
          </a>
        </div>
        <div className=''>
          <a
            target='_blank'
            href='https://www.instagram.com/twinoaks.ie/'
            rel='noreferrer'
          >
            <Image
              src='/images/Instagram.svg'
              alt='instagram'
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>
      <div className='hidden h-16 items-center justify-between bg-white bg-opacity-50 lg:flex'>
        {/* Phone */}
        <div className='flex items-center'>
          <div className='ml-8 flex items-center'>
            <a href='tel:+442071234567'>
              <div className='flex'>
                <Image
                  src='/images/phone.svg'
                  alt='phone'
                  width={15}
                  height={20}
                />
                <p className='ml-4'>+442071234567</p>
              </div>
            </a>
          </div>{' '}
          <p></p>
        </div>
        {/* Nav Menu */}
        <div className='flex items-center'>
          <div className='flex'>
            <div className='mr-14'>
              <Link href=''>MENU</Link>
            </div>
            <div className='mr-14'>
              <Link href='#aboutus'>OUR STORY</Link>
            </div>
            <div className='mr-14'>
              <Link href='#careers'>CAREERS</Link>
            </div>
            <div className=''>
              <Link href='#hours'>CONTACT</Link>
            </div>
          </div>
        </div>
        {/* Social Links */}
        <div className='flex'>
          <div className='mr-10'>
            <a
              target='_blank'
              href='https://twitter.com/twinoak02355553'
              rel='noreferrer'
            >
              <Image
                src='/images/twitter.svg'
                alt='twitter'
                width={20}
                height={20}
              />
            </a>
          </div>{' '}
          <div className='mr-10'>
            <a
              target='_blank'
              href='https://www.facebook.com/Twin-Oaks-Restaurant-114943181204346 '
              rel='noreferrer'
            >
              <Image
                src='/images/facebook.svg'
                alt='facebook'
                width={20}
                height={20}
              />
            </a>
          </div>
          <div className='mr-10'>
            <a
              target='_blank'
              href='https://www.instagram.com/twinoaks.ie/'
              rel='noreferrer'
            >
              <Image
                src='/images/Instagram.svg'
                alt='instagram'
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>

      <div className=' flex h-full w-full flex-col items-center justify-center p-16 sm:p-20 lg:p-40'>
        {/* Desktop Only */}
        <div className='hidden lg:block'>
          {' '}
          <Image
            src='/images/header_web_logo.svg'
            alt='header'
            width={770}
            height={174}
          />
        </div>
        {/* Mobile Only */}
        <div className='mb-10 mt-10 lg:hidden'>
          {' '}
          <Image
            src='/images/mobile logo.png'
            alt='acorns'
            width={282}
            height={253}
            objectFit='contain'
          />
          
        </div>
        <button className='font-lato mb-40 rounded-sm bg-brown px-6 py-4 font-light text-white'>
          Reserve a Table
        </button>
      </div>
      <div
        id='aboutus'
        className='font-divlayfair flex w-full flex-col items-center bg-navyBlue px-16 text-center text-white sm:px-60'
      >
        <p className='mb-5 mt-20 font-playfair text-4xl'>Our Story</p>
        <div className='mb-16 h-px w-full bg-brown sm:w-110' />
        <p className='mb-8 font-roboto text-lg font-light'>
          Twin Oaks is a locally owned restaurant serving modern Irish cuisine.
          Simple, clean, unfussy and seasonal. A variety of tasty small plates,
          delicous mains & sharing dishes.
        </p>
        <p className='mb-20 font-roboto text-lg font-light'>
          Launching this Summer, Twin Oaks is a beautifully designed restaurant,
          in a fantastic location next to the Phoenix Park.
        </p>
        <div className='mb-20'>
          <Image src='/images/acorns.svg' alt='acorns' width={48} height={48} />
        </div>
      </div>

      <div
        id='careers'
        className='grid grid-cols-1 font-roboto text-white sm:grid-cols-2'
      >
        <div className='bg-greyBlue pt-0 pl-16 pr-16 sm:pr-32 sm:pl-36'>
          <p className='mt-20 mb-5 font-playfair text-4xl'>Careers</p>

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

      <div
        id='hours'
        className='grid grid-cols-1 bg-marble bg-repeat-round font-roboto text-xl sm:grid-cols-2'
      >
        <div className='px-16 sm:px-36'>
          <div className='mt-16'>
            <Image
              src='/images/mobile_logo_final.svg'
              alt='acorns'
              width={282}
              height={253}
              objectFit='contain'
            />
            
          </div>

          <p className='mt-10 mb-8 font-playfair text-3xl'>Opening Hours</p>

          <div className='mt-5 flex flex-col'>
            <p className='font-regular font-roboto text-xl text-amber-900'>
              Monday & Tuesday{' '}
            </p>
            <p className='mt-2 font-roboto text-xl font-light'>Closed </p>
          </div>

          <div className='mt-5 flex flex-col'>
            <p className='font-regular font-roboto text-xl text-amber-900'>
              Wedenesday & Thursday{' '}
            </p>
            <p className='mt-2 font-roboto text-xl font-light'>
              18:30 - 21:30{' '}
            </p>
          </div>

          <div className='mt-5 flex flex-col'>
            <p className='font-regular font-roboto text-xl text-amber-900'>
              Friday - Sunday{' '}
            </p>
            <p className='mt-2 font-roboto text-xl font-light'>
              12:00 - 21:30{' '}
            </p>
          </div>

          <p className='mt-10 mb-8 font-playfair text-3xl'>Contact</p>

          <div className='mt-5 flex flex-col'>
            <div className='flex items-center'>
              <div className='mr-0 flex flex-col items-center'></div>
              <p className='font-regular text-amber-900'>Email</p>
            </div>
            <p className='mt-2 font-roboto text-xl font-light'>
              info@twinoaksrestaurant{' '}
            </p>
          </div>

          <div className='mt-5 flex flex-col'>
            <div className='flex'>
              <div className='mr-0'></div>
              <p className='font-regular text-amber-900'>Phone</p>
            </div>

            <p className='mt-2 font-roboto text-xl font-light'>
              +353 87 908 7089{' '}
            </p>
          </div>

          <div className='mt-5 mb-20 flex flex-col'>
            <div className='flex'>
              <div className='mr-0'></div>
              <p className='font-regular text-amber-900'>Address</p>
            </div>
            <p className='mt-2 font-roboto text-xl font-light'>
              Unit 10, Ashleigh Retail Center,{' '}
            </p>
            <p className='font-roboto text-xl font-light'>
              Castleknock Village, D15 H9YD{' '}
            </p>
          </div>
        </div>
        <div className='mx-16 mb-16 mt-16 sm:mx-24 sm:mt-48'>
          <p className='font-roboto text-lg font-light'>
            Please contact us if you have any questions regarding private
            dining, reservations & menus.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-12 items-center justify-center bg-navyBlue p-8 font-roboto font-light text-white'>
        <div className='w-100 col-span-8 col-start-3 mb-8 mt-4 h-px bg-brown' />
        <div className='col-span-12 flex flex-col items-center justify-center sm:col-span-6 sm:col-start-4 sm:flex-row'>
          <p className='sm:mr-10'>Careers</p>
          <p className='my-8 sm:mr-10'>Terms & Conditions</p>
          <p className=''>Cookie Policy</p>
        </div>
        <p className='col-span-12 my-8 text-center sm:col-span-4 sm:col-start-5'>
          © Twin Oaks 2022
        </p>
        <p className='col-span-12 text-center sm:col-span-4 sm:col-start-5'>
          Designed & Developed by{' '}
          <Link href='https://skillify.ca' passHref={true}>
            <span className='text-yellow-600'>Skillify</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
