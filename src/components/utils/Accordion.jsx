import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const AccordionItem = ({ title, content, isOpen, onClick, itemStyles }) => {
    return (
        <div className="border-b border-gray-300">
            <button
                className="w-full flex justify-between items-center p-4 lg:p-6 outline-none"
                style={{
                    backgroundColor: itemStyles.backgroundColor,
                    color: isOpen ? "black" : itemStyles.color,
                    borderRadius: itemStyles.borderRadius,
                    cursor: "pointer",
                    fontWeight: itemStyles.fontWeight,
                    fontSize: "1.125rem", // Responsive font size
                }}
                onClick={onClick}
            >
                <span className="font-semibold lg:font-bold">{title}</span>
                <div
                    className={`w-10 h-10 rounded-full flex justify-center items-center ${
                        isOpen
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-black"
                    }`}
                >
                    <svg
                        className="w-5 h-5 transform transition-transform duration-300"
                        style={{
                            transform: isOpen
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 lg:p-6 text-base text-gray-600">
                    {content}
                </div>
            )}
        </div>
    );
};

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const { t } = useTranslation();
    const items = [
        {
            title: t("Zararkunandalarni yo'k qilish kanday amalga oshirish?"),
            content: t(
                "Maxsus jihozlar yordamida insektitsidlar aerozolli tumanga aylanadi va devor qog'ozi, devor va taxta plitalari orasidagi eng kichik yoriqlarga, ko'rinmas hasharotlar uchun potentsial boshpana ga kiradi."
            ),
        },
        {
            title: t("Siz foida qanday vosita havflimi?"),
            content: t(
                "Preparatlar, uy hayvonlari va o'simliklar uchun hafli emas. Ammodan keyin khonani 40 daqiqa ventilatsiya qilish kerak."
            ),
        },
        {
            title: t(
                "Menga uyimni bolalarga tayorlashning kandaydir usuli kerakmi?"
            ),
            content: t(
                "Asosan, idish-tovoq va shaxsiy gigiena vositalarini izolyatsiya qilishingiz kerak. Davolash paytida uy hayvonlari ham izolyatsiya qilinishi kerak. Mebel va jihozlarni ko'chirishga hojat yo'q."
            ),
        },
    ];

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const itemStyles = {
        backgroundColor: "white",
        color: "#676D83",
        borderRadius: "0px",
        fontWeight: "700",
    };

    return (
        <div className="max-w-full lg:max-w-[85%] mx-auto">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                    itemStyles={itemStyles}
                />
            ))}
        </div>
    );
};

export default Accordion;
