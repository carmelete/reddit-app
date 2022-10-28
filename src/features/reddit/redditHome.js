import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit]);

    return (
        <div>

        </div>
    )
};
