const Header = () => {
  return (
    <div className='absolute z-50 w-full'>
      <div className='nav-component nav-component--theme-light'>
        <div className='container-w-fixed'>
          <div className='flex w-full items-center justify-between py-4 md:py-8'>
            <a className='md:flex-1' href='/adventures/'>
              <span className='sr-only'>Atlas Obscura Adventures</span>
              <img
                className='hidden xl:block'
                width={240}
                height={20}
                src='https://assets.atlasobscura.com/assets/hermes/aoa_logo_long-d09f8d374169dcb87892c09c0ca636b3a4f71970cce7f3021de889e78803ead8.svg'
                alt='Logo'
              />
              <img
                className='block xl:hidden'
                width={144}
                height={20}
                src='https://assets.atlasobscura.com/assets/hermes/aoa_logo_short-29de157b7ca975eae81c2b5f8ed156ca093a4e7157729c309c187162476ae698.svg'
                alt='Logo'
              />
            </a>{" "}
            <div data-controller='apparate' className='md:hidden'>
              <button
                id='button__open-mobile-menu'
                data-apparate-target='trigger'
                data-apparate-subject-selector='#mobile-nav-menu'
                data-aria-expand-target='#button__open-mobile-menu'
                data-action='apparate#appear'
                type='button'
                className='
      inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/20 p-2
      backdrop-blur hover:bg-gray-100 hover:text-gray-500
      focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                aria-expanded='false'
                aria-controls='mobile-nav-menu'
              >
                <span className='sr-only'>Open menu</span>
                <svg
                  className='svg-inline--fa fa-bars text-xl'
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='far'
                  data-icon='bars'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                  data-fa-i2svg=''
                >
                  <path
                    fill='currentColor'
                    d='M0 88C0 74.7 10.7 64 24 64H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 112 0 101.3 0 88zM0 248c0-13.3 10.7-24 24-24H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zM448 408c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H424c13.3 0 24 10.7 24 24z'
                  />
                </svg>
                {/* <i class="fa-regular fa-bars text-xl"></i> */}
              </button>
            </div>
            <nav className='hidden md:flex md:gap-6 lg:gap-8'>
              <div className='relative' data-controller='hermes--nav-component'>
                <button
                  data-hermes--nav-component-target='trigger'
                  data-action='click->hermes--nav-component#toggle click->analytics#sendEvent click@window->hermes--nav-component#vanishOutsideClick'
                  data-ga-event-action='click'
                  data-ga-event-category='destinations'
                  data-ga-event-label='nav'
                  type='button'
                  className='hermes-body-small group inline-flex items-center rounded-md bg-transparent underline-offset-2 hover:underline'
                  aria-expanded='false'
                >
                  <span>Di chuyển</span>
                  <span
                    data-hermes--nav-component-target='icon'
                    data-icon-active='-rotate-90'
                    data-icon-inactive='rotate-90'
                    className='ml-2 rotate-90 transition-transform duration-100 ease-in-out'
                  >
                    <svg
                      className='svg-inline--fa fa-chevron-right text-xs'
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fal'
                      data-icon='chevron-right'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 320 512'
                      data-fa-i2svg=''
                    >
                      <path
                        fill='currentColor'
                        d='M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z'
                      />
                    </svg>
                    {/* <i class="fa-light fa-chevron-right text-xs"></i> */}
                  </span>
                </button>
                <div
                  data-hermes--nav-component-target='subject'
                  data-transition-enter='transition ease-out duration-200'
                  data-transition-enter-start='opacity-0 translate-y-1'
                  data-transition-enter-end='opacity-100 translate-y-0'
                  data-transition-leave='transition ease-in duration-150'
                  data-transition-leave-start='opacity-100 translate-y-0'
                  data-transition-leave-end='opacity-0 translate-y-1'
                  className='absolute left-[8.5rem] z-10 mt-3 hidden w-72 -translate-x-1/2 transform px-2 sm:px-0'
                >
                  <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                    <div className='hermes-body-smaller relative bg-white text-gray-700'>
                      <ul className='py-2' role='menu'>
                        <li
                          role='menuitem'
                          className='flex w-full items-center'
                        >
                          <a
                            className='py-2 px-4 pb-2 w-full hermes-body-smaller hover:bg-gray-100 hover:text-gray-900'
                            data-action='click->analytics#sendEvent'
                            data-ga-event-action='destination selection'
                            data-ga-event-category='africa'
                            data-ga-event-label='nav'
                            href='/adventures/trips?reg=africa'
                          >
                            Africa
                          </a>
                        </li>
                        <li
                          role='menuitem'
                          className='flex w-full items-center'
                        >
                          <a
                            className='py-2 px-4 pb-2 w-full hermes-body-smaller hover:bg-gray-100 hover:text-gray-900'
                            data-action='click->analytics#sendEvent'
                            data-ga-event-action='destination selection'
                            data-ga-event-category='asia'
                            data-ga-event-label='nav'
                            href='/adventures/trips?reg=asia'
                          >
                            Asia
                          </a>
                        </li>
                        <li
                          role='menuitem'
                          className='flex w-full items-center'
                        >
                          <a
                            className='py-2 px-4 pb-2 w-full hermes-body-smaller hover:bg-gray-100 hover:text-gray-900'
                            data-action='click->analytics#sendEvent'
                            data-ga-event-action='destination selection'
                            data-ga-event-category='europe'
                            data-ga-event-label='nav'
                            href='/adventures/trips?reg=europe'
                          >
                            Europe
                          </a>
                        </li>
                        <li
                          role='menuitem'
                          className='flex w-full items-center'
                        >
                          <a
                            className='py-2 px-4 pb-2 w-full hermes-body-smaller hover:bg-gray-100 hover:text-gray-900'
                            data-action='click->analytics#sendEvent'
                            data-ga-event-action='destination selection'
                            data-ga-event-category='middle east'
                            data-ga-event-label='nav'
                            href='/adventures/trips?reg=middle+east'
                          >
                            Middle East
                          </a>
                        </li>
                        <li
                          role='menuitem'
                          className='flex w-full items-center'
                        >
                          <a
                            className='py-2 px-4 pb-2 w-full hermes-body-smaller hover:bg-gray-100 hover:text-gray-900'
                            data-action='click->analytics#sendEvent'
                            data-ga-event-action='destination selection'
                            data-ga-event-category='north america'
                            data-ga-event-label='nav'
                            href='/adventures/trips?reg=north+america'
                          >
                            North America
                          </a>
                        </li>
                        <li
                          role='menuitem'
                          className='flex w-full items-center'
                        >
                          <a
                            className='py-2 px-4 pb-2 w-full hermes-body-smaller hover:bg-gray-100 hover:text-gray-900'
                            data-action='click->analytics#sendEvent'
                            data-ga-event-action='destination selection'
                            data-ga-event-category='oceania'
                            data-ga-event-label='nav'
                            href='/adventures/trips?reg=oceania'
                          >
                            Oceania
                          </a>
                        </li>
                        <li
                          role='menuitem'
                          className='flex w-full items-center'
                        >
                          <a
                            className='py-2 px-4 pb-2 w-full hermes-body-smaller hover:bg-gray-100 hover:text-gray-900'
                            data-action='click->analytics#sendEvent'
                            data-ga-event-action='destination selection'
                            data-ga-event-category='south america'
                            data-ga-event-label='nav'
                            href='/adventures/trips?reg=south+america'
                          >
                            South America
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='bg-hermes-cream hermes-body-smaller p-4'>
                      <a
                        className='text-hermes-red hover:text-hermes-red-dark flow-root rounded-md'
                        href='/adventures/trips'
                      >
                        View all trips
                        <svg
                          className='svg-inline--fa fa-arrow-right pb-px align-middle text-xs'
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='far'
                          data-icon='arrow-right'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 448 512'
                          data-fa-i2svg=''
                        >
                          <path
                            fill='currentColor'
                            d='M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z'
                          />
                        </svg>
                        {/* <i class="fa-regular fa-arrow-right pb-px align-middle text-xs"></i> */}
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative' data-controller='hermes--nav-component'>
                <button
                  data-hermes--nav-component-target='trigger'
                  data-action='click->hermes--nav-component#toggle click->analytics#sendEvent click@window->hermes--nav-component#vanishOutsideClick'
                  data-ga-event-action='click'
                  data-ga-event-category='interests'
                  data-ga-event-label='nav'
                  type='button'
                  className='hermes-body-small group inline-flex items-center rounded-md bg-transparent text-white underline-offset-2 hover:underline'
                  aria-expanded='false'
                >
                  <span>Lưu trú</span>
                  <span
                    data-hermes--nav-component-target='icon'
                    data-icon-active='-rotate-90'
                    data-icon-inactive='rotate-90'
                    className='ml-2 rotate-90 transition-transform duration-100 ease-in-out'
                  >
                    <svg
                      className='svg-inline--fa fa-chevron-right text-xs'
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fal'
                      data-icon='chevron-right'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 320 512'
                      data-fa-i2svg=''
                    >
                      <path
                        fill='currentColor'
                        d='M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z'
                      />
                    </svg>
                    {/* <i class="fa-light fa-chevron-right text-xs"></i> */}
                  </span>
                </button>
                <div
                  data-hermes--nav-component-target='subject'
                  data-transition-enter='transition ease-out duration-200'
                  data-transition-enter-start='opacity-0 translate-y-1'
                  data-transition-enter-end='opacity-100 translate-y-0'
                  data-transition-leave='transition ease-in duration-150'
                  data-transition-leave-start='opacity-100 translate-y-0'
                  data-transition-leave-end='opacity-0 translate-y-1'
                  className='absolute left-[8.5rem] z-10 mt-3 hidden w-72 -translate-x-1/2 transform px-2 sm:px-0'
                >
                  <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                    <div className='hermes-body-smaller relative bg-white text-gray-700'>
                      <ul className='py-2' role='menu'>
                        <li
                          role='menuitem'
                          className='flex w-full items-center'
                        >
                          <a
                            className='py-2 px-4 pb-2 w-full hermes-body-smaller hover:bg-gray-100 hover:text-gray-900'
                            data-action='click->analytics#sendEvent'
                            data-ga-event-action='interest selection'
                            data-ga-event-category='food & drink'
                            data-ga-event-label='nav'
                            href='/adventures/trips?int=food+%26+drink'
                          >
                            Food &amp; Drink
                          </a>
                        </li>
                        <li
                          role='menuitem'
                          className='flex w-full items-center'
                        >
                          <a
                            className='py-2 px-4 pb-2 w-full hermes-body-smaller hover:bg-gray-100 hover:text-gray-900'
                            data-action='click->analytics#sendEvent'
                            data-ga-event-action='interest selection'
                            data-ga-event-category='history & culture'
                            data-ga-event-label='nav'
                            href='/adventures/trips?int=history+%26+culture'
                          >
                            History &amp; Culture
                          </a>
                        </li>
                        <li
                          role='menuitem'
                          className='flex w-full items-center'
                        >
                          <a
                            className='py-2 px-4 pb-2 w-full hermes-body-smaller hover:bg-gray-100 hover:text-gray-900'
                            data-action='click->analytics#sendEvent'
                            data-ga-event-action='interest selection'
                            data-ga-event-category='wildlife & nature'
                            data-ga-event-label='nav'
                            href='/adventures/trips?int=wildlife+%26+nature'
                          >
                            Wildlife &amp; Nature
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='bg-hermes-cream hermes-body-smaller p-4'>
                      <a
                        className='text-hermes-red hover:text-hermes-red-dark flow-root rounded-md'
                        href='/adventures/trips'
                      >
                        View all trips
                        <svg
                          className='svg-inline--fa fa-arrow-right pb-px align-middle text-xs'
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='far'
                          data-icon='arrow-right'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 448 512'
                          data-fa-i2svg=''
                        >
                          <path
                            fill='currentColor'
                            d='M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z'
                          />
                        </svg>
                        {/* <i class="fa-regular fa-arrow-right pb-px align-middle text-xs"></i> */}
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative'>
                <a
                  data-action='click->analytics#sendEvent'
                  data-ga-event-action='click'
                  data-ga-event-category='trip finder link'
                  data-ga-event-label='nav'
                  className='nav-link hover:underline underline-offset-2 hermes-body-small'
                  href='/adventures/trips'
                >
                  Đi đâu đây
                </a>
              </div>
              <div className='relative'>
                <a
                  data-action='click->analytics#sendEvent'
                  data-ga-event-action='click'
                  data-ga-event-category='about link'
                  data-ga-event-label='nav'
                  className='nav-link hover:underline underline-offset-2 hermes-body-small'
                  href='/adventures/about'
                >
                  Ẩm thực địa phương
                </a>
              </div>
            </nav>
            <div className='hidden md:flex md:flex-1'>
              <div
                className='relative w-full text-right'
                data-controller='hermes--nav-component'
              >
                <button
                  data-hermes--nav-component-target='trigger'
                  data-action='click->hermes--nav-component#toggle click->analytics#sendEvent click@window->hermes--nav-component#vanishOutsideClick'
                  data-ga-event-action='click'
                  data-ga-event-category='contact us'
                  data-ga-event-label='nav'
                  type='button'
                  className='hermes-body-small nav-link group inline-flex items-center rounded-md bg-transparent text-white underline-offset-2 hover:underline'
                  aria-expanded='false'
                >
                  <span>Liên hệ</span>
                  <span
                    data-hermes--nav-component-target='icon'
                    data-icon-active='-rotate-90'
                    data-icon-inactive='rotate-90'
                    className='ml-2 rotate-90 transition-transform duration-100 ease-in-out'
                  >
                    <svg
                      className='svg-inline--fa fa-chevron-right text-xs'
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fal'
                      data-icon='chevron-right'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 320 512'
                      data-fa-i2svg=''
                    >
                      <path
                        fill='currentColor'
                        d='M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z'
                      />
                    </svg>
                    {/* <i class="fa-light fa-chevron-right text-xs"></i> */}
                  </span>
                </button>
                <div
                  data-hermes--nav-component-target='subject'
                  data-transition-enter='transition ease-out duration-200'
                  data-transition-enter-start='opacity-0 translate-y-1'
                  data-transition-enter-end='opacity-100 translate-y-0'
                  data-transition-leave='transition ease-in duration-150'
                  data-transition-leave-start='opacity-100 translate-y-0'
                  data-transition-leave-end='opacity-0 translate-y-1'
                  className='absolute -right-[9rem] z-10 mt-3 hidden w-64 -translate-x-1/2 transform px-2  text-left sm:px-0'
                >
                  <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                    <div className='hermes-body-smaller relative bg-white text-gray-700'>
                      <ul className='flex flex-col space-y-4 p-4' role='menu'>
                        <li className='flex items-center gap-4'>
                          <div className='bg-hermes-cream h-8 w-8 flex shrink-0 items-center justify-center rounded-full'>
                            <svg
                              className='svg-inline--fa fa-phone text-hermes-red text-base'
                              aria-hidden='true'
                              focusable='false'
                              data-prefix='fal'
                              data-icon='phone'
                              role='img'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 512 512'
                              data-fa-i2svg=''
                            >
                              <path
                                fill='currentColor'
                                d='M375.8 275.2c-16.4-7-35.4-2.4-46.7 11.4l-33.2 40.6c-46-26.7-84.4-65.1-111.1-111.1L225.3 183c13.8-11.3 18.5-30.3 11.4-46.7l-48-112C181.2 6.7 162.3-3.1 143.6 .9l-112 24C13.2 28.8 0 45.1 0 64v0C0 300.7 183.5 494.5 416 510.9c4.5 .3 9.1 .6 13.7 .8c0 0 0 0 0 0c0 0 0 0 .1 0c6.1 .2 12.1 .4 18.3 .4l0 0c18.9 0 35.2-13.2 39.1-31.6l24-112c4-18.7-5.8-37.6-23.4-45.1l-112-48zM447.7 480C218.1 479.8 32 293.7 32 64v0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0c0-3.8 2.6-7 6.3-7.8l112-24c3.7-.8 7.5 1.2 9 4.7l48 112c1.4 3.3 .5 7.1-2.3 9.3l-40.6 33.2c-12.1 9.9-15.3 27.2-7.4 40.8c29.5 50.9 71.9 93.3 122.7 122.7c13.6 7.9 30.9 4.7 40.8-7.4l33.2-40.6c2.3-2.8 6.1-3.7 9.3-2.3l112 48c3.5 1.5 5.5 5.3 4.7 9l-24 112c-.8 3.7-4.1 6.3-7.8 6.3c-.1 0-.2 0-.3 0z'
                              />
                            </svg>
                            {/* <i class="fa-light fa-phone text-hermes-red text-base" aria-hidden="true"></i> */}
                          </div>
                          <div className='prose prose-a:hermes-link-inline text-sm text-gray-900 prose-a:text-gray-900'>
                            <p>
                              Call us at
                              <a
                                className='inline-block'
                                href='tel:+1 833-919-9154'
                              >
                                +1 833-919-9154
                              </a>
                            </p>
                          </div>
                        </li>
                        <hr />
                        <li className='flex items-center gap-4'>
                          <div className='bg-hermes-cream h-8 w-8 flex shrink-0 items-center justify-center rounded-full'>
                            <svg
                              className='svg-inline--fa fa-envelope text-hermes-red text-base'
                              aria-hidden='true'
                              focusable='false'
                              data-prefix='fal'
                              data-icon='envelope'
                              role='img'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 512 512'
                              data-fa-i2svg=''
                            >
                              <path
                                fill='currentColor'
                                d='M64 96c-17.7 0-32 14.3-32 32v39.9L227.6 311.3c16.9 12.4 39.9 12.4 56.8 0L480 167.9V128c0-17.7-14.3-32-32-32H64zM32 207.6V384c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V207.6L303.3 337.1c-28.2 20.6-66.5 20.6-94.6 0L32 207.6zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z'
                              />
                            </svg>
                            {/* <i class="fa-light fa-envelope text-hermes-red text-base" aria-hidden="true"></i> */}
                          </div>
                          <div className='prose prose-a:hermes-link-inline text-sm text-gray-900 prose-a:text-gray-900'>
                            <p>
                              Send us a
                              <button
                                className='font-medium underline'
                                data-controller='modal'
                                data-action='click->modal#openByModalId'
                                data-modal-target='trigger'
                                data-modal-id='#general-inquiry'
                              >
                                message
                              </button>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className='bg-hermes-cream hermes-body-smaller p-4'>
                      <a
                        className='text-hermes-red hover:text-hermes-red-dark flow-root rounded-md'
                        href='/adventures/adventures-faq'
                      >
                        Visit our FAQ
                        <svg
                          className='svg-inline--fa fa-arrow-right pb-px align-middle text-xs'
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='far'
                          data-icon='arrow-right'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 448 512'
                          data-fa-i2svg=''
                        >
                          <path
                            fill='currentColor'
                            d='M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z'
                          />
                        </svg>
                        {/* <i class="fa-regular fa-arrow-right pb-px align-middle text-xs"></i> */}
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id='mobile-nav-menu'
            data-controller='hermes--mobile-nav-component'
            data-transition-enter='ease-out duration-200'
            data-transition-enter-start='opacity-0'
            data-transition-enter-end='opacity-100'
            data-transition-leave='duration-100 ease-in'
            data-transition-leave-start='opacity-100'
            data-transition-leave-end='opacity-0'
            className='absolute inset-x-0 top-0 h-screen origin-top-right transform bg-black/20 p-2 backdrop-blur transition-opacity md:hidden hidden'
          >
            <div className='bg-hermes-cream rounded-lg shadow-lg'>
              <div className='px-5 pt-3 pb-4'>
                <div className='flex items-center justify-between'>
                  <div>
                    <a href='/adventures/'>
                      <img
                        className='w-36'
                        width={144}
                        height={20}
                        src='https://assets.atlasobscura.com/assets/hermes/aoa_logo_short_bk-595bb63d4f5faeb568c04926a340634a68ab3916c3772ec837465cf62bafb360.svg'
                        alt='Logo'
                      />
                    </a>{" "}
                  </div>
                  <div
                    className='-mr-3'
                    data-controller='apparate'
                    data-action='keydown@window->apparate#vanishOnEsc'
                  >
                    <button
                      data-apparate-target='trigger'
                      data-apparate-subject-selector='#mobile-nav-menu'
                      data-action='click->apparate#vanish'
                      data-aria-expand-target='#button__open-mobile-menu'
                      type='button'
                      className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-900 hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-0'
                    >
                      <span className='sr-only'>Close menu</span>
                      <svg
                        className='h-6 w-6'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2}
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div
                role='menu'
                aria-orientation='vertical'
                className='rounded-b-lg bg-white pt-6'
              >
                <details
                  className='accordion'
                  role='menu'
                  aria-orientation='vertical'
                >
                  <summary
                    className='flex w-full cursor-pointer list-none items-center hover:bg-gray-100 hover:text-gray-900'
                    data-action='click->analytics#sendEvent'
                    data-ga-event-action='click'
                    data-ga-event-category='destinations'
                    data-ga-event-label='mobile nav'
                  >
                    <span className='hermes-body-big w-40 flex-none py-3 px-5'>
                      Destinations
                    </span>
                    <svg
                      className='svg-inline--fa fa-chevron-right text-gray-700 rotate-90'
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fal'
                      data-icon='chevron-right'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 320 512'
                      data-fa-i2svg=''
                    >
                      <path
                        fill='currentColor'
                        d='M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z'
                      />
                    </svg>
                    {/* <i class="fa-light fa-chevron-right text-gray-700 rotate-90"></i> */}
                    <svg
                      className='svg-inline--fa fa-chevron-right text-gray-700 -rotate-90'
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fal'
                      data-icon='chevron-right'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 320 512'
                      data-fa-i2svg=''
                    >
                      <path
                        fill='currentColor'
                        d='M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z'
                      />
                    </svg>
                    {/* <i class="fa-light fa-chevron-right text-gray-700 -rotate-90"></i> */}
                  </summary>
                  <div className='flex flex-col'>
                    <ul>
                      <li
                        role='menuitem'
                        className='hermes-body-small flex w-full items-center'
                      >
                        <a
                          className='py-3 pl-10 w-full hover:bg-gray-100 hover:text-gray-900'
                          data-action='click->analytics#sendEvent'
                          data-ga-event-action='destination selection'
                          data-ga-event-category='africa'
                          data-ga-event-label='mobile nav'
                          href='/adventures/trips?reg=africa'
                        >
                          Africa
                        </a>
                      </li>
                      <li
                        role='menuitem'
                        className='hermes-body-small flex w-full items-center'
                      >
                        <a
                          className='py-3 pl-10 w-full hover:bg-gray-100 hover:text-gray-900'
                          data-action='click->analytics#sendEvent'
                          data-ga-event-action='destination selection'
                          data-ga-event-category='asia'
                          data-ga-event-label='mobile nav'
                          href='/adventures/trips?reg=asia'
                        >
                          Asia
                        </a>
                      </li>
                      <li
                        role='menuitem'
                        className='hermes-body-small flex w-full items-center'
                      >
                        <a
                          className='py-3 pl-10 w-full hover:bg-gray-100 hover:text-gray-900'
                          data-action='click->analytics#sendEvent'
                          data-ga-event-action='destination selection'
                          data-ga-event-category='europe'
                          data-ga-event-label='mobile nav'
                          href='/adventures/trips?reg=europe'
                        >
                          Europe
                        </a>
                      </li>
                      <li
                        role='menuitem'
                        className='hermes-body-small flex w-full items-center'
                      >
                        <a
                          className='py-3 pl-10 w-full hover:bg-gray-100 hover:text-gray-900'
                          data-action='click->analytics#sendEvent'
                          data-ga-event-action='destination selection'
                          data-ga-event-category='middle east'
                          data-ga-event-label='mobile nav'
                          href='/adventures/trips?reg=middle+east'
                        >
                          Middle East
                        </a>
                      </li>
                      <li
                        role='menuitem'
                        className='hermes-body-small flex w-full items-center'
                      >
                        <a
                          className='py-3 pl-10 w-full hover:bg-gray-100 hover:text-gray-900'
                          data-action='click->analytics#sendEvent'
                          data-ga-event-action='destination selection'
                          data-ga-event-category='north america'
                          data-ga-event-label='mobile nav'
                          href='/adventures/trips?reg=north+america'
                        >
                          North America
                        </a>
                      </li>
                      <li
                        role='menuitem'
                        className='hermes-body-small flex w-full items-center'
                      >
                        <a
                          className='py-3 pl-10 w-full hover:bg-gray-100 hover:text-gray-900'
                          data-action='click->analytics#sendEvent'
                          data-ga-event-action='destination selection'
                          data-ga-event-category='oceania'
                          data-ga-event-label='mobile nav'
                          href='/adventures/trips?reg=oceania'
                        >
                          Oceania
                        </a>
                      </li>
                      <li
                        role='menuitem'
                        className='hermes-body-small flex w-full items-center'
                      >
                        <a
                          className='py-3 pl-10 w-full hover:bg-gray-100 hover:text-gray-900'
                          data-action='click->analytics#sendEvent'
                          data-ga-event-action='destination selection'
                          data-ga-event-category='south america'
                          data-ga-event-label='mobile nav'
                          href='/adventures/trips?reg=south+america'
                        >
                          South America
                        </a>
                      </li>
                    </ul>
                  </div>
                </details>
                <details
                  className='accordion'
                  role='menu'
                  aria-orientation='vertical'
                >
                  <summary
                    className='flex w-full cursor-pointer list-none items-center hover:bg-gray-100 hover:text-gray-900'
                    data-action='click->analytics#sendEvent'
                    data-ga-event-action='click'
                    data-ga-event-category='interests'
                    data-ga-event-label='mobile nav'
                  >
                    <span className='hermes-body-big w-40 flex-none py-3 px-5'>
                      Interests
                    </span>
                    <svg
                      className='svg-inline--fa fa-chevron-right text-gray-700 rotate-90'
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fal'
                      data-icon='chevron-right'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 320 512'
                      data-fa-i2svg=''
                    >
                      <path
                        fill='currentColor'
                        d='M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z'
                      />
                    </svg>
                    {/* <i class="fa-light fa-chevron-right text-gray-700 rotate-90"></i> */}
                    <svg
                      className='svg-inline--fa fa-chevron-right text-gray-700 -rotate-90'
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fal'
                      data-icon='chevron-right'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 320 512'
                      data-fa-i2svg=''
                    >
                      <path
                        fill='currentColor'
                        d='M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z'
                      />
                    </svg>
                    {/* <i class="fa-light fa-chevron-right text-gray-700 -rotate-90"></i> */}
                  </summary>
                  <div className='flex flex-col'>
                    <ul>
                      <li
                        role='menuitem'
                        className='hermes-body-small flex w-full items-center'
                      >
                        <a
                          className='py-3 pl-10 w-full hover:bg-gray-100 hover:text-gray-900'
                          data-action='click->analytics#sendEvent'
                          data-ga-event-action='interest selection'
                          data-ga-event-category='food & drink'
                          data-ga-event-label='mobile nav'
                          href='/adventures/trips?int=food+%26+drink'
                        >
                          Food &amp; Drink
                        </a>
                      </li>
                      <li
                        role='menuitem'
                        className='hermes-body-small flex w-full items-center'
                      >
                        <a
                          className='py-3 pl-10 w-full hover:bg-gray-100 hover:text-gray-900'
                          data-action='click->analytics#sendEvent'
                          data-ga-event-action='interest selection'
                          data-ga-event-category='history & culture'
                          data-ga-event-label='mobile nav'
                          href='/adventures/trips?int=history+%26+culture'
                        >
                          History &amp; Culture
                        </a>
                      </li>
                      <li
                        role='menuitem'
                        className='hermes-body-small flex w-full items-center'
                      >
                        <a
                          className='py-3 pl-10 w-full hover:bg-gray-100 hover:text-gray-900'
                          data-action='click->analytics#sendEvent'
                          data-ga-event-action='interest selection'
                          data-ga-event-category='wildlife & nature'
                          data-ga-event-label='mobile nav'
                          href='/adventures/trips?int=wildlife+%26+nature'
                        >
                          Wildlife &amp; Nature
                        </a>
                      </li>
                    </ul>
                  </div>
                </details>
                <a
                  role='menuitem'
                  className='hermes-body-big block py-3 px-5 w-full hover:bg-gray-100 hover:text-gray-900'
                  data-action='click->analytics#sendEvent'
                  data-ga-event-action='click'
                  data-ga-event-category='trip finder link'
                  data-ga-event-label='mobile nav'
                  href='/adventures/trips'
                >
                  Trip finder
                </a>
                <a
                  role='menuitem'
                  className='hermes-body-big block py-3 px-5 w-full hover:bg-gray-100 hover:text-gray-900'
                  data-action='click->analytics#sendEvent'
                  data-ga-event-action='click'
                  data-ga-event-category='about link'
                  data-ga-event-label='mobile nav'
                  href='/adventures/about'
                >
                  About
                </a>
                <div className='bg-hermes-cream my-6 py-8 px-5'>
                  <p className='mb-5 text-base font-semibold leading-6 text-gray-900'>
                    Have a question?
                  </p>
                  <ul className='flex flex-col gap-3' role='menu'>
                    <li className='flex items-center gap-4'>
                      <div className='bg-white h-8 w-8 flex shrink-0 items-center justify-center rounded-full'>
                        <svg
                          className='svg-inline--fa fa-phone text-hermes-red text-base'
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fal'
                          data-icon='phone'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 512 512'
                          data-fa-i2svg=''
                        >
                          <path
                            fill='currentColor'
                            d='M375.8 275.2c-16.4-7-35.4-2.4-46.7 11.4l-33.2 40.6c-46-26.7-84.4-65.1-111.1-111.1L225.3 183c13.8-11.3 18.5-30.3 11.4-46.7l-48-112C181.2 6.7 162.3-3.1 143.6 .9l-112 24C13.2 28.8 0 45.1 0 64v0C0 300.7 183.5 494.5 416 510.9c4.5 .3 9.1 .6 13.7 .8c0 0 0 0 0 0c0 0 0 0 .1 0c6.1 .2 12.1 .4 18.3 .4l0 0c18.9 0 35.2-13.2 39.1-31.6l24-112c4-18.7-5.8-37.6-23.4-45.1l-112-48zM447.7 480C218.1 479.8 32 293.7 32 64v0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0c0-3.8 2.6-7 6.3-7.8l112-24c3.7-.8 7.5 1.2 9 4.7l48 112c1.4 3.3 .5 7.1-2.3 9.3l-40.6 33.2c-12.1 9.9-15.3 27.2-7.4 40.8c29.5 50.9 71.9 93.3 122.7 122.7c13.6 7.9 30.9 4.7 40.8-7.4l33.2-40.6c2.3-2.8 6.1-3.7 9.3-2.3l112 48c3.5 1.5 5.5 5.3 4.7 9l-24 112c-.8 3.7-4.1 6.3-7.8 6.3c-.1 0-.2 0-.3 0z'
                          />
                        </svg>
                        {/* <i class="fa-light fa-phone text-hermes-red text-base" aria-hidden="true"></i> */}
                      </div>
                      <div className='prose prose-a:hermes-link-inline text-sm text-gray-900 prose-a:text-gray-900'>
                        <p>
                          Call us at
                          <a
                            className='inline-block'
                            href='tel:+1 833-919-9154'
                          >
                            +1 833-919-9154
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className='flex items-center gap-4'>
                      <div className='bg-white h-8 w-8 flex shrink-0 items-center justify-center rounded-full'>
                        <svg
                          className='svg-inline--fa fa-envelope text-hermes-red text-base'
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fal'
                          data-icon='envelope'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 512 512'
                          data-fa-i2svg=''
                        >
                          <path
                            fill='currentColor'
                            d='M64 96c-17.7 0-32 14.3-32 32v39.9L227.6 311.3c16.9 12.4 39.9 12.4 56.8 0L480 167.9V128c0-17.7-14.3-32-32-32H64zM32 207.6V384c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V207.6L303.3 337.1c-28.2 20.6-66.5 20.6-94.6 0L32 207.6zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z'
                          />
                        </svg>
                        {/* <i class="fa-light fa-envelope text-hermes-red text-base" aria-hidden="true"></i> */}
                      </div>
                      <div className='prose prose-a:hermes-link-inline text-sm text-gray-900 prose-a:text-gray-900'>
                        <p>
                          Send us a
                          <button
                            className='font-medium underline'
                            data-controller='modal'
                            data-action='click->modal#openByModalId'
                            data-modal-target='trigger'
                            data-modal-id='#general-inquiry'
                          >
                            message
                          </button>
                        </p>
                      </div>
                    </li>
                    <li className='flex items-center gap-4'>
                      <div className='bg-white h-8 w-8 flex shrink-0 items-center justify-center rounded-full'>
                        <svg
                          className='svg-inline--fa fa-question text-hermes-red text-base'
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fal'
                          data-icon='question'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 320 512'
                          data-fa-i2svg=''
                        >
                          <path
                            fill='currentColor'
                            d='M144 64c-53 0-96 43-96 96c0 8.8-7.2 16-16 16s-16-7.2-16-16C16 89.3 73.3 32 144 32h32c70.7 0 128 57.3 128 128c0 35.3-16.6 68.4-44.8 89.6l-60.8 45.6C184.3 305.8 176 322.4 176 340v12c0 8.8-7.2 16-16 16s-16-7.2-16-16V340c0-27.7 13-53.8 35.2-70.4L240 224c20.1-15.1 32-38.8 32-64c0-53-43-96-96-96H144zm-8 384a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z'
                          />
                        </svg>
                        {/* <i class="fa-light fa-question text-hermes-red text-base" aria-hidden="true"></i> */}
                      </div>
                      <div className='prose prose-a:hermes-link-inline text-sm text-gray-900 prose-a:text-gray-900'>
                        <p>
                          Check out our{" "}
                          <a href='/adventures/adventures-faq'>FAQ</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <button
                  data-controller='modal'
                  data-action='click->analytics#sendEvent click->modal#openByModalId'
                  data-modal-target='trigger'
                  data-modal-id='#newsletter-signup'
                  role='menuitem'
                  aria-haspopup='dialog'
                  data-ga-event-action='click'
                  data-ga-event-category='newsletter sign up link'
                  data-ga-event-label='mobile nav'
                  className='block w-full px-5 text-left hover:bg-gray-100 hover:text-gray-900'
                >
                  Sign up for our emails
                </button>
                <a
                  className='bg-hermes-cream text-base leading-6 text-hermes-red hover:text-hermes-red-dark mt-6 block w-full cursor-pointer rounded-b-lg py-4 px-5'
                  href='/adventures/trips'
                >
                  View all trips
                  <svg
                    className='svg-inline--fa fa-arrow-right hermes-body-smaller ml-1'
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='far'
                    data-icon='arrow-right'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                    data-fa-i2svg=''
                  >
                    <path
                      fill='currentColor'
                      d='M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z'
                    />
                  </svg>
                  {/* <i class="fa-regular hermes-body-smaller fa-arrow-right ml-1"></i> */}
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
