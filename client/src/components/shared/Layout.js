
import React from 'react'

import Nav from './Nav'

const Layout = (props) => (
    <div className='layout'>
        <div className='content'>
            <Nav />
            <div className='main'>
                {props.children}
            </div>
        </div>
        {/* <Footer /> */}
    </div>
)

export default Layout
