import React, { useState } from "react";
import BgAbout from "../../../assets/bg-about.png";
import CardImageOne from "../../../assets/card-1.svg";
import CardImageTwo from "../../../assets/card-2.svg";
import CardImageThree from "../../../assets/card-3.svg";

const About = () => {
    // Define the initial state using useState hook
    const [dataCard, setDataCard] = useState([
        {
            images: CardImageOne,
            title: "Tezda xizmat ko’rsatish",
            text: "Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
        },
        {
            images: CardImageTwo,
            title: "Yetuk mutahasislaimiz",
            text: "Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
        },
        {
            images: CardImageThree,
            title: "Sizga maqul vaqtda",
            text: "Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
        },
    ]);

    return (
        <div className="py-[50px]" id="about">
            <div className="container mx-auto px-20">
                <h1 className="pt-[50px] text-4xl font-bold mb-10 max-sm:text-xl  max-md:text-center max-md:text-3xl ">
                    Avfzalliklarimiz
                </h1>
                <hr className="bg-slate-400 mb-10 border-2" />
                <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 max-md:gap-5 mb-10">
                    {dataCard.map((item, index) => (
                        <div
                            key={index}
                            className="hover:bg-white hover:scale-125 p-4 hover:border rounded-md transition-all duration-300 max-sm:border cursor-pointer"
                        >
                            <img
                                src={item.images}
                                alt={item.title}
                                className="w-[60px] mb-4"
                            />
                            <h2 className="text-xl font-bold mt-2 mb-4">
                                {item.title}
                            </h2>
                            <p className="text-gray-600 font-thin">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
                <div
                    style={{
                        backgroundImage: `url(${BgAbout})`,
                    }}
                    className="w-full h-[600px] bg-cover flex justify-end items-center"
                >
                    <div className="w-[350px] mr-[120px]">
                        <h3 className="text-3xl w-[350px] font-bold text-white mb-3">
                            Klapa va zararli hashorot endi yo’q deb hisoblang
                            !!!
                        </h3>
                        <p className="mb-3 text-white font-thin ">
                            Bizning ko’p yillardan beri o’z faoliyatini olib
                            kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun
                        </p>
                        <button className="transition-all duration-300 p-2 bg-[#3375FF] rounded-full text-white hover:scale-110 hover:bg-transparent border-2 border-[#3375FF] w-[200px]">
                            Bog’lanish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
