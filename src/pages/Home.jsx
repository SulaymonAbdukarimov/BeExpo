import React from "react";
import "./styles/home.css";
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
                  className="text-decoration-none text-center d-block fw-bold fs-2 text-capitalize text-white"
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
                  className="text-decoration-none text-center d-block fw-bold fs-2 text-capitalize text-white"
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
                  className="text-center d-block text-decoration-none fw-bold fs-2 text-capitalize text-white"
                >
                  keep bees
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
