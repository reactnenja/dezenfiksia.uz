import axios from "axios";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PeopleImages from "../../../assets/people.png";

const Contact = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: "",
        number: "+998",
        isChecked: false,
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const validateForm = () => {
        let errors = {};
        if (formData.name.trim() === "") {
            errors.name = t("Ismni kiriting");
        }
        if (formData.number === "+998") {
            errors.number = t("Raqamni kiriting");
        }
        return errors;
    };

    const handleBlur = () => {
        const errors = validateForm();
        setFormErrors(errors);
    };

    const sendMessages = (event) => {
        event.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            toast.error("❌ Iltimos, formani to'ldiring!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return;
        }

        const token = "6709473556:AAFmY515EeMkvfTGiEPJURuSXpvlP2067-4";
        const getMyID = "5503879246";
        const urlTelegram = `https://api.telegram.org/bot${token}/sendMessage`;

        axios
            .post(urlTelegram, {
                chat_id: getMyID,
                text: `Name: ${formData.name}\nNumber: ${formData.number}\nChecked: ${formData.isChecked}`,
            })
            .then((response) => {
                toast.success("🦄 Xabar muvaffaqiyatli yuborildi!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                setFormData({
                    name: "",
                    number: "+998",
                    isChecked: false,
                });
                setFormErrors({});
            })
            .catch((error) => {
                toast.error("❌ Xabar yuborishda xatolik!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            });
    };

    return (
        <div className="w-full py-12" id="contact">
            <div className="container mx-auto px-4 lg:px-20">
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    limit={10}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                <div className="bg-blue-400 flex flex-col lg:flex-row py-8 px-6 lg:py-16 lg:px-10 rounded-md">
                    {/* Form Section */}
                    <div className="border-white border-2 rounded-md bg-white p-4 w-full lg:w-[456px] h-auto lg:h-[454px] mb-8 lg:mb-0 lg:mr-8">
                        <form onSubmit={sendMessages}>
                            <div className="mb-6 lg:mb-10">
                                <h3 className="font-bold font-sans capitalize text-xl lg:text-3xl text-black">
                                    {t("Malumotingizni qoldiring")}
                                </h3>
                            </div>

                            <div className="mb-4 py-[.7rem] lg:mb-5">
                                <input
                                    type="text"
                                    placeholder={t("Ism")}
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full bg-[#F2F2F2] placeholder:text-black p-3 rounded-md outline-none"
                                />
                                {formErrors.name && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {formErrors.name}
                                    </div>
                                )}
                            </div>
                            <div className="mb-4 py-[.7rem] lg:mb-5">
                                <input
                                    type="text"
                                    defaultValue="+998"
                                    id="number"
                                    name="number"
                                    value={formData.number}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full bg-[#F2F2F2] p-3 rounded-md outline-none"
                                />
                                {formErrors.number && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {formErrors.number}
                                    </div>
                                )}
                            </div>
                            <div className="mb-4 lg:mb-5 flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    id="checked"
                                    name="isChecked"
                                    checked={formData.isChecked}
                                    onChange={handleChange}
                                    className="w-[20px] h-[20px]"
                                />
                                <label htmlFor="checked">
                                    {t("Maxfiylik siyosati")}
                                </label>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    type="submit"
                                    className="w-full p-3 bg-black hover:bg-transparent duration-500 transition-all hover:text-black hover:scale-105 rounded-md text-white"
                                >
                                    {t("Yozilish")}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="lg:w-full flex flex-col lg:flex-row lg:justify-end items-center lg:items-start">
                        <div className="text-center lg:text-right mb-6 lg:mb-0 lg:mr-6">
                            <h3 className="text-white text-lg lg:text-xl font-bold">
                                {t(
                                    "Bizga kop yillardan beri kompaniyamizga ishonch bildirganlar talaygina"
                                )}
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
