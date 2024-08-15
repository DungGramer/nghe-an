import React from "react";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-400'>
      <div className='container-w-fixed flex flex-col gap-12 py-12 xl:py-16'>
        <div className='flex flex-col gap-12 lg:flex-row lg:justify-between'>
          <section className='flex flex-col gap-12 lg:mr-8 lg:basis-2/5'>
            <a className='w-44 md:w-56 lg:hidden' href='/'>
              <img
                className='w-full no_exif_metadata'
                src='https://assets.atlasobscura.com/assets/hermes/ao_logo_one_line_cmyk-a21766480309a85b064592f5ca8f59851d18505de5e18fe210c10829ef4d3505.svg'
              />
            </a>{" "}
            <div className='flex flex-col gap-8'>
              <div className='flex-flex-col gap-2'>
                <h1 className='hermes-heading-small text-gray-300'>
                  Contact us
                </h1>
                <p className='font-sans text-base font-normal leading-6 text-gray-400'>
                  Questions about our trips?
                </p>
              </div>
              <ul className='flex flex-col gap-3' role='menu'>
                <li className='flex items-center gap-4'>
                  <div className='bg-gray-400 h-8 w-8 flex shrink-0 items-center justify-center rounded-full'>
                    <svg
                      className='svg-inline--fa fa-phone text-gray-900 text-base'
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
                    {/* <i class="fa-light fa-phone text-gray-900 text-base" aria-hidden="true"></i> */}
                  </div>
                  <div className='prose prose-a:hermes-link-inline text-sm text-gray-400 prose-a:text-gray-400'>
                    <p>
                      Call us at
                      <a className='inline-block' href='tel:+1 833-919-9154'>
                        +1 833-919-9154
                      </a>
                    </p>
                  </div>
                </li>
                <li className='flex items-center gap-4'>
                  <div className='bg-gray-400 h-8 w-8 flex shrink-0 items-center justify-center rounded-full'>
                    <svg
                      className='svg-inline--fa fa-envelope text-gray-900 text-base'
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
                    {/* <i class="fa-light fa-envelope text-gray-900 text-base" aria-hidden="true"></i> */}
                  </div>
                  <div className='prose prose-a:hermes-link-inline text-sm text-gray-400 prose-a:text-gray-400'>
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
                  <div className='bg-gray-400 h-8 w-8 flex shrink-0 items-center justify-center rounded-full'>
                    <svg
                      className='svg-inline--fa fa-question text-gray-900 text-base'
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
                    {/* <i class="fa-light fa-question text-gray-900 text-base" aria-hidden="true"></i> */}
                  </div>
                  <div className='prose prose-a:hermes-link-inline text-sm text-gray-400 prose-a:text-gray-400'>
                    <p>
                      Check out our <a href='/adventures/adventures-faq'>FAQ</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <turbo-frame id='email_footer_component'>
              <form
                action='/adventures/email_lists_subscriptions'
                acceptCharset='UTF-8'
                method='post'
              >
                <input
                  type='hidden'
                  name='authenticity_token'
                  defaultValue='9uQDEEXTBe8B1mas_zaIzW24GRrNsgfUxAQCj-uaftXwKLD0VBFnrXCXn1UQ57C7_LS1Wd_l-b2wLhIbTZJCJg'
                  autoComplete='off'
                />
                <input
                  defaultValue='email_footer_component'
                  autoComplete='off'
                  type='hidden'
                  name='form_context'
                  id='form_context'
                />
                <label
                  className='block text-gray-300 text-base font-semibold mb-4'
                  htmlFor='email'
                >
                  Sign up for our emails
                </label>
                <div className='flex flex-col sm:flex-row sm:gap-2'>
                  <input
                    placeholder='Email'
                    required='required'
                    className='focus:outline-0 focus:ring-0 focus:invalid:border-red-500 focus:invalid:text-red-600 focus:invalid:ring-red-500 placeholder:text-gray-400 border-white border rounded-md py-2.5 px-3 w-full bg-gray-900 caret-white mb-2 text-white text-base sm:mb-0 sm:w-72'
                    type='email'
                    name='email'
                    id='email'
                  />
                  <input
                    type='submit'
                    name='commit'
                    defaultValue='Subscribe'
                    className='border-white border w-full rounded-md bg-white text-gray-900 text-base font-normal py-2.5 px-3 hover:cursor-pointer sm:w-auto'
                    data-disable-with='Subscribe'
                  />
                </div>
              </form>
            </turbo-frame>{" "}
          </section>
          <section className='grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-10 lg:basis-3/5'>
            <ul>
              <li className='font-sans text-base font-normal leading-6 text-gray-300'>
                <strong>Destinations</strong>
              </li>
              <li className='mt-4 font-sans text-base font-normal leading-6 text-gray-400 hover:text-white'>
                <a
                  data-action='click->analytics#sendEvent'
                  data-ga-event-action='destination selection'
                  data-ga-event-category='africa'
                  data-ga-event-label='footer'
                  href='/adventures/trips?reg=africa'
                >
                  Africa
                </a>
              </li>
              <li className='mt-4 font-sans text-base font-normal leading-6 text-gray-400 hover:text-white'>
                <a
                  data-action='click->analytics#sendEvent'
                  data-ga-event-action='destination selection'
                  data-ga-event-category='asia'
                  data-ga-event-label='footer'
                  href='/adventures/trips?reg=asia'
                >
                  Asia
                </a>
              </li>
              <li className='mt-4 font-sans text-base font-normal leading-6 text-gray-400 hover:text-white'>
                <a
                  data-action='click->analytics#sendEvent'
                  data-ga-event-action='destination selection'
                  data-ga-event-category='europe'
                  data-ga-event-label='footer'
                  href='/adventures/trips?reg=europe'
                >
                  Europe
                </a>
              </li>
              <li className='mt-4 font-sans text-base font-normal leading-6 text-gray-400 hover:text-white'>
                <a
                  data-action='click->analytics#sendEvent'
                  data-ga-event-action='destination selection'
                  data-ga-event-category='middle east'
                  data-ga-event-label='footer'
                  href='/adventures/trips?reg=middle+east'
                >
                  Middle East
                </a>
              </li>
              <li className='mt-4 font-sans text-base font-normal leading-6 text-gray-400 hover:text-white'>
                <a
                  data-action='click->analytics#sendEvent'
                  data-ga-event-action='destination selection'
                  data-ga-event-category='north america'
                  data-ga-event-label='footer'
                  href='/adventures/trips?reg=north+america'
                >
                  North America
                </a>
              </li>
              <li className='mt-4 font-sans text-base font-normal leading-6 text-gray-400 hover:text-white'>
                <a
                  data-action='click->analytics#sendEvent'
                  data-ga-event-action='destination selection'
                  data-ga-event-category='oceania'
                  data-ga-event-label='footer'
                  href='/adventures/trips?reg=oceania'
                >
                  Oceania
                </a>
              </li>
              <li className='mt-4 font-sans text-base font-normal leading-6 text-gray-400 hover:text-white'>
                <a
                  data-action='click->analytics#sendEvent'
                  data-ga-event-action='destination selection'
                  data-ga-event-category='south america'
                  data-ga-event-label='footer'
                  href='/adventures/trips?reg=south+america'
                >
                  South America
                </a>
              </li>
            </ul>
            <ul>
              <li className='font-sans text-base font-normal leading-6 text-gray-300'>
                <strong>Interests</strong>
              </li>
              <li className='mt-4 font-sans text-base font-normal leading-6 text-gray-400 hover:text-white'>
                <a
                  data-action='click->analytics#sendEvent'
                  data-ga-event-action='interest selection'
                  data-ga-event-category='food & drink'
                  data-ga-event-label='footer'
                  href='/adventures/trips?int=food+%26+drink'
                >
                  Food &amp; Drink
                </a>
              </li>
              <li className='mt-4 font-sans text-base font-normal leading-6 text-gray-400 hover:text-white'>
                <a
                  data-action='click->analytics#sendEvent'
                  data-ga-event-action='interest selection'
                  data-ga-event-category='history & culture'
                  data-ga-event-label='footer'
                  href='/adventures/trips?int=history+%26+culture'
                >
                  History &amp; Culture
                </a>
              </li>
              <li className='mt-4 font-sans text-base font-normal leading-6 text-gray-400 hover:text-white'>
                <a
                  data-action='click->analytics#sendEvent'
                  data-ga-event-action='interest selection'
                  data-ga-event-category='wildlife & nature'
                  data-ga-event-label='footer'
                  href='/adventures/trips?int=wildlife+%26+nature'
                >
                  Wildlife &amp; Nature
                </a>
              </li>
            </ul>
            <ul>
              <li className='font-sans text-base font-normal leading-6 text-gray-300'>
                <strong>Company</strong>
              </li>
              <li className='mt-4 font-sans text-base font-normal leading-6 text-gray-400 hover:text-white'>
                <a
                  data-action='click->analytics#sendEvent'
                  data-ga-event-action='click'
                  data-ga-event-category='about link'
                  data-ga-event-label='footer'
                  href='/adventures/about'
                >
                  About
                </a>
              </li>
              <li className='mt-4 font-sans text-base font-normal leading-6 text-gray-400 hover:text-white'>
                <a
                  data-action='click->analytics#sendEvent'
                  data-ga-event-action='click'
                  data-ga-event-category='about link'
                  data-ga-event-label='footer'
                  href='/'
                >
                  Atlas Obscura
                </a>
              </li>
            </ul>
            <ul>
              <li className='font-sans text-base font-normal leading-6 text-gray-300'>
                <strong>Resources</strong>
              </li>
              <li className='mt-4 font-sans text-base font-normal leading-6 text-gray-400 hover:text-white'>
                <a href='/adventures/privacy'>Privacy policy</a>
              </li>
              <li className='mt-4 font-sans text-base font-normal leading-6 text-gray-400 hover:text-white'>
                <a href='/adventures/cookies'>Cookie policy</a>
              </li>
              <li className='mt-4 font-sans text-base font-normal leading-6 text-gray-400 hover:text-white'>
                <a href='/adventures/terms'>Terms of use</a>
              </li>
              <li className='mt-4 font-sans text-base font-normal leading-6 text-gray-400 hover:text-white'>
                <a
                  target='_blank'
                  href='https://www.insureyonder.com/atlasobscura/'
                >
                  Travel insurance
                  <svg
                    className='svg-inline--fa fa-arrow-up-right-from-square ml-1'
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fal'
                    data-icon='arrow-up-right-from-square'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    data-fa-i2svg=''
                  >
                    <path
                      fill='currentColor'
                      d='M336 0c-8.8 0-16 7.2-16 16s7.2 16 16 16H457.4L212.7 276.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L480 54.6V176c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16H336zM64 64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V304c0-8.8-7.2-16-16-16s-16 7.2-16 16V448c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32H208c8.8 0 16-7.2 16-16s-7.2-16-16-16H64z'
                    />
                  </svg>
                  {/* <i class="fa-light fa-arrow-up-right-from-square ml-1"></i> */}
                </a>
              </li>
            </ul>
          </section>
        </div>
        <section className='flex flex-col items-center justify-center gap-6 border-t border-solid border-gray-700 pt-6 lg:flex-row lg:items-center lg:justify-between'>
          <a className='hidden lg:block lg:w-44' href='/'>
            <img
              className='w-full no_exif_metadata'
              src='https://assets.atlasobscura.com/assets/hermes/ao_logo_one_line_cmyk-a21766480309a85b064592f5ca8f59851d18505de5e18fe210c10829ef4d3505.svg'
            />
          </a>{" "}
          <div className='flex flex-row items-center gap-6 lg:order-last'>
            <a href='https://www.instagram.com/atlasobscura/'>
              <svg
                className='svg-inline--fa fa-instagram text-2xl text-gray-400 hover:text-white'
                aria-hidden='true'
                focusable='false'
                data-prefix='fab'
                data-icon='instagram'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
                data-fa-i2svg=''
              >
                <path
                  fill='currentColor'
                  d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
                />
              </svg>
              {/* <i class="fa-brands fa-instagram text-2xl  text-gray-400 hover:text-white"></i> */}
            </a>{" "}
            <a href='https://www.facebook.com/atlasobscuratrips/'>
              <svg
                className='svg-inline--fa fa-square-facebook text-2xl text-gray-400 hover:text-white'
                aria-hidden='true'
                focusable='false'
                data-prefix='fab'
                data-icon='square-facebook'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
                data-fa-i2svg=''
              >
                <path
                  fill='currentColor'
                  d='M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z'
                />
              </svg>
              {/* <i class="fa-brands fa-facebook-square text-2xl  text-gray-400 hover:text-white"></i> */}
            </a>{" "}
            <a href='https://www.pinterest.com/atlasobscura/_saved/'>
              <svg
                className='svg-inline--fa fa-pinterest text-2xl text-gray-400 hover:text-white'
                aria-hidden='true'
                focusable='false'
                data-prefix='fab'
                data-icon='pinterest'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 496 512'
                data-fa-i2svg=''
              >
                <path
                  fill='currentColor'
                  d='M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z'
                />
              </svg>
              {/* <i class="fa-brands fa-pinterest text-2xl  text-gray-400 hover:text-white"></i> */}
            </a>{" "}
          </div>
          <div className='text-gray-400'>
            © 2024 Atlas Obscura. All rights reserved.
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
