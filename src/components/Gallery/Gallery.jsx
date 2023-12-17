import React from "react";
import styles from "./Gallery.module.css";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";
const Gallery = () => {
  return (
    <div name="gallery" className={styles.find}>
      <div className={styles.heading}>
        <h1>Gallery</h1>
        <div className={styles.text_bg}>
          <p>
            <span>DataSet used in our model</span>
          </p>
        </div>
      </div>
      <div className={styles.slider_container}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{
            // when window width is >= 340px
            340: {
              width: 200,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
            // when window width is >= 1040px
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
          onSlideChange={() => console.log("silde change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1516711345667-ebafb3ebea12?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              make="Organic Waste"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://axil-is.com/wp-content/uploads/2022/08/Batteries-Hazardous-Waste-Image-1.jpeg"
              make="Battries"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1517917822086-6988b4ca9b31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              make="Paper"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1571727153934-b9e0059b7ab2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              make="Plastic"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://plus.unsplash.com/premium_photo-1674719144083-444cfd29c520?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              make="Clothes"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1485119502162-016e4409beab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              make="Bulb"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1606337321936-02d1b1a4d5ef?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              make="Metal"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://cdn2.hubspot.net/hubfs/3362136/e-waste-3.jpg"
              make="E-Waste"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1588867702719-969c8ac733d6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              make="Glass"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
