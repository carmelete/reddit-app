import React, { useEffect } from 'react';
import logo from '../../assets/images/reddit-logo.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../features/reddit/redditSlice';

export function Header() {
  const [searchTermlocal, setSearchTermLocal] = useState('');
  const searchTerm = useSelector((state) => state.reddit.searchTerm);
  const dispatch = useDispatch();

  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
  };

  useEffect(() => {
    setSearchTermLocal(searchTerm);
  }, [searchTerm]);

  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchTermlocal));
  };

  return (
    <div className="flex h-16 shadow-lg">
      <div className="flex items-center w-4/12 h-full" >
        <img className="block w-auto h-10 ml-16 mr-2" src={logo} alt="logo"/>
        <p className="font-bold">
          <span className="text-orange-400">Reddit</span>Minimal
        </p>
      </div>
      <form
        className="flex items-center w-4/12"
        onSubmit={onSearchTermSubmit}
      >
        <input
          type="text"
          className="w-full px-4 py-1 mr-2 bg-gray-100 rounded-md"
          placeholder="Search"
          onChange={onSearchTermChange}
          value={searchTermlocal}
        />
        <button
          type="submit"
          className="mb-1"
          onSubmit={onSearchTermSubmit}
        >
          <i className="text-xl bi bi-search"></i>
        </button>
      </form>
    </div>
  );
}
