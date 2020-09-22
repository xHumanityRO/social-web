import React from 'react';

const StartPage = (props) => {
    const path = window.location.pathname;
    const userId = path.split('/').pop();
    return (<div>
        ------Start page------
        userId : {userId}
    </div>)

}

export default StartPage;