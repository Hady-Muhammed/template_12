import React from "react";
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Find = () => {
  return (
    <>
      <div className="max-w-[1040px] mx-auto text-center mt-24 mb-24">
        <h1 className="font-bold text-5xl">Find your drive</h1>
        <p className="bg-[rgba(173,199,255,0.502)] mt-8 w-fit mx-auto p-3">
          <p className="font-bold text-slate-700 text-xl mt-[-1.7rem]">
            Explore the world's largest car sharing marketplace
          </p>
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        autoplay
        pagination={{ clickable: true }}
        className='w-[70%]'
        breakpoints={{
          340: {
            width: 200,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 4,
          },
          1040: {
            width: 1040,
            slidesPerView: 5,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Card
            image="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=400"
            make="Audi"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            make="BMW"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://images.pexels.com/photos/6060938/pexels-photo-6060938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            make="Ferrari"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://images.pexels.com/photos/10358234/pexels-photo-10358234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            make="Mercedes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image='https://images.pexels.com/photos/4077271/pexels-photo-4077271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            make="Hyundai"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://wallpapercave.com/wp/wp2855210.jpg"
            make="Lamborgini"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://www.wallpaperflare.com/static/153/373/259/car-sports-car-bmw-yellow-wallpaper.jpg"
            make="BMW"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://avatars.mds.yandex.net/i?id=368d745c977f798aef2a4a96802ac13f-5332098-images-thumbs&n=13"
            make="Kia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://www.carscoops.com/wp-content/uploads/2010/07/0b407213-2011-ford-explorer-suv-21.jpg"
            make="Ford"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://avatars.mds.yandex.net/i?id=d13f28f9df206d78e96caebc1acb9166-5221158-images-thumbs&n=13"
            make="Toyota"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Find;
