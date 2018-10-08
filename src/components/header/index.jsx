import React from 'react';
import {Link} from 'router';

class Header extends React.Component{
    render() {
        return (
            <div>
                <h1>Hello, Word!</h1>
                <div>
                    <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="page1">page1</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="page2">page2</Link>
                </div>
            </div>
        );
    }

}

module.exports = Header;
