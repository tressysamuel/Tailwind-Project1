import React from "react";
import Button from "./Button";

function AestheticContent() {
  return (
    <div className="mx-auto px-4 text-[#F4F1D0]">
      <div className="py-10 max-w-5xl mx-auto text-[#F4F1D0]">
        <h2 className="mb-8 text-gray-300">
          <span className="inline-block w-5 align-middle h-1 bg-gray-200"></span>
          <span className="ml-1 uppercase tracking-widest text-sm">Overview</span>
        </h2>
        <p className="text-xl leading-6 sm:text-4xl font-bold text-left pr-5">
          Users Often perceive aesthetically pleasing design as design that's more usable.
        </p>
      </div>
      <div className="py-10 max-w-5xl mx-auto">
        <h2 className="mb-8">
          <span class="inline-block w-5 align-middle h-1 bg-gray-200"></span>
          <span className="ml-1 uppercase tracking-widest text-sm">KEY TAKEAWAY</span>
        </h2>

        <div className="mb-20 leading-8 text-left flex justify-betweeen text-xl font-medium flex-wrap sm:flex-nowrap">
          <p className=" sm:min-w-1/3 pr-9">
            An aesthetically pleasing design creative response in people's brains and leads them to believe the design
            actually works better
          </p>
          <p>
            People are more tolerant of minor usability issus when the design of a product or service is aesthetically
            pleasing.
          </p>
          <p>
            Visually pleasing design can mask usability problems and prevent issues from being discovered during usability
            testing
          </p>
        </div>
        <Button text="DOWNLOAD THE POSTER" className="bg-pink-400 font-semibold tracking-widest " />
        <div className="pb-10 pt-20 max-w-5xl mx-auto">
          <h2 className="mb-8">
            <span class="inline-block w-5 align-middle h-1 bg-gray-200"></span>
            <span className="ml-1 uppercase tracking-widest text-sm">Origins</span>
          </h2>
          <div className="leading-8 text-left text-xl font-medium">
            The aesthetic-usability effect was first studied in the field of human–computer interaction in 1995. Researchers
            Masaaki Kurosu and Kaori Kashimura from the Hitachi Design Center tested 26 variations of an ATM UI, asking the
            252 study participants to rate each design on ease of use, as well as aesthetic appeal. They found a stronger
            correlation between the participants’ ratings of aesthetic appeal and perceived ease of use than the correlation
            between their ratings of aesthetic appeal and actual ease of use. Kurosu and Kashimura concluded that users are
            strongly influenced by the aesthetics of any given interface, even when they try to evaluate the underlying
            functionality of the system.
            <p className="mt-4">
              <u>Source</u>
            </p>
          </div>
        </div>
        <div className="pb-10 pt-20 max-w-5xl mx-auto">
          <h2 className="mb-8">
            <span class="inline-block w-5 align-middle h-1 bg-gray-200"></span>
            <span className="ml-1 uppercase tracking-widest text-sm">further reading</span>
          </h2>
          <div className="mb-20 leading-8 text-left text-xl font-medium">
            <ul>
              <li className="mb-10">
                <h2 className="font-bold text-4xl mb-2">
                  <u>The Aesthetic-Usability Effect</u>
                </h2>
                <p>Kate Moran | Nielsen Norman Group</p>
              </li>
              <li className="mb-10">
                <h2 className="font-bold text-4xl mb-2">
                  <u>The Aesthetic-Usability Effect</u>
                </h2>
                <p>Kate Moran | Nielsen Norman Group</p>
              </li>
              <li className="mb-10">
                <h2 className="font-bold text-4xl mb-2">
                  <u>The Aesthetic-Usability Effect</u>
                </h2>
                <p>Kate Moran | Nielsen Norman Group</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AestheticContent;
