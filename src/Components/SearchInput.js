import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap'

class SearchInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: this.props.search
        }
    }

    searchFieldChange(e) {
        this.setState({
            search: e.target.value}, () => {
            console.log(this.state)
            this.props.onSearchChanged(this.state.search)
        })
    }

    render() {
        return (
            <Navbar>
                <Navbar className='Brand'>
                    <input type="text" placeholder={this.props.search} value={this.state.search}
                           onChange={this.searchFieldChange.bind(this)}/>
                </Navbar>
            </Navbar>
        );
    }
}

export default SearchInput;
