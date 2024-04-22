// reducer.js
import { TOGGLE_SELECTED_ID  } from './Action';

const initialState = {
  count: 0,
  selectedIds: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SELECTED_ID:
      const { id, title } = action.payload;
      const index = state.selectedIds.findIndex(item => item.id === id);
      if (index === -1) {
        return {
          ...state,
          selectedIds: [...state.selectedIds, { id, title }],
        };
      } else {
        return {
          ...state,
          selectedIds: state.selectedIds.filter(item => item.id !== id),
        };
      }
    

    default:
      return state;
  }
};

export default reducer;
