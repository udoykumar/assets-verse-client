import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function About() {
  const benefits = [
    {
      title: "Centralized Asset Management",
      desc: "Keep all company assets organized, updated, and trackable in real-time.",
    },
    {
      title: "Employee Request System",
      desc: "Streamline asset requests with automated approvals and tracking.",
    },
    {
      title: "HR & Admin Control",
      desc: "Manage employees, assets, and subscriptions with complete visibility.",
    },
    {
      title: "Analytics & Reports",
      desc: "Gain insights into asset usage, cost efficiency, and workforce needs.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 text-center py-16">
      <h2 className="text-4xl font-bold mb-10">Why Choose AssetVerse?</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {benefits.map((item, i) => (
          <SwiperSlide key={i} className="flex h-auto mb-6">
            <div className="p-6 bg-base-100 rounded-xl shadow w-full border">
              <h3 className="font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
