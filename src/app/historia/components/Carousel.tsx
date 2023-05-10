// 'use client';

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";


// interface Props {
//   images: { src: string; alt: string }[];
// }

// export default function Carousel({ images }: Props) {
//   return (
//     <Swiper
//       spaceBetween={30}
//       slidesPerView={3}
//       breakpoints={{
//         640: {
//           slidesPerView: 1,
//           spaceBetween: 20,
//         },
//         768: {
//           slidesPerView: 2,
//           spaceBetween: 30,
//         },
//         1024: {
//           slidesPerView: 3,
//           spaceBetween: 40,
//         },
//       }}
//     >
//       {images.map((image) => (
//         <SwiperSlide key={image.src}>
//           <img src={image.src} alt={image.alt} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }
