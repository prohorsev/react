import { createSelector } from "reselect"

export const valueSelector = createSelector(
  (state) => state.conversationsReducer,
  (_, props) => props.match.params.id,
  (conversations, id) => {
    return (
      conversations.find((conversation) => conversation.title === id)?.value ||
      ""
    )
  },
)
