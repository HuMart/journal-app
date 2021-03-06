import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {

    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch( startLogout() );
    }

  return (
    <aside className='journal__main-sidebar'>
        <div className='journal__sidebar-navbar'>
            <h3 className="mt-5">
                <i className='far fa-moon' />
                <span> Hugo</span>
            </h3>

            <button 
                className="btn"
                onClick={ handleLogOut }
            >
                Logout
            </button>
                
        </div>

        <div className='journal__new-entry'>
            <i className='far fa-calendar-plus fa-5x'></i>
            <p className='mt-5'>New Entry</p>
        </div>
        <JournalEntries />
    </aside>
 )
}
