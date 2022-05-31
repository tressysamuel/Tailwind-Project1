import React, { useState } from "react";
import {Link} from "react-router-dom";
function Menu({ setState }) {
  return (
    <div>
      <div className="bg-black font-body 2xl:w-[100vw] ">
        <div className="bg-black relative" style={{ color: "rgb(244,241,208)" }}>
          <button onClick={() => setState(false)} type="button" className="absolute top-3 focus:outline-none z-20">
            <div className="fixed right-3">
              <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
          <div className="py-10 px-5 flex flex-col md:flex-row container mx-auto max-w-screen-lg w-screen relative z-10 overflow-y-scroll ">
            <div className="md:w-1/2 mb-20 md:mb-0">
              <ul>
                <li className="mb-7 mt-3">
                  <button type="button" className="flex items-center">
                    <div className="inline-block text-sm font-body1 text-gray-300">01</div>
                    <Link to ="/article/1">
                    <div className="text-2xl inline-block ml-7 hover:text-white pr-10 md: text-left">
                     
                      Aesthetic Usability Effect
                    </div>
                    </Link>
                  </button>
                </li>
                <li className="mb-7 mt-3">
                  <button type="button" className="flex items-center">
                    <div className="inline-block text-sm font-body1 text-gray-300">02</div>
                    <Link to ="/article/2">
                    <div className="text-2xl font-bold inline-block ml-7 hover:text-white pr-10 md:pr-20 text-left">
                      Doherty Threshold
                    </div>
                    </Link>
                  </button>
                </li>
                <li className="mb-7 mt-3">
                  <button type="button" className="flex items-center">
                    <div className="inline-block text-sm font-body1 text-gray-300">03</div>
                    <Link to ="/article/3">
                    <div className="text-2xl font-bold inline-block ml-7 hover:text-white pr-10 md:pr-20 text-left">
                      Fitt's Law
                    </div>
                    </Link>
                  </button>
                </li>
                <li className="mb-7 mt-3">
                  <button type="button" className="flex items-center">
                    <div className="inline-block text-sm font-body1 text-gray-300">04</div>
                    <Link to ="/article/3">
                    <div className="text-2xl font-bold inline-block ml-7 hover:text-white pr-10 md:pr-20 text-left">
                      Hick's law
                    </div>
                    </Link>
                  </button>
                </li>
                <li className="mb-7 mt-3">
                  <button type="button" className="flex items-center">
                    <div className="inline-block text-sm font-body1 text-gray-300">05</div>
                    <div className="text-2xl font-bold inline-block ml-7 hover:text-white pr-10 md:pr-20 text-left">
                      Jakob's Law
                    </div>
                  </button>
                </li>
                <li className="mb-7 mt-3">
                  <button type="button" className="flex items-center">
                    <div className="inline-block text-sm font-body1 text-gray-300">06</div>
                    <div className="text-2xl font-bold inline-block ml-7 hover:text-white pr-10 md:pr-20 text-left">
                      Law of Common Region
                    </div>
                  </button>
                </li>
                <li className="mb-7 mt-3">
                  <button type="button" className="flex items-center">
                    <div className="inline-block text-sm font-body1 text-gray-300">07</div>
                    <div className="text-2xl font-bold inline-block ml-7 hover:text-white pr-10 md:pr-20 text-left">
                      Law of Pragnanz
                    </div>
                  </button>
                </li>
                <li className="mb-7 mt-3">
                  <button type="button" className="flex items-center">
                    <div className="inline-block text-sm font-body1 text-gray-300">08</div>
                    <div className="text-2xl font-bold inline-block ml-7 hover:text-white pr-10 md:pr-20 text-left">
                      Law of Proximity
                    </div>
                  </button>
                </li>
                <li className="mb-7 mt-3">
                  <button type="button" className="flex items-center">
                    <div className="inline-block text-sm font-body1 text-gray-300">09</div>
                    <div className="text-2xl font-bold inline-block ml-7 hover:text-white pr-10 md:pr-20 text-left">
                      Law of similarity
                    </div>
                  </button>
                </li>
                <li className="mb-7 mt-3">
                  <button type="button" className="flex items-center">
                    <div className="inline-block text-sm font-body1 text-gray-300">10</div>
                    <div className="text-2xl font-bold inline-block ml-7 hover:text-white pr-10 md:pr-20 text-left">
                      Law of Uniform Connectedness
                    </div>
                  </button>
                </li>
                <li className="mb-7 mt-3">
                  <button type="button" className="flex items-center">
                    <div className="inline-block text-sm font-body1 text-gray-300">11</div>
                    <div className="text-2xl font-bold inline-block ml-7 hover:text-white pr-10 md:pr-20 text-left">
                      Millers Law
                    </div>
                  </button>
                </li>
                <li className="mb-7 mt-3">
                  <button type="button" className="flex items-center">
                    <div className="inline-block text-sm font-body1 text-gray-300">12</div>
                    <div className="text-2xl font-bold inline-block ml-7 hover:text-white pr-10 md:pr-20 text-left">
                      OCCan's Razor
                    </div>
                  </button>
                </li>
                <li className="mb-7 mt-3">
                  <button type="button" className="flex items-center">
                    <div className="inline-block text-sm font-body1 text-gray-300">13</div>
                    <div className="text-2xl font-bold inline-block ml-7 hover:text-white pr-10 md:pr-20 text-left">
                      Pareto Principle
                    </div>
                  </button>
                </li>
                <li className="mb-7 mt-3">
                  <button type="button" className="flex items-center">
                    <div className="inline-block text-sm font-body1 text-gray-300">14</div>
                    <div className="text-2xl font-bold inline-block ml-7 hover:text-white pr-10 md:pr-20 text-left">
                      Parkinson's Law
                    </div>
                  </button>
                </li>
                <li className="mb-7 mt-3">
                  <button type="button" className="flex items-center">
                    <div className="inline-block text-sm font-body1 text-gray-300">15</div>
                    <div className="text-2xl font-bold inline-block ml-7 hover:text-white pr-10 md:pr-20 text-left">
                      Peak-End Rule
                    </div>
                  </button>
                </li>
                <li className="mb-7 mt-3">
                  <button type="button" className="flex items-center">
                    <div className="inline-block text-sm font-body1 text-gray-300">16</div>
                    <div className="text-2xl font-bold inline-block ml-7 hover:text-white pr-10 md:pr-20 text-left">
                      Postel's Law
                    </div>
                  </button>
                </li>
                <li className="mb-7 mt-3">
                  <button type="button" className="flex items-center">
                    <div className="inline-block text-sm font-body1 text-gray-300">17</div>
                    <div className="text-2xl font-bold inline-block ml-7 hover:text-white pr-10 md:pr-20 text-left">
                      Peak-End Rule
                    </div>
                  </button>
                </li>
                <li className="mb-7 mt-3">
                  <button type="button" className="flex items-center">
                    <div className="inline-block text-sm font-body1 text-gray-300">18</div>
                    <div className="text-2xl font-bold inline-block ml-7 hover:text-white pr-10 md:pr-20 text-left">
                      Postel's Law
                    </div>
                  </button>
                </li>
                <li className="mb-7 mt-3">
                  <button type="button" className="flex items-center">
                    <div className="inline-block text-sm font-body1 text-gray-300">19</div>
                    <div className="text-2xl font-bold inline-block ml-7 hover:text-white pr-10 md:pr-20 text-left">
                      Serial Position Effect
                    </div>
                  </button>
                </li>
                <li className="mb-7 mt-3">
                  <button type="button" className="flex items-center">
                    <div className="inline-block text-sm font-body1 text-gray-300">20</div>
                    <div className="text-2xl font-bold inline-block ml-7 hover:text-white pr-10 md:pr-20 text-left">
                      Tesler's Law
                    </div>
                  </button>
                </li>
              </ul>
            </div>
            <div className=" capitalize md:w-1/2">
              <div className="pr-10 md:pr-20">
                <h1 className="text-2xl font-bold mb-2">Overview</h1>
                <p className="mb-6 text-sm font-body1">
                  Laws of UX is a collection of the maxims and principle that designers can consider when building user
                  interface.It was created by Jon Yablonski
                </p>
              </div>
              <div className="pr-10 md:pr-20">
                <h1 className="text-3xl font-bold mb-2">The Book</h1>
                <p className="mb-6 text-sm font-body1">
                  An expansion of the ideas found on this site is now available in book form,<u>titled Law of UX:using
                  Psychology to Design Better Products and Service.</u>Translated editions of the book are available in German
                  and Korean
                </p>
              </div>
              <div className="pr-10 md:pr-20">
                <h1 className="text-3xl font-bold mb-2">Posters</h1>
                <p className="mb-6 text-sm font-body1">
                  An expansion of the ideas found on this site is now available in book form,titled{" "}
                  <u>Law of UX:using Psychology to Design Better Products and Service</u>.Translated editions of the book
                  are available in German and Korean
                </p>
              </div>
              <div className="pr-10 md:pr-20">
                <h1 className="text-3xl font-bold mb-2">Colophon</h1>
                <p className="mb-6 text-sm font-body1">
                  An expansion of the ideas found on this site is now available in book form,titled Law of UX:using
                  Psychology to Design Better Products and Service.Translated editions of the book are available in German
                  and Korean
                </p>
              </div>
              <div>
                <span className="text-base font-body1">@ Jon Yablonski 2021 | All rights Reserved</span>
              </div>
              <hr className="mr-20 mb-6"></hr>
              <div className="flex flex-col md:flex-row pr-20 text-base font-body1 pb-6">
                <button>
                  <svg
                    className="inline mb-5 md:mb-0"
                    width="30px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                  </svg>
                </button>
                <span className="underline uppercase md:ml-5 mb-5 md:mb-0">Twitter</span>
                <span className="underline uppercase md:ml-5 mb-5 md:mb-0">FaceBook</span>
                <span className="underline uppercase md:ml-5 mb-5 md:mb-0">LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
