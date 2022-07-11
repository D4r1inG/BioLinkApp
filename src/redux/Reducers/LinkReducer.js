
const initialState = {
    linkList: [],
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

        // case 'ADD_NEW_LINK': {
        //     let newLink = {
        //         id: Math.floor(Math.random() * 100).toString(),
        //         linkHeader: action.newLink.title,
        //         link: action.newLink.url || '',
        //         click: 0,
        //         isHeader: action.newLink.url ? false : true,
        //         ishide: false
        //     }
        //     state.linkList.unshift(action.newLink)
        //     return { ...state }
        // }

        case 'ADD_SOCIALLINK': {
            let newSocialListArr = []
            action.newLinkList.forEach(item => {
                const { name, value } = item
                let index = state.socialList.findIndex(link => link.name === name)
                if (index !== -1) {
                    let updateSocialLink = state.socialList[index]
                    updateSocialLink.link = value
                    newSocialListArr.push(updateSocialLink)
                } else {
                    let newSocialLink = {
                        id: Math.floor(Math.random() * 100),
                        link: value,
                        click: 0,
                        name: name
                    }
                    newSocialListArr.push(newSocialLink)
                }
            })
            return { ...state, socialList: newSocialListArr }
        }

        // case 'EDIT_LINK': {
        //     let newLink = {
        //         ...action.linkEdit,
        //         linkHeader: action.newLink?.title || action.linkEdit.linkHeader,
        //         link: action.newLink?.url || action.linkEdit.link
        //     }
        //     return { ...state, linkList: state.linkList.map(item => item.id == action.linkEdit.id ? newLink : item) }
        // }

        case 'DELETE_LINK': {
            let newList = state.linkList.filter(item => item.id != action.id)
            return { ...state, linkList: newList }
        }

        default:
            return state
    }
}
