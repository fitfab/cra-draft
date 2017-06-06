import React from 'react';

const Navigation = function(props){
    console.log('Navigation', props)
    return(
        <nav>
            <a href="/browse">Browse</a> <a href="/account">Account</a> <a href="/news">News</a>
        </nav>
    )
}

export default Navigation;
