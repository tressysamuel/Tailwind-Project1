import React from "react";

function HomePage() {
  return (
    //menu//
    <div className="bg-black ">
      <div>
        <nav className="bg-black flex justify-between p-4 uppercase text-white font-medium items-center tracking-widest fixed top-0 w-full text-base">
          <div>
            <h2 className="text-white ">LAWS OF UX</h2>
          </div>
          <button type="button" class="menuBtn flex border border-white px-3 py-2 uppercase font-medium">
            <span className="mr-2">MENU</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="23px">
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </nav>
        <div className=" container mx-auto px-4">
                      <article className="w-2 flex justify-center py-28">
                        <a>
                        <div  className="ml-50 p-20 bg-white flex-1  flex flex-col justify-between">
                        <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path></svg>
                        
                        <p className="text-xl">Aesthetic Usability Effect</p>
                        </div>
                        <div className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"style={{backgroundColor:"rgb(80,100,133)"}}>
                        <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill-opacity=".15" fill="#000" cx="282.882" cy="282.882" r="282.882"></circle><path fill-opacity=".15" fill="#000" d="M82.937 82.897h399.886v399.967H82.937z"></path><path fill="#F4F1D0" d="M282.88 82.897l199.943 399.966H82.937z"></path></g></svg>
                        </div>
                        </a>
                        <div className="max-w-xs pl-20 flex-col justify-center hidden md:flex" style={{backgroundColor:"rgb(244,241,208)"}}>

                        </div>
                      </article>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
