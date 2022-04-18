import React from 'react';
import { withRouter } from 'react-router-dom'

const BackButton = ({ history }) => {
    return(
        <svg onClick={() => history.goBack()} className="post_back" width="30.655" height="49.644" viewBox="0 0 30.655 49.644"><path d="M39.245,49.811,20.3,30.822,39.245,11.833,33.412,6,8.59,30.822,33.412,55.644Z" transform="translate(-8.59 -6)"/></svg>
    );
}

export default withRouter(BackButton);