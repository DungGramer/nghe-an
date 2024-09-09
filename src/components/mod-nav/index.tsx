import "./index.css";

const navItems = [
  {
    id: "visa-info",
    link: "plan/visa-info/",
    icon: "icon_passport.svg",
    title: "Thông tin Visa",
    items: [
      { link: "plan/embassies/", label: "Đại sứ quán" },
      // { link: "plan/getting-to-japan/", label: "Đến Nhật Bản" },
    ],
  },
  {
    id: "plan-help",
    link: "plan/",
    icon: "icon_first_time.svg",
    title: "Giúp bạn lên kế hoạch",
    items: [
      { link: "plan/wifi-and-connectivity/", label: "Wi-Fi & Kết nối" },
      { link: "plan/weather/", label: "Thời tiết & Địa lý" },
      { link: "plan/ic-card/", label: "Thẻ du lịch IC" },
      // { link: "plan/jr-rail-passes/", label: "JR Rail Passes" },
    ],
  },
  {
    id: "stay-info",
    link: "plan/online-reservation-sites/",
    icon: "icon_stay.svg",
    title: "Nơi ở",
    target: "_blank",
    items: [
      {
        link: "plan/online-reservation-sites/",
        label: "Khách sạn",
        target: "_blank",
      },
      // {
      //   link: "plan/online-reservation-sites/",
      //   label: "Lữ quán (Ryokan)",
      //   target: "_blank",
      // },
      { link: "luxury/luxury-accommodation/", label: "Nơi ở cao cấp" },
      {
        link: "plan/online-reservation-sites/",
        label: "Nơi ở tiết kiệm",
        target: "_blank",
      },
    ],
  },
  {
    id: "airport-access",
    link: "plan/airport-access/",
    icon: "icon_airport.svg",
    title: "Sân bay lân cận",
    items: [
      {
        link: "plan/airport-access/haneda-airport/",
        label: "Sân bay Tân Sơn Nhất",
      },
      { link: "plan/airport-access/narita-airport/", label: "Sân bay Nội Bài" },
    ],
  },
  {
    id: "getting-around",
    link: "plan/getting-around/",
    icon: "icon_getting_around.svg",
    title: "Phương tiện đi lại",
    items: [
      {
        link: "plan/getting-around/shinkansen/",
        label: "Xe ôm",
      },
      { link: "plan/getting-around/taxis/", label: "Taxi" },
      { link: "plan/getting-around/bicycles/", label: "Xe đạp" },
      {
        link: "plan/getting-around/luggage-storage/",
        label: "Cất giữ hành lý",
      },
    ],
  },
  {
    id: "brochures",
    link: "https://www.japan.travel/brochures/vie/index.php",
    icon: "icon_itineraries.svg",
    title: "Lộ trình",
    target: "_blank",
    items: [
      {
        link: "/en/japan-tours-and-activities/",
        label: "Tour du lịch và các hoạt động trải nghiệm",
      },
    ],
  },
  // Add more items as needed...
];

const NavigationLink = ({ link, label }) => (
  <li className='mod-navigation__links-item'>
    <a href={link} className='mod-navigation__link'>
      {label}
    </a>
  </li>
);

const NavigationItem = ({ item }) => (
  <li className='mod-navigation__item'>
    <div className='mod-navigation__item-inner'>
      <a href={item.link} className='mod-navigation__header'>
        <div className='mod-navigation__icon'>
          <img
            src={`https://asset.japan.travel/image/upload/v1515774718/static/svg/common/${item.icon}`}
            alt={item.title}
            className='svg-fit'
          />
        </div>
        <div className='mod-navigation__header-name'>
          <span className='mod-navigation__header-text'>{item.title}</span>
        </div>
      </a>
      <div className='mod-navigation__body'>
        <ul className='mod-navigation__links-list'>
          {item.items.map((subItem) => (
            <NavigationLink
              key={subItem.link}
              link={subItem.link}
              label={subItem.label}
            />
          ))}
        </ul>
      </div>
    </div>
  </li>
);

const ModNav = () => (
  <div className='mod-navigation__body-inner bg-white py-12 2xl:mt-0'>
    <ul className='mod-navigation__items'>
      {navItems.map((item) => (
        <NavigationItem key={item.id} item={item} />
      ))}
    </ul>
  </div>
);

export default ModNav;
