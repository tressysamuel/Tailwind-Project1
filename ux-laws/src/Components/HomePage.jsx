import React from "react";
import LawImageContent from "./LawImageContent";
import Button from "./Button";
import Menu from "./Menu";
import LawImageContainer from "./LawImageContainer";

function HomePage() {
  return (
    //menu//
    <div className="">
      {/* #1 component */}
      <div className="mx-auto px-8 py-24 md:w-2/4 flex h-4/6 ">
        <LawImageContainer paragraph="Aesthetic Usability Effect" fillingColor="rgb(80,100,133)">
          <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <circle fill-opacity=".15" fill="#000" cx="282.882" cy="282.882" r="282.882"></circle>
              <path fill-opacity=".15" fill="#000" d="M82.937 82.897h399.886v399.967H82.937z"></path>
              <path fill="#F4F1D0" d="M282.88 82.897l199.943 399.966H82.937z"></path>
            </g>
          </svg>
        </LawImageContainer>
        <LawImageContent
          text="Users often perceive aesthetically pleasing design as design that's more usable"
          number="01"
        />
      </div>

      {/* #2 component */}
      <div className="mx-auto px-8 py-24 md:w-2/4 flex h-4/6 ">
        <LawImageContent
          text="Users often perceive aesthetically pleasing design as design that's more usable"
          number="02"
        />
        <LawImageContainer paragraph="Doherty thershold" fillingColor="rgb(196,81,157)">
          <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <circle fill-opacity=".15" fill="#000" cx="282.882" cy="282.882" r="282.882"></circle>
              <circle fill-opacity=".15" fill="#000" cx="282.861" cy="282.861" r="207.861"></circle>
              <circle fill-opacity=".15" fill="#000" cx="283.212" cy="283.212" r="134.212"></circle>
              <circle fill="#F4F1D0" cx="283.213" cy="283.213" r="60.213"></circle>
            </g>
          </svg>
        </LawImageContainer>
      </div>

      {/* #3component */}

      <div className="mx-auto px-8 py-24 md:w-2/4 flex h-4/6">
        <LawImageContainer paragraph="Fitt's Law" fillingColor="rgb(123,178,77)">
          <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#F4F1D0" stroke-width="30" fill="none" fill-rule="evenodd">
              <circle cx="282.882" cy="282.882" r="267.882"></circle>
              <circle cx="282.861" cy="282.861" r="192.861"></circle>
              <circle cx="283.212" cy="283.212" r="119.212"></circle>
              <circle cx="283.213" cy="283.213" r="45.213"></circle>
            </g>
          </svg>
        </LawImageContainer>
        <LawImageContent
          text="Users often perceive aesthetically pleasing design as design that's more usable"
          number="03"
        />
      </div>

      {/* #4Component */}

      <div className="mx-auto px-8 py-24 md:w-2/4 flex h-4/6">
        <LawImageContent
          text="Users often perceive aesthetically pleasing design as design that's more usable"
          number="04"
        />
        <LawImageContainer paragraph="Hick's Law" fillingColor="rgb(72,151,190)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 565 564">
            <circle cx="34" cy="34" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="118" cy="34" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="199" cy="34" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="283" cy="34" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="365" cy="34" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="449" cy="34" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="531" cy="34" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="34" cy="117" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="118" cy="117" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="199" cy="117" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="283" cy="117" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="365" cy="117" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="449" cy="117" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="531" cy="117" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="34" cy="199" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="118" cy="199" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="449" cy="199" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="531" cy="199" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="34" cy="282" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="118" cy="282" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="449" cy="282" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="531" cy="282" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="34" cy="365" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="118" cy="365" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="449" cy="365" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="531" cy="365" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="34" cy="448" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="118" cy="448" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="199" cy="448" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="283" cy="448" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="365" cy="448" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="449" cy="448" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="531" cy="448" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="34" cy="530" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="118" cy="530" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="199" cy="530" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="283" cy="530" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="365" cy="530" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="449" cy="530" r="34" fill="#000" fill-opacity=".2"></circle>
            <circle cx="531" cy="530" r="34" fill="#000" fill-opacity=".2"></circle>
            <path
              fill="#F4F1D0"
              fill-rule="nonzero"
              d="M317 248h-68v68h68v-68zm-22 46h-25v-25h25v25zm91-22.88889v-22.77778h-22.77778v-22.77777c0-12.52778-10.25-22.77778-22.77778-22.77778h-22.77777V180h-22.77778v22.77778H272.1111V180h-22.77778v22.77778h-22.77777c-12.52778 0-22.77778 10.25-22.77778 22.77778v22.77777H181v22.77778h22.77778v22.77778H181v22.77778h22.77778v22.77777c0 12.52778 10.25 22.77778 22.77778 22.77778h22.77777V385h22.77778v-22.77778h22.77778V385h22.77778v-22.77778h22.77777c12.52778 0 22.77778-10.25 22.77778-22.77778v-22.77777H386v-22.77778h-22.77778V271.1111H386zM341 340H225V224h116v116z"
            ></path>
          </svg>
        </LawImageContainer>
      </div>

      {/* #5Component */}
      <div className="mx-auto px-8 py-24 md:w-2/4 flex h-4/6">
        <LawImageContainer paragraph="Hick's Law" fillingColor="rgb(214,194,48)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 567 563">
            <g fill="none" fill-rule="evenodd" stroke="#F4F1D0" stroke-width="30">
              <path d="M15 98h454v450H15z"></path>
              <path d="M98 15h454v450H98z"></path>
            </g>
          </svg>
        </LawImageContainer>
        <LawImageContent
          text="Users often perceive aesthetically pleasing design as design that's more usable"
          number="05"
        />
      </div>

      {/* #6Component */}
      <div className="mx-auto px-8 py-24 md:w-2/4 flex h-4/6">
        <LawImageContent
          text="Users often perceive aesthetically pleasing design as design that's more usable"
          number="06"
        />
        <LawImageContainer paragraph="Hick's Law" fillingColor="rgb(73,164,109)">
          <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path fill-opacity=".1" fill="#000" d="M0 0h566v566H0z"></path>
              <path fill-opacity=".1" fill="#000" d="M40 40h486v486H40z"></path>
              <path fill-opacity=".1" fill="#000" d="M80 80h406v406H80z"></path>
              <circle fill-opacity=".2" fill="#000" cx="168" cy="168" r="48"></circle>
              <circle fill-opacity=".2" fill="#000" cx="284" cy="168" r="48"></circle>
              <circle fill-opacity=".2" fill="#000" cx="398" cy="168" r="48"></circle>
              <circle fill-opacity=".2" fill="#000" cx="167.209" cy="282.437" r="47.247"></circle>
              <circle fill="#F4F1D0" cx="283.936" cy="282.437" r="47.247"></circle>
              <circle fill-opacity=".2" fill="#000" cx="398" cy="282" r="48"></circle>
              <circle fill-opacity=".2" fill="#000" cx="168" cy="398" r="48"></circle>
              <circle fill-opacity=".2" fill="#000" cx="284" cy="398" r="48"></circle>
              <circle fill-opacity=".2" fill="#000" cx="398" cy="398" r="48"></circle>
            </g>
          </svg>
        </LawImageContainer>
      </div>

      {/* #7Component */}
      <div className="mx-auto px-8 py-24 md:w-2/4 flex h-4/6">
        <LawImageContainer paragraph="Hick's Law" fillingColor="rgb(242,126,172)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 567 507">
            <path
              d="M77.5218237,15.8098047 L18.2743646,118.429414 L77.5218237,221.049023 L196.016742,221.049023 L255.264201,118.429414 L196.016742,15.8098047 L77.5218237,15.8098047 Z M68.8615697,0.809804688 L204.676996,0.809804688 L272.584709,118.429414 L204.676996,236.049023 L68.8615697,236.049023 L0.953856568,118.429414 L68.8615697,0.809804688 Z M71,1 L205,1 L205,236 L71,236 L71,1 Z M86,16 L86,221 L190,221 L190,16 L86,16 Z M14.9246324,126 L14.9246324,111 L260.089469,111 L260.089469,126 L14.9246324,126 Z M272,118.5 L68,236 L124.328358,118.5 L68,1 L272,118.5 Z M102.44341,38.148972 L140.962912,118.5 L102.44341,198.851028 L241.946471,118.5 L102.44341,38.148972 Z M1,118.5 L205,1 L146,118.5 L205,236 L1,118.5 Z M169.156836,198.044797 L129.215193,118.5 L169.156836,38.9552028 L31.0535285,118.5 L169.156836,198.044797 Z"
              fill="#F4F1D0"
              fill-rule="nonzero"
            ></path>
            <path
              d="M372.521824,15.8098047 L313.274365,118.429414 L372.521824,221.049023 L491.016742,221.049023 L550.264201,118.429414 L491.016742,15.8098047 L372.521824,15.8098047 Z M363.86157,0.809804688 L499.676996,0.809804688 L567.584709,118.429414 L499.676996,236.049023 L363.86157,236.049023 L295.953857,118.429414 L363.86157,0.809804688 Z M366,1 L500,1 L500,236 L366,236 L366,1 Z M381,16 L381,221 L485,221 L485,16 L381,16 Z M309.924632,126 L309.924632,111 L555.089469,111 L555.089469,126 L309.924632,126 Z"
              fill="#F4F1D0"
              fill-rule="nonzero"
            ></path>
            <path
              d="M73.1916967,278.309805 L200.346869,278.309805 L263.924455,388.429414 L200.346869,498.549023 L73.1916967,498.549023 L9.61411061,388.429414 L73.1916967,278.309805 Z M200.346869,278.309805 L73.1916967,278.309805 L9.61411061,388.429414 L73.1916967,498.549023 L200.346869,498.549023 L263.924455,388.429414 L200.346869,278.309805 Z"
              stroke="#F4F1D0"
              stroke-width="15"
              fill-rule="nonzero"
            ></path>
            <circle stroke="#F4F1D0" stroke-width="15" cx="432.5" cy="388.5" r="110" fill="none"></circle>
          </svg>
        </LawImageContainer>
        <LawImageContent
          text="Users often perceive aesthetically pleasing design as design that's more usable"
          number="07"
        />
      </div>

      {/* #8Component */}
      <div className="mx-auto px-8 py-24 md:w-2/4 flex h-4/6">
        <LawImageContent
          text="Users often perceive aesthetically pleasing design as design that's more usable"
          number="08"
        />
        <LawImageContainer paragraph="Hick's Law" fillingColor="rgb(234,126,56)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566 516">
            <g fill="none" fill-rule="evenodd">
              <circle cx="55.5" cy="55.5" r="55.5" fill="#F4F1D0"></circle>
              <circle cx="190.5" cy="55.5" r="55.5" fill="#F4F1D0"></circle>
              <circle cx="325.5" cy="55.5" r="55.5" fill="#F4F1D0"></circle>
              <circle cx="510.5" cy="55.5" r="55.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="55.5" cy="190.5" r="55.5" fill="#F4F1D0"></circle>
              <circle cx="190.5" cy="190.5" r="55.5" fill="#F4F1D0"></circle>
              <circle cx="325.5" cy="190.5" r="55.5" fill="#F4F1D0"></circle>
              <circle cx="510.5" cy="190.5" r="55.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="55.5" cy="325.5" r="55.5" fill="#F4F1D0"></circle>
              <circle cx="190.5" cy="325.5" r="55.5" fill="#F4F1D0"></circle>
              <circle cx="325.5" cy="325.5" r="55.5" fill="#F4F1D0"></circle>
              <circle cx="510.5" cy="325.5" r="55.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="55.5" cy="460.5" r="55.5" fill="#F4F1D0"></circle>
              <circle cx="190.5" cy="460.5" r="55.5" fill="#F4F1D0"></circle>
              <circle cx="325.5" cy="460.5" r="55.5" fill="#F4F1D0"></circle>
              <circle cx="510.5" cy="460.5" r="55.5" fill="#000" fill-opacity=".2"></circle>
            </g>
          </svg>
        </LawImageContainer>
      </div>

      {/* #9Component */}
      <div className="mx-auto px-8 py-24 md:w-2/4 flex h-4/6">
        <LawImageContainer paragraph="Hick's Law" fillingColor="rgb(128,73,94)">
          <svg viewBox="0 0 566 565" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <circle fill="#F4F1D0" cx="48.5" cy="48.5" r="48.5"></circle>
              <circle fill-opacity=".2" fill="#000" cx="166.5" cy="48.5" r="48.5"></circle>
              <circle fill="#F4F1D0" cx="283.5" cy="48.5" r="48.5"></circle>
              <circle fill-opacity=".2" fill="#000" cx="400.5" cy="48.5" r="48.5"></circle>
              <circle fill-opacity=".2" fill="#000" cx="517.5" cy="48.5" r="48.5"></circle>
              <circle fill-opacity=".2" fill="#000" cx="48.5" cy="165.5" r="48.5"></circle>
              <circle fill-opacity=".2" fill="#000" cx="166.5" cy="165.5" r="48.5"></circle>
              <circle fill-opacity=".2" fill="#000" cx="283.5" cy="165.5" r="48.5"></circle>
              <circle fill="#F4F1D0" cx="400.5" cy="165.5" r="48.5"></circle>
              <circle fill-opacity=".2" fill="#000" cx="517.5" cy="165.5" r="48.5"></circle>
              <circle fill-opacity=".2" fill="#000" cx="48.5" cy="282.5" r="48.5"></circle>
              <circle fill-opacity=".2" fill="#000" cx="166.5" cy="282.5" r="48.5"></circle>
              <circle fill="#F4F1D0" cx="283.5" cy="282.5" r="48.5"></circle>
              <circle fill-opacity=".2" fill="#000" cx="400.5" cy="282.5" r="48.5"></circle>
              <circle fill-opacity=".2" fill="#000" cx="517.5" cy="282.5" r="48.5"></circle>
              <circle fill="#F4F1D0" cx="48.5" cy="399.5" r="48.5"></circle>
              <circle fill-opacity=".2" fill="#000" cx="166.5" cy="399.5" r="48.5"></circle>
              <circle fill-opacity=".2" fill="#000" cx="283.5" cy="399.5" r="48.5"></circle>
              <circle fill-opacity=".2" fill="#000" cx="400.5" cy="399.5" r="48.5"></circle>
              <circle fill="#F4F1D0" cx="517.5" cy="399.5" r="48.5"></circle>
              <circle fill-opacity=".2" fill="#000" cx="48.5" cy="516.5" r="48.5"></circle>
              <circle fill="#F4F1D0" cx="166.5" cy="516.5" r="48.5"></circle>
              <circle fill-opacity=".2" fill="#000" cx="283.5" cy="516.5" r="48.5"></circle>
              <circle fill-opacity=".2" fill="#000" cx="400.5" cy="516.5" r="48.5"></circle>
              <circle fill-opacity=".2" fill="#000" cx="517.5" cy="516.5" r="48.5"></circle>
            </g>
          </svg>
        </LawImageContainer>
        <LawImageContent
          text="Users often perceive aesthetically pleasing design as design that's more usable"
          number="09"
        />
      </div>
      {/* #10Component */}
      <div className="mx-auto px-8 py-24 md:w-2/4 flex h-4/6">
        <LawImageContent
          text="Users often perceive aesthetically pleasing design as design that's more usable"
          number="10"
        />
        <LawImageContainer paragraph="Hick's Law" fillingColor="rgb(129,157,214)">
          <svg viewBox="0 0 576 566" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <circle stroke="#F4F1D0" stroke-width="3" cx="282.882" cy="282.882" r="281.382"></circle>
              <circle fill="#F4F1D0" cx="179" cy="22" r="12"></circle>
              <circle fill="#F4F1D0" cx="564" cy="271" r="12"></circle>
              <circle fill="#F4F1D0" cx="37" cy="417" r="12"></circle>
              <circle stroke="#F4F1D0" stroke-width="3" cx="282.861" cy="282.861" r="206.361"></circle>
              <circle fill="#F4F1D0" cx="80" cy="247" r="12"></circle>
              <circle fill="#F4F1D0" cx="343" cy="86" r="12"></circle>
              <circle fill="#F4F1D0" cx="383" cy="464" r="12"></circle>
              <circle stroke="#F4F1D0" stroke-width="3" cx="283.212" cy="283.212" r="132.712"></circle>
              <circle fill="#F4F1D0" cx="403" cy="343" r="12"></circle>
              <circle fill="#F4F1D0" cx="223" cy="402" r="12"></circle>
              <circle fill="#F4F1D0" cx="223" cy="165" r="12"></circle>
              <circle stroke="#F4F1D0" stroke-width="3" cx="283.213" cy="283.213" r="58.713"></circle>
              <circle fill="#F4F1D0" cx="324" cy="240" r="12"></circle>
              <circle fill="#F4F1D0" cx="294" cy="340" r="12"></circle>
              <circle fill="#F4F1D0" cx="226" cy="271" r="12"></circle>
            </g>
          </svg>
        </LawImageContainer>
      </div>

      {/* #11Component */}
      <div className="mx-auto px-8 py-24 md:w-2/4 flex h-4/6">
        <LawImageContent
          text="Users often perceive aesthetically pleasing design as design that's more usable"
          number="11"
        />
        <LawImageContainer paragraph="Hick's Law" fillingColor="rgb(243,94,78)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 565 564">
            <g fill="none" fill-rule="evenodd">
              <circle cx="34" cy="34" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="118" cy="34" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="199" cy="34" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="283" cy="34" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="365" cy="34" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="449" cy="34" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="531" cy="34" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="34" cy="117" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="118" cy="117" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="199" cy="117" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="283" cy="117" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="365" cy="117" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="449" cy="117" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="531" cy="117" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="34" cy="199" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="118" cy="199" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="199" cy="199" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="283" cy="199" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="365" cy="199" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="449" cy="199" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="531" cy="199" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="34" cy="282" r="34" fill="#F4F1D0" fill-opacity=".25"></circle>
              <circle cx="118" cy="282" r="34" fill="#F4F1D0" fill-opacity=".5"></circle>
              <circle cx="199" cy="282" r="34" fill="#F4F1D0"></circle>
              <circle cx="283" cy="282" r="34" fill="#F4F1D0"></circle>
              <circle cx="365" cy="282" r="34" fill="#F4F1D0"></circle>
              <circle cx="449" cy="282" r="34" fill="#F4F1D0" fill-opacity=".5"></circle>
              <circle cx="531" cy="282" r="34" fill="#F4F1D0" fill-opacity=".25"></circle>
              <circle cx="34" cy="365" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="118" cy="365" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="199" cy="365" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="283" cy="365" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="365" cy="365" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="449" cy="365" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="531" cy="365" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="34" cy="448" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="118" cy="448" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="199" cy="448" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="283" cy="448" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="365" cy="448" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="449" cy="448" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="531" cy="448" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="34" cy="530" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="118" cy="530" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="199" cy="530" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="283" cy="530" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="365" cy="530" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="449" cy="530" r="34" fill="#000" fill-opacity=".2"></circle>
              <circle cx="531" cy="530" r="34" fill="#000" fill-opacity=".2"></circle>
            </g>
          </svg>
        </LawImageContainer>
      </div>

      {/* #12Component */}
      <div className="mx-auto px-8 py-24 md:w-2/4 flex h-4/6">
        <LawImageContainer paragraph="Hick's Law" fillingColor="rgb(243,94,78)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 565 564">
            <g fill="none" fill-rule="evenodd">
              <path fill-opacity=".1" fill="#000" d="M1 0h270v270H1z"></path>
              <circle fill-opacity=".15" fill="#000" cx="100" cy="100" r="100"></circle>
              <circle fill-opacity=".15" fill="#000" cx="171" cy="100" r="100"></circle>
              <circle fill-opacity=".15" fill="#000" cx="101" cy="170" r="100"></circle>
              <circle fill-opacity=".15" fill="#000" cx="171" cy="170" r="100"></circle>
              <path fill-opacity=".1" fill="#000" d="M295 0h270v270H295z"></path>
              <circle fill-opacity=".15" fill="#000" cx="430" cy="100" r="100"></circle>
              <circle fill-opacity=".15" fill="#000" cx="395" cy="170" r="100"></circle>
              <circle fill-opacity=".15" fill="#000" cx="465" cy="170" r="100"></circle>
              <path fill-opacity=".1" fill="#000" d="M1 294h270v270H1z"></path>
              <circle fill-opacity=".15" fill="#000" cx="101" cy="394" r="100"></circle>
              <circle fill-opacity=".15" fill="#000" cx="171" cy="464" r="100"></circle>
              <path fill-opacity=".1" fill="#000" d="M295 294h270v270H295z"></path>
              <circle fill="#F4F1D0" cx="430" cy="429" r="100"></circle>
            </g>
          </svg>
        </LawImageContainer>
        <LawImageContent
          text="Users often perceive aesthetically pleasing design as design that's more usable"
          number="12"
        />
      </div>
      {/* #13Component */}
      <div className="mx-auto px-8 py-24 md:w-2/4 flex h-4/6">
        <LawImageContent
          text="Users often perceive aesthetically pleasing design as design that's more usable"
          number="13"
        />
        <LawImageContainer paragraph="Hick's Law" fillingColor="rgb(55,171,191)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566 565">
            <g fill="none" fill-rule="evenodd">
              <circle cx="48.5" cy="48.5" r="48.5" fill="#F4F1D0"></circle>
              <circle cx="166.5" cy="48.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="283.5" cy="48.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="400.5" cy="48.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="517.5" cy="48.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="48.5" cy="165.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="166.5" cy="165.5" r="48.5" fill="#F4F1D0"></circle>
              <circle cx="283.5" cy="165.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="400.5" cy="165.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="517.5" cy="165.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="48.5" cy="282.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="166.5" cy="282.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="283.5" cy="282.5" r="48.5" fill="#F4F1D0"></circle>
              <circle cx="400.5" cy="282.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="517.5" cy="282.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="48.5" cy="399.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="166.5" cy="399.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="283.5" cy="399.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="400.5" cy="399.5" r="48.5" fill="#F4F1D0"></circle>
              <circle cx="517.5" cy="399.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="48.5" cy="516.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="166.5" cy="516.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="283.5" cy="516.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="400.5" cy="516.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="517.5" cy="516.5" r="48.5" fill="#F4F1D0"></circle>
            </g>
          </svg>
        </LawImageContainer>
      </div>

      {/* #14Component */}
      <div className="mx-auto px-8 py-24 md:w-2/4 flex h-4/6">
        <LawImageContainer paragraph="Hick's Law" fillingColor="rgb(190,170,72)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 598 597">
            <g fill="none" fill-rule="evenodd" transform="rotate(-45 293.76881 309.77343)">
              <circle cx="305.5" cy="305.5" r="54.5" fill="#000" opacity=".2"></circle>
              <path
                fill="#F4F1D0"
                fill-rule="nonzero"
                stroke="#F4F1D0"
                stroke-width="5"
                d="M558 251l-9.69375 9.69375 38.3625 38.43125H503v13.75h83.66875l-38.3625 38.43125L558 361l55-55zM55 362l9.69375-9.69375-38.3625-38.43125H110v-13.75H26.33125l38.3625-38.43125L55 252 0 307zM251 55l9.69375 9.69375 38.43125-38.3625V110h13.75V26.33125l38.43125 38.3625L361 55 306 0zM362 557l-9.69375-9.69375-38.43125 38.3625V502h-13.75v83.66875l-38.43125-38.3625L252 557l55 55z"
              ></path>
              <path fill="#F4F1D0" fill-rule="nonzero" d="M114 115v381h383V115H114zM94 95h423v421H94V95z"></path>
            </g>
          </svg>
        </LawImageContainer>
        <LawImageContent
          text="Users often perceive aesthetically pleasing design as design that's more usable"
          number="14"
        />
      </div>

      {/* #15Component */}
      <div className="mx-auto px-8 py-24 2xl:w-2/4 flex h-4/6">
        <LawImageContent
          text="Users often perceive aesthetically pleasing design as design that's more usable"
          number="15"
        />
        <LawImageContainer paragraph="Hick's Law" fillingColor="rgb(48,126,199)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566 565">
            <g fill="none" fill-rule="evenodd">
              <circle cx="48.5" cy="48.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="166.5" cy="48.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="283.5" cy="48.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="400.5" cy="48.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="517.5" cy="48.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="48.5" cy="165.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="166.5" cy="165.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="283.5" cy="165.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="400.5" cy="165.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="517.5" cy="165.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="48.5" cy="282.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="166.5" cy="282.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="283.5" cy="282.5" r="48.5" fill="#F4F1D0"></circle>
              <circle cx="400.5" cy="282.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="517.5" cy="282.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="48.5" cy="399.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="166.5" cy="399.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="283.5" cy="399.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="400.5" cy="399.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="517.5" cy="399.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="48.5" cy="516.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="166.5" cy="516.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="283.5" cy="516.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="400.5" cy="516.5" r="48.5" fill="#000" fill-opacity=".2"></circle>
              <circle cx="517.5" cy="516.5" r="48.5" fill="#F4F1D0"></circle>
            </g>
          </svg>
        </LawImageContainer>
      </div>
    </div>
  );
}

export default HomePage;
