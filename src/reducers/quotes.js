export default (state = [], action) => {
  let quote
  let idx

  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)

    case "UPVOTE_QUOTE":
      // first we need to find the quote, we can use the findIndex helper method
      idx = state.findIndex(quote => quote.id === action.quoteId)
      // assign quote to state sub found idx
      quote = state[idx]
      return [
        ...state.slice(0, idx),
        { ...quote, votes: (quote.votes += 1) },
        ...state.slice(idx + 1)
      ]

    case "DOWNVOTE_QUOTE":
      // first we need to find the quote, we can use the findIndex helper method
      idx = state.findIndex(quote => quote.id === action.quoteId)
      // assign quote to state sub found idx
      quote = state[idx]
      if (quote.votes > 0) {
        return [
          ...state.slice(0, idx),
          { ...quote, votes: (quote.votes -= 1) },
          ...state.slice(idx + 1)
        ]
      }
      return state
    default:
      break
  }

  return state
}
