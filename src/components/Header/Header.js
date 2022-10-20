import React from 'react';
import logo from '../../assets/images/reddit-logo.png';

export function Header() {

    return (
      <div className="flex h-16 shadow-lg">
        <div className="flex items-center w-4/12 h-full" >
          <img className="block w-auto h-10 ml-16 mr-2" src={logo} />
          <p className="font-bold">
            <span className="text-orange-400">Reddit</span>Minimal
          </p>
        </div>
        <form className="flex items-center w-4/12" >
            <input type="text" className="w-full px-4 py-1 mr-2 bg-gray-100 rounded-md" placeholder="Search"/>
            <button type="submit" className="mb-1">
                <i className="text-xl bi bi-search"></i>
            </button>
        </form>
     </div>
    );
  }
