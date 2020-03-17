import React, { Component } from 'react';
import Layout from '../components/shared/Layout'

export class SearchPage extends Component {
    render() {
        return (
            <>
                <div className="item-categories">
                    <div className="item-cat">
                        <button>Item Category</button>
                    </div>
                    <div className="item-cat">
                        <button>Item Category</button>
                    </div>
                    <div className="item-cat">
                        <button>Item Category</button>
                    </div>
                </div>
                <div className="item-search">
                    <input type="text" name="" id="" placeholder="Search" />
                    <button type="submit">Submit</button>
                </div>
                <div className="items">
                    <div className="item">item</div>
                    <div className="item">item</div>
                    <div className="item">item</div>
                    <div className="item">item</div>
                </div>
            </>
        )
    }
}

export default SearchPage;
