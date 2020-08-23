import React from 'react'
import classes from '../components/Buyers/Buyers.module.css'

const Pagination = ({buyers, usersOnPage, currentPage, switchCurrentPage}) => {

    let pagesCount = Math.ceil(buyers.length / usersOnPage)
        
    let pages = []

    if (pagesCount <= 11) {
        for (let page = 1; page <= pagesCount; page++) {
            pages.push(page)
        }
    } else if (pagesCount > 11 & currentPage < 10) {
        for (let page = 1; page <= 10; page++) {
            pages.push(page)
        }
        pages.push('...');
        pages.push(pagesCount)
    } else if (currentPage >= 10 & currentPage < pagesCount - 3) {
        for (let page = 1; page <= 3; page++) {
            pages.push(page);
        }
        pages.push('...');
        for (let page = currentPage - 3; page <= currentPage + 3; page++) {
            pages.push(page)
        }
        pages.push('...');
        pages.push(pagesCount)
    } else if (currentPage >= pagesCount - 3) {
        for (let page = 1; page <= 3; page++) {
            pages.push(page)
        }
        pages.push('...');
        for (let page = pagesCount - 7; page <= pagesCount; page++) {
            pages.push(page)
        }
    }
    
    if (pagesCount > 1) {
        return (
            <div className={classes.pagination}>
                {pages.map(page => {
                    return <button className={currentPage === page && classes.currentPage}
                                onClick={(e) => page !== '...' && switchCurrentPage(page)}> {page} </button>
                })
                }
            </div>
        )
    } else {
        return null
    }

}

export default Pagination                  