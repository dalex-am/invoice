import React, {useState} from 'react'
import classes from './Buyers.module.css'
import { NavLink } from 'react-router-dom'
import ascSort from '../../assets/images/asc-sort.png'
import descSort from '../../assets/images/desc-sort.png'
import Pagination from '../../common/Pagination'

const Buyers = (props) => {

    let [symbols, setSearchSymbols] = useState('')
    let elementsToRender = []

    
    let startSearch = event => {setSearchSymbols(event.target.value)}
    
    if (!symbols) {
        elementsToRender = props.buyers.slice(
            (props.currentPage-1)*props.usersOnPage, props.currentPage*props.usersOnPage
            )
        } else {
    // filter by name
        props.switchCurrentPage(1)
        elementsToRender = props.buyers.filter(elem => elem.name.includes(symbols)).slice(
        (props.currentPage-1)*props.usersOnPage, props.currentPage*props.usersOnPage
        )
    }

    let tableElements = elementsToRender.map(
        elem => {
            return (
                <tr key={elem.id}>
                    <td align="center"><NavLink to={'/buyers/' + elem.id}>{elem.id}</NavLink></td>
                    <td>{elem.name}</td>
                    <td align="center">{(elem.totalRevenue / elem.purchases).toFixed()} ₽</td>
                    <td align="center">{elem.purchases} шт.</td>
                    <td align="center">{elem.totalRevenue} ₽</td>
                </tr>
            )
        }
    )


    let switchNumbersOfUsers = () => {
        let number = document.getElementById("selectNumberOfUsers").value
        props.switchNumberOfUsers(number)
        props.switchCurrentPage(1)
    }
    
    return (
        <div className={classes.buyers}>
            <Pagination buyers={props.buyers} usersOnPage={props.usersOnPage}
                            currentPage={props.currentPage} switchCurrentPage={props.switchCurrentPage} />
            <div className={classes.selectAndFilter}>
                <h3>Список покупателей</h3>
                <select id="selectNumberOfUsers" onChange={switchNumbersOfUsers}>
                    <option>5</option>
                    <option selected="selected">10</option>
                    <option>15</option>
                </select>
                <input id="filter" onChange={startSearch} value={symbols} placeholder="Начните писать имя"></input>
            </div>
            <table className={classes.tableBuyers}>
                <tr>
                    <th>ID покупателя</th>
                    <th>Имя покупателя</th>
                    <th>Средний чек {props.sort_avarage_check_by === 'desc' 
                        ? <img src={descSort} onClick={props.sort_avarage_check} alt="descSort"></img>
                        : <img src={ascSort} onClick={props.sort_avarage_check} alt="ascSort"></img>}
                    </th>
                    <th>Количество покупок {props.sort_purchases_by === 'desc' 
                        ? <img src={descSort} onClick={props.sort_purchases} alt="descSort"></img>
                        : <img src={ascSort} onClick={props.sort_purchases} alt="ascSort"></img>}
                    </th>
                    <th>Общая выручка {props.sort_totalRevenue_by === 'desc' 
                        ? <img src={descSort} onClick={props.sort_totalRevenue} alt="descSort"></img>
                        : <img src={ascSort} onClick={props.sort_totalRevenue} alt="ascSort"></img>}
                    </th>
                </tr>
                {tableElements}
            </table>
        </div>
    )
}

export default Buyers