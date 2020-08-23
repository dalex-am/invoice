import React from 'react'
import { connect } from 'react-redux'
import BuyerInfo from './BuyerInfo';

const BuyerInfoContainer = (props) => {

    let id = props.match.params.id;

    return (
        <div>
            <BuyerInfo {...props} id={id}/>
        </div>
    )
}



let mapStateToProps = (state) => ({
    buyers: state.buyersPage.buyers
})

export default connect(mapStateToProps, {})(BuyerInfoContainer)