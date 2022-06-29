const initialState = {
  isOpen: false,
  modalHeader: '',
  addNew: false,
  isHeader: false,
  linkEdit: null,
}

export const ModalReducer = (state = initialState, action) => {
  switch (action.type) {

    case "MODAL_ADD_NEW": {
      return { ...state, isOpen: true, addNew: true, isHeader: action.isHeader, modalHeader: action.modalHeader }
    }

    case "MODAL_EDIT":{
      return { ...state, isOpen: true, addNew: false, isHeader: action.isHeader, modalHeader: action.modalHeader, linkEdit: action.linkEdit }
    }

    case "CLOSE_MODAL": {
      state = {
        isOpen: false,
        modalHeader: '',
        addNew: false,
        isHeader: false,
        linkEdit: null,
      }
      return { ...state }
    }

    default:
      return state
  }
}
