// import React, { useState } from "react";

// const AccordionItem = ({ title, content, isOpen, onClick, itemStyles }) => {
//     return (
//         <div style={{ borderBottom: "1px solid gray" }}>
//             <button
//                 className="max-lg:w-[50px]"
//                 style={{
//                     width: "100%",
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     padding: "2rem 1rem",
//                     outline: "none",
//                     backgroundColor: itemStyles.backgroundColor,
//                     color: isOpen ? "black" : itemStyles.color,
//                     borderRadius: itemStyles.borderRadius,
//                     cursor: "pointer",
//                     fontWeight: itemStyles.fontWeight,
//                     fontSize: "28px",
//                 }}
//                 onClick={onClick}
//             >
//                 <span
//                     className="max-lg:font-medium"
//                     style={{ fontWeight: "600" }}
//                 >
//                     {title}
//                 </span>
//                 <div
//                     style={{
//                         width: "44px",
//                         height: "44px",
//                         borderRadius: "50%",
//                         backgroundColor: isOpen ? "#1D68F9" : "#F2F2F2",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         color: isOpen ? "white" : "black",
//                     }}
//                 >
//                     <svg
//                         style={{
//                             width: "1.25rem",
//                             height: "1.25rem",
//                             transform: isOpen
//                                 ? "rotate(180deg)"
//                                 : "rotate(0deg)",
//                             transition: "transform 0.3s",
//                         }}
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M19 9l-7 7-7-7"
//                         />
//                     </svg>
//                 </div>
//             </button>
//             {isOpen && (
//                 <div
//                     style={{
//                         padding: "1rem",
//                         fontSize: "15px",
//                         color: "#676D83",
//                     }}
//                 >
//                     {content}
//                 </div>
//             )}
//         </div>
//     );
// };

// const Accordion = () => {
//     const [openIndex, setOpenIndex] = useState(null);

//     const items = [
//         {
//             title: "Kursdan nima topaman",
//             content:
//                 "Bu bir nonti kaypiday kapy darsga qatnasha olmasangiz, darsdan so‘ng guruhingizga zoom zapisi tashlab beriladi",
//         },
//         {
//             title: "Kursdan nima topaman",
//             content:
//                 "Bu bir nonti kaypiday kapy darsga qatnasha olmasangiz, darsdan so‘ng guruhingizga zoom zapisi tashlab beriladi",
//         },
//         {
//             title: "Kursdan nima topaman",
//             content:
//                 "Bu bir nonti kaypiday kapy darsga qatnasha olmasangiz, darsdan so‘ng guruhingizga zoom zapisi tashlab beriladi",
//         },
//     ];

//     const handleClick = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     const itemStyles = {
//         backgroundColor: "white", // Change this to your desired background color
//         color: "#676D83", // Change this to your desired text color
//         borderRadius: "0px", // Change this to your desired border radius
//         fontWeight: "700",
//     };

//     return (
//         <div style={{ maxWidth: "85%", margin: "0 auto" }}>
//             {items.map((item, index) => (
//                 <AccordionItem
//                     key={index}
//                     title={item.title}
//                     content={item.content}
//                     isOpen={openIndex === index}
//                     onClick={() => handleClick(index)}
//                     itemStyles={itemStyles}
//                 />
//             ))}
//         </div>
//     );
// };

// export default Accordion;
import React, { useState } from "react";

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

    const items = [
        {
            title: "Kursdan nima topaman",
            content:
                "Bu bir nonti kaypiday kapy darsga qatnasha olmasangiz, darsdan so‘ng guruhingizga zoom zapisi tashlab beriladi",
        },
        {
            title: "Kursdan nima topaman",
            content:
                "Bu bir nonti kaypiday kapy darsga qatnasha olmasangiz, darsdan so‘ng guruhingizga zoom zapisi tashlab beriladi",
        },
        {
            title: "Kursdan nima topaman",
            content:
                "Bu bir nonti kaypiday kapy darsga qatnasha olmasangiz, darsdan so‘ng guruhingizga zoom zapisi tashlab beriladi",
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
