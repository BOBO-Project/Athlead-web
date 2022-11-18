const initialState = {
  partner: [],
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case "ADD_PARTNER":
      return {
        ...state,
        partner: action.payload,
      };
    default:
  }
  return state;
}
