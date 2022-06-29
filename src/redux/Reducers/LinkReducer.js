
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
    ],
    socialList: [
        'instagram', 'twitter', 'tiktok'
    ]
}


export const LinkReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_LIST': {
            return { ...state, linkList: action.linkList }
        }

        case 'ADD_NEW_LINK': {
            let newLink = {
                id: Math.floor(Math.random() * 100).toString(),
                linkHeader: action.newLink.title,
                link: action.newLink.url || '',
                click: 0,
                isHeader: action.newLink.url ? false : true,
            }
            state.linkList.unshift(newLink)
            return { ...state }
        }

        case 'EDIT_LINK': {
            let newLink = {
                ...action.linkEdit,
                linkHeader: action.newLink.title || action.linkEdit.linkHeader,
                link: action.newLink.url || action.linkEdit.link
            }
            return { ...state, linkList: state.linkList.map(item => item.id == action.linkEdit.id ? newLink : item) }
        }

        default:
            return state
    }
}
