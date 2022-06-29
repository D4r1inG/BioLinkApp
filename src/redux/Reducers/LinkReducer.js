
const initialState = {
    linkList: [
        {
            id: '0',
            linkHeader: 'Header',
            click: 0,
            isHeader: true
        },
        {
            id: '1',
            linkHeader: 'Link 2',
            link: 'https://www.facebook.com/',
            click: 2,
            isHeader: false

        },
        {
            id: '2',
            linkHeader: 'Header 2',
            click: 7,
            isHeader: true

        },
        {
            id: '3',
            linkHeader: 'Link 4',
            link: 'https://www.facebook.com/',
            click: 7,
            isHeader: false

        },
        {
            id: '4',
            linkHeader: 'Link 5',
            link: 'https://www.facebook.com/',
            click: 10,
            isHeader: false

        }
    ]
}


export const LinkReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_LIST': {
            return {...state, linkList: action.linkList}
        }

        default:
            return state
    }
}
