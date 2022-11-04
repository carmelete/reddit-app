import React from 'react';
import { formatDistance, fromUnixTime } from 'date-fns';

export function Card (props) {
    const getTimeAgo = formatDistance(
        new Date(fromUnixTime(props.post.created)),
        new Date(),
        {
            includeSeconds: true,
            addSuffix: true,
        }
    )

    return (
        <article className="flex justify-between mx-4 my-4 border-2 border-white rounded-md shadow-lg w-12/12 min-h-[10rem]">
                <section className="flex flex-col items-center w-1/12 mt-4">
                    <button type="button">
                        <i className="text-3xl text-gray-600 bi bi-file-arrow-up hover:text-green-400 active:text-green-600"></i>
                    </button>
                    <p className="mt-4 mb-2 text-sm font-bold text-gray-600">{props.post.score}</p>
                    <button type="button">
                        <i className="text-3xl text-gray-600 bi bi-file-arrow-down hover:text-red-400 active:text-red-600"></i>
                    </button>
                </section>
                <section className="flex flex-col w-11/12 mt-4 mr-4">
                    <div>
                        <p className="font-bold text-left" >{props.post.title}</p>
                        <img src={props.post.url} className="w-full my-4 rounded-md" alt="" />
                        <hr className="mb-3 decoration-gray"/>
                    </div>
                    <footer className="flex items-center justify-between mb-4">
                        <span className="text-xs">Posted by <span className="font-bold text-blue-700">{props.post.author}</span></span>
                        <span className="text-xs">{getTimeAgo}</span>
                        <span className="flex items-center" >
                            <button type="button" className="w-8 hover:bg-gray-100">
                                <i className="text-xl bi bi-chat-left"></i>
                            </button>
                            <p className="ml-2 text-xs" >{props.post.num_comments}</p>
                        </span>
                    </footer>
                </section>
        </article>
    )
}

export default Card;
