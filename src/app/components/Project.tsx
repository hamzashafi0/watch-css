"use client"

import Image from 'next/image'
import React from 'react'
import "../style/project.css"


const Project = () => {
  return (
    <div id="project" className="project-container">
      <section className="text-gray-600 body-font">
        <div className="container">
          <div className="flex flex-wrap -m-4">
            {/* watch 01 */}
            <div className="product-card">
              <div className="product-image">
                <Image
                  className="product-img"
                  src={'/pic/watch 1.jpg'}
                  alt="blog"
                  width={300}
                  height={300}
                />
              </div>
              <div className="product-info">
                <h1 className="product-price">$5000</h1>
                <button className="add-to-cart-btn">Add To Cart</button>
              </div>
            </div>

            {/* watch 02 */}
            <div className="product-card">
              <div className="product-image">
                <Image
                  className="product-img"
                  src={'/pic/watch 2.jpg'}
                  alt="blog"
                  width={300}
                  height={300}
                />
              </div>
              <div className="product-info">
                <h1 className="product-price">$6000</h1>
                <button className="add-to-cart-btn">Add To Cart</button>
              </div>
            </div>

            {/* watch 03 */}
            <div className="product-card">
              <div className="product-image">
                <Image
                  className="product-img"
                  src={'/pic/watch 3.jpg'}
                  alt="blog"
                  width={300}
                  height={300}
                />
              </div>
              <div className="product-info">
                <h1 className="product-price">$7000</h1>
                <button className="add-to-cart-btn">Add To Cart</button>
              </div>
            </div>

            {/* watch 04 */}
            <div className="product-card">
              <div className="product-image">
                <Image
                  className="product-img"
                  src={'/pic/watch 4.jpg'}
                  alt="blog"
                  width={300}
                  height={300}
                />
              </div>
              <div className="product-info">
                <h1 className="product-price">$5000</h1>
                <button className="add-to-cart-btn">Add To Cart</button>
              </div>
            </div>

            {/* watch 05 */}
            <div className="product-card">
              <div className="product-image">
                <Image
                  className="product-img"
                  src={'/pic/watch 5.jpg'}
                  alt="blog"
                  width={300}
                  height={300}
                />
              </div>
              <div className="product-info">
                <h1 className="product-price">$6000</h1>
                <button className="add-to-cart-btn">Add To Cart</button>
              </div>
            </div>

            {/* watch 06 */}
            <div className="product-card">
              <div className="product-image">
                <Image
                  className="product-img"
                  src={'/pic/watch 6.jpg'}
                  alt="blog"
                  width={300}
                  height={300}
                />
              </div>
              <div className="product-info">
                <h1 className="product-price">$7000</h1>
                <button className="add-to-cart-btn">Add To Cart</button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;

