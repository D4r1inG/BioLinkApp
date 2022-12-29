const initialState = {
  userProfile: {
    name: "Quan Nguyen",
    bio: "Some info about me!",
    image: "/assets/Imgs/embed-contactform-new.png",
    activeDesign: 0,
    showLogo: true,
    showNSFW: true,
  },
  userProfileByUserName: [],
  themes: [
    {
      id: 0,
      name: "Basics",
      background: "#ffffff",
      btnRadius: "30px",
      btnBg: "#ffffff",
      btnBdWidth: "0px",
      btnBdColor: "#fff",
      btnBdStyle: "solid",
      boxShadow:
        "rgb(24 39 75 / 12%) 0px 6px 14px -6px, rgb(24 39 75 / 10%) 0px 10px 32px -4px, rgb(24 39 75 / 5%) 0px 0px 2px 1px inset",
      colorHeader: "#000000",
      colorLink: "#000000",
    },
    {
      id: 1,
      name: "Carbon",
      background: "#131212",
      btnRadius: "8px",
      btnBg: "#212121",
      btnBdWidth: "0px",
      btnBdColor: "#fff",
      btnBdStyle: "solid",
      boxShadow:
        "rgb(24 39 75 / 12%) 0px 6px 14px -6px, rgb(24 39 75 / 10%) 0px 10px 32px -4px, rgb(255 255 255 / 5%) 0px 0px 2px 1px inset",
      colorHeader: "#ffffff",
      colorLink: "#ffffff",
    },
    {
      id: 2,
      name: "Pride",
      backgroundImg:
        "https://cdn.bio.link/themes/backgrounds/pride-desktop.png",
      background: "#ffffff",
      btnRadius: "30px",
      btnBg: "#ffffff",
      btnBdWidth: "0px",
      btnBdColor: "#fff",
      btnBdStyle: "solid",
      boxShadow: "",
      colorHeader: "#ffffff",
      colorLink: "#000000",
    },
    {
      id: 3,
      name: "Sunny",
      background: "#fefceb",
      btnRadius: "30px",
      btnBg: "#FFDD00",
      btnBdWidth: "0px",
      btnBdColor: "#FFDD00",
      btnBdStyle: "solid",
      boxShadow:
        "rgb(24 39 75 / 12%) 0px 6px 14px -6px, rgb(24 39 75 / 10%) 0px 10px 32px -4px, rgb(255 255 255 / 5%) 0px 0px 2px 1px inset",
      colorHeader: "#000000",
      colorLink: "#000000",
    },
    {
      id: 4,
      name: "Leaf",
      background: "#f5fdf4",
      btnRadius: "30px",
      btnBg: "#A6EB99",
      btnBdWidth: "0px",
      btnBdColor: "#FF9877",
      btnBdStyle: "solid",
      boxShadow: "",
      colorHeader: "#000000",
      colorLink: "#000000",
    },
    {
      id: 5,
      name: "Unicorn",
      background: "#f8f8fe",
      btnRadius: "12px",
      btnBg: "#BFB9FA",
      btnBdWidth: "0px",
      btnBdColor: "#FF9877",
      btnBdStyle: "solid",
      boxShadow: "",
      colorHeader: "#000000",
      colorLink: "#000000",
    },
  ],
  newTheme: {
    name: "",
    backgroundImg: null,
    background: "#ffffff",
    btnRadius: "30px",
    btnBg: "#ffffff",
    btnBdWidth: "2px",
    btnBdColor: "#ffffff",
    btnBdStyle: "solid",
    boxShadow:
      "rgb(24 39 75 / 12%) 0px 6px 14px -6px, rgb(24 39 75 / 10%) 0px 10px 32px -4px, rgb(24 39 75 / 5%) 0px 0px 2px 1px inset",
    colorHeader: "#000000",
    colorLink: "#000000",
    fontFamily: "'DM Sans', sans-serif",
  },
  isCreating: false,
  commentList: [],
  profileList: [],
};

export const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_COMMENT": {
      return { ...state, commentList: action.data };
    }

    case "SET_PROFILE_LIST": {
      return { ...state, profileList: action.data };
    }

    case "EDIT_VALUE": {
      return {
        ...state,
        name: action.payload.name || state.name,
        bio: action.payload.bio || state.bio,
      };
    }

    case "SET_THEMES": {
      return {
        ...state,
        themes: action.data,
        userProfile: {
          ...state.userProfile,
          activeDesign: 0,
        },
      };
    }

    case "SET_PROFILE": {
      return { ...state, userProfile: action.data };
    }

    case "UPDATE_PROFILE_BY_USERNAME": {
      return { ...state, userProfileByUserName: action.data[0] };
    }

    case "SET_DUMMY_THEME": {
      let dummyTheme = {
        id: 0,
        name: "Basics",
        background: "#ffffff",
        btnRadius: "30px",
        btnBg: "#ffffff",
        btnBdWidth: "0px",
        btnBdColor: "#fff",
        btnBdStyle: "solid",
        boxShadow:
          "rgb(24 39 75 / 12%) 0px 6px 14px -6px, rgb(24 39 75 / 10%) 0px 10px 32px -4px, rgb(24 39 75 / 5%) 0px 0px 2px 1px inset",
        colorHeader: "#000000",
        colorLink: "#000000",
      };
      return {
        ...state,
        themes: [dummyTheme],
        userProfile: {
          ...state.userProfile,
          activeDesign: 0,
        },
      };
    }

    case "SELECT_THEME": {
      return { ...state, userProfile: action.newProfile };
    }

    case "SET_THEME": {
      return {
        ...state,
        userProfile: { ...state.userProfile, activeDesign: action.id },
      };
    }

    case "UPDATE_PROFILE": {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          name: action.payload.name,
          bio: action.payload.bio,
          image: action.payload.image
            ? action.payload.image
            : state.userProfile.image,
        },
      };
    }

    case "UPDATE_SETTING": {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          showLogo: action.payload.showLogo,
          showNSFW: action.payload.showNSFW,
        },
      };
    }

    case "CREATE_THEME": {
      return { ...state, isCreating: true };
    }

    case "CLOSE_CREATE_THEME": {
      return { ...state, isCreating: false };
    }

    case "DELETE_THEME": {
      let newThemes = state.themes.filter((item) => item.id !== action.id);
      return { ...state, themes: newThemes };
    }

    case "UPDATE_NEW_THEME": {
      let temp = {
        background: action?.background || state.newTheme.background,
        backgroundImg:
          action?.backgroundImg === null
            ? null
            : action?.backgroundImg || state.newTheme.backgroundImg,
        btnRadius: action?.btnRadius || state.newTheme.btnRadius,
        btnBg: action?.btnBg || state.newTheme.btnBg,
        btnBorder: action?.btnBorder || state.newTheme.btnBorder,
        btnBdWidth: action?.btnBdWidth || state.newTheme.btnBdWidth,
        btnBdColor: action?.btnBdColor || state.newTheme.btnBdColor,
        btnBdStyle: action?.btnBdStyle || state.newTheme.btnBdStyle,
        boxShadow: action?.boxShadow || state.newTheme.boxShadow,
        colorHeader: action?.colorHeader || state.newTheme.colorHeader,
        colorLink: action?.colorLink || state.newTheme.colorLink,
        fontFamily: action?.fontFamily || state.newTheme.fontFamily,
      };
      return { ...state, newTheme: temp };
    }

    case "SAVE_NEW_THEME": {
      let id = Math.random();
      let tempTheme = {
        name: "",
        background: "#ffffff",
        btnRadius: "30px",
        btnBg: "#ffffff",
        btnBdWidth: "2px",
        btnBdColor: "#ffffff",
        btnBdStyle: "solid",
        boxShadow:
          "rgb(24 39 75 / 12%) 0px 6px 14px -6px, rgb(24 39 75 / 10%) 0px 10px 32px -4px, rgb(24 39 75 / 5%) 0px 0px 2px 1px inset",
        colorHeader: "#000000",
        colorLink: "#000000",
        fontFamily: "'DM Sans', sans-serif",
      };
      return {
        ...state,
        userProfile: { ...state.userProfile, activeDesign: id },
        themes: [...state.themes, { ...state.newTheme, id }],
        isCreating: false,
        newTheme: tempTheme,
      };
    }

    default:
      return state;
  }
};
