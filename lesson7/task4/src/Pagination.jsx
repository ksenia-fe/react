import React from 'react';

class Pagination extends React.Component {
  render() {
    return (
      <div className="pagination">
        <button className="btn" onClick={this.props.goPrev}>
          ←
        </button>
        <span className="pagination__page">{this.props.currentPage}</span>
        <button className="btn" onClick={this.props.goNext}>
          →
        </button>
      </div>
    );
  }
}

export default Pagination;
