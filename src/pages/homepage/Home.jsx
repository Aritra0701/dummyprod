import React from "react";
import Layout from "../../components/Layout";
// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import SplitText from "./SplitText";
import api from "../../lib/api";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
// import { button } from "@material-tailwind/react";

// import { useState } from "react";
import "swiper/css";
import { Rating, Typography } from "@material-tailwind/react";
import { Heart, HandPlatter, Timer } from "lucide-react";
import { motion } from "motion/react";


const Home = () => {
  const navigate = useNavigate();

  const images = [
    {
      img: "https://tinypng.com/static/images/boat.png",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/04/05/11/04/india-1309206_1280.jpg",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      img: "https://121clicks.com/wp-content/uploads/2011/12/beautiful_india_45.jpg",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      img: "https://thumbs.dreamstime.com/b/fishermen-boat-14733138.jpg",
    },
    {
      img: "https://thumbs.dreamstime.com/b/man-sitting-red-roofed-shikara-wooden-boat-dal-lake-famous-place-floating-market-cafes-etc-foggy-day-srinagar-kashmir-383454140.jpg",
    },
    {
      img: "https://media.istockphoto.com/id/1325148748/photo/silhouettes-of-the-traditional-stilt-fishermen-at-sunset.jpg?s=612x612&w=0&k=20&c=HJF1gz5655Y9a9V7ZjG_wa1B-7pSkQr-aBCs99osmaU=",
    },
    {
      img: "https://t3.ftcdn.net/jpg/11/68/51/54/360_F_1168515486_wFC1JCsuenaANjfVc4lxssPfeCa0FfjN.jpg",
    },
    {
      img: "https://live.staticflickr.com/2879/9925266525_dd806cc4ba_c.jpg",
    },
    {
      img: "https://live.staticflickr.com/8439/7985270545_acc677fdbe_b.jpg",
    },
    {
      img: "https://thumbs.dreamstime.com/b/boats-2875103.jpg",
    },
  ];

  const { data: Customcarts } = useQuery({
    queryKey: ["carts"],
    queryFn: api.Customcarts,
    select: (response) => response.data,
  });

  const { data: Commentcard } = useQuery({
    queryKey: ["comments"],
    queryFn: api.Commentcard,
    select: (response) => response.data,
  });

  const { data: FoodCard } = useQuery({
    queryKey: ["recipes"],
    queryFn: api.FoodCard,
    select: (response) => response.data,
  });

  const { data: QutPart } = useQuery({
    queryKey: ["quotes"],
    queryFn: api.QutPart,
    select: (response) => response.data,
  });

  const { data: todPart } = useQuery({
    queryKey: ["todos"],
    queryFn: api.todPart,
    select: (response) => response.data,
  });


  console.log(todPart)
  // const [rated, setRated] = useState(8);
  // console.log(Castomcarts)

  // console.log(Commentcard);
  // console.log(FoodCard);
  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // delay each letter
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const letters = "Banner Home Page Off Line Test".split("");

  return (
    <>
      <Layout>
        <div className="">
          <div className="box">
            <img src="" />
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, dolore.
            </p>
          </div>
        </div>

        {/* motions_banner_part */}
        <div className="banner relative">
          <img
            className="h-screen object-cover w-full"
            src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg"
          />
          <div className="top_part flex justify-center mx-auto absolute top-0 bottom-0 left-0 right-0 translate-y-1/2">
            <div className="">
              <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }} //animation only one
                className="text-6xl font-serif font-semibold py-5 text-white"
              >
                Lorem ipsum dolor sit met.
              </motion.h2>
            </div>

            <div className="flex gap-1 text-4xl font-bold text-blue-600">
              {letters.map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariant}
                  initial="hidden"
                  animate="visible"
                  className="inline-block text-white"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* photo-preview_section */}
        <div className="img_section py-10">
          <PhotoProvider>
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {images?.map((items, index) => (
                <SwiperSlide key={index}>
                  <PhotoView src={items?.img}>
                    <div className=" group">
                      <img
                        className=" rounded-xl h-72 object-cover w-full cursor-pointer relative "
                        src={items?.img}
                      />

                      <div className="">
                        <button className=" absolute left-0 right-0 bottom-1/2  bg-white text-light-blue-800  border-2 border-white h-10 w-40 mx-auto  flex justify-center items-center translate-y-1/2 font-medium text-lg rounded-md hover:bg-blue-600 duration-500 ease-in-out hover:text-white opacity-0 group-hover:opacity-100 group-hover:animate-bounce ">
                          Read More
                        </button>
                      </div>
                    </div>
                  </PhotoView>
                  <h2>{items?.title}</h2>
                </SwiperSlide>
              ))}
            </Swiper>
          </PhotoProvider>
        </div>

        {/* map inner ar inner map_pagination */}
        <div className="grid grid-cols-5 grid-rows-5 gap-4 px-5 mx-auto">
          {Customcarts?.carts?.map((allcard, index) => (
            <>
              {allcard.products.map((items, index) => (
                <div
                  className="product bg-blue-gray-200 rounded-xl overflow-hidden cursor-pointer"
                  key={index}
                >
                  <img
                    className="w-72 h-60 object-cover "
                    src={items?.thumbnail}
                  />
                  <div className="p-5">
                    <h3 className="font-medium text-lg text-white">
                      {items.title}
                    </h3>
                    <p className="text-base">{items.title}</p>
                    <button>Read More</button>
                  </div>
                </div>
              ))}
            </>
          ))}
        </div>

        {/* comment section */}
        <div className="comment_section py-20">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 25000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {Commentcard?.comments?.map((text, index) => (
              <SwiperSlide key={index}>
                <div className=" grid justify-center items-center mx-auto text-center bg-[#f47c2c] w-auto h-96 rounded-3xl px-8 py-10 cursor-pointer shadow-lg">
                  <h2 className="py-5 text-xl font-semibold ">{text.body}</h2>
                  <img
                    className="w-24 h-24 object-cover mx-auto justify-center"
                    src="https://cdn-icons-png.flaticon.com/512/219/219988.png"
                  />
                  <h5 className="font-semibold text-xl py-5 ">
                    {text.user.fullName}
                  </h5>
                  <p>Lorem ipsum dolor sit met.</p>
                  <div className="flex items-center gap-2 font-bold text-blue-gray-500">
                    {text.rating}
                    <Rating />
                    <Typography
                      color="blue-gray"
                      className="font-medium text-blue-gray-500"
                    >
                      Based on <span>{text.user.id}</span> Reviews
                    </Typography>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* pizza_card */}
        <div className="grid grid-cols-4 gap-2 grid-rows-5">
          {FoodCard?.recipes?.map((food, index) => (
            <div
              className="card  shadow-xl p-4 rounded-2xl h-96 overflow-hidden "
              key={index}
            >
              <div className="box relative">
                <img className="w-full h-44 object-cover" src={food?.image} />
                <div className=" absolute bg-[#00000065] w-full h-full left-0 right-0 top-0 bottom-0 p-4"></div>
                <div className=" absolute bottom-8 left-10">
                  <h3 className="text-white font-bold text-xl mb-4">
                    {food.name}
                  </h3>
                  <div className="flex justify-start gap-5">
                    <div className="flex items-center gap-2 font-bold text-white">
                      {food.rating}
                      {/* <Rating value={food?.rating} /> */}
                      <Typography
                        color="blue-gray"
                        className="font-medium text-blue-gray-500"
                      ></Typography>
                    </div>
                    <div className=" capitalize font-normal flex justify-start gap-2 text-white">
                      <Heart /> {food.difficulty}
                    </div>
                    <div className="capitalize font-normal flex justify-start gap-2 text-white">
                      <HandPlatter /> 4 Servicing
                    </div>
                  </div>
                  <div className="flex gap-3 items-center justify-start mt-5">
                    <button className="bg-white py-2 px-4 font-semibold rounded-md text-gray-800 capitalize text-sm">
                      {food.tags[0]}
                    </button>
                    <button className="bg-white py-2 px-4 font-semibold rounded-md text-gray-800 capitalize text-sm">
                      {food.mealType}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="ingredients_part py-10">
                  <h3 className="text-xl font-semibold text-gray-800 pb-5">
                    Ingredients
                  </h3>
                  <div className="">
                    {food.ingredients.map((into, index) => (
                      <div
                        className="flex items-center mb-1.5 cursor-pointer"
                        key={index}
                      >
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          defaultValue
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="default-checkbox"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
                        >
                          {into}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-blue-gray-100 shadow-lg py-2 px-4 h-full rounded">
                  {[...Array(3)].map((_, index) => (
                    <div className="mb-4 " key={index}>
                      <h5 className="flex text-blue-gray-900 gap-2">
                        <Timer />
                        Prep Time
                      </h5>
                      <p className="flex justify-center">Lorem.</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="">
                <h3>Instruction</h3>
                <div className="">
                  {food.instructions.map((items, index) => (
                    <p
                      className="text-base font-normal gap-2 flex mb-2"
                      key={index}
                    >
                      <span className="font-semibold text-brown-600 text-lg">
                        {index + 1}
                      </span>
                      {items}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Qut_part */}
        <div className="py-10">
          <div className="">
            <h2 className="font-semibold text-3xl mx-auto flex justify-center ">
              Lorem ipsum dolor sit, ame consectetur adi eit. Dolor, nisi!
            </h2>
            <p>Lorem ipsum dolor sit ame.</p>
          </div>
          <div className="container mx-auto py-10">
            <div className="box_part grid grid-cols-4 grid-rows-2 gap-3">
              {QutPart?.quotes?.map((text, index) => (
                <div
                  className="qut text-center bg-teal-100 p-8 rounded-xl"
                  key={index}
                >
                  <p className="text-base font-medium font-sans">
                    {text.quote}
                  </p>
                  <h2 className="font-semibold text-2xl font-sans py-2">
                    {text.author}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export { Home };
