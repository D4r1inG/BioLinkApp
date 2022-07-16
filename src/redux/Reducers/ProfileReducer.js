const initialState = {
    name: 'Daling',
    bio: 'Stupid data',
    image: 'https://cdn.bio.link/uploads/profile_pictures/2022-06-24/uypEvJN3i7IAPaRcpuIgeBs3qlxRAeDD.png',
    activeTheme: 2,
    showLogo: true,
    showWarning: true,
    themes: [
        {
            id: 0,
            name: 'Basics',
            background: '#ffffff',
            btnRadius: '30px',
            btnBg: '#ffffff',
            btnBorder: '0px solid #ffffff',
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
            btnBorder: '0px solid #ffffff',
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
            btnBorder: '0px solid #ffffff',
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
            btnBorder: '0px solid #FFDD00',
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
            btnBorder: '0px solid #FF9877',
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
            btnBorder: '0px solid #FF9877',
            boxShadow: '',
            colorHeader: '#000000',
            colorLink: '#000000'
        },
    ]
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'EDIT_VALUE': {
            return { ...state, name: action.payload.name || state.name, bio: action.payload.bio || state.bio }
        }

        case 'SELECT_THEME': {
            return {...state, activeTheme: action.id}
        }

        case 'TOGGLE_LOGO': {
            return {...state, showLogo: !state.showLogo}
        }

        case 'TOGGLE_WARNING': {
            return {...state, showWarning: !state.showWarning}
        }

        default:
            return state
    }
}
