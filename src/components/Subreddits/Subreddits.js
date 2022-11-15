import React from "react";
import { useSelector } from "react-redux";
import { selectSubreddits } from "../../features/reddit/subRedditSlice";
import { Subreddit } from "./Subreddit/Subreddit";

export function Subreddits() {
    const subreddits = useSelector(selectSubreddits);

    return (
        <article className="flex flex-col p-5 mt-4 mr-4 text-left border-2 border-white rounded-md shadow-2xl h-12/12">
            <h2 className="mb-2 text-2xl font-bold text-gray-700 h-1/12">Subreddits</h2>
            <ul className="flex flex-col h-11/12">
                {subreddits.map((subreddit) => (
                    <Subreddit
                        key={subreddit.id}
                        subreddit={subreddit}
                    />
                ))}
            </ul>
        </article>
    )
}
