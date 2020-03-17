import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Items extends Component {
  constructor (props) {
    super(props)

    this.state = {
      items: []
    }
  }

  async componentDidMount () {
    try {
      const response = await axios(`http://localhost:3000/api/items`)
      this.setState({ items: response.data.items })
    } catch (err) {
      console.error(err)
    }
  }

  render () {
    const items = this.state.items.map(item => (
      <li key={item._id}>
        <Link to={`/items/${item._id}`}>{item.title}</Link>
      </li>
    ))

    return (
      <>
        <h4>Items</h4>
        <ul>
          {items}
        </ul>
      </>
    )
  }
}

export default Items
