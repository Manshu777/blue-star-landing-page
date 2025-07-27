"use client";


import { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Gallery = () => {
  const mediaItems = [
    {
      type: "image",
      src: "/gallery/img-1.jpeg",
      title: "Image 1",
      description: "A captivating moment captured in time.",
    },
    {
      type: "image",
      src: "/gallery/img-2.jpeg",
      title: "Image 2",
      description: "A vibrant scene full of energy.",
    },
    {
      type: "image",
      src: "/gallery/img-3.jpeg",
      title: "Image 3",
      description: "A serene and elegant composition.",
    },
    {
      type: "image",
      src: "/gallery/img-4.jpeg",
      title: "Image 4",
      description: "A bold and striking visual.",
    },
    {
      type: "image",
      src: "/gallery/img-5.jpeg",
      title: "Image 5",
      description: "A timeless snapshot of beauty.",
    },
    {
      type: "video",
      src: "/gallery/vid-1.mp4",
      title: "Video 1",
      description: "A dynamic video showcasing motion.",
    },
    {
      type: "video",
      src: "/gallery/vid-2.mp4",
      title: "Video 2",
      description: "An engaging clip with vivid details.",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined" && window.Swiper) {
      new window.Swiper(".gallery-top", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }, []);

  return (
    <>
          <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="pb-16">
          <h2 className="w-full text-center text-gray-900 text-4xl font-bold leading-loose pb-2.5">
            Our Gallery
          </h2>
          <p className="w-full text-center text-gray-600 text-lg font-normal leading-8">
            Explore the essence of beauty in our gallery&apos;s intimate space.
          </p>
        </div>
        <div className="mx-auto w-auto relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={20}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}

           breakpoints={{
  320: { slidesPerView: 1 },    // <= 640px
  1024: { slidesPerView: 2 },   // >= 1024px
  1280: { slidesPerView: 3 },   // >= 1280px
}}
            className="pt-6"
          >
            {mediaItems.map((item, index) => (
              <SwiperSlide key={index} className="grid">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    className="w-full h-[400px] rounded-xl object-cover mx-auto"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-[400px] rounded-xl object-cover mx-auto"
                    priority={index === 0}
                    quality={85}
                  />
                )}
               
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
    </>
  );
};

export default Gallery;