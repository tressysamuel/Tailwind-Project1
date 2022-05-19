import React from "react";
function Menu(){
    return(
        <div>
            <div className="bg-black font-body">
               <div className="bg-black relative" style={{color:"rgb(244,241,208)"}}>
                   <button type="button" class="absolute top-3 focus:outline-none z-20">
                     <div className="fixed right-3">
                     <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                         
                         </div>  
                   </button>
                   <div className="py-10 px-5 flex flex-col md:flex-row container mx-auto max-w-screen-lg w-screen relative z-10 overflow-y-scroll">
                       <div className="md:w-1/2 mb-20 md:mb-0">
                           <ul>
                               <li className="mb-7"></li>
                           </ul>
                       </div>
                   </div>
                   <h2>asdfgh</h2>
    
                   </div> 

            </div>
        </div>
    )
}

export default Menu;