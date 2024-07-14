// import React from "react";
// import LogoOne from "../../../assets/ser-1.svg";
// import LogoTwo from "../../../assets/ser-2.svg";
// import LogoThree from "../../../assets/ser-3.svg";
// import LogoFifte from "../../../assets/ser-4.png";
// import ServIcons from "../../../assets/ser-icons-1.svg";
// const Services = () => {
//     return (
//         <setion className="pb-[50px] border-b-2 border-slate-500" id="service">
//             <div className="container mx-auto px-20">
//                 <div className="mb-10 pt-[90px]">
//                     <h2 className="text-black mb-2 w-24 font-bold text-4xl">
//                         Service
//                     </h2>
//                     <p className="text-slate-600 text-[12px]">
//                         Bu darsliklari sizning yuqori daraja olishingizga yordam
//                         beradi
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-3 max-md:grid-cols-1 gap-7 mb-10">
//                     <div className="border shadow-md border-[#F3F6F6] bg-[#F3F6F6] px-4 py-6 rounded-md w-full h-[420px]">
//                         <h2 className="mb-10 text-4xl px-[5px] text-black font-bold">
//                             Boshlang’ich tushunchalar
//                         </h2>
//                         <div className="w-full mx-auto px-20">
//                             <p className="capitalize text-blue-500">
//                                 nazariy bilimlar
//                             </p>
//                             <span className="text-green-300 font-medium">
//                                 16 dars
//                             </span>
//                         </div>
//                         <div className="flex justify-end mt-[120px]">
//                             <img src={LogoOne} alt="card logo" />
//                         </div>
//                     </div>
//                     <div className="border shadow-md border-[#F3F6F6] bg-[#F3F6F6] px-4 py-6 rounded-md w-full h-[420px]">
//                         <h2 className="mb-10 text-4xl px-[5px] text-black font-bold">
//                             O’rta
//                         </h2>
//                         <div className="w-full mx-auto px-20">
//                             <p className="capitalize text-blue-500">
//                                 nazariy va Amaliy bilimlar
//                             </p>
//                             <span className="text-green-300 font-medium">
//                                 23 dars
//                             </span>
//                         </div>
//                         <div className="flex justify-end mt-40">
//                             <img src={LogoTwo} alt="card logo" />
//                         </div>
//                     </div>
//                     <div className="border shadow-md border-[#F3F6F6] bg-[#F3F6F6] px-4 py-6 rounded-md w-full h-[420px]">
//                         <h2 className="mb-10 text-4xl px-[5px] text-black font-bold">
//                             Yuqori
//                         </h2>
//                         <div className="w-full mx-auto px-20">
//                             <p className="capitalize text-blue-500">
//                                 Amaliy bilimlar
//                             </p>
//                             <span className="text-green-300 font-medium">
//                                 16 dars
//                             </span>
//                         </div>
//                         <div className="flex justify-end mt-40">
//                             <img src={LogoThree} alt="card logo" />
//                         </div>
//                     </div>
//                 </div>

//                 <div className="p-4 bg-blue-400 rounded-md grid grid-cols-2 gap-10 max-lg:grid-cols-1 max-lg:gap-10">
//                     <div>
//                         <img src={LogoFifte} alt="logo" />
//                     </div>

//                     <div className="mt-5">
//                         <div className="mb-5">
//                             <img src={ServIcons} alt="services sections icon" />
//                         </div>
//                         <h2 className="font-bold text-white text-3xl w-[500px] leading-[50px] mb-[50px]">
//                             Bizga ko'p yillardan beri kompaniyamizga ishonch
//                             bildirganlar talaygina
//                         </h2>

//                         <button className="px-6 py-2 bg-[#3375FF] text-white text-xl rounded-full hover:bg-transparent hover:scale-125 duration-700 transition-all">
//                             Bog’lanish
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </setion>
//     );
// };

// export default Services;
import React from "react";
import LogoOne from "../../../assets/ser-1.svg";
import LogoTwo from "../../../assets/ser-2.svg";
import LogoThree from "../../../assets/ser-3.svg";
import LogoFifte from "../../../assets/ser-4.png";
import ServIcons from "../../../assets/ser-icons-1.svg";

const Services = () => {
    return (
        <section className="pb-[50px] border-b-2 border-slate-500" id="service">
            <div className="container mx-auto px-4 sm:px-6 lg:px-20">
                <div
                    className="mb-10 pt-[90px] text-center lg:text-left"
                    data-aos="fade-down-left"
                >
                    <h2 className="text-black mb-2 font-bold text-3xl sm:text-4xl w-full">
                        Service
                    </h2>
                    <p className="text-slate-600 text-[12px]">
                        Bu darsliklari sizning yuqori daraja olishingizga yordam
                        beradi
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-10">
                    <div
                        className="border shadow-md border-[#F3F6F6] bg-[#F3F6F6] px-4 py-6 rounded-md w-full h-auto lg:h-[420px] flex flex-col justify-between"
                        data-aos="flip-right"
                    >
                        <div>
                            <h2 className="mb-10 text-3xl sm:text-4xl text-black font-bold">
                                Boshlang’ich tushunchalar
                            </h2>
                            <div className="w-full mx-auto">
                                <p className="capitalize text-blue-500">
                                    nazariy bilimlar
                                </p>
                                <span className="text-green-300 font-medium">
                                    16 dars
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <img src={LogoOne} alt="card logo" />
                        </div>
                    </div>
                    <div
                        data-aos="flip-right"
                        className="border shadow-md border-[#F3F6F6] bg-[#F3F6F6] px-4 py-6 rounded-md w-full h-auto lg:h-[420px] flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="mb-10 text-3xl sm:text-4xl text-black font-bold">
                                O’rta
                            </h2>
                            <div className="w-full mx-auto">
                                <p className="capitalize text-blue-500">
                                    nazariy va Amaliy bilimlar
                                </p>
                                <span className="text-green-300 font-medium">
                                    23 dars
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <img src={LogoTwo} alt="card logo" />
                        </div>
                    </div>
                    <div
                        data-aos="flip-right"
                        className="border shadow-md border-[#F3F6F6] bg-[#F3F6F6] px-4 py-6 rounded-md w-full h-auto lg:h-[420px] flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="mb-10 text-3xl sm:text-4xl text-black font-bold">
                                Yuqori
                            </h2>
                            <div className="w-full mx-auto">
                                <p className="capitalize text-blue-500">
                                    Amaliy bilimlar
                                </p>
                                <span className="text-green-300 font-medium">
                                    16 dars
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <img src={LogoThree} alt="card logo" />
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-blue-400 rounded-md grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div
                        data-aos="flip-up"
                        className="flex justify-center lg:justify-start"
                    >
                        <img src={LogoFifte} alt="logo" />
                    </div>

                    <div className="mt-5" data-aos="flip-down">
                        <div className="mb-5">
                            <img src={ServIcons} alt="services sections icon" />
                        </div>
                        <h2 className="font-bold text-white text-xl sm:text-2xl lg:text-3xl leading-relaxed lg:leading-[50px] mb-5 lg:mb-[50px]">
                            Bizga ko'p yillardan beri kompaniyamizga ishonch
                            bildirganlar talaygina
                        </h2>

                        <button className="px-6 py-2 bg-[#3375FF] text-white text-xl rounded-full hover:bg-transparent hover:scale-125 duration-700 transition-all">
                            Bog’lanish
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
