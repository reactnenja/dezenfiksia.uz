// import React from "react";
// import ArrowTop from "../../../assets/arrow-top.svg";

// import BackOne from "../../../assets/bg-1.png";
// import BackTwo from "../../../assets/bg-2.png";
// import BackThree from "../../../assets/bg-3.png";

// import HeroImage from "../../../assets/hero-img.png";
// const Hero = () => {
//     return (
//         <section className="py-[152px] w-full h-auto">
//             <div className="container mx-auto px-20">
//                 <div className="flex justify-between  lg:flex-row flex-col">
//                     <div>
//                         <h1 className="text-6xl text-[#3375FF] mb-8 leading-[72px] font-bold">
//                             Dizenfeksiya <br /> xizmati{" "}
//                         </h1>
//                         <div className="flex justify-between items-start w-[680px] h-[300px]">
//                             <p className="text-[#676D83] w-[650px] leading-[30px]">
//                                 Bizning ko’p yillardan beri o’z faoliyatini olib
//                                 kelayotgan kompaniyamiz Mijozlarimiz bizdan
//                                 mamnun
//                             </p>
//                             <div className="relative w-[400px] top-0 left-[50px] z-0">
//                                 <img
//                                     src={BackOne}
//                                     className="absolute top-[-50px] left-0 "
//                                     alt="web site of images"
//                                 />
//                                 <img
//                                     src={BackTwo}
//                                     className="absolute top-[-30px] left-[15px] w-[150px] h-[150px] d-block right-[20px]"
//                                     alt="web site of images"
//                                 />{" "}
//                                 <img
//                                     src={BackThree}
//                                     className="absolute top-[-56px] left-[60px]  right-0 w-[240px] h-[240px]"
//                                     alt="web site of images"
//                                 />
//                             </div>
//                         </div>

//                         <div className="flex gap-6">
//                             <button className="border-2 border-[#3375FF] p-2 rounded-full w-[200px] bg-[#3375FF] text-white ">
//                                 Bog’lanish
//                             </button>{" "}
//                             <a
//                                 href="#"
//                                 className="border-2 w-[80px] border-slate-200 p-2 hover:scale-125 d-block duration-500 transition-all hover:[#3375FF] rounded-full flex justify-center items-center  hover:border-[#3375FF]"
//                             >
//                                 <img src={ArrowTop} alt="link of contact" />
//                             </a>
//                         </div>
//                     </div>

//                     <div>
//                         <img
//                             src={HeroImage}
//                             className="w-[550px] h-[540px]"
//                             alt="website image"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;
import React from "react";
import { useTranslation } from "react-i18next";
import ArrowTop from "../../../assets/arrow-top.svg";
import BackOne from "../../../assets/bg-1.png";
import BackTwo from "../../../assets/bg-2.png";
import BackThree from "../../../assets/bg-3.png";
import HeroImage from "../../../assets/hero-img.png";

const Hero = () => {
    const { t } = useTranslation();
    return (
        <section className="py-[72px] lg:py-[152px] w-full h-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-20">
                <div className="flex flex-col-reverse lg:flex-row justify-between items-center ">
                    <div className="text-center lg:text-left lg:w-1/2">
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl text-[#3375FF] mb-8 leading-tight lg:leading-[72px] font-bold">
                            {t("dizenfeksiya")} <br /> {t("xizmati")}
                        </h1>
                        <div className="flex flex-col lg:flex-row justify-between items-start w-full lg:w-[680px] h-auto lg:h-[300px]">
                            <p className="text-[#676D83] w-full lg:w-[650px] mb-2 lg:mb-0 leading-[30px]">
                                {t(
                                    "Bizning kop yillardan beri oz faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan  mamnun"
                                )}
                            </p>
                            <div className="relative w-full lg:w-[400px] py-4 mt-8 lg:mt-0 max-lg:mb-20">
                                <img
                                    src={BackOne}
                                    className="absolute top-[-50px] max-lg:right-2 left-0"
                                    alt="web site of images"
                                />
                                <img
                                    src={BackTwo}
                                    className="absolute top-[-30px] max-lg:right-2 left-[15px] w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]"
                                    alt="web site of images"
                                />
                                <img
                                    src={BackThree}
                                    className="absolute top-[-56px] max-lg:right-2 left-[60px] w-[150px] h-[150px] sm:w-[240px] sm:h-[240px]"
                                    alt="web site of images"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="border-2 max-lg:p-4  max-lg:hover:scale-105 max-lg:duration-500 border-[#3375FF] p-2 rounded-full w-full sm:w-[200px] bg-[#3375FF] text-white">
                                {t("Bog’lanish")}
                            </button>
                            <a
                                href="#"
                                className="border-2 max-lg:p-4 max-lg:hover:scale-105 max-lg:duration-500   w-full sm:w-[80px] border-slate-200 p-2 hover:scale-125 transition-all duration-500  rounded-full flex justify-center items-center hover:border-[#3375FF]"
                            >
                                <img src={ArrowTop} alt="link of contact" />
                            </a>
                        </div>
                    </div>
                    <div className="mb-8 lg:mb-0">
                        <img
                            src={HeroImage}
                            className="w-full lg:w-[550px] h-auto lg:h-[540px]"
                            alt="website image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
