import Image from 'next/image';
import Link from 'next/link';

export default function Landing() {
  return (
    <div className='grid h-full grid-cols-1 bg-marble bg-repeat-round'>
      {/* Mobile Only - Social Links */}

      <div className='mt-4 flex justify-center p-4 lg:hidden'>
        <div className='mr-10'>
          <a href='tel:015671759'>
            <Image src='/images/phone.svg' alt='phone' width={15} height={20} />
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
            href='https://www.facebook.com/Twin-Oaks-Restaurant-105746908840426'
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
            <a href='tel:015671759'>
              <div className='flex'>
                <Image
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
              <Link href='#menu'>MENU</Link>
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
              href='https://www.facebook.com/Twin-Oaks-Restaurant-105746908840426'
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
            src='/images/ml2.svg'
            alt='acorns'
            width={460}
            height={380}
            objectFit='contain'
          />
        </div>
        
        <button className='font-lato mb-40 hidden rounded-sm bg-brown px-6 py-4 font-light text-white sm:block'>
        <Link href='#reserve'>Reserve a Table </Link>
        </button>
        
        <div
          className='block sm:hidden'
          style={{ height: '490px', width: '288px' }}
        >
          <script
            type='text/javascript'
            src='//www.opentable.com/widget/reservation/loader?rid=278919&type=standard&theme=tall&color=1&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website'
            defer
          ></script>
        </div>
      </div>
      <div
        id='aboutus'
        className='font-divlayfair flex w-full flex-col items-center bg-navyBlue px-16 text-center text-white sm:px-60'
      >
        <p className='mb-5 mt-20 font-playfair text-4xl'>Our Story</p>
        <div className='mb-16 h-px w-full bg-brown sm:w-110' />
        <p className='mb-8 font-roboto text-lg font-light'>
          Twin Oaks is a locally owned steakhouse and  seafood restaurant.
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
              src='/images/Twin oaks bar .jpg'
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
            <p className='mt-2 font-roboto text-xl font-light'>11:00 - 23:30 </p>
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
              info@twinoaks.ie{' '}
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
        <div 
        id='reserve'
        className='mx-16 mb-16 mt-16 sm:mx-24 sm:mt-48'>
          <p className='font-roboto text-lg font-light'>
            Please contact us if you have any questions regarding private
            dining, reservations & menus.
          </p>
          <div
            className='hidden sm:block mt-10'
            style={{ height: '490px', width: '288px' }}
          >
            <script
              type='text/javascript'
              src='//www.opentable.com/widget/reservation/loader?rid=278919&type=standard&theme=tall&color=1&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website'
              defer
            ></script>
          </div>
        </div>
      </div>
      <div
        id='menu'
        className='font-divlayfair flex w-full flex-col items-center bg-navyBlue px-16 text-center text-white sm:px-60'
      >
      
        <p className='mb-5 mt-20 font-playfair text-4xl'> Dinner Menu </p>
        <div className='mb-16 h-px w-full bg-brown sm:w-110' />
        <p className='mb-8 font-roboto text-lg font-light'>
        menu subject to change 
        </p>
        <p className='mb-8 font-roboto text-2xl font-regular'>
          
          Starters
        </p>
        <p className='mb-8 font-roboto text-lg font-light'>
        Beef shin croquettes, braised for 10 hours and served with green romesco sauce 7.50
        </p>
        <p className='mb-8 font-roboto text-lg font-light'>
        Ham hock terrine, basil purée, watercress salad, grilled sourdough 8.50
        </p>
        <p className='mb-8 font-roboto text-lg font-light'>
        Burnt peach salad, orange segments and shaved fennel, red radish & heirloom tomatoes 9.00
        </p>
        <p className='mb-8 font-roboto text-lg font-light'>
        Crab toes pil pil, garlic chili served with grilled sourdough 12.00 
        </p>
        <p className='mb-12 font-roboto text-lg font-light'>
        Prawns on toast, wild garlic butter done in old bay sauce & confit tomatoes 12.50
        </p>
        <p className='mb-8 font-roboto text-2xl font-regular'>
          Mains
        </p>
        <p className='mb-8 font-roboto text-lg font-light'>
        Monkfish skewers, with mix peppers, pearl couscous, salad hung yogurt mint sauce 26.00
        </p>
        <p className='mb-8 font-roboto text-lg font-light'>
        Chicken supreme, served with corn purée, polenta chip, confit tomatoes and lemon thyme jus 24.00
        </p>
        <p className='mb-8 font-roboto text-lg font-light'>
        Homemade pan fried gnocchi, pea, mint, pine nuts  24.00
        </p>
        <p className='mb-8 font-roboto text-lg font-light'>
        Seafood risotto, served with prawns, mussels, crab claws, monkfish, pea and tarragon, lemon purée 28.00
        </p>
        <p className='mb-8 font-roboto text-lg font-light'>
        12oz loin of beef, served with whipped bone marrow butter, rocket salad & chips 32.00
        </p>
        <p className='mb-8 font-roboto text-lg font-light'>
        Lamb shoulder, mint purée, baby potatoes, grilled asparagus, lamb jus 28.00
        </p>
        <p className='mb-8 font-roboto text-lg font-light'>
        Moules mariniere Irish rope mussels served with chips, shallots and butter 24.00
        </p>
        <p className='mb-12 font-roboto text-lg font-light'>
        Prawn linguine pasta, garlic chili, lemon parsley & tomatoes 24.00
        </p>
        <p className='mb-8 font-roboto text-2xl font-regular'>
          Sharing Plates
        </p>
        <p className='mb-8 font-roboto text-lg font-light'>
        Whole fish of the day for two, with grapefruit beurre blanc sauce and a choice of two sides (market price)
        </p>
        <p className='mb-12 font-roboto text-lg font-light'>
        36oz cote de boeuf, served with water cress, marrow butter, jus and a choice of two sides 70.00
        </p>
        <p className='mb-8 font-roboto text-2xl font-regular'>
          Desserts
        </p>
        <p className='mb-8 font-roboto text-lg font-light'>
        Mixed berry créme brulee 7.50
        </p>
        <p className='mb-8 font-roboto text-lg font-light'>
        Chocolate fondant ice cream 8.00
        </p>
        <p className='mb-8 font-roboto text-lg font-light'>
        Strawberry mess 7.50
        </p>
        <p className='mb-8 font-roboto text-lg font-light'>
        Lemon tart berry couli raspberry sorbet 7.50
        </p>
        <p className='mb-8 font-roboto text-lg font-light'>
        Affogato served with biscotti 7.50
        </p>
        <p className='mb-12 font-roboto text-lg font-light'>
        Boozy Icecream | rum& raisin, dark chocolate & whiskey,cosmo (mix or all of 1) 7.50
        </p>
        <p className='mb-8 font-roboto text-2xl font-regular'>
          Sides
        </p>
        <p className='mb-8 font-roboto text-lg font-light'>
        Chips 4.50
        </p>
        <p className='mb-8 font-roboto text-lg font-light'>
        Green Salad 4.50
        </p>
        <p className='mb-8 font-roboto text-lg font-light'>
        Asparagus,green beans & toasted almonds 4.50
        </p>
        <p className='mb-8 font-roboto text-lg font-light'>
        Baby potatoes in mint 4.50
        </p>
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
