import { ADD_CONVERSATION } from "./types"

const initialState = [
  { title: "room1", value: "" },
  { title: "test-room2", value: "" },
  { title: "room3", value: "" },
]

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONVERSATION:
      return [...state, { title: action.payload, value: "" }]
    default:
      return state
  }
}
