import React, { Component } from 'react';
import Layout from '../components/shared/Layout'
import { getItems, getUserByID} from '../services/items';
import FormCheckInput from 'react-bootstrap/FormCheckInput';
import Item from './Item';

export class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            items: [],
            filteredList: []
        }
    }

    onSearch = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        console.log('submit', this.props.items, this.state.search)
        e.preventDefault();
        const items = await getItems()
        console.log('items', items);
        // this.setState({ items })
        const filteredList = items.filter((item) => {
            console.log(item.name)
            return item.name === this.state.search;
            // return item.includes(this.state.search)
        })
        console.log(filteredList);
        this.setState({
            filteredList: filteredList
        });
        const getUserName = await getUserByID('5e7156b1b477bf3888a5ac3e')
        console.log(getUserName);

    }

    getUsername = async (id) => {

        const user = await getUserByID(id);
        console.log(user);
    }


    render() {
        const filteredList = this.state.filteredList.map((item, index) => {
            return (
                <div key={index}>
                    <div>
                        {item.name}
                        {item.description}
                        {/* {this.getUsername(item.user_id)} */}
                    </div>
                    <img src={item.link} alt="img link" width="350px" height="350px" />
                </div>
            )
        })
        const items = this.props.items.map((item, index) => {
            return (
                <div key={index}>
                    <div>
                        {item.name}
                        {item.description}
                    </div>
                    <img src={item.link} alt="img link" width="350px" height="350px" />
                </div>
            )
        });
        console.log(this.props);
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
                <form onSubmit={this.handleSubmit} className="item-search">
                    <input type="text" onChange={this.onSearch} value={this.state.value} name="search" id="" placeholder="Search" />
                    <button type="submit">Submit</button>
                </form>
                <div className="items">
                    {/* <div className="item">item</div>
                    <div className="item">item</div>
                    <div className="item">item</div>
                    <div className="item">item</div> */}
                    {filteredList.length !== 0 ? filteredList : items}
                </div>
            </>
        )
    }
}

export default SearchPage;
