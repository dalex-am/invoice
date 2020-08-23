import React from 'react'

const BuyerInfo = (props) => {

    let buyer = props.buyers.filter(
        elem => elem.id.toString() === props.id).map(
            elem => {
                return (
                    <div>
                        <div>Имя: {elem.name} <i>(id {elem.id})</i></div>
                        <div>Средний чек: {(elem.totalRevenue / elem.purchases).toFixed()}</div>
                        <div>Количество покупок: {elem.purchases}</div>
                        <div>Общая выручка: {elem.totalRevenue}</div>
                    </div>
                )
            }
        )

    if (buyer.length === 0) {
        return <h3>Пользователя с таким ID не существует</h3>
    }

    return (
        <div>
            <h3>Информация о пользователе</h3>
            <div>{buyer}</div>
        </div>
    )
}

export default BuyerInfo