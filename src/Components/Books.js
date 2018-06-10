import React, {Component} from 'react';
import {Panel, PanelGroup, ListGroup, ListGroupItem, Row, Col} from 'react-bootstrap'

class Header extends Component {
    render() {
        let bookItems;
        if (this.props.books) {
            bookItems = this.props.books.map((book, i) => {
                // console.log(book.indexOf())

                let title = book.volumeInfo.title;
                let thumbnail = book.volumeInfo.imageLinks.thumbnail;
                let categories = book.volumeInfo.categories;
                let author = book.volumeInfo.author;
                let publisher = book.volumeInfo.publisher;
                let description = book.volumeInfo.description;
                let pageCount = book.volumeInfo.pageCount;
                let publishDate = book.volumeInfo.publishDate;
                let avarageRating = book.volumeInfo.avarageRating;
                return (
                    <div key={i}>
                        <div className='hover'>{title}</div>
                        <div className='hover'><img src={thumbnail} alt=""/></div>
                        <div className='hover'>{categories}</div>
                        <div className='hover'>{author}</div>
                        <div className='hover'>{publisher}</div>
                        <div className='hover'>{description}</div>
                        <div className='hover'>{pageCount}</div>
                        <div className='hover'>{publishDate}</div>
                        <div className='hover'>{avarageRating}</div>

                    </div>


                )
            })
        }
        return (
            <div>

                {bookItems}
            </div>

        );
    }
}

export default Header;
