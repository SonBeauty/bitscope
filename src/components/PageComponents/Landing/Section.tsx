import Image from "next/image";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
export default function Section() {
  const frmae_slider = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <section className="banner_section home-banner">
      <div className="container">
        <div className="anim_line">
          <span>
            <Image
              width={1}
              height={100}
              alt="anim_line"
              src="/image/anim_line.png"
            />
          </span>
          <span>
            <Image
              width={1}
              height={100}
              alt="anim_line"
              src="/image/anim_line.png"
            />
          </span>
          <span>
            <Image
              width={1}
              height={100}
              alt="anim_line"
              src="/image/anim_line.png"
            />
          </span>
          <span>
            <Image
              width={1}
              height={100}
              alt="anim_line"
              src="/image/anim_line.png"
            />
          </span>
          <span>
            <Image
              width={1}
              height={100}
              alt="anim_line"
              src="/image/anim_line.png"
            />
          </span>
          <span>
            <Image
              width={1}
              height={100}
              alt="anim_line"
              src="/image/anim_line.png"
            />
          </span>
          <span>
            <Image
              width={1}
              height={100}
              alt="anim_line"
              src="/image/anim_line.png"
            />
          </span>
          <span>
            <Image
              width={1}
              height={100}
              alt="anim_line"
              src="/image/anim_line.png"
            />
          </span>
          <span>
            <Image
              width={1}
              height={100}
              alt="anim_line"
              src="/image/anim_line.png"
            />
          </span>
        </div>
        <div className="row">
          <div
            className="col-lg-6 col-md-12"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div className="banner_text">
              <h1>
                Best way to <span>manage your customers.</span>
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and setting
                indus orem Ipsum has been the industrys.
              </p>
            </div>
            <ul className="app_btn">
              <li>
                <Link href="#">
                  <Image
                    width={120}
                    height={35}
                    alt="app"
                    className="blue_img"
                    src="/image/appstore_blue.png"
                  />
                  <Image
                    width={120}
                    height={35}
                    alt="app"
                    className="white_img"
                    src="/image/appstore_white.png"
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    width={120}
                    height={35}
                    alt="app"
                    className="blue_img"
                    src="/image/googleplay_blue.png"
                  />
                  <Image
                    width={120}
                    height={35}
                    alt="app"
                    className="white_img"
                    src="/image/googleplay_white.png"
                  />
                </Link>
              </li>
            </ul>
            <div className="used_app">
              <ul>
                <li>
                  <Image
                    width={35}
                    height={35}
                    alt="app"
                    className=""
                    src="/image/used01.png"
                  />
                </li>
                <li>
                  <Image
                    width={40}
                    height={40}
                    alt="app"
                    className=""
                    src="/image/used02.png"
                  />
                </li>
                <li>
                  <Image
                    width={45}
                    height={45}
                    alt="app"
                    className=""
                    src="/image/used03.png"
                  />
                </li>
                <li>
                  <Image
                    width={50}
                    height={50}
                    alt="app"
                    className=""
                    src="/image/used04.png"
                  />
                </li>
              </ul>
              <p>
                12M + <br /> used this app
              </p>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12"
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            <div className="banner_slider">
              <div className="left_icon">
                <Image
                  width={140}
                  height={40}
                  alt="app"
                  className=""
                  src="/image/message_icon.png"
                />
              </div>
              <div className="right_icon">
                <Image
                  width={140}
                  height={40}
                  alt="app"
                  className=""
                  src="/image/shield_icon.png"
                />
              </div>
              <OwlCarousel
                id="frmae_slider"
                className="owl-carousel owl-theme owl-loaded owl-drag"
                {...frmae_slider}
              >
                <div className="item">
                  <Image
                    width={315}
                    height={642}
                    alt="app"
                    className="slider_img"
                    src="/image/screen.png"
                  />
                </div>
                <div className="item">
                  <Image
                    width={315}
                    height={642}
                    alt="app"
                    className="slider_img"
                    src="/image/screen.png"
                  />
                </div>
                <div className="item">
                  <Image
                    width={315}
                    height={642}
                    alt="app"
                    className="slider_img"
                    src="/image/screen.png"
                  />
                </div>
              </OwlCarousel>
              <Image
                width={315}
                height={642}
                alt="app"
                className="slider_frame"
                src="/image/mobile_frame_svg.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}