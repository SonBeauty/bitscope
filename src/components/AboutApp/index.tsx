import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function AboutApp() {
  return (
    <section className="row_am about_app_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 relative">
            <div
              className="about_img"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              <div className="frame_img">
                <Image
                  width={302}
                  height={616}
                  alt="app"
                  src="/image/about-frame.png"
                  className="moving_position_animatin"
                />
              </div>
              <div className="screen_img">
                <Image
                  width={266}
                  height={361}
                  alt="app"
                  src="/image/about-screen.png"
                  className="moving_animation"
                />
              </div>
              <div className="w-[2px] h-[130%] bg-blue-300 absolute rotate-45 right-[60%]"></div>
              <div className="w-[2px] h-[130%] bg-blue-300 absolute -rotate-45 right-[60%]"></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about_text">
              <div
                className="section_title"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="100"
              >
                <h2>
                  <span>BIT AUTHENTICATION</span>
                </h2>
                <p className="font-bold text-xl mb-2">
                  Authenticate the percentage of real users.
                </p>
                <p>
                  Analyze user conversations and behavior to categorize them
                  accurately. BitScope provides an authentic view of
                  communication channels by filtering out bot accounts.
                </p>
              </div>

              <ul
                className="app_statstic"
                id="counter"
                data-aos="fade-in"
                data-aos-duration="1500"
              >
                <li>
                  <div className="icon">
                    <Image
                      width={60}
                      height={60}
                      alt="app"
                      src="/image/download.png"
                    />
                  </div>
                  <div className="text">
                    <p></p>
                    <p className="text-lg">Project evaluation</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <Image
                      width={60}
                      height={60}
                      alt="app"
                      src="/image/followers.png"
                    />
                  </div>
                  <div className="text">
                    <p></p>
                    <p className="text-lg">Quality community</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <Image
                      width={60}
                      height={60}
                      alt="app"
                      src="/image/reviews.png"
                    />
                  </div>
                  <div className="text">
                    <p></p>
                    <p className="text-lg">Effective advertising</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <Image
                      width={60}
                      height={60}
                      alt="app"
                      src="/image/countries.png"
                    />
                  </div>
                  <div className="text">
                    <p></p>
                    <p className="text-lg">And more</p>
                  </div>
                </li>
              </ul>
              <Link
                href="/contact"
                className="btn puprple_btn"
                data-aos="fade-in"
                data-aos-duration="1500"
              >
                START FREE TRIAL
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}