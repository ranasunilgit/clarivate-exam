// actions.js

export const TOGGLE_SELECTED_ID = 'TOGGLE_SELECTED_ID';


export const toggleSelectedId = (id,title) => ({
    type: TOGGLE_SELECTED_ID,
    payload: {id,title},
  });
