import { useState } from "react";
import Link from "next/link";

import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import Discover from "./Discover";
import SuggestedAccounts from "./SuggestedAccounts";
import Footer from "./Footer";


const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(true);

    const userProfile = false;

    const normalLink = 'flex items-center justify-center gap-3 hover:bg-primary p-3 xl:justify-start cursor-pointer font-semibold text-[#f51997] rounded'

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