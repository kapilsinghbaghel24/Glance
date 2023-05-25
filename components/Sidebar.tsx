import { useState } from "react";
import Link from "next/link";

import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import Discover from "./Discover";
import SuggestedAccounts from "./SuggestedAccounts";
import Footer from "./Footer";


const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(true);

    const normalLink = 'flex items-center justify-center gap-3 hover:bg-primary p-3 xl:justify-start cursor-pointer font-semibold text-[#f51997]'

    return (
        <div>
            <div
                onClick={() => setShowSidebar((prev) => !prev)}
                className="block xl:hidden m-2 ml-4 mt-3 text-xl">
                {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
            </div>
            <div>
                {showSidebar && (
                    <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
                        <div className="xl:border-b-2 border-gray-200 xl:pb-4 items-center justify-center">
                            <Link href="/">
                                <div className={normalLink}>
                                    <p className="text-2xl">
                                        <AiFillHome />
                                    </p>
                                    <span className="hidden xl:block">For you</span>
                                </div>
                            </Link>
                        </div>
                        {true && (
                            <div className="px-2 py-4 hidden xl:block">
                                <p className="text-gray-400" >Log in to like and comment on videos</p>
                                <div onClick={() =>{}} className="pr-4">
                                    <button className="bg-white text-lg text-[#f51997] border-[1px] border-[#f5e1997] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-white hover:bg-[#f51997] cursor-pointer">Log in</button>
                                </div>
                            </div>
                        )}
                        <Discover />
                        <SuggestedAccounts />
                        <Footer />
                    </div>

                )}
            </div>
        </div>
    );
}

export default Sidebar;