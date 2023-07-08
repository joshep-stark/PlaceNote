import React from 'react';

const Header = ({handleToggleDarkMode}) =>{
    return (
        <div className='header'>
            <h1>PlaceNote</h1>
            <button 
                onClick = {()=> 
                    handleToggleDarkMode(
                        (previousDarkmode) => !previousDarkmode
                    )
                }
                className='Save'>Toggle Mode</button>
        </div>
    );
};

export default Header;