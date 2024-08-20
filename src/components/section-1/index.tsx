const Section1 = () => {
  const trips = [
    {
      id: 457,
      country: "Romania",
      duration: "12 ngày, 11 đêm",
      name: "Cửa Lò - Thiên đường biển miền Trung",
      price: "$3,930",
      url: "https://www.atlasobscura.com/adventures/trips/romania",
      image:
        "https://i1-dulich.vnecdn.net/2022/04/26/bien-Cua-Lo-Nghe-An-1225-1650971137.png?w=0&h=0&q=100&dpr=1&fit=crop&s=dsSTtfbRhadg1sRPsV91Dg",
    },
    {
      id: 455,
      country: "Mexico",
      duration: "7 ngày, 6 đêm",
      name: "Hang Mắt Rồng - Kiệt tác điêu khắc của thiên nhiên",
      price: "$3,990",
      url: "https://www.atlasobscura.com/adventures/trips/oaxaca-gastro",
      image:
        "https://i1-dulich.vnecdn.net/2022/04/26/Hang-Rong-xu-Nghe-Quynh-Luu-3924-1650971137.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=d25O1CdMjSiQJ_Rmrv2qgQ",
    },
    {
      id: 53,
      country: "Turkmenistan",
      duration: "10 ngày, 9 đêm",
      name: "Phà Lài - Nơi non sông giao hoà",
      price: "$4,285",
      url: "https://www.atlasobscura.com/adventures/trips/turkmenistan",
      image:
        "https://i1-dulich.vnecdn.net/2022/04/26/du-lich-Nghe-An-1-2230-1650971137.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=IH_z-Gq_yhhM3YQ4oJXC0g",
    },
    {
      id: 401,
      country: "Tunisia",
      duration: "13 ngày, 12 đêm",
      name: "Tunisia và Cát của Thời gian",
      price: "$5,145",
      url: "https://www.atlasobscura.com/adventures/trips/tunisia-sands",
      image:
        "https://img.atlasobscura.com/UMK1bfP4MHtvcvZhZhelRrWIxoT8LEGjnvmhjmvmh70/rs:fill:370:482:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL2V2ZW50/X2ltYWdlcy9iZTcz/NDg5Ny0zMmUyLTQx/MzItYTFlZi1jMGVj/NDY0NGMxM2M5ZDJi/ZTc5NmM0MTZjNzlj/YjJfdHVuaXNpYS1k/amVyYmEtaXNsYW5k/LWNpdHktdmlldy1k/YXktNi1zaHV0dGVy/c3RvY2tfMTMwNjc5/NDAzMS5qcGc.jpg",
    },
  ];

  return (
    <div className="-mt-10 bg-white pt-44 pb-16 2xl:mt-0">
      <section className="flex flex-col justify-center gap-20">
        <div className="lg:flex">
          <div className="lg:grow" />
          <div className="text-center lg:px-20">
            <h1 className="hermes-heading-big text-gray-900">
              Tạo nên những kỷ niệm khó quên
            </h1>
          </div>
          <div className="lg:border-px self-center border-0 lg:h-px lg:grow lg:border-t lg:border-gray-400" />
        </div>
        <div className="container-w-fixed-narrow">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
            {trips.map((trip) => (
              <div
                key={trip.id}
                className="adventure-card-component last-of-type:hidden sm:last-of-type:block lg:last-of-type:hidden"
              >
                <div className="transition-transform duration-150">
                  <div className="cursor-pointer adventure-card h-full w-full">
                    <article role="article" className="h-full">
                      <figure className="relative block w-full">
                        <a
                          className="block h-full w-full overflow-hidden rounded-2xl"
                          href={trip.url}
                        >
                          <img
                            alt={trip.name}
                            className="default-image rounded-2xl object-cover zoom-on-hover scale-on-hover"
                            style={{ aspectRatio: "370 / 482" }}
                            src={trip.image}
                          />
                        </a>
                      </figure>
                      <div className="card__body relative flex h-full flex-col gap-1 text-gray-700">
                        <a
                          className="flex grow flex-col"
                          href={trip.url}
                        >
                          <header className="flex flex-initial flex-col gap-1 leading-none">
                            <h4 className="card__hat hermes-label-smaller mt-2 grow-0 text-gray-700">
                              <p className="align-middle text-xs leading-normal">
                                <span>{trip.country}</span>
                                <span className="text-hermes-teal mx-1 text-sm">
                                  •
                                </span>
                                <span>{trip.duration}</span>
                              </p>
                            </h4>
                            <h3 className="card__header mt-1 grow-0 text-base font-semibold leading-6 text-gray-900">
                              {trip.name}
                            </h3>
                          </header>
                          <footer className="card__body-footer hermes-body-smaller mt-2 flex grow text-gray-700">
                            <p className="align-middle">
                              Từ <span>{trip.price}</span>
                            </p>
                          </footer>
                        </a>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
