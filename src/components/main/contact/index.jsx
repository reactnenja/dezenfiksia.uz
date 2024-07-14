// import React from "react";
// import PeopleImages from "../../../assets/people.png";

// const Contact = () => {
//     return (
//         <div className="w-full py-12" id="contact">
//             <div className="container mx-auto px-4 lg:px-20">
//                 <div className="w-full bg-blue-400 h-auto flex flex-col lg:flex-row py-8 px-6 lg:py-16 lg:px-10 rounded-md justify-between items-center">
//                     <div className="border-white border-2 rounded-md bg-white p-4 w-full lg:w-[456px] h-auto lg:h-[384px] mb-8 lg:mb-0">
//                         <form action="">
//                             <div className="mb-6 lg:mb-10">
//                                 <h3 className="font-bold font-sans capitalize text-2xl lg:text-3xl text-black">
//                                     Malumotingizni qoldiring
//                                 </h3>
//                             </div>

//                             <div className="mb-4 lg:mb-5">
//                                 <input
//                                     type="text"
//                                     placeholder="Ism"
//                                     className="w-full bg-[#F2F2F2] placeholder:text-black p-3 rounded-md outline-none"
//                                 />
//                             </div>
//                             <div className="mb-4 lg:mb-5">
//                                 <input
//                                     type="text"
//                                     value={"+998"}
//                                     className="w-full bg-[#F2F2F2] p-3 rounded-md outline-none"
//                                 />
//                             </div>
//                             <div className="mb-4 lg:mb-5 flex items-center gap-3">
//                                 <input
//                                     type="checkbox"
//                                     id="checked"
//                                     className="w-[20px] h-[20px]"
//                                 />{" "}
//                                 <label htmlFor="checked">
//                                     Maxfiylik siyosati
//                                 </label>
//                             </div>
//                             <div className="flex gap-3">
//                                 <button
//                                     type="submit"
//                                     className="w-full p-3 bg-black hover:bg-transparent duration-500 transition-all hover:text-black hover:scale-105 rounded-md text-white"
//                                 >
//                                     Yozilish
//                                 </button>
//                             </div>
//                         </form>
//                     </div>

//                     <div className="w-full lg:w-[700px] flex flex-col lg:flex-row justify-between items-center lg:items-end">
//                         <div className="text-center lg:text-right mb-6 lg:mb-0 lg:mr-6">
//                             <h3 className="text-white text-lg lg:text-xl font-bold">
//                                 Bizga ko'p yillardan beri kompaniyamizga ishonch
//                                 bildirganlar talaygina
//                             </h3>
//                         </div>
//                         <div className="flex justify-center lg:justify-end">
//                             <img
//                                 src={PeopleImages}
//                                 className="w-3/4 lg:w-[50%]"
//                                 alt="People Images"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;
import React from "react";
import PeopleImages from "../../../assets/people.png";

const Contact = () => {
    return (
        <div className="w-full py-12" id="contact">
            <div
                data-aos="zoom-in-left"
                className="container mx-auto px-4 lg:px-20"
            >
                <div className="bg-blue-400 flex flex-col lg:flex-row py-8 px-6 lg:py-16 lg:px-10 rounded-md">
                    {/* Form Section */}
                    <div
                        data-aos="zoom-in-up"
                        className="border-white border-2 rounded-md bg-white p-4 w-full lg:w-[456px] h-auto lg:h-[384px] mb-8 lg:mb-0 lg:mr-8"
                    >
                        <form action="">
                            <div className="mb-6 lg:mb-10">
                                <h3 className="font-bold font-sans capitalize text-2xl lg:text-3xl text-black">
                                    Malumotingizni qoldiring
                                </h3>
                            </div>

                            <div className="mb-4 lg:mb-5">
                                <input
                                    type="text"
                                    placeholder="Ism"
                                    className="w-full bg-[#F2F2F2] placeholder:text-black p-3 rounded-md outline-none"
                                />
                            </div>
                            <div className="mb-4 lg:mb-5">
                                <input
                                    type="text"
                                    value={"+998"}
                                    className="w-full bg-[#F2F2F2] p-3 rounded-md outline-none"
                                />
                            </div>
                            <div className="mb-4 lg:mb-5 flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    id="checked"
                                    className="w-[20px] h-[20px]"
                                />{" "}
                                <label htmlFor="checked">
                                    Maxfiylik siyosati
                                </label>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    type="submit"
                                    className="w-full p-3 bg-black hover:bg-transparent duration-500 transition-all hover:text-black hover:scale-105 rounded-md text-white"
                                >
                                    Yozilish
                                </button>
                            </div>
                        </form>
                    </div>

                    <div
                        data-aos="zoom-in-down"
                        className=" lg:w-full flex flex-col lg:flex-row lg:justify-end items-center lg:items-start"
                    >
                        <div className="text-center lg:text-right mb-6 lg:mb-0 lg:mr-6">
                            <h3 className="text-white text-lg lg:text-xl font-bold">
                                Bizga ko'p yillardan beri kompaniyamizga ishonch
                                bildirganlar talaygina
                            </h3>
                        </div>
                        <div className="flex justify-center lg:justify-end w-full lg:w-auto">
                            <img
                                src={PeopleImages}
                                className="w-full max-w-[300px] lg:max-w-[500px] h-auto"
                                alt="People Images"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
