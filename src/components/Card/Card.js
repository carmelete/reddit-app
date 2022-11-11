import React, { useState } from 'react';
import { formatDistance, fromUnixTime } from 'date-fns';
import { Comment } from '../Comments/Comments';

export function Card (props) {
    const getTimeAgo = formatDistance(
        new Date(fromUnixTime(props.post.created)),
        new Date(),
        {
            includeSeconds: true,
            addSuffix: true,
        }
    )

    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }

    const [voteValue, setVoteValue] = useState(0);

    const { post, onToggleComments } = props;

    const onHandleVote = (newValue) => {
        if(newValue === voteValue) {
            setVoteValue(0);
        } else if(newValue === 1) {
            setVoteValue(1);
        } else {
            setVoteValue(-1);
        }
    };

    const renderUpVote = () => {
        if(voteValue === 1) {
            return <i className="text-3xl text-green-600 bi bi-file-arrow-up"></i>
        }
        return <i className="text-3xl text-gray-600 bi bi-file-arrow-up hover:text-green-400"></i>
    };

    const renderDownVote = () => {
        if(voteValue === -1) {
            return <i className="text-3xl text-red-600 bi bi-file-arrow-down"></i>
        }
        return <i className="text-3xl text-gray-600 bi bi-file-arrow-down hover:text-red-400"></i>
    };

    const renderComments = () => {
        if(post.errorComments) {
            return (
                <div>
                    <h3>Error loading comments</h3>
                </div>
            );
        }

        if(post.loadingComments) {
            return (
                <div>

                </div>
            );
        }
        if(post.showingComments) {
            return (
                <div>
                    {post.comments.map((comment) => (
                        <Comment
                            comment={comment}
                            key={comment.id}
                        />
                    ))}
                </div>
            );
        }

        return null;
    }

    return (
        <article className="flex justify-between mx-4 my-4 border-2 border-white rounded-md shadow-lg w-12/12 min-h-[10rem]">
                <section className="flex flex-col items-center w-1/12 mt-4">
                    <button
                        type="button"
                        onClick={() => onHandleVote(1)}
                    >
                        {renderUpVote()}
                    </button>
                    <p className=
                    {
                        `mt-4 mb-2 text-sm font-bold text-gray-600
                        ${voteValue === 1 && "text-green-600"}
                        ${voteValue === -1 && "text-red-600"}`
                    }
                    >
                        {kFormatter(props.post.score)}
                    </p>
                    <button
                        type="button"
                        onClick={() => onHandleVote(-1)}
                    >
                        {renderDownVote()}
                    </button>
                </section>
                <section className="flex flex-col w-11/12 mt-4 mr-4">
                    <div>
                        <p className="font-bold text-left" >{props.post.title}</p>
                        <img src={props.post.url} className="w-full my-4 rounded-md" alt="" />
                        <hr className="mb-3 decoration-gray"/>
                    </div>
                    <footer className="flex items-center justify-between mb-4">
                        <span className="text-xs">Posted by <span className="font-bold text-orange-500">{props.post.author}</span></span>
                        <span className="text-xs">{getTimeAgo}</span>
                        <span className="flex items-center" >
                            <button
                                type="button"
                                className={`w-8 hover:bg-gray-100 ${props.post.showingComments && ""}`}
                                onClick={() => onToggleComments(props.post.permalink)}
                            >
                                <i className={`text-xl bi bi-chat-left ${post.showingComments && "text-orange-500"}`}></i>
                            </button>
                            <p className="ml-2 text-xs" >{kFormatter(props.post.num_comments)}</p>
                        </span>
                    </footer>
                    {renderComments()}
                </section>
        </article>
    )
}

export default Card;
