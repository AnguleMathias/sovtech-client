import React, { Component } from "react";
import { Pagination } from "react-bootstrap";

class PageNavigation extends Component {
  render() {
    const { clicked, count, pageChanged } = this.props;
    const pages = [];
    // console.log("props: ", this.props);
    let clickedNumber = Number(clicked);

    for (let pageNumber = 1; pageNumber < Math.round(count / 8); pageNumber++) {
      pages.push(
        <Pagination.Item
          key={pageNumber}
          onClick={pageChanged}
          active={pageNumber === clickedNumber}
        >
          {pageNumber}
        </Pagination.Item>
      );
    }

    return <Pagination className="pagination">{pages}</Pagination>;
  }
}

export default PageNavigation;
