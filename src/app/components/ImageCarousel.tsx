"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IMAGE_CAROUSEL } from "../helpers/image-carousel";
import { Text } from "./Text";

export default function ImageCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="relative py-16 px-4 container mx-auto max-w-4xl">
      <div className="text-center mb-14">
        <Text size="subTitleCenter">Um pouco mais sobre a nossa história</Text>
      </div>

      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        renderDotsOutside
        responsive={responsive}
        ssr={true} // for rendering carousel on server.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        slidesToSlide={1}
        arrows={false}
      >
        {IMAGE_CAROUSEL.map((image, index) => (
          <div
            key={index}
            className="carousel-item flex flex-col md:flex-row border-l-[12px] border-b-8 border-4 border-t-2  border-secondary-500 rounded-3xl overflow-hidden min-h-[28rem] gap-2"
          >
            <img src={image.src} alt={image.alt} className="md:w-3/5" />
            <div className="flex flex-col gap-1 md:w-2/5 px-2">
              <Text size="subTitle">{image.title}</Text>
              <Text size="paragraph">{image.description}</Text>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
