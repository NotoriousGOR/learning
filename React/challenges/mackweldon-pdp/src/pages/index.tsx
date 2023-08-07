import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Head from "next/head";
import Image from "next/image";

import "swiper/css";

interface photoJson {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export default function Home() {
  const [data, setData] = useState<photoJson[]>();
  const [selectedPhoto, setSelectedPhoto] = useState<photoJson>();

  useEffect(() => {
    void fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
      .then((response) => response.json())
      // an idea here would be to implement zod to verify that the data comes in the schema you'd expect
      .then((data) => setData(data as photoJson[]));
    return;
  }, []);

  useEffect(() => {
    data && setSelectedPhoto(data[0]);
    return;
  }, [data]);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex min-h-screen w-fit flex-col items-center gap-4 px-4 md:flex-row">
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          watchSlidesProgress={true}
          slidesPerView={5}
          slidesPerGroup={3}
          slidesPerGroupAuto={true}
          className="mx-auto my-auto h-[573px] shrink border-2 border-black"
        >
          {data?.map((photo) => (
            <SwiperSlide onClick={() => setSelectedPhoto(photo)} key={photo.id}>
              <Image
                src={photo.url}
                alt={photo.title}
                width={100}
                height={100}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="relative h-[600px] w-[600px] border-2 border-black">
          {selectedPhoto && (
            <Image
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              sizes="(max-width: 768px) 600px, (max-width: 1200px) 600px, 900px"
              quality={100}
              fill={true}
            />
          )}
        </div>
      </main>
    </>
  );
}