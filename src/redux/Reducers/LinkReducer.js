
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
        {
            id: 0,
            name: 'instagram',
            link: 'Link/insta',
            click: 0,
        },
        {
            id: 1,
            name: 'twitter',
            link: 'Link/twitter',
            click: 0,
        },
        {
            id: 2,
            name: 'tiktok',
            link: 'Link/tittok',
            click: 0,
        }
    ]
}


export const LinkReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_LIST': {
            return { ...state, linkList: action.linkList }
        }

        case 'SET_SOCIAL_LIST': {
            let newList = [...action.newList]
            return { ...state, socialList: newList }
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

        case 'ADD_SOCIALLINK' : {
            action.newLinkList.forEach(item => {
                const {name, value} = item
                let index = state.socialList.findIndex(link => link.name === name)
                if(index !== -1){
                    let updateSocialLink = state.socialList[index]
                    updateSocialLink.link = value
                    state.socialList[index] = {...updateSocialLink}
                }else{
                    let newSocialLink = {
                        id: Math.floor(Math.random() * 100),
                        link: value,
                        click: 0,
                        name: name
                    }
                    state.socialList.unshift(newSocialLink)
                }
            })
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

        case 'DELETE_SOCIAL_LINK':{
            let newSocialList = state.socialList.filter(item => item.id != action.id)
            return {...state, socialList: newSocialList}
        }

        default:
            return state
    }
}
