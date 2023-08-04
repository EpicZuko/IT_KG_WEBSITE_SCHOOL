import styled from 'styled-components'
import { EffectCoverflow, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// eslint-disable-next-line import/no-cycle
import { slider } from '../../utils/constants/category'
import SliderCard from './SliderCard'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/effect-coverflow'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation'

function SwiperOverflow() {
   return (
      <DIV>
         <h1 className="heading">Биздин команда</h1>
         <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slidesPerView="auto"
            coverflowEffect={{
               rotate: 0,
               stretch: 0,
               depth: 100,
               modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
               clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
         >
            {slider?.map((elem) => (
               <SwiperSlide key={elem.id}>
                  <SliderCard
                     img={elem?.img}
                     userName={elem?.userName}
                     name={elem?.name}
                  />
               </SwiperSlide>
            ))}
            <div className="slider-controler">
               <div className="swiper-button-prev slider-arrow">
                  <ion-icon name="arrow-back-outline" />
               </div>
               <div className="swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-outline" />
               </div>
               <div className="swiper-pagination" />
            </div>
         </Swiper>
      </DIV>
   )
}

export default SwiperOverflow

const DIV = styled.div`
   margin-bottom: 50px;
   .container {
      max-width: 124rem;
      padding: 4rem 1rem;
      margin: 0 auto;
   }

   .heading {
      padding: 1rem 0;
      font-size: 3.5rem;
      text-align: center;
      color: #0a5271;
      font-size: 30px;
      font-family: Roboto;
      letter-spacing: 2.1px;
   }

   .swiper_container {
      height: 52rem;
      padding: 2rem 0;
      position: relative;
   }

   .swiper-slide {
      width: 37rem;
      height: 42rem;
      position: relative;
   }

   @media (max-width: 500px) {
      .swiper_container {
         height: 47rem;
      }
      .swiper-slide {
         width: 28rem !important;
         height: 36rem !important;
      }
   }

   .swiper-slide-shadow-left,
   .swiper-slide-shadow-right {
      display: none;
   }

   .slider-controler {
      position: relative;
      bottom: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
   }

   @media (max-width: 390px) {
      .slider-controler {
         position: relative;
         bottom: 10rem;
         display: flex;
         align-items: center;
         justify-content: center;
      }
   }
   .slider-controler .swiper-button-next {
      left: 58% !important;
      transform: translateX(-58%) !important;
   }

   @media (max-width: 990px) {
      .slider-controler .swiper-button-next {
         left: 70% !important;
         transform: translateX(-70%) !important;
      }
   }

   @media (max-width: 450px) {
      .slider-controler .swiper-button-next {
         left: 80% !important;
         transform: translateX(-80%) !important;
      }
   }

   @media (max-width: 990px) {
      .slider-controler .swiper-button-prev {
         left: 30% !important;
         transform: translateX(-30%) !important;
      }
   }

   @media (max-width: 450px) {
      .slider-controler .swiper-button-prev {
         left: 20% !important;
         transform: translateX(-20%) !important;
      }
   }

   .slider-controler .slider-arrow {
      background: var(--white);
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      left: 42%;
      transform: translateX(-42%);
      filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
   }

   .slider-controler .slider-arrow ion-icon {
      font-size: 2rem;
      color: #222224;
   }

   .slider-controler .slider-arrow::after {
      content: '';
   }

   .swiper-pagination {
      position: relative;
      width: 15rem !important;
      bottom: 1rem;
   }

   .swiper-pagination .swiper-pagination-bullet {
      filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
   }

   .swiper-pagination .swiper-pagination-bullet-active {
      background: var(--primary);
   }
`
