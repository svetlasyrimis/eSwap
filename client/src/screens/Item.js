import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import { getItemById, deleteItem } from '../services/items'

class Item extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: null,
            deleted: false
        }
    }

    async componentDidMount() {
        try {
            const item = await getItemById(this.props.match.params.id)
            this.setState({ item })
        } catch (err) {
            console.error(err)
        }
    }

    destroy = () => {
      deleteItem(this.state.item._id)
        .then(() => {
          this.props.deleteItemFromList(this.state.item._id);this.setState({ deleted: true }); 
    })
              .catch(console.error)
    }
  
  
    render() {
        const { item, deleted } = this.state

        if (!item) {
            return <p>Loading...</p>
        }

        if (deleted) {
            return (
                <Redirect
                    to={{
                        pathname: '/items',
                        state: { msg: 'Item succesfully deleted!' }
                    }}
                />
            )
        }

        return (
            <Layout>
                <div className="seeMoreItem">
                    <Link to="/items">
                        <span> Back to all items</span>
                    </Link>
                      <hr></hr>
                      <h4>{item.name}</h4>
                      <img src={item.link} alt="img link" width="350px" height="350px" />
                      <p>Description: {item.description}</p>
                      <p>Link: {item.link}</p>
                      <p>User Id: {item.user_id}</p>
                      <div className="buttons">
                    <button className="danger" onClick={this.destroy}>
                        Delete Item
                    </button>
                    <br></br>
                    <button
                        className="edit"
                        onClick={() =>
                            this.props.history.push(
                                `/items/${this.props.match.params.id}/edit`
                            )
                        }
                    >
                        Edit Item
                    </button>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Item
