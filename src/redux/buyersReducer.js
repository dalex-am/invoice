const SORT_BY_AVARAGE_CHECK = 'SORT_BY_AVARAGE_CHECK'
const SORT_BY_PURCHASES = 'SORT_BY_PURCHASES'
const SORT_BY_REVENUE = 'SORT_BY_REVENUE'
const SWITCH_NUMBER_OF_USER_ON_PAGE = 'SWITCH_NUMBER_OF_USER_ON_PAGE'
const SWITCH_CURRENT_PAGE = 'SWITCH_CURRENT_PAGE'
const SET_ID = 'SET_ID'

let initialState = {
    // id: '',
    currentPage: 1,
    usersOnPage: 10,
    sort_avarage_check_by: 'desc',
    sort_purchases_by: 'desc',
    sort_totalRevenue_by: 'desc',
    buyers: [
        {id: 123455, name: 'Киану Ривз', purchases: 12, totalRevenue: 3056},
        {id: 123767, name: 'Василий Иванов', purchases: 1, totalRevenue: 220},
        {id: 122009, name: 'Иван Ванко', purchases: 99, totalRevenue: 909580},
        {id: 123545, name: 'Илья Сидоров', purchases: 3, totalRevenue: 1266},
        {id: 125609, name: 'Илья Сидоров', purchases: 1, totalRevenue: 35},
        {id: 123211, name: 'Вера Хитрая', purchases: 1, totalRevenue: 9990},
        {id: 120998, name: 'Александр Волков', purchases: 4, totalRevenue: 10450},
        {id: 123384, name: 'Иван Новиков', purchases: 12, totalRevenue: 2000},
        {id: 123477, name: 'Александр Волков', purchases: 1, totalRevenue: 36999},
        {id: 123450, name: 'Ольга Додопиццева', purchases: 32, totalRevenue: 15880},
        {id: 128005, name: 'Юлия Егорова', purchases: 5, totalRevenue: 2500},
        {id: 124344, name: 'Алексей Кузнецов', purchases: 6, totalRevenue: 760},
        {id: 123001, name: 'Сара Джейн Смит', purchases: 1, totalRevenue: 54000},
        {id: 123412, name: 'Нео', purchases: 1, totalRevenue: 10000},
        {id: 100087, name: 'Алина Котова', purchases: 7, totalRevenue: 9001},
    ]
}

const buyersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ID:
            return {
                ...state,
                id: action.id
            }
        case SWITCH_NUMBER_OF_USER_ON_PAGE:
            return {
                ...state,
                usersOnPage: action.numberOfUsersOnPage
            }
        case SWITCH_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SORT_BY_AVARAGE_CHECK: 
            if (state.sort_avarage_check_by === 'desc') {
                return {
                    ...state,
                    buyers: [...state.buyers.sort(
                        function(a, b) {
                            return (b.totalRevenue/b.purchases) - (a.totalRevenue/a.purchases);
                        })
                    ],
                    sort_avarage_check_by: 'asc'
                }
            } else if (state.sort_avarage_check_by === 'asc') {
                return {
                    ...state,
                    buyers: [...state.buyers.sort(
                        function(a, b) {
                            return (a.totalRevenue/a.purchases) - (b.totalRevenue/b.purchases);
                        })
                    ],
                    sort_avarage_check_by: 'desc'
                }
            }
        case SORT_BY_PURCHASES: 
            if (state.sort_purchases_by === 'desc') {
                return {
                    ...state,
                    buyers: [...state.buyers.sort(
                        function(a, b) {
                            return (b.purchases) - (a.purchases);
                        })
                    ],
                    sort_purchases_by: 'asc'
                }
            } else if (state.sort_purchases_by === 'asc') {
                return {
                    ...state,
                    buyers: [...state.buyers.sort(
                        function(a, b) {
                            return (a.purchases) - (b.purchases);
                        })
                    ],
                    sort_purchases_by: 'desc'
                }
            }
        case SORT_BY_REVENUE: 
            if (state.sort_totalRevenue_by === 'desc') {
                return {
                    ...state,
                    buyers: [...state.buyers.sort(
                        function(a, b) {
                            return (b.totalRevenue) - (a.totalRevenue);
                        })
                    ],
                    sort_totalRevenue_by: 'asc'
                }
            } else if (state.sort_totalRevenue_by === 'asc') {
                return {
                    ...state,
                    buyers: [...state.buyers.sort(
                        function(a, b) {
                            return (a.totalRevenue) - (b.totalRevenue);
                        })
                    ],
                    sort_totalRevenue_by: 'desc'
                }
            }
        default:
            return state;
    }
}

export const set_id = (id) => {
    return {type: SET_ID, id}
}

export const switchNumberOfUsers = (numberOfUsersOnPage) => {
    return {type: SWITCH_NUMBER_OF_USER_ON_PAGE, numberOfUsersOnPage}
}

export const switchCurrentPage = (currentPage) => {
    return {type: SWITCH_CURRENT_PAGE, currentPage}
}

export const sort_avarage_check = () => {
    return {type: SORT_BY_AVARAGE_CHECK}
}

export const sort_purchases = () => {
    return {type: SORT_BY_PURCHASES}
}

export const sort_totalRevenue = () => {
    return {type: SORT_BY_REVENUE}
}


export default buyersReducer