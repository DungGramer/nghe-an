import React from "react";

const MenuAction = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between" }}
      className='-mt-10 relative top-0 left-0 right-0 px-5 py-2 z-10 text-center [&_>_div]:flex-1 gap-8 text-xl'
    >
      <div className='shadow-md bg-white rounded-lg px-2 py-4 cursor-pointer hover:bg-[#bc451a] hover:text-white'>
        <div className='home-button-ng-ico'>
          <i className='fas fa-walking' />
        </div>
        <div className='home-button-ng-txt'>
          <span ng-show='maxDays > 1' className='ng-binding'>
            <span className='hidden-sm hidden-1200 ng-binding'>
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Hành trình</font>
              </font>
              <br />
            </span>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                trong 1 đến 4 ngày
              </font>
            </font>
          </span>
        </div>
      </div>
      <div className='shadow-md bg-white rounded-lg px-2 py-4 cursor-pointer hover:bg-[#bc451a] hover:text-white'>
        <div className='home-button-ng-ico'>
          <i className='fas fa-bus' />
        </div>
        <div className='home-button-ng-txt'>
          <span
            ng-style="paCategorySortedArr[firstCatIndex].shortName.length >= 27 ? {'font-size':'20px'} : {}"
            ng-class="{'home-button-ng-txt-xsm':paCategorySortedArr[firstCatIndex].shortName.length > 16}"
            ng-if='paCategorySortedArr[firstCatIndex].shortName != null && paCategorySortedArr[firstCatIndex].shortName.length > 0'
            className='ng-binding ng-scope home-button-ng-txt-xsm'
          >
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Tour trong ngày &amp; Chuyến đi
              </font>
            </font>
          </span>
        </div>
      </div>
      <div className='shadow-md bg-white rounded-lg px-2 py-4 cursor-pointer hover:bg-[#bc451a] hover:text-white'>
        <div className='home-button-ng-ico'>
          <i className='fas fa-university' />
        </div>
        <div className='home-button-ng-txt ng-binding'>
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>Những việc cần làm</font>
          </font>
        </div>
      </div>
      {/* ngIf: attractions != null && attractions.length > 0 && cityObj.cityType != 'country' && cityObj.cityType != 'region' */}
      <div className='shadow-md bg-white rounded-lg px-2 py-4 cursor-pointer hover:bg-[#bc451a] hover:text-white'>
        {/* navigate-to="{{attractionsLink}}" navigate-to-hash="{{attractionsHash}}" navigate-to-params="{{attractionParams}}" */}
        <div className='home-button-ng-ico'>
          <i className='fas fa-landmark-alt' />
        </div>
        <div className='home-button-ng-txt ng-binding'>
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>Điểm tham quan</font>
          </font>
        </div>
      </div>
      {/* end ngIf: attractions != null && attractions.length > 0 && cityObj.cityType != 'country' && cityObj.cityType != 'region' */}
      {/* destinations (country/region only) */}
      {/* ngIf: cityObj.cityType == 'country' || cityObj.cityType == 'region' */}
      {/* pa category 2 */}
      {/* ngIf: cityObj.cityType == 'country' || cityObj.cityType == 'region' || cityObj.numOfHotels == 0 || cityObj.numOfHotels == null */}
      {/* ngIf: cityObj.cityType == 'city' && cityObj.numOfHotels > 0 */}
      <div className='shadow-md bg-white rounded-lg px-2 py-4 cursor-pointer hover:bg-[#bc451a] hover:text-white'>
        <div className='home-button-ng-ico'>
          <i className='fas fa-hotel' />
        </div>
        <div className='home-button-ng-txt'>
          <span className='ng-binding'>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>Khách sạn</font>
            </font>
          </span>
        </div>
      </div>
      {/* end ngIf: cityObj.cityType == 'city' && cityObj.numOfHotels > 0 */}
      {/* nearby destinations (city without attractions only) */}
      {/* ngIf: itinArr == null || itinArr.length == 0 */}
      {/* pa category 3 (city without attractions and itineraries) */}
      {/* ngIf: (itinArr == null || itinArr.length == 0) && (attractions == null || attractions.length == 0) && (cityObj.cityType != 'country' || cityObj.cityType != 'region') */}
    </div>
  );
};

export default MenuAction;
