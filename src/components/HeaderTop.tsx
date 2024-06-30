import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import "animate.css";

const HeaderTop = () => {
    return (
        <div className="border-b border-gray-200 hidden sm:block">
            <div className="container py-4">
                <div className=" flex justify-between items-center">
                    <div className="hidden lg:flex gap-1">
                        <div className="header_top_icon_wrapper">
                            <BsFacebook />
                        </div>
                        <div className="header_top_icon_wrapper">
                            <BsTwitter />
                        </div>
                        <div className="header_top_icon_wrapper">
                            <BsInstagram />
                        </div>
                        <div className="header_top_icon_wrapper">
                            <BsLinkedin />
                        </div>
                    </div>
                    <div className="text-gray-500 text-[12px] ">
                        <h1 className="animate__animated animate__flash animate__slow	2s animate__infinite	infinite">
                            <b>FREE SHIPPING</b> THIS WEEK ORDER -$55
                        </h1>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <b>
                            <FaPhoneAlt />
                        </b>
                        <p>+8801711111</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
