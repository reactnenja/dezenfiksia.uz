import React from "react";
import { useTranslation } from "react-i18next";
import LogoOne from "../../../assets/ser-1.svg";
import LogoTwo from "../../../assets/ser-2.svg";
import LogoThree from "../../../assets/ser-3.svg";
import LogoFifte from "../../../assets/ser-4.png";
import ServIcons from "../../../assets/ser-icons-1.svg";

const Services = () => {
    const { t } = useTranslation();
    return (
        <section className="pb-[50px] border-b-2 border-slate-500" id="service">
            <div className="container mx-auto px-4 sm:px-6 lg:px-20">
                <div className="mb-10 pt-[90px] text-center lg:text-left">
                    <h2 className="text-black mb-2 font-bold text-3xl sm:text-4xl w-full">
                        {t("Service")}
                    </h2>
                    <p className="text-slate-600 text-[12px]">
                        {t(
                            "Bu darsliklari sizning yuqori daraja olishingizga yordam beradi"
                        )}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-7 mb-10">
                    <div className="border shadow-md border-[#F3F6F6] bg-[#F3F6F6] px-4 py-6 rounded-md w-full h-auto lg:h-[420px] flex flex-col justify-between">
                        <div className="mb-3">
                            <h2 className="mb-10 text-3xl sm:text-xl text-black font-bold sm:font-medium">
                                {t(
                                    "Dezinfektsiya - zararli mikroorganizmlarni yo'q qilish"
                                )}
                            </h2>
                            <div className="w-full mx-auto">
                                <p className="capitalize text-blue-500 ">
                                    {t(
                                        "Har qanday dezinfektsiyaning asosiy vazifasi infektsiyalar va kasalliklarga olib kelishi mumkin bo'lgan xavfli mikroorganizmlarni yo'q qilishdir. Dezinfektsiyalash choralari xonani mog'or, virus, qo'ziqorin va bakteriyalardan tozalaydi. Jarayon atrof-muhitni patogenlardan tozalaydi. Agar o'zingizni yomon his qilsangiz, o'zingizni hech qanday sababsiz charchagan yoki zaif his qilishingiz mumkin."
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <img src={LogoOne} alt="card logo" />
                        </div>
                    </div>
                    <div className="border shadow-md border-[#F3F6F6] bg-[#F3F6F6] px-4 py-6 rounded-md w-full h-auto lg:h-[420px] flex flex-col justify-between">
                        <div>
                            <h2 className="mb-10 text-3xl sm:text-xl text-black font-bold sm:font-medium">
                                {t(
                                    "Desineksatsiya - xasharotlarni yo'q qilish"
                                )}
                            </h2>
                            <div className="w-full mx-auto">
                                <p className="capitalize text-blue-500">
                                    {t(
                                        `Har qanday dezinfection asosy foydalanish infeksialar va olib olib kelishi mumkin bulgan havfli microorganism ywk qilishdir. Dezinfection ta'siri bush zhoyni mogor, virus, chiriyotgan va bakteriyadan tozalaidi. Fried atrofy-muchitis patogen organizmlardan tozalaidi.Agar o'zingizni emon his qilsangiz, charchok yoki sababsiz zaiflashsangiz kerak.`
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <img src={LogoTwo} alt="card logo" />
                        </div>
                    </div>
                    <div className="border shadow-md border-[#F3F6F6] bg-[#F3F6F6] px-4 py-6 rounded-md w-full h-auto lg:h-[420px] flex flex-col justify-between">
                        <div>
                            <h2 className="mb-10 text-1xl sm:text-xl text-black font-bold sm:font-medium">
                                {t(
                                    "Bizga kop yillardan beri kompaniyamizga ishonch  bildirganlar talaygina"
                                )}
                            </h2>
                            <div className="w-full mx-auto mb-3">
                                <p className="capitalize text-blue-500">
                                    {t(`Toshkentda derat sifatida kamiruvchilarni
                            yo'qotishga qaratiladigan kompleks
                            chora-tadbirlarning butun majmuasidir. aniqki,
                            kemiruvchilar juda qat'iy jonzotlar bo'lib, ular
                            turli xavfli xavf-xatarlarga dosh beradilar. Shuning
                            uchun ularni yo'q qilish uchun bir panel usullardan
                            foydalanish kerak. Derat joyda Toshkent shaharlarida
                            kemiruvchilar paydo boʻlgan koʻp qavmli uylar,
                            omborlar, doʻkonlar, umumiy ovkatlanish korxonalari
                            amalga oʻchiriladi.`)}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <img src={LogoThree} alt="card logo" />
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-blue-400 rounded-md grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="flex justify-center lg:justify-start">
                        <img src={LogoFifte} alt="logo" />
                    </div>

                    <div className="mt-5">
                        <div className="mb-5">
                            <img src={ServIcons} alt="services sections icon" />
                        </div>
                        <h2 className="font-bold text-white text-xl sm:text-2xl lg:text-3xl leading-relaxed lg:leading-[50px] mb-5 lg:mb-[50px]">
                            {t(
                                "Rasmiy kafolat - 1 yil. Biz jismoniy va yuridik shaxslarga xizmat ko'rsatamiz. Xizmatlar litsenziyalangan!"
                            )}
                        </h2>

                        <button className="px-6 py-2 bg-[#3375FF] text-white text-xl rounded-full hover:bg-transparent hover:scale-125 duration-700 transition-all">
                            {t("Boglanish")}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
