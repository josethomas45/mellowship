import React from 'react';
import '../App.css';

function PaginationFooter() {
  return (
    <div className="pagination-footer-container">
      {/* Pagination Section */}
      <div className="pagination-footer">
        <div className="pagination">
          <div className="record-count">59 Records</div>
          <div className="per-page">
            <span>Per Page:</span>
            <select defaultValue="30">
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <div className="page-nav">
            <span>1 of 2</span>
            <div className="page-buttons">
              <button className="prev">←</button>
              <button className="next">→</button>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="footer">
          <img src="/images/hoo.png" height="20px" width="20px" alt="logo" />
          <div className="social-icons">
          <span><img src="/images/inw.svg" height="10px" width="10px" alt="logo" /></span>
            <span><img src="/images/linw.svg" height="10px" width="10px" alt="logo" /></span>
            <span><img src="/images/xw.svg" height="10px" width="10px" alt="logo" /></span>
            <span><img src="/images/tw.svg" height="10px" width="10px" alt="logo" /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginationFooter;
