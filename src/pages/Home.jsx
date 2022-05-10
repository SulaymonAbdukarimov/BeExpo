import React from "react";
import "./styles/home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active img-fluid" data-bs-interval="2000">
            <img
              src="https://n.foxdsgn.com/beelicious/wp-content/uploads/2020/01/beee_img.jpg"
              class="d-block w-100 slide img-fluid"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block img-fluid">
              <h5 class="text-white">
                <h2 class="aheto-banner__title">All Natural Honey. </h2>
              </h5>
              <p class="text-white">
                Our honey is made from pollen from various flowers of summer
                season. Pollen is a superfood for both bees and us!
              </p>
            </div>
          </div>
          <div class="carousel-item img-fluid" data-bs-interval="2000">
            <img
              src="https://cdn.shopify.com/s/files/1/0436/2203/9703/files/slider_2_2000x_4331ab0a-dd4a-45ef-b4ae-23368e97f19f.jpg?v=1595842242"
              class="d-block w-100 slide img-fluid"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="text-white">Asia's one of the top bee keeper!</h5>
              <p class="text-white">
                Our Honey Is Never Cooked, It Is Always Raw
              </p>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* /hero section */}

      {/* Products */}
      <div className="home_products ">
        <div className="container home_products--wrapper">
          <div className="row pt-5 pb-5">
            <div className="col home-product home-product-1">
              <span className="text-uppercase d-block fw-bold text-center text-white">
                Choose the
              </span>
              <h4>
                <a
                  href="#"
                  className="home-product--link text-decoration-none text-center d-block fw-bold fs-2 text-capitalize "
                >
                  Best Have
                </a>
              </h4>
            </div>
            <div className="col home-product home-product-2">
              <span className="d-block text-uppercase text-center fw-bold text-white">
                Shop
              </span>
              <h4>
                <a
                  className="home-product--link text-decoration-none text-center d-block fw-bold fs-2 text-capitalize "
                  href="#"
                >
                  best sellers!
                </a>
              </h4>
            </div>
            <div className="col home-product home-product-3">
              <span className=" d-block text-center text-uppercase fw-bold text-white">
                learn to
              </span>
              <h4>
                <a
                  href="#"
                  className=" home-product--link text-center d-block text-decoration-none fw-bold fs-2 text-capitalize "
                >
                  keep bees
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* /Product section */}

      {/* Action */}
      <div className="home_action">
        <div className="container">
          <h2 className="home_action--title text-center mb-4">What we do</h2>
          <div className="home-action__wrapper d-flex align-items-lg-center justify-content-between text-center gap-5">
            <div className="home-action__honey">
              <img
                className="img-fluid"
                src="https://beelove.ancorathemes.com/wp-content/uploads/2016/06/q1-2.png"
                alt=""
              />
              <h4 className="mb-3 mt-4">
                <a className="text-decoration-none" href="#">
                  Beekeper Honey
                </a>
              </h4>
              <p>
                Professional beekeepers take agreat care of the farm and monitor
                all processes to gather honey in time.
              </p>
            </div>

            <div className="home-action__garden">
              <img
                className="img-fluid"
                src="https://beelove.ancorathemes.com/wp-content/uploads/2016/06/q2-2.png"
                alt=""
              />
              <h4 className="mb-3 mt-4">
                <a className="text-decoration-none" href="#">
                  Bee Garden
                </a>
              </h4>
              <p>
                We have built a tru cosy garden where our hard working bees
                produce all sorts of local honey and nectars.
              </p>
            </div>

            <div className="home-action__products">
              <img
                className="img-fluid"
                src="https://beelove.ancorathemes.com/wp-content/uploads/2016/06/q3-2.png"
                alt=""
              />
              <h4 className="mb-3 mt-4">
                <a className="text-decoration-none" href="#">
                  Bee Products
                </a>
              </h4>
              <p>
                Our products are 100% organic, produced on a farm with natural
                ingredients addition only. Sweet & delicious.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*//  Action */}

      {/* Home Honey */}
      <div className="home_honey">
        <div className="container">
          <h3 className="home_honey-title">
            Our Honey Is Never Cooked, It Is Always Raw
          </h3>
          <h5 className="home_honey-subtitle">
            TO PRESERVE FLAVOR AND HEALTH BENEFITS
          </h5>

          <Link
            className="home_link d-block d-flex justify-content-center align-items-center text-center text-uppercase fw-normal text-decoration-none text-white fs-5"
            to="/honey"
          >
            Our Honey
          </Link>
        </div>
      </div>

      {/* Home Honey */}

      {/* Blog */}

      <div className="home-blog">
        <div className="container">
          <h2 className="text-center h2 home-blog_title">Blog</h2>
          <div className="home-blog_wrapper d-flex justify-content-between align-items-center gap-4">
            <div className="home-blog-item">
              <img
                src="https://beelove.ancorathemes.com/wp-content/uploads/2016/06/post-7-370x204.jpg"
                alt="bee"
              />
              <span className="d-block text-center">June 9, 2016</span>
              <a href="#" className="text-decoration-none d-block text-center">
                Tutorial: Beekeeping Plans, Supplies & Ideas
              </a>
            </div>
            <div className="home-blog-item">
              <img
                src="https://beelove.ancorathemes.com/wp-content/uploads/2016/06/post-8-370x204.jpg"
                alt="bee"
              />
              <span className="d-block text-center">June 6, 2016</span>
              <a className="text-decoration-none d-block text-center" href="#">
                Spring Break for Millions of Bees and Their Keepers
              </a>
            </div>
            <div className="home-blog-item">
              <img
                src="https://beelove.ancorathemes.com/wp-content/uploads/2016/06/post-2-370x204.jpg"
                alt=""
              />
              <span className="d-block text-center">June 3, 2016</span>
              <a className="text-decoration-none d-block text-center" href="#">
                Tutorial: Beekeeping for Beginners. Breeding Bees
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Learn about honey  */}
      <div className="honey-learn">
        <div className="container">
          <h3 className="text-center honey-learn-title">Learn about Honey</h3>
          <div className="honey-learn-wrapper">
            <div className="honey-learn-item honey-learn-item1"></div>
            <div className="honey-learn-item honey-learn-item2"></div>
            <div className="honey-learn-item honey-learn-item3"></div>
            <div className="honey-learn-item honey-learn-item4"></div>
            <div className="honey-learn-item honey-learn-item5"></div>
            <div className="honey-learn-item honey-learn-item6"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
