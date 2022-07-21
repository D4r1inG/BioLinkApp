const initialState = {
    name: 'Daling',
    bio: 'Xin chao mng, chuc vui ve hanh phuc',
    image: 'https://cdn.bio.link/uploads/profile_pictures/2022-06-24/uypEvJN3i7IAPaRcpuIgeBs3qlxRAeDD.png',
    activeTheme: 5,
    showLogo: true,
    showWarning: true,
    themes: [
        {
            id: 0,
            name: 'Basics',
            background: '#ffffff',
            btnRadius: '30px',
            btnBg: '#ffffff',
            btnBdWidth: '0px',
            btnBdColor: '#fff',
            btnBdStyle: 'solid',
            boxShadow: 'rgb(24 39 75 / 12%) 0px 6px 14px -6px, rgb(24 39 75 / 10%) 0px 10px 32px -4px, rgb(24 39 75 / 5%) 0px 0px 2px 1px inset',
            colorHeader: '#000000',
            colorLink: '#000000'
        },
        {
            id: 1,
            name: 'Carbon',
            background: '#131212',
            btnRadius: '8px',
            btnBg: '#212121',
            btnBdWidth: '0px',
            btnBdColor: '#fff',
            btnBdStyle: 'solid',
            boxShadow: 'rgb(24 39 75 / 12%) 0px 6px 14px -6px, rgb(24 39 75 / 10%) 0px 10px 32px -4px, rgb(255 255 255 / 5%) 0px 0px 2px 1px inset',
            colorHeader: '#ffffff',
            colorLink: '#ffffff'
        },
        {
            id: 2,
            name: 'Pride',
            backgroundImg: 'https://cdn.bio.link/themes/backgrounds/pride-desktop.png',
            background: '#ffffff',
            btnRadius: '30px',
            btnBg: '#ffffff',
            btnBdWidth: '0px',
            btnBdColor: '#fff',
            btnBdStyle: 'solid',
            boxShadow: '',
            colorHeader: '#ffffff',
            colorLink: '#000000'
        },
        {
            id: 3,
            name: 'Sunny',
            background: '#fefceb',
            btnRadius: '30px',
            btnBg: '#FFDD00',
            btnBdWidth: '0px',
            btnBdColor: '#FFDD00',
            btnBdStyle: 'solid',
            boxShadow: 'rgb(24 39 75 / 12%) 0px 6px 14px -6px, rgb(24 39 75 / 10%) 0px 10px 32px -4px, rgb(255 255 255 / 5%) 0px 0px 2px 1px inset',
            colorHeader: '#000000',
            colorLink: '#000000'
        },
        {
            id: 4,
            name: 'Leaf',
            background: '#f5fdf4',
            btnRadius: '30px',
            btnBg: '#A6EB99',
            btnBdWidth: '0px',
            btnBdColor: '#FF9877',
            btnBdStyle: 'solid',
            boxShadow: '',
            colorHeader: '#000000',
            colorLink: '#000000'
        },
        {
            id: 5,
            name: 'Unicorn',
            background: '#f8f8fe',
            btnRadius: '12px',
            btnBg: '#BFB9FA',
            btnBdWidth: '0px',
            btnBdColor: '#FF9877',
            btnBdStyle: 'solid',
            boxShadow: '',
            colorHeader: '#000000',
            colorLink: '#000000'
        },
    ],
    newTheme: {
        name: '',
        background: '#ffffff',
        btnRadius: '30px',
        btnBg: '#ffffff',
        btnBdWidth: '2px',
        btnBdColor: '#ffffff',
        btnBdStyle: 'solid',
        boxShadow: 'rgb(24 39 75 / 12%) 0px 6px 14px -6px, rgb(24 39 75 / 10%) 0px 10px 32px -4px, rgb(24 39 75 / 5%) 0px 0px 2px 1px inset',
        colorHeader: '#000000',
        colorLink: '#000000',
        fontFamily: "'DM Sans', sans-serif"
    },
    isCreating: false
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'EDIT_VALUE': {
            return { ...state, name: action.payload.name || state.name, bio: action.payload.bio || state.bio }
        }

        case 'SELECT_THEME': {
            return { ...state, activeTheme: action.id }
        }

        case 'TOGGLE_LOGO': {
            return { ...state, showLogo: !state.showLogo }
        }

        case 'TOGGLE_WARNING': {
            return { ...state, showWarning: !state.showWarning }
        }

        case 'CREATE_THEME': {
            return { ...state, isCreating: true }
        }

        case 'COLSE_CREATE_THEME': {
            return { ...state, isCreating: false }
        }

        case 'UPDATE_NEW_THEME': {
            let temp = {
                background: action?.background || state.newTheme.background,
                btnRadius: action?.btnRadius || state.newTheme.btnRadius,
                btnBg: action?.btnBg || state.newTheme.btnBg,
                btnBorder: action?.btnBorder || state.newTheme.btnBorder,
                btnBdWidth: action?.btnBdWidth || state.newTheme.btnBdWidth,
                btnBdColor: action?.btnBdColor || state.newTheme.btnBdColor,
                btnBdStyle: action?.btnBdStyle || state.newTheme.btnBdStyle,
                boxShadow: action?.boxShadow || state.newTheme.boxShadow,
                colorHeader: action?.colorHeader || state.newTheme.colorHeader,
                colorLink: action?.colorLink || state.newTheme.colorLink,
                fontFamily: action?.fontFamily || state.newTheme.fontFamily
            }
            return { ...state, newTheme: temp }
        }

        case 'SAVE_NEW_THEME': {
            let newId = Math.floor(Math.random() * 1000)
            let temp = { ...state.newTheme, name: action.name, id: newId }
            state.themes.push(temp)
            let tempTheme = {
                name: '',
                background: '#ffffff',
                btnRadius: '30px',
                btnBg: '#ffffff',
                btnBdWidth: '2px',
                btnBdColor: '#ffffff',
                btnBdStyle: 'solid',
                boxShadow: 'rgb(24 39 75 / 12%) 0px 6px 14px -6px, rgb(24 39 75 / 10%) 0px 10px 32px -4px, rgb(24 39 75 / 5%) 0px 0px 2px 1px inset',
                colorHeader: '#000000',
                colorLink: '#000000',
                fontFamily: "'DM Sans', sans-serif"
            }
            return { ...state, isCreating: false, activeTheme: newId, newTheme: tempTheme }
        }

        default:
            return state
    }
}
