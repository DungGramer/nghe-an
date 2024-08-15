const Hero = () => {
  return (
    <div className='h-screen-safe relative' data-scroll-target='hero'>
      <section className=' relative overflow-hidden flex h-full min-h-[500px] flex-col justify-end bg-gray-800 bg-cover bg-center'>
        <div
          className='bg-hero bg-cover bg-center'
          // src='https://i1-dulich.vnecdn.net/2022/04/26/vuonquocgiaPuMat2-1650968649-5993-1650971138.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=63aMESPkyBCaVaiL01LDiA'
        />
        <div className='mb-24 flex w-full flex-col items-center z-10'>
          <h2 className='hermes-label-small md:hermes-label-big max-w-xl text-center text-white lg:max-w-none'>
            Non Hồng ai đắp mà cao, Sông Lam ai bới, ai đào mà sâu?
          </h2>
          <h1 className='hermes-heading-display mt-4 max-w-xl px-4 text-center text-white sm:px-0 md:max-w-2xl lg:px-0 italic'>
            Nghệ An
          </h1>
        </div>
        <div className='z-10 mb-8 lg:mb-16'>
          <div
            data-controller='hermes--home--search-component'
            className='home__search-component flex w-full justify-center'
          >
            <form
              className='flex w-full justify-center'
              data-action='hermes--home--search-component#doSearch'
              data-hermes--home--search-component-target='form'
              action='/adventures/trips'
              acceptCharset='UTF-8'
              method='get'
            >
              <div
                data-hermes--home--search-component-target='searchBar'
                className='mx-4 flex w-full max-w-[592px] flex-col items-center gap-0 rounded-xl border-gray-200 bg-white px-4 py-4 text-gray-500 sm:mx-6 lg:max-w-3xl lg:flex-row lg:gap-0 lg:border lg:px-0'
              >
                <div className='w-full grow border-gray-200 pb-2 lg:w-1/2 lg:rounded-l-xl lg:border-r lg:px-1 lg:pb-0'></div>
                <div className='w-full grow border-t border-gray-200 py-2 lg:w-1/2 lg:border-none lg:py-0 lg:px-1'></div>
                <div className='w-full shrink-0 grow-0 lg:w-auto lg:rounded-r-xl lg:px-1 lg:pr-4'>
                  <button
                    type='submit'
                    className='brand-button brand-button-primary brand-button-lg lg:brand-button-xl flex w-full justify-center gap-3 lg:w-auto'
                  >
                    <svg
                      className='svg-inline--fa fa-magnifying-glass w-4 flex-none'
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fal'
                      data-icon='magnifying-glass'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                      data-fa-i2svg=''
                    >
                      <path
                        fill='currentColor'
                        d='M384 208A176 176 0 1 0 32 208a176 176 0 1 0 352 0zM343.3 366C307 397.2 259.7 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 51.7-18.8 99-50 135.3L507.3 484.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L343.3 366z'
                      />
                    </svg>
                    {/* <i class="fa-light fa-magnifying-glass w-4 flex-none"></i> */}
                    <span className='flex-initial'>Search</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
