import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
export default function Testimonial() {
  const testimonial_slider = {
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
    <section className="row_am testimonial_section">
      <div className="container">
        <div
          className="section_title"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <h2>
            What our <span>customer say</span>
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typese tting{" "}
            <br /> indus orem Ipsum has beenthe standard dummy.
          </p>
        </div>
        <div
          className="testimonial_block"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          <OwlCarousel
            id="testimonial_slider"
            {...testimonial_slider}
            className="owl-carousel owl-theme owl-loaded owl-drag"
          >
            <div className="item">
              <div className="testimonial_slide_box">
                <div className="rating">
                  <span>
                    <i className="icofont-star"></i>
                  </span>
                  <span>
                    <i className="icofont-star"></i>
                  </span>
                  <span>
                    <i className="icofont-star"></i>
                  </span>
                  <span>
                    <i className="icofont-star"></i>
                  </span>
                  <span>
                    <i className="icofont-star"></i>
                  </span>
                </div>
                <p className="review">
                  “ Lorem Ipsum is simply dummy text of the printing and typese
                  tting us orem Ipsum has been lorem beenthe standar dummy. ”
                </p>
                <div className="testimonial_img">
                  <Image
                    width={130}
                    height={130}
                    alt="anim_line"
                    src="/image/testimonial_user1.png"
                  />
                </div>
                <h3>Shayna John</h3>
                <span className="designation">Careative inc</span>
              </div>
            </div>
            <div className="item">
              <div className="testimonial_slide_box">
                <div className="rating">
                  <span>
                    <i className="icofont-star"></i>
                  </span>
                  <span>
                    <i className="icofont-star"></i>
                  </span>
                  <span>
                    <i className="icofont-star"></i>
                  </span>
                  <span>
                    <i className="icofont-star"></i>
                  </span>
                  <span>
                    <i className="icofont-star"></i>
                  </span>
                </div>
                <p className="review">
                  “ Lorem Ipsum is simply dummy text of the printing and typese
                  tting us orem Ipsum has been lorem beenthe standar dummy. ”
                </p>
                <div className="testimonial_img">
                  <Image
                    width={130}
                    height={130}
                    alt="anim_line"
                    src="/image/testimonial_user2.png"
                  />
                </div>
                <h3>Willium Den</h3>
                <span className="designation">Careative inc</span>
              </div>
            </div>
            <div className="item">
              <div className="testimonial_slide_box">
                <div className="rating">
                  <span>
                    <i className="icofont-star"></i>
                  </span>
                  <span>
                    <i className="icofont-star"></i>
                  </span>
                  <span>
                    <i className="icofont-star"></i>
                  </span>
                  <span>
                    <i className="icofont-star"></i>
                  </span>
                  <span>
                    <i className="icofont-star"></i>
                  </span>
                </div>
                <p className="review">
                  “ Lorem Ipsum is simply dummy text of the printing and typese
                  tting us orem Ipsum has been lorem beenthe standar dummy. ”
                </p>
                <div className="testimonial_img">
                  <Image
                    width={130}
                    height={130}
                    alt="anim_line"
                    src="/image/testimonial_user3.png"
                  />
                </div>
                <h3>Cyrus Stephen</h3>
                <span className="designation">Careative inc</span>
              </div>
            </div>
          </OwlCarousel>
          <div className="total_review">
            <div className="rating">
              <span>
                <i className="icofont-star"></i>
              </span>
              <span>
                <i className="icofont-star"></i>
              </span>
              <span>
                <i className="icofont-star"></i>
              </span>
              <span>
                <i className="icofont-star"></i>
              </span>
              <span>
                <i className="icofont-star"></i>
              </span>
              <p>5.0 / 5.0</p>
            </div>
            <h3>2578</h3>
            <Link href="/review">
              TOTAL USER REVIEWS <i className="icofont-arrow-right"></i>
            </Link>
          </div>
          <Image
            width={930}
            height={383}
            alt="anim_line"
            src="/image/avtar_testimonial.png"
            className="avtar_faces"
          />
        </div>
      </div>
    </section>
  );
}