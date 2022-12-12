import React from "react";

export const Navbar = () => {
    return (
        <div>
            <div className="flex flex-col w-full">
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
                <div className="divider"></div>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
            </div>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
            </div>
        </div>
    )
}
