import React, { type ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router";
import { setTheme } from "../slices/app/appSlice";

const Header = () => {

    const dispatch = useDispatch();

    const selectHandler = (e: any) => {
        const { value } = e.target;
        dispatch(setTheme(value));
    }

    return (
        <>
            <div className="px-6 max-w-7xl mx-auto app-header flex gap-4 items-center">
                <div>Logo</div>
                <div className="space-box grow"></div>
                <div className="flex gap-6 text-gray-700 text-lg font-medium">
                    <span className="cursor-pointer hover:text-[var(--color-text-100)]"><NavLink to={"/"} viewTransition
                        className={({ isActive }) =>
                            isActive ? 'border-b-2 text-[var(--color-text-50)]' : ''
                        }
                    >Home</NavLink></span>
                    <span className="cursor-pointer hover:text-[var(--color-text-100)]"><NavLink to={"/about"} viewTransition
                        className={({ isActive }) =>
                            isActive ? 'border-b-2 text-[var(--color-text-50)]' : ''
                        }
                    >About</NavLink></span>
                    <span className="cursor-pointer hover:text-[var(--color-text-100)]"><NavLink to={"/contact"} viewTransition
                        className={({ isActive }) =>
                            isActive ? 'border-b-2 text-[var(--color-text-50)]' : ''
                        }
                    >Contact</NavLink></span>
                </div>
                <div className="flex items-center">
                    <div className="relative w-full max-w-sm">

                        <select
                            id="theme"
                            name="theme"
                            onChange={selectHandler}
                            className="block w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 pr-10 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                        >
                            <option value="theme1">Theme 1</option>
                            <option value="theme2">Theme 2</option>
                            <option value="theme3">Theme 3</option>
                        </select>

                        {/* Custom Dropdown Icon */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <svg
                                className="h-4 w-4 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.353a.75.75 0 011.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Header;