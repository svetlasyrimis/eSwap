
import React from 'react'

import Nav from './Nav'

const Layout = (props) => (
    <div className='layout'>
        <div className='content'>
            <Nav />
            <div className='main'>
                <h1>eSwap - MandoList</h1>
                {props.children}
            </div>
        </div>
        {/* <Footer /> */}
    </div>
)

export default Layout
