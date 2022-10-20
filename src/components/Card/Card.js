import React from 'react';

export function Card () {
    return (
        <article className="flex justify-between w-9/12 mx-4 my-4 border border-gray-200 rounded-md shadow-lg">
                <section className="flex flex-col items-center w-1/12 mt-4">
                    <button type="button">
                        <i class="bi bi-file-arrow-up text-3xl text-gray-600"></i>
                    </button>
                    <p className="mt-4 mb-2 text-sm font-bold text-gray-600">35.8</p>
                    <button type="button">
                        <i class="bi bi-file-arrow-down text-3xl text-gray-600"></i>
                    </button>
                </section>
                <section className="flex flex-col w-11/12 mt-4 mr-4">
                    <div>
                        <p className="font-bold text-left" >Little kitty goes strong to esteroids</p>
                        <img src="http://placekitten.com/600/300" className="w-full my-4 rounded-md" alt="little kitty" />
                        <hr className="mb-3 decoration-gray"/>
                    </div>
                    <footer className="flex items-center justify-between mb-4">
                        <span className="text-xs">Posted by <span className="font-bold text-blue-700">Carmen</span></span>
                        <span className="text-xs">7 hours ago</span>
                        <span className="flex items-center" >
                            <button type="button">
                                <i className="text-xl bi bi-chat-left"></i>
                            </button>
                            <p className="ml-2 text-xs" >689</p>
                        </span>
                    </footer>
                </section>
        </article>
    )
}