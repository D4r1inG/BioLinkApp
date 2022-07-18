const initialState = {
  visible: false,
  pluginVisible: false,
  modalHeader: '',
  component: null,
  loading: false,
  linkEdit: null
}

export const ModalReducer = (state = initialState, action) => {
  switch (action.type) {

    case "MODAL_ADD_NEW": {
      state.component = action.component
      return { ...state, visible: true, modalHeader: action.modalHeader}
    }

    case "MODAL_EDIT": {
      state.component = action.component
      return { ...state, visible: true, modalHeader: action.modalHeader, linkEdit: action.linkEdit }
    }

    case "CLOSE_MODAL": {
      return { ...state, visible: false, component: null }
    }

    case "DISLAY_LOADING": {
      return { ...state, loading: true }
    }

    case "CLOSE_LOADING": {
      return { ...state, visible: false, loading: false, component: null  }
    }

    case "OPEN_PLUGIN": {
      return {...state, pluginVisible: true}
    }

    case "CLOSE_PLUGIN": {
      return {...state, pluginVisible: false}
    }

    default:
      return state
  }
}
