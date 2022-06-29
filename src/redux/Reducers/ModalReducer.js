const initialState = {
  isOpen: false,
  modalHeader: '',
  addNew: false,
  isEdit: false,
  idEdit: '',
}

export const ModalReducer = (state = initialState, action) => {
  switch (action.type) {

    case "OPEN_MODAL_ADD_NEW": {
      return { ...state, isOpen: true, addNew: true, modalHeader: action.modalHeader }
    }

    case "CLOSE_MODAL": {
      let newState = {
        isOpen: false,
        modalHeader: '',
        addNew: false,
        isEdit: false,
        idEdit: '',
      }
      return { ...newState }
    }

    default:
      return state
  }
}
