import React from "react";

export function Subreddits() {
    return (
        <article className="h-full p-4 mt-4 mr-4 text-left border border-gray-300 rounded-md shadow-lg">
            <h2 className="mb-2 text-xl font-bold">Subreddits</h2>
            <ul>
                <li>
                    <button type="button" className="p-2 font-bold text-gray-600 hover:bg-gray-200 active:bg-blue-400">
                        <i class="bi bi-circle text-2xl mr-2"></i>
                        Home
                    </button>
                </li>
            </ul>
        </article>
    )
}
