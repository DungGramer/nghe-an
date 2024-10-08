// AdventureCard.tsx - Refactor to a separate component
const AdventureCard = ({
  id,
  country,
  days,
  nights,
  title,
  price,
  imageUrl,
  tripLink,
}) => {
  return (
    <div
      id={`adventure-card-trip_series_${id}`}
      className='adventure-card-component'
      data-trip-card=''
      data-trip-id={id}
      itemType='https://schema.org/Product'
    >
      <div
        className='hidden'
        itemProp='offers'
        itemType='https://schema.org/Offer'
      >
        <link itemProp='url' href={tripLink} />
        <meta itemProp='availability' content='LimitedAvailability' />
        <meta itemProp='priceCurrency' content='USD' />
        <meta itemProp='price' content={price} />
        <meta itemProp='minPrice' content={price} />
        <div itemProp='offeredBy' itemType='https://schema.org/Organization'>
          <meta itemProp='name' content='Atlas Obscura' />
          <link itemProp='url' href='https://www.atlasobscura.com/' />
        </div>
      </div>
      <div className='transition-transform duration-150'>
        <div className='cursor-pointer adventure-card h-full w-full'>
          <article role='article' className='h-full'>
            <figure className='relative block w-full'>
              <a
                className='block h-full w-full overflow-hidden rounded-2xl'
                href={tripLink}
              >
                <picture>
                  <source srcSet={imageUrl} type='image/webp' />
                  <img
                    alt='Adventure'
                    className='default-image rounded-2xl object-cover zoom-on-hover scale-on-hover'
                    style={{ aspectRatio: "370 / 482" }}
                    src={imageUrl}
                  />
                </picture>
              </a>
            </figure>
            <div className='card__body relative flex h-full flex-col gap-1 text-gray-700'>
              <a className='flex grow flex-col' href={tripLink}>
                <header className='flex flex-initial flex-col gap-1 leading-none'>
                  <h4 className='card__hat hermes-label-smaller mt-2 grow-0 text-gray-700'>
                    <p className='align-middle text-xs leading-normal'>
                      <span>{country}</span>
                      <span className='text-hermes-teal mx-1 text-sm'>•</span>
                      <span>{`${days} ngày, ${nights} đêm`}</span>
                    </p>
                  </h4>
                  <h3 className='card__header mt-1 grow-0 text-base font-semibold leading-6 text-gray-900'>
                    {title}
                  </h3>
                </header>
                <footer className='card__body-footer hermes-body-smaller mt-2 flex grow text-gray-700'>
                  <p className='align-middle'>
                    Từ <span>{`${price}`}</span>
                  </p>
                </footer>
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

// Main Component
const AdventureCards = () => {
  const cardsData = [
    {
      id: 457,
      country: "Cửa Lò",
      days: 3,
      nights: 2,
      title: "Thiên đường biển miền Trung",
      price: "2.000.000 vnđ",
      imageUrl:
        "https://i1-dulich.vnecdn.net/2022/04/26/bien-Cua-Lo-Nghe-An-1225-1650971137.png?w=0&h=0&q=100&dpr=1&fit=crop&s=dsSTtfbRhadg1sRPsV91Dg",
      tripLink: "/adventures/trips/romania",
    },
    {
      id: 455,
      country: "Hang Mắt Rồng",
      days: 2,
      nights: 3,
      title: "Kiệt tác điêu khắc của thiên nhiên",
      price: "2.150.000 vnđ",
      imageUrl:
        "https://i1-dulich.vnecdn.net/2022/04/26/Hang-Rong-xu-Nghe-Quynh-Luu-3924-1650971137.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=d25O1CdMjSiQJ_Rmrv2qgQ",
      tripLink: "/adventures/trips/oaxaca-gastro",
    },
    {
      id: 53,
      country: "Phà Lài",
      days: 2,
      nights: 2,
      title: "Nơi non sông giao hoà",
      price: "2.420.000 vnđ",
      imageUrl:
        "https://i1-dulich.vnecdn.net/2022/04/26/du-lich-Nghe-An-1-2230-1650971137.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=IH_z-Gq_yhhM3YQ4oJXC0g",
      tripLink: "/adventures/trips/turkmenistan",
    },
    // Add more cards here as needed
  ];

  return (
    <div className='-mt-10 bg-white py-12 pt-32 2xl:mt-0'>
      <section className='flex flex-col justify-center gap-20'>
        <div className='lg:flex'>
          <div className='lg:grow' />
          <div className='text-center lg:px-20'>
            <h1 className='hermes-heading-big text-gray-900'>
              Tạo nên những kỷ niệm khó quên
            </h1>
          </div>
          <div className='lg:border-px self-center border-0 lg:h-px lg:grow lg:border-t lg:border-gray-400' />
        </div>
        <div className='container-w-fixed-narrow'>
          <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3'>
            {cardsData.map((card) => (
              <AdventureCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdventureCards;
