import React, {useState} from "react";
import {useTasks} from "../context/TaskProvider";
import plus from "../assets/img/plus.svg"

export default function TaskManagement() {
    const {addTask , tasks , removeTask , editTask} = useTasks();
    const [text, setText] = useState("");
    const [open, setOpen] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
    const [editText, setEditText] = useState("");

    const handleOpen = (task) => {
        setEditingTask(task);
        setEditText(task.text);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setEditingTask(null);
        setEditText("");
    };

    const handleSave = () => {
        if (editingTask && editText.trim()) {
            editTask(editingTask.id, editText.trim());
            handleClose();
        }
    };


    return (
        <div className="p-6">
            <div className="c-container mx-auto">
                <div className="w-full flex justify-start">
                    <h1 className="text-[17px] text-white font-bold mb-4">مدیریت وظایف</h1>
                </div>
                <div className="bg-base-color-two w-[70%] max-[700px]:w-full max-[900px]:w-[90%] mt-[1rem] mx-auto p-5 rounded-[12px]">
                    <h1 className="text-[17px] text-white max-[600px]:text-[16px]  mb-4"> ایجاد وظیفه</h1>
                    <div className="flex max-[600px]:flex-wrap w-full gap-[12px]">
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="ایجاد وظیفه جدید...  "
                            className="p-2 border bg-[#222] border-none text-[14px] max-[600px]:w-full text-white outline-none rounded w-[80%]"
                        />
                        <button
                            onClick={() => {
                                addTask(text, "شخصی");
                                setText("");
                            }}
                            className="px-4 py-2 bg-green-700 flex items-center justify-center hover:scale-[1.03] text-white text-[13px] w-[10%] max-[600px]:w-auto rounded-xl"
                        >
                            <img width={19} src={plus} alt=""/>
                             شخصی
                        </button>

                        <button
                            onClick={() => {
                                addTask(text, "کاری");
                                setText("");
                            }}
                            className="px-4 py-1 bg-green-700 flex items-center max-[600px]:w-auto justify-center hover:scale-[1.03] text-white text-[13px] w-[10%] rounded-xl"
                        >
                            <img width={19} src={plus} alt=""/>
                            کاری
                        </button>
                    </div>
                </div>
                <h1 className="text-[16px] text-white font-bold border-[#ccc] border-b-[1px] mb-4 pb-3 mt-9">  وظیفه های ایجاد شده</h1>
                <div className="w-full grid grid-cols-3 max-[600px]:grid-cols-1 max-[900px]:grid-cols-2 gap-[1rem] mt-[2rem]">
                    {tasks.map((task)=>
                    <div key={task.id} className="w-full bg-base-color-two p-5 rounded-[5px] flex flex-col items-start">
                        <div className="bg-[#333] rounded-[4px] px-[8px] py-[4px] text-[#ccc] text-[12px]">
                            {task.category}
                        </div>
                        <p className="text-[13px] leading-[24px] mt-[8px] text-white">{task.text.substring(0 , 50)}</p>

                        <div className="w-full items-center  gap-[12px] grid grid-cols-2 mt-[12px]">
                            <button onClick={() => handleOpen(task)} className="w-full text-white text-[13px] h-[40px] bg-blue-900 hover:scale-[1.03]  rounded-[5px]">ویرایش وظیفه</button>
                            <button onClick={()=> removeTask(task.id)} className="w-full text-white text-[13px] hover:scale-[1.03] h-[40px] bg-red-900 rounded-[5px]">حذف وظیفه</button>
                        </div>
                    </div>
                    )}
                </div>

                {open && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-[#282530] border-2 border-[#666] rounded-xl p-6 w-96 max-w-md mx-4">
                            <h2 className="text-white text-[15px] font-bold mb-4">
                                ویرایش وظیفه
                            </h2>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    placeholder="متن جدید وظیفه..."
                                    className="w-full p-3 bg-[#222] text-[14px] border border-gray-600 text-white rounded-lg outline-none focus:border-[#ccc]"
                                />
                                <div className="flex gap-3 justify-end">
                                    <button
                                        onClick={handleClose}
                                        className="px-5 py-2 bg-gray-600 text-white rounded-lg hover:scale-[1.03] text-[13px] "
                                    >
                                        انصراف
                                    </button>
                                    <button
                                        onClick={handleSave}
                                        className="px-5 py-2 bg-green-700 text-white rounded-lg hover:scale-[1.03]  text-[13px] "
                                    >
                                        ذخیره
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}