import React from "react";

const Hero2 = () => {
  return (
    <section className='bg-[#F0EBFE] lg:pt-[72px]'>
      <div className='flex flex-col lg:flex-row-reverse lg:gap-x-14 xl:gap-x-20 2xl:gap-x-32'>
        <div className='flex flex-col gap-3 px-6 py-8 md:container md:py-16 lg:px-0 lg:mr-14 lg:pt-0 lg:w-1/2 xl:mr-20 xl:w-7/12 2xl:mr-32'>
          <div className='text-right mb-4 lg:text-left'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='0.25em'
              className='inline-block text-[140px] md:text-[188px]'
              viewBox='0 0 137 35'
              fill='currentColor'
              aria-hidden='true'
            >
              <defs>
                <linearGradient
                  id='linear-gradient'
                  x1='-8.99'
                  y1='57.08'
                  x2='167.78'
                  y2='-17.73'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset={0} stopColor='#006cff' />
                  <stop offset='0.91' stopColor='#a200ed' />
                </linearGradient>
              </defs>
              <g id='logo-elsewhere-lp' transform='translate(3.471 36.28)' />
            </svg>
          </div>
          <h2 className='inline-block font-light w-full text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#1B5BFD] via-[#6A0DAD] to-[#8C10F0] md:text-5xl lg:pb-4 xl:pb-6 lg:text-5xl'>
            Hành trình trong mơ của bạn, cùng bạn tạo ra
          </h2>
          <p className='lg:text-xl lg:pb-6'>
            Kết nối bạn với một chuyên gia địa phương từng đoạt giải thưởng để
            tạo nên chuyến đi đáng nhớ và mang tính cá nhân cho bạn.
          </p>
          <div>
            <div className='pt-6 pb-12'>
              Ai hiểu rõ hơn người dân địa phương? Chúng tôi hợp tác với mạng
              lưới hướng dẫn viên du lịch bản địa. Mỗi chuyến đi được tạo ra đều
              độc đáo với bạn và mang phong cách du lịch của riêng bạn.
            </div>
          </div>
          <a
            href='https://www.elsewhere.io/?utm_source=lonelyplanet&utm_medium=homepage&utm_campaign=homepage'
            className='btn btn-primary inline-flex flex-shrink-0 items-center gap-2 w-content'
            data-testid='a'
          >
            Tìm hiểu thêm{" "}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              className='inline-block'
              viewBox='0 0 19 16'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                d='M18.5 8C14.5461 8 11.3409 4.86599 11.3409 1M18.5 8C14.5461 8 11.3409 11.134 11.3409 15M18.5 8H1'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='square'
                fill='none'
              />
            </svg>
          </a>
        </div>
        <div className='relative w-full lg:w-1/2 xl:w-5/12'>
          <img
            alt='Local expert with a traveler in a forest'
            loading='lazy'
            width={500}
            height={700}
            decoding='async'
            data-nimg={1}
            className='max-w-full object-cover rounded-tr-[64px] w-full h-[360px] md:h-[500px] lg:h-full xl:h-[750px] 2xl:h-full 2xl:max-h-[700px]'
            src='https://file3.qdnd.vn/data/images/0/2020/07/07/thuha/070720h69.jpg'
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
