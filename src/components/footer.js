import React from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/img/logo.png"
import instagram from "../assets/img/instagram-svgrepo-com.svg"
import facebook from "../assets/img/facebook-svgrepo-com.svg"
import linkedin from "../assets/img/linkedin-svgrepo-com.svg"
import youtube from "../assets/img/youtube-svgrepo-com.svg"

const Footer = () => {
    return (
        <div className="flex flex-col mt-[2rem]">
            <footer className="bg-base-color-two text-white ">
                <div className="c-container mx-auto">
                    <div className="container mx-auto  flex justify-around max-[900px]:flex-col max-[900px]:px-[12px] max-[900px]:gap-y-[3rem] mt-20 mb-20">
                        <div className="head min-[901px]:hidden flex w-full justify-center">
                            <Link to="/" className="logo">
                                <img src={logo} alt="Logo" width={100} height={100}/>
                            </Link>
                        </div>
                        <div className="div1 w-1/4 max-[900px]:w-full flex  max-[900px]:mr-0 max-[900px]:items-center flex-col mr-[30px]">
                            <div className="head max-[900px]:text-[20px]">درباره تسکینو</div>
                            <div className="bottom pt-3 max-[900px]:text-center text-justify leading-[24px] text-[13px]">برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
                        </div>
                        <div className="div2 w-2/4  flex flex-col items-center max-[900px]:hidden text-center">
                            <div className="head">
                                <a href="" className="logo w-[18%]">
                                    <img src={logo} alt="Logo" width={75} height={75}/>
                                </a>
                            </div>
                            <div className="head flex flex-row pt-3 text-[14px] items-center justify-center gap-2 text-center">

                                <a href="" className="logo w-[18%]">
                                    <img src={instagram} width={40} height={40} alt="insta"/>
                                </a>
                                <a href="" className="logo w-[18%]">
                                    <img src={facebook} width={40} height={40} alt="insta"/>

                                </a>
                                <a href="" className="logo w-[18%]">
                                    <img src={linkedin} width={40} height={40} alt="insta"/>

                                </a>
                                <a href="" className="logo w-[18%]">
                                    <img src={youtube} width={40} height={40} alt="insta"/>
                                </a>

                            </div>
                            <div className="bottom pt-2 text-[14px]">در شبکه های اجتماعی با تسکینو همراه باشید!</div>
                        </div>
                        <div className="div3 w-1/4 max-[900px]:w-full max-[900px]:items-center flex flex-col">
                            <div className="head">دسترسی سریع</div>
                            <Link to="/" className="pt-2 link text-gray-c text-[13px] hover:text-white">صفحه اصلی</Link>
                            <Link to="/aboutus" className="link text-gray-c text-[13px] hover:text-white">درباره ما</Link>
                            <Link to="/rules" className="pt-1 link text-gray-c text-[13px] hover:text-white">قوانین و مقررات</Link>
                            <Link to="/tasks" className="pt-1 link text-gray-c text-[13px] hover:text-white">مدیریت وظایف</Link>
                        </div>
                        <div className="div2 w-2/4 max-[900px]:w-full flex flex-col items-center min-[901px]:hidden text-center">
                            <div className="head max-[900px]:hidden">
                                <Link to="/" className="logo w-[18%]">
                                    <img src={logo} alt="Logo" width={75} height={75}/>
                                </Link>
                            </div>
                            <div className="head flex flex-row pt-3 text-[14px] items-center justify-center gap-2 text-center">

                                <Link to="" className="logo w-[18%]">
                                    <img src={instagram} width={40} height={40} alt="insta"/>
                                </Link>
                                <Link to="" className="logo w-[18%]">
                                    <img src={facebook} width={40} height={40} alt="insta"/>

                                </Link>
                                <Link to="" className="logo w-[18%]">
                                    <img src={linkedin} width={40} height={40} alt="insta"/>

                                </Link>
                                <Link to="" className="logo w-[18%]">
                                    <img src={youtube} width={40} height={40} alt="insta"/>
                                </Link>

                            </div>
                            <div className="bottom pt-2 text-[14px]">در شبکه های اجتماعی با تسکینو همراه باشید!</div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>

    );
};

export default Footer;