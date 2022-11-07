import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSubreddits } from "../../features/reddit/subRedditSlice";
import { selectSelectedSubreddit, setSelectedSubreddit } from "../../features/reddit/redditSlice";

export function Subreddits() {
    const dispatch = useDispatch();

    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddits = useSelector(selectSelectedSubreddit);

    return (
        <article className="flex flex-col p-5 mt-4 mr-4 text-left border-2 border-white rounded-md shadow-2xl h-12/12">
            <h2 className="mb-2 text-2xl font-bold text-gray-700 h-1/12">Subreddits</h2>
            <ul className="flex flex-col h-11/12">
                {subreddits.map((subreddit) => (
                    <li
                        key={subreddit.id}
                        className="flex items-center text-sm font-bold text-left text-gray-500 border-l-4 border-transparent h-14 hover:bg-gray-100 active:bg-blue-100 active:border-l-4 active:border-l-blue-700 active:text-blue-700 hover:cursor-pointer"
                        onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
                    >
                        <div className="flex items-center w-full p-2 ">
                            <img
                                src={subreddit.icon_img || `https://api.adorable.io/avatars/25/${subreddit.display_name}`}
                                alt={`${subreddit.display_name}`}
                                className="w-8 h-auto mr-4 rounded-full"
                                style={{ border: `3px solid ${subreddit.primary_color}` }}
                            />
                            {subreddit.display_name}
                        </div>
                    </li>
                ))}
            </ul>
        </article>
    )
}
