import React , { Component } from 'react';
import Books from '../Books/Books';

class Layout extends Component {
    render() {
        return(
            <>
                <div>Toolbar, Side drawer</div>
                <div className='container'>
                    <Books />
                </div>
            </>
        );
    }
}

export default Layout;