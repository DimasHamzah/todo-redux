import {useState} from "react";

export default function ModalAddTodo({ isOpen, openModal, onCreateTodo }) {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    return (
        isOpen && (
            <div
                className={`transition-all duration-1000 ease-in-out mx-auto backdrop-blur overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full 
                ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div
                            className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Add Todo
                            </h3>
                            <button type="button"
                                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={openModal}
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className={'px-4'}>
                            <input type="text" placeholder={'your tile'}/>
                            <input type="text" placeholder={'description'}/>
                            <button onClick={openModal}>Submit</button>
                        </div>
                    </div>
            </div>
            </div>

        )
    )
}