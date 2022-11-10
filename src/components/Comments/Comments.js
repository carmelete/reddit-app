import React from "react";
import { formatDistance, fromUnixTime } from 'date-fns';

export function Comment (props) {
    const { comment } = props;

    const getTimeAgo = () => {
        if(comment.created === undefined) return;

        return formatDistance(
            new Date(fromUnixTime(comment.created)),
            new Date(),
            {
                addSuffix: true,
            }
        )
    }

    return (
        <div className="flex flex-col mb-4 bg-gray-100 shadow-sm">
            <div className="flex justify-between py-2 pl-8 pr-4">
                <p className="font-bold text-blue-700">{comment.author}</p>
                <p className="italic">
                    {getTimeAgo()}
                </p>
            </div>
            <div className="pb-2">
                <p className="ml-4 text-left">
                    {comment.body}
                </p>
            </div>
        </div>
    )
};
