import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import moment from 'moment-jalaali';
import logo from "../assets/img/logo.png"

const Header = () => {
    const [persianDate, setPersianDate] = useState('');

    useEffect(() => {
        const getPersianDate = () => {
            const now = moment();
            const persianDays = [
                'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'
            ];
            const persianMonths = [
                'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
                'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
            ];
            
            const dayOfWeek = now.day();
            const day = now.jDate();
            const month = now.jMonth();
            const year = now.jYear();
            
            return `${persianDays[dayOfWeek]}، ${day} ${persianMonths[month]} ${year}`;
        };

        setPersianDate(getPersianDate());
    }, []);

    return (
        <div>
            <div className=" w-full max-[900px]:hidden">
                <div className="c-container">
                    <nav className="navbar w-full  flex justify-between   items-center  bg-[#282530] h-[100px] rounded-[512px] relative top-[30px] px-[12px]">
                        <div className="flex w-[40%] items-center gap-[2rem]">
                            <div className="flex  gap-[1.5rem] items-center">
                                <Link className="text-white hover:text-[#e85f33] text-[13px]" to="/">صفحه اصلی</Link>
                                <Link className="text-white hover:text-[#e85f33] text-[13px]" to="/tasks">مدیریت وضایف</Link>
                                <Link className="text-white hover:text-[#e85f33] text-[13px]" to="/aboutus">درباره ما</Link>
                                <Link className="text-white hover:text-[#e85f33] text-[13px]" to="/rules">قوانین و مقرارت</Link>
                            </div>
                        </div>
                        <Link to="/" className="w-[20%] flex justify-center"><img src={logo} width={65} alt=""/></Link>
                        <div className="ml-3 w-[40%] flex justify-end">
                            <span className="text-white text-[14px]">{persianDate}</span>
                        </div>
                    </nav>
                </div>

            </div>
            <div className="w-full min-[901px]:hidden">
                <div className="bg-base-color-two h-[70px] rounded-b-[20px] w-full px-5 flex items-center justify-between">
                    <Link to="/" className="w-[20%] flex justify-center"><img src={logo} width={45} alt=""/></Link>
                    <div className="ml-3 w-[40%] flex justify-end">
                        <span className="text-white max-[600px]:text-[11px]">{persianDate}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;