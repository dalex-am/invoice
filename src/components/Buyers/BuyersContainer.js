import React from 'react'
import Buyers from './Buyers'
import { connect } from 'react-redux'
import {switchNumberOfUsers, 
    switchCurrentPage, 
    sort_avarage_check, 
    sort_purchases,
    sort_totalRevenue,
    } from '../../redux/buyersReducer'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

const BuyersContainer = (props) => {

    return (
        <Buyers {...props} id={props.id}/>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    buyers: state.buyersPage.buyers,
    currentPage: state.buyersPage.currentPage,
    usersOnPage: state.buyersPage.usersOnPage,
    sort_avarage_check_by: state.buyersPage.sort_avarage_check_by,
    sort_purchases_by: state.buyersPage.sort_purchases_by,
    sort_totalRevenue_by: state.buyersPage.sort_totalRevenue_by,
})

export default compose( 
    connect(mapStateToProps,{switchNumberOfUsers, switchCurrentPage, 
        sort_avarage_check, sort_purchases, sort_totalRevenue}),
    withRouter)(BuyersContainer)