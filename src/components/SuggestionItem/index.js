import './index.css'

const SuggestionItem = props => {
  const {searchText, onUpdatedSuggestion} = props
  const {suggestion} = searchText

  const onSuggestion = () => {
    onUpdatedSuggestion(suggestion)
  }

  return (
    <li className="suggestion-card" onClick={onSuggestion}>
      <p className="suggestion-text">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
        onClick={onSuggestion}
      />
    </li>
  )
}

export default SuggestionItem
