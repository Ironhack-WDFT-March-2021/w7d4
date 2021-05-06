import React, { Component } from 'react'

export default class SearchField extends Component {

    state = {
        searchQuery: ''
    }

    // handleChange = event => {
    //     // we need to set the state of query in App.js
    //     // this.props.setQueryProp(event.target.value)
    //     this.setState()
    // }

    handleChange = event => {
        this.setState({
            searchQuery: event.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.setQueryProp(this.state.searchQuery);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="query"
                        value={this.state.searchQuery}
                        // onChange={(e) => this.props.setQueryProp(e.target.value)}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Search this query</button>
                </form>
            </div>
        )
    }
}
