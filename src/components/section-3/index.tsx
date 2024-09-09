import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const blogSlides = [
  {
    id: 1,
    title: "9 điểm vui chơi ở Nghệ An",
    link: "https://vnexpress.net/9-diem-vui-choi-o-nghe-an-4693710.html",
    image:
      "https://i1-dulich.vnecdn.net/2023/12/28/2018-66-Tra-i-tim-mu-a-ho-i-Cu-9632-7369-1703727453.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=rNpBJkfh0L_argKNnESXLg",
  },
  {
    id: 2,
    title:
      "Điểm du lịch cộng đồng Bản Nưa",
    link: "https://nghean.gov.vn/diem-du-lich/diem-du-lich-cong-dong-ban-nua-623724",
    image:
      "https://datafiles.nghean.gov.vn/nan-ubnd/1/quantritintuc20242/1638442095766744668.jpg",
  },
  {
    id: 3,
    title:
      "Du lịch Cửa Lò và vùng phụ cận",
    link: "https://nghean.gov.vn/diem-du-lich/du-lich-cua-lo-va-vung-phu-can-404627",
    image:
      "https://storage-vnportal.vnpt.vn/nan-ubnd/1/oldimg/201508/e8fc1600498b39f3a9aabdc7f97ab8c3/hoang_hon_cua_lo.jpg",
  },
  {
    id: 4,
    title:
      "Thác Xao Va",
    link: "https://nghean.gov.vn/diem-du-lich/thac-xao-va-517649",
    image:
      "https://statics.vinwonders.com/thac-xao-va-5_1633331966.jpg",
  },
  // Add other slides similarly...
];

const BlogSlider = () => {

  return (
    <div id='blog-sharing' className='bg-white py-12 2xl:mt-0'>
      <div className='mod-slider__header'>
        <div className='text-center lg:px-20 pb-5'>
          <h1 className='hermes-heading-big text-gray-900'>Blog & Chia sẻ</h1>
        </div>
      </div>
      <div className='mod-slider__body'>
        <div className='mod-slider__body-inner container-w-fixed-narrow'>
          <Swiper
            modules={[Pagination]}
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className='mySwiper'
          >
            <div>
              {blogSlides.map((slide) => (
                <SwiperSlide key={slide.id} className='mod-slider__slide pb-10'>
                  <a href={slide.link} className='mod-slider__slide-inner'>
                    <div className='mod-slider__image'>
                      {/* <img src={slide.image} alt={slide.title} loading='lazy' /> */}
                      <figure className='relative block w-full'>
                        <a
                          className='block h-full w-full overflow-hidden rounded-2xl'
                          href={slide.image}
                        >
                          <picture>
                            <source srcSet={slide.image} type='image/webp' />
                            <img
                              alt='Adventure'
                              className='default-image rounded-2xl object-cover zoom-on-hover scale-on-hover'
                              style={{ aspectRatio: "370 / 482" }}
                              src={slide.image}
                            />
                          </picture>
                        </a>
                      </figure>
                    </div>
                    <div className='mod-slider__text'>
                      <h3 className='card__header mt-1 grow-0 text-base font-semibold leading-6 text-gray-900'>
                        {slide.title}
                      </h3>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
