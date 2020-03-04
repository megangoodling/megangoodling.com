import React from 'react'

class List extends React.Component {
  // Initialize the state
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount () {
    this.getList()
  }

  // Retrieves the list of items from the Express app
  getList = () => { // eslint-disable-line
    fetch('/api/getList')
      .then(res => res.json())
      .then(list => this.setState({ list }))
  }

  render () {
    const { list } = this.state

    return (
      <div className="App">
        <h2>List of Items</h2>
        {list.length ? (
          <div>
            {list.map((item) => {
              return (
                <div key={list.indexOf(item)}>
                  {item}
                </div>
              )
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
        }
      </div>
    )
  }
}

export default List
