import React from "react";

export function Subreddits() {
    return (
        <article className="flex flex-col p-4 mt-4 mr-4 text-left border border-gray-300 rounded-md shadow-lg h-12/12">
            <h2 className="mb-2 text-xl font-bold h-1/12">Subreddits</h2>
            <ul className="flex flex-col h-11/12">
                <li>
                    <button type="button" className="w-full p-2 font-bold text-left text-gray-600 hover:bg-gray-100 active:bg-blue-100 active:border-l-4 active:border-l-blue-700 active:text-blue-700">
                        <i className="mr-2 text-2xl bi bi-circle"></i>
                        Home
                    </button>
                </li>
                <li>
                    <button type="button" className="w-full p-2 font-bold text-left text-gray-600 hover:bg-gray-100 active:bg-blue-100 active:border-l-4 active:border-l-blue-700 active:text-blue-700">
                        <i className="mr-2 text-2xl bi bi-circle"></i>
                        Home
                    </button>
                </li>
                <li>
                    <button type="button" className="w-full p-2 font-bold text-left text-gray-600 hover:bg-gray-100 active:bg-blue-100 active:border-l-4 active:border-l-blue-700 active:text-blue-700">
                        <i className="mr-2 text-2xl bi bi-circle"></i>
                        Home
                    </button>
                </li>
            </ul>
        </article>
    )
}
