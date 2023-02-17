import logo from './logo.svg';
import './App.css';

import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
       <div className='grid h-full grid-cols-1 bg-marble bg-repeat-round'>
      {/* Mobile Only - Social Links */}

      <div className='mt-4 flex justify-center p-4 lg:hidden'>
        <div className='mr-10'>
          <a href='tel:015671759'>
            <img src='/images/phone.svg' alt='phone' width={15} height={20} />
          </a>
        </div>{' '}
        <div className='mr-10'>
          <a
            target='_blank'
            href='https://twitter.com/twinoak02355553'
            rel='noreferrer'
          >
            <img
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
            href='https://www.facebook.com/Twin-Oaks-Restaurant-105746908840426'
            rel='noreferrer'
          >
            <img
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
            <img
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
            <a href='tel:015671759'>
              <div className='flex'>
                <img
                  src='/images/phone.svg'
                  alt='phone'
                  width={15}
                  height={20}
                />
                <p className='ml-4'>015671759</p>
              </div>
            </a>
          </div>{' '}
          <p></p>
        </div>
        {/* Nav Menu */}
        <div className='flex items-center'>
          <div className='flex'>
            <div className='mr-14'>
              <a href='#menu'>MENU</a>
            </div>
            <div className='mr-14'>
              <a href='#aboutus'>OUR STORY</a>
            </div>
            <div className='mr-14'>
              <a href='#giftcards'>GIFT VOUCHERS</a>
            </div>
            <div className='mr-14'>
              <a href='#careers'>CAREERS</a>
            </div>
            <div className=''>
              <a href='#hours'>CONTACT</a>
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
              <img
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
              href='https://www.facebook.com/Twin-Oaks-Restaurant-105746908840426'
              rel='noreferrer'
            >
              <img
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
              <img
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
          <img
            src='/images/header_web_logo.svg'
            alt='header'
            width={770}
            height={174}
          />
        </div>
        {/* Mobile Only */}
        <div className='mb-10 mt-10 lg:hidden'>
          {' '}
          <img
            src='/images/ml2.svg'
            alt='acorns'
            width={460}
            height={380}
            objectFit='contain'
          />
        </div>

        <button className='font-lato mb-40 hidden rounded-sm bg-brown px-6 py-4 font-light text-white sm:block'>
          <a href='#reserve'>Reserve a Table </a>
        </button>

        <div
          className='block sm:hidden'
          style={{ height: '490px', width: '288px' }}
        >
          <Helmet>
            <script
              type='text/javascript'
              src={'https://www.opentable.com/widget/reservation/loader?rid=278919&type=standard&theme=tall&color=1&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website'}
              defer
            ></script>
          </Helmet>
        </div>
      </div>
      <div
        id='giftcards'
        className='font-divlayfair flex w-full flex-col items-center bg-greyBlue h px-16 text-center text-white sm:px-60'
      >
        <p className='mb-10 mt-10 font-playfair text-4xl'>Merry Christmas & Happy New Year from everyone at the Twin Oaks!</p>
        
        <p className='mb-8 font-roboto text-2xl font-light from-stone-900'>
       Thank you for your support this year!  
        </p>
        <p className='mb-4 font-roboto text-xl font-Bold from-stone-900'>
       Christmas Opening Hours  
        </p>
        <p className='mb-4 font-roboto text-lg font-light from-stone-900'>
       The Twin Oaks will be closed from 5pm Saturday 24th of December to Tuesday 27th of December (Inclusive)
        </p>
        <p className='mb-8 font-roboto text-lg font-light from-stone-900'>
       We will be re-opening at 5pm on Wednesday, December 28th. 
        </p>
        
       
      </div>
      <div
        id='giftcards'
        className='font-divlayfair flex w-full flex-col items-center bg-red-50 h px-16 text-center text-black sm:px-60'
      >
        <p className='mb-5 mt-20 font-playfair text-4xl'>Gift Vouchers</p>
        <div className='mb-16 h-px w-full bg-brown sm:w-110' />
        <p className='mb-8 font-roboto text-lg font-light from-stone-900'>
       Give the gift of dining at the Twin Oaks! E-gift vouchers are available to purchase at any value.  
        </p>
        <button className='font-lato mb-40 rounded-sm bg-brown px-6 py-4 font-light text-white'>
          <a href='https://gift.loylap.com/twinoaks/5898/'>Buy a Voucher</a>
        </button>
       
      </div>
      <div
        id='aboutus'
        className='font-divlayfair flex w-full flex-col items-center bg-navyBlue px-16 text-center text-white sm:px-60'
      >
        <p className='mb-5 mt-20 font-playfair text-4xl'>Our Story</p>
        <div className='mb-16 h-px w-full bg-brown sm:w-110' />
        <p className='mb-8 font-roboto text-lg font-light'>
        Twin Oaks is a neighbourhood restaurant, bar & terrace. A place to catch up with an old pal, share a delicious meal with family or celebrate a special milestone. 
        </p>
        <div className='mb-20'>
          <img src='/images/acorns.svg' alt='acorns' width={48} height={48} />
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
            <button className='rounded-sm border-1 border-white p-4'>
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
          <img
            src='/images/Twin oaks bar .jpg'
            alt='careers'
            layout='fill'
            objectFit='cover'
            className='w-full h-full'
          />
        </div>
      </div>

      <div
        id='hours'
        className='grid grid-cols-1 bg-marble bg-repeat-round font-roboto text-xl sm:grid-cols-2'
      >
        <div className='px-16 sm:px-36 text-start'>
          <div className='mt-16'>
            <img
              src='/images/ml2.svg'
              alt='acorns'
              width={230}
              height={190}
              objectFit='contain'
            />
          </div>

          <p className='mt-10 mb-8 font-playfair text-2xl'>Opening Hours</p>

          <div className='mt-5 flex flex-col'>
            <p className='font-regular font-roboto text-xl text-amber-900'>
              Monday & Tuesday{' '}
            </p>
            <p className='mt-2 font-roboto text-xl font-light'>Closed </p>
          </div>

          <div className='mt-5 flex flex-col'>
            <p className='font-regular font-roboto text-xl text-amber-900'>
              Wednesday & Thursday{' '}
            </p>
            <p className='mt-2 font-roboto text-xl font-light'>
              17:00 - 23:30{' '}
            </p>
          </div>
          <div className='mt-5 flex flex-col'>
            <p className='font-regular font-roboto text-xl text-amber-900'>
              Friday{' '}
            </p>
            <p className='mt-2 font-roboto text-xl font-light'>
              16:00 - 00:30{' '}
            </p>
          </div>
          <div className='mt-5 flex flex-col'>
            <p className='font-regular font-roboto text-xl text-amber-900'>
              Saturday - Sunday{' '}
            </p>
            <p className='mt-2 font-roboto text-xl font-light'>
              11:00 - 23:30{' '}
            </p>
          </div>

          <p className='mt-10 mb-8 font-playfair text-2xl'>Contact</p>

          <div className='mt-5 flex flex-col'>
            <div className='flex items-center'>
              <div className='mr-0 flex flex-col items-center'></div>
              <p className='font-regular text-amber-900'>Email</p>
            </div>
            <p className='mt-2 font-roboto text-xl font-light'>
              twinoaksdublin@gmail.com{' '}
            </p>
          </div>

          <div className='mt-5 flex flex-col'>
            <div className='flex'>
              <div className='mr-0'></div>
              <p className='font-regular text-amber-900'>Phone</p>
            </div>

            <p className='mt-2 font-roboto text-xl font-light'>
              (01) 567 1759{' '}
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
        <div id='reserve' className='mx-16 mb-16 mt-16 sm:mx-24 sm:mt-48'>
          <p className='font-roboto text-lg font-light'>
            Please contact us if you have any questions regarding private
            dining, reservations & menus.
          </p>
          <div
            className='mt-10 hidden sm:block'
            style={{ height: '490px', width: '288px' }}
          >
            <Helmet>
              <script
                type='text/javascript'
                src={'https://www.opentable.com/widget/reservation/loader?rid=278919&type=standard&theme=tall&color=1&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website'}
                defer
              ></script>
            </Helmet>
          </div>
        </div>
      </div>
      <div
        id='menu'
        className='font-divlayfair flex w-full flex-col items-center bg-navyBlue px-16 text-center text-white sm:px-60'
      >
        <img
          src='/images/Set Christmas Dinner Menu.svg'
          alt='brunch'
          className='m-8 mt-20 w-full'
        />
        <img
          src='/images/DM V1.svg'
          alt='brunch'
          className='m-8 mt-20 w-full'
        />
        <img
          src='/images/BM V1.svg'
          alt='brunch'
          className='m-8 w-full'
        />
         <img
          src='/images/Kids Menu V5.svg'
          alt='brunch'
          className='m-8 w-full'
        />
         <img
          src='/images/Dessert Menu V5.svg'
          alt='brunch'
          className='m-8 w-full'
        />
        
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
          <a href='https://skillify.ca' passHref={true}>
            <span className='text-yellow-600'>Skillify</span>
          </a>
        </p>
      </div>
    </div>
    </div>
  );
}

export default App;