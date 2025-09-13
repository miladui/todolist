import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-8xl text-white font-bold mb-4">404</h1>
            <p className="text-lg text-[#ffffffcc] mb-6">صفحه مورد نظر یافت نشد.</p>
            <Link to="/" className="text-white bg-base-color-two text-[13px] px-5 py-2 rounded-xl">بازگشت به صفحه اصلی</Link>
        </div>
    );
}

export default NotFound;


