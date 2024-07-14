// import React from "react";
// import Accordion from "../../utils/Accordion";

// const Faq = () => {
//     return (
//         <div className="py-[80px] w-full" id="faq">
//             <div className="container mx-auto px-20 ">
//                 <div className=" border-t-2 flex pt-7  justify-between">
//                     <div className="w-[15%]">
//                         <h1 className="text-[40px] leading-14 text-[#020C31] font-bold px-6">
//                             FAQ
//                         </h1>
//                     </div>

//                     <div className="w-[85%] ">
//                         <Accordion />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Faq;
import React from "react";
import Accordion from "../../utils/Accordion";

const Faq = () => {
    return (
        <div className="py-[80px] w-full" id="faq">
            <div className="container mx-auto px-4 sm:px-6 lg:px-20">
                <div className="border-t-2 flex flex-col lg:flex-row pt-7 justify-between">
                    <div className="w-full lg:w-[15%] mb-6 lg:mb-0">
                        <h1 className="text-3xl sm:text-4xl leading-tight text-[#020C31] font-bold lg:px-6">
                            FAQ
                        </h1>
                    </div>

                    <div className="w-full lg:w-[85%]">
                        <Accordion />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
