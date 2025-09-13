import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import { useTasks } from "../context/TaskProvider";
import mainImg from "../assets/img/checklist.png"

const Home = () => {
    const {tasks, toggleTask} = useTasks();
    const [categoryFilter, setCategoryFilter] = useState("")
    const [completedFilter, setCompletedFilter] = useState("")
    const [stats, setStats] = useState({
        totalTasks: 0,
        workTasks: 0,
        personalTasks: 0
    })

    useEffect(() => {
        const totalTasks = tasks.length;
        const workTasks = tasks.filter(task => task.category === "کاری").length;
        const personalTasks = tasks.filter(task => task.category === "شخصی").length;
        
        setStats({
            totalTasks,
            workTasks,
            personalTasks
        });
    }, [tasks])

    return (
        <div>
            <main className="max-[900px]:px-[12px]">
                <div className="c-container mx-auto">
                    <div className="box1 border-[#ccc] pb-10 border-b-[1px] max-[900px]:flex-col max-[900px]:items-center flex justify-between w-full">
                        <div className="div2 min-[901px]:hidden w-2/4 max-[900px]:w-full flex justify-center">
                            <img src={mainImg} alt="mainImg"/>
                        </div>
                        <div className="div1 w-1/4 max-[900px]:w-full max-[900px]:mr-0 max-[900px]:mt-1 mr-8 mt-8">
                            <div className="flex flex-row gap-5 items-center mt-10">
                                <div className="col1 mr-4 max-[600px]:mr-1">
                                    <span className="text-white text-4xl max-[500px]:text-[20px] max-[800px]:font-bold max-[800px]:text-[23px]">تسکینو</span>
                                </div>
                                <div className="col2">
                                    <img
                                        src="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/logo-1.svg"
                                        alt="" width={200} height={150}/>
                                </div>
                            </div>
                            <div className="items-center mt-7">
                                <div className="col1 mr-8 max-[600px]:mr-3">
                                    <span className="text-white text-2xl max-[500px]:text-[16px] max-[800px]:text-[18px]">لورم  متن ساختگی</span>
                                </div>
                            </div>
                            <div className="items-center mt-3">
                                <div className="col1 mr-8 max-[600px]:mr-3">
                                    <p className="text-[#ffffffcc] text-[14px] leading-[24px] text-justify">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                    </p>
                                </div>
                            </div>
                            <div className="items-center mt-10">
                                <div className="col1 mr-8 max-[600px]:mr-3">
              <span className="text-white text-1xl">
                <Link to="/tasks">
                  <button type="button"
                          className="bg-[#e85f33] py-[12px] px-[2rem] rounded-[30px] transition-colors duration-1000 hover:bg-[#c03104]">

                    {`مدیریت وظیفه ها `}
                  </button>
                </Link>
              </span>
                                </div>
                            </div>
                        </div>
                        <div className="div2 max-[900px]:hidden w-2/4 max-[900px]:w-full flex justify-center">
                            <img src={mainImg} alt="mainImg"/>
                        </div>
                        <div className="div3 w-1/4 max-[900px]:w-full max-[900px]:flex flex-col items-center mt-10">
                            <div className="row1 max-[600px]:w-[70%] mx-auto flex items-center pt-10 gap-9 max-[600px]:text-[20px] text-2xl">
                                <div className="col1 text-[#e85f33] w-[20%] text-5xl max-[600px]:text-[35px]">
                                    {stats.totalTasks}+
                                </div>
                                <div className="col2 text-[#c8c8c9] text-[20px] w-[80%] max-[600px]:text-[19px]">
                                    تمامی وظیفه ها
                                </div>
                            </div>
                            <div className="row2 max-[600px]:w-[70%] mx-auto  flex items-center pt-10 gap-9 text-2xl">
                                <div className="col1 text-[#e85f33] w-[20%]  text-5xl max-[600px]:text-[35px]">
                                    {stats.workTasks}+
                                </div>
                                <div className="col2 text-[#c8c8c9] text-[20px] w-[80%] max-[600px]:text-[19px]">
                                    وظیفه های کاری
                                </div>
                            </div>
                            <div className="row3 max-[600px]:w-[70%] mx-auto flex items-center pt-10 gap-9 text-2xl">
                                <div className="col1 text-[#e85f33] w-[20%] text-5xl max-[600px]:text-[35px]">
                                    {stats.personalTasks}+
                                </div>
                                <div className="col2 text-[#c8c8c9] w-[80%] text-[20px] max-[600px]:text-[19px]">
                                    وظیفه های شخصی
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-tasks py-[1rem] w-full flex flex-col items-start">
                        <div className="flex w-full items-center max-[900px]:flex-col   justify-between">
                            <div className="title flex items-center gap-[12px]">
                            <span className="img-wrapper"><img decoding="async" width="30" height="30"
                                                               src="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/star-35x35.png"
                                                               className="attachment-35x35 size-35x35" alt=""
                                                               srcSet="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/star-35x35.png 35w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/star-150x150.png 150w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/star-50x50.png 50w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/star-45x45.png 45w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/star.png 181w"
                                                               sizes="(max-width: 35px) 100vw, 35px"/></span>
                                <h3 className="text-white text-[18px] max-[600px]:text-[16px] font-bold p-0 m-0">تمامی وظیفه ها</h3>
                            </div>
                    <div className="flex items-center gap-[12px] max-[900px]:mt-[1.5rem]">
                        <select value={categoryFilter} onChange={(e)=> setCategoryFilter(e.target.value)}
                                className="bg-[#282530] w-[180px] h-[40px] rounded-[512px] text-[#ffffffcc] text-[14px] text-center"
                                name="" id="">
                            <option disabled value="">انتخاب دسته بندی</option>
                            <option value="all">همه وظیفه ها</option>
                            <option value="work">وظیفه های کاری</option>
                            <option value="personal">وظیفه های شخصی</option>
                        </select>
                        <select value={completedFilter} onChange={(e)=> setCompletedFilter(e.target.value)}
                                className="bg-[#282530] w-[180px] h-[40px] rounded-[512px] text-[#ffffffcc] text-[14px] text-center"
                                name="" id="">
                            <option disabled value="">انتخاب وظیفه</option>
                            <option value="all">همه وظیفه ها</option>
                            <option value="completed">وظیفه های انجام شده</option>
                            <option value="pending">وظیفه های باقیمانده</option>
                        </select>
                    </div>
                        </div>
                        <div className="row-text mt-[1.5rem] pb-[12px] w-full flex justify-start border-b-[1px] border-[#f2f2f2]">
                            {(categoryFilter=== "" || categoryFilter=== "all") ? <h6 className="text-white font-bold text-[15px]">تمامی وظیفه ها</h6> : categoryFilter === "personal" ? <h6 className="text-white font-bold text-[15px]">وظیفه های  شخصی</h6> : categoryFilter === "work" &&  <h6 className="text-white font-bold text-[15px]">وظیفه های  کاری</h6>}
                        </div>
                        <div className="list w-full flex flex-col items-start gap-[14px] py-[1rem]">
                            {tasks.filter((task) => {
                                    // Category filter
                                    const categoryMatch =
                                        categoryFilter === "" || 
                                        categoryFilter === "all" ||
                                        (categoryFilter === "work" && task.category === "کاری") ||
                                        (categoryFilter === "personal" && task.category === "شخصی");
                                    
                                    // Completion filter
                                    const completionMatch = 
                                        completedFilter === "" || 
                                        completedFilter === "all" ||
                                        (completedFilter === "completed" && task.done) ||
                                        (completedFilter === "pending" && !task.done);
                                    
                                    return categoryMatch && completionMatch;
                                })
                                .map((task) => (
                                <div key={task.id} className="item w-full flex items-start justify-start gap-[12px] pl-[12px] relative pr-[1rem] bg-base-color-two rounded-[12px] py-[12px]">
                                    <div style={task.category ===  'کاری' ?  {background : "blue"} : {background: 'red'}} className="absolute right-[-4px] top-[16px] rounded-[50%]  w-[8px] h-[8px]"></div>
                                    <input
                                        className="w-5 h-5 max-[600px] rounded border-2 border-gray-400 bg-transparent text-blue-600 focus:ring-blue-500 focus:ring-2 cursor-pointer transition-all duration-200 hover:border-blue-500"
                                        type="checkbox"
                                        checked={task.done}
                                        onChange={() => toggleTask(task.id)}
                                    />
                                    <p className={`text-[14px] w-[90%] text-white transition-all duration-200 ${task.done ? 'line-through opacity-60' : ''}`}>{task.text}</p>

                                </div>
                            ))}


                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default Home;