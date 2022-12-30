const initialState = {
  linkList: [
    {
      id: "1",
      title: "My header",
      url: "",
      click: 0,
      isHeader: true,
      ishide: false,
    },
    {
      id: "2",
      title: "Click me!",
      url: "https://youtu.be/dQw4w9WgXcQ",
      image: "/assets/Imgs/embed-youtube-new.png",
      pluginName: "Youtube",
      click: 69,
      isHeader: false,
      ishide: false,
    },
  ],
  socialList: [
    {
      id: 0,
      name: "instagram",
      url: "https://www.instagram.com/d4_l1ng/",
    },
    {
      id: 3,
      name: "facebook",
      url: "https://www.facebook.com/profile.php?id=100005135208157",
    },
  ],
  unActiveSocial: [
    {
      id: 1,
      name: "twitter",
      url: "",
    },
    {
      id: 2,
      name: "tiktok",
      url: "",
    },
    {
      id: 4,
      name: "mail",
      url: "",
    },
    {
      id: 5,
      name: "youtube",
      url: "",
    },
    {
      id: 6,
      name: "github",
      url: "",
    },
  ],
};

export const LinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_LINK": {
      return { ...state, linkList: [...state.linkList, action.payload] };
    }

    case "SET_LIST": {
      return { ...state, linkList: action.linkList };
    }

    case "SET_SOCIAL_LIST": {
      const { activeList, unActiveList } = action.newList;
      const newAddedActiveList = unActiveList.filter((item) => item.url !== "");
      const newUnedActiveList = unActiveList.filter((item) => item.url === "");
      return {
        ...state,
        socialList: activeList.concat(newAddedActiveList),
        unActiveSocial: newUnedActiveList,
      };
    }

    case "ADD_DUMMY_DATA": {
      let newList = [
        {
          id: "1",
          title: "My header",
          url: "",
          click: 0,
          isHeader: true,
          ishide: false,
        },
        {
          id: "2",
          title: "Hoang Kim My Link",
          url: "http://Mylink.com/",
          image: "/assets/Imgs/Khanh_Noi.jpg",
          click: 69,
          isHeader: false,
          ishide: false,
        },
      ];
      return { ...state, linkList: newList };
    }

    case "ADD_SOCIALLINK": {
      let newSocialListArr = [];
      action.newLinkList.forEach((item) => {
        const { name, value } = item;
        let index = state.socialList.findIndex((link) => link.name === name);
        if (index !== -1) {
          let updateSocialLink = state.socialList[index];
          updateSocialLink.link = value;
          newSocialListArr.push(updateSocialLink);
        } else {
          let newSocialLink = {
            id: Math.floor(Math.random() * 10000),
            link: value,
            click: 0,
            name: name,
          };
          newSocialListArr.push(newSocialLink);
        }
      });
      return { ...state, socialList: newSocialListArr };
    }

    case "EDIT_LINK": {
      return {
        ...state,
        linkList: state.linkList.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    }

    case "DELETE_LINK": {
      return {
        ...state,
        linkList: state.linkList.filter((item) => item.id !== action.payload),
      };
    }

    case "DELETE_SOCIAL_LINK": {
      let linkDelete = {
        ...state.socialList.find((item) => item.id === action.id),
        status: false,
        url: null,
      };
      let newSocialList = state.socialList.map((item) =>
        item.id === action.id ? linkDelete : item
      );
      return { ...state, socialList: newSocialList };
    }

    default:
      return state;
  }
};
