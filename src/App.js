import React, {Component} from 'react';
import axios from 'axios'
import {Grid, Col, Row} from 'react-bootstrap'
import Header from './Components/Header'
import Books from './Components/Books'
import SearchInput from "./Components/SearchInput";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            books: '',
            text: 'The Magicians'
        }
    }

    componentWillMount() {
        this.getBooks();
    }

    getBooks(){
        axios.request({
            method: 'get',
            url: 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.text + ':keyes&key=AIzaSyBkgzZT05zliXPIytRa3GXHwBSWeSPAeUQ'
        }).then((response)=> {
            this.setState({
                books: response.data.items
            }, ()=> {
                console.log(this.state)
            })
        })
    }

    searchUpdate(text){
        this.setState({
            text: text
        },
            console.log('in app' + this.state.text))
        this.getBooks()
    }
    render() {
        return (
            <div className="App">
                <Header search={this.state.text}/>
                <SearchInput search={this.state.text} onSearchChanged={this.searchUpdate.bind(this)}/>
                <Grid>
                    <Row>
                        <Col>
                            <Books books={this.state.books} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;
