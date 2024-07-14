// import React from "react";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdArrowOutward } from "react-icons/md";
// import { TfiLocationPin } from "react-icons/tfi";
// import Logo from "../../assets/logo.svg";
// const Footer = () => {
//     return (
//         <footer className="w-full  h-[400px] my-[40px]">
//             <div className="container mx-auto px-20">
//                 <div className="flex justify-start items-stretch gap-20 bg-slate-100 py-4 px-[12px] rounded-md">
//                     <div className="py-10 px-5">
//                         <img className="w-[240px]" src={Logo} alt="" />
//                     </div>
//                     <div className=" w-[90%] flex items-center justify-start gap-20 flex-col pb-[60px]">
//                         <div className=" w-full border-b-2  border-slate-400">
//                             <div className="flex gap-4 mb-10 items-center pt-[40px]">
//                                 <div className="p-2 border-2 border-[#CCCCCC] bg-white shadow-md rounded-md">
//                                     <TfiLocationPin className="text-3xl " />
//                                 </div>
//                                 <p className="text-slate-800 font-thin flex gap-4 hover:scale-110 duration-300 transition-all hover:text-blue-500 items-center">
//                                     Toshkent shahri Yashnabod tumani Mo’ljal
//                                     Sergeli-4 bekat
//                                     <MdArrowOutward className="text-2xl" />
//                                 </p>
//                             </div>
//                             <div className="flex gap-4 mb-3 items-center pb-[40px]">
//                                 <div className="p-2 border-2 border-[#CCCCCC] bg-white shadow-md rounded-md">
//                                     <FaPhoneAlt className="text-3xl text-slate-800" />
//                                 </div>
//                                 <p className="text-slate-800 flex gap-4 hover:scale-110 duration-300 transition-all hover:text-blue-500 font-thin">
//                                     +998 94 099 3434{" "}
//                                     <MdArrowOutward className="text-2xl" />
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="w-full flex justify-between items-center">
//                             <a
//                                 href="#"
//                                 className="border-2 flex gap-4 items-center rounded-full bg-transparent px-8 py-2"
//                                 target="_blink"
//                             >
//                                 <b>Facebook</b>
//                                 <MdArrowOutward />
//                             </a>
//                             <a
//                                 href="#"
//                                 className="border-2 flex gap-4 items-center rounded-full bg-transparent px-8 py-2"
//                                 target="_blink"
//                             >
//                                 <b>Instagram</b>
//                                 <MdArrowOutward />
//                             </a>
//                             <a
//                                 href="#"
//                                 className="border-2 flex gap-4 items-center rounded-full bg-transparent px-8 py-2"
//                                 target="_blink"
//                             >
//                                 <b>Telegram</b>
//                                 <MdArrowOutward />
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import Logo from "../../assets/logo.svg";

const Footer = () => {
    return (
        <footer className="w-full py-8 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-20">
                <div className="flex flex-col lg:flex-row justify-between gap-10 bg-white py-8 px-4 lg:px-12 rounded-md shadow-lg">
                    {/* Logo Section */}
                    <div className="flex justify-center lg:justify-start mb-8 lg:mb-0">
                        <img
                            className="w-[200px] lg:w-[240px]"
                            src={Logo}
                            alt="Logo"
                        />
                    </div>

                    {/* Contact Info Section */}
                    <div className="flex flex-col gap-6 lg:w-[60%]">
                        <div className="border-b-2 border-gray-300 pb-4">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-2 border-2 border-gray-300 bg-white shadow-md rounded-md">
                                    <TfiLocationPin className="text-2xl text-gray-800" />
                                </div>
                                <p className="text-gray-800 font-medium flex gap-2 items-center">
                                    Toshkent shahri Yashnabod tumani Mo’ljal
                                    Sergeli-4 bekat
                                    <MdArrowOutward className="text-xl text-blue-500" />
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-2 border-2 border-gray-300 bg-white shadow-md rounded-md">
                                    <FaPhoneAlt className="text-2xl text-gray-800" />
                                </div>
                                <p className="text-gray-800 font-medium flex gap-2 items-center">
                                    +998 94 099 3434
                                    <MdArrowOutward className="text-xl text-blue-500" />
                                </p>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#"
                                className="border-2 flex gap-2 items-center rounded-full bg-transparent px-6 py-2 text-gray-800 hover:bg-gray-200 transition-colors 
                                max-lg:justify-between hover:text-blue-500 duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <b>Facebook</b>
                                <MdArrowOutward />
                            </a>
                            <a
                                href="#"
                                className="border-2 flex gap-2 items-center rounded-full bg-transparent px-6 py-2 text-gray-800 hover:bg-gray-200 transition-colors 
                                max-lg:justify-between hover:text-blue-500 duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <b>Instagram</b>
                                <MdArrowOutward />
                            </a>
                            <a
                                href="#"
                                className="border-2 flex gap-2 items-center rounded-full bg-transparent px-6 py-2 text-gray-800 hover:bg-gray-200 transition-colors 
                                max-lg:justify-between hover:text-blue-500 duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <b>Telegram</b>
                                <MdArrowOutward />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
