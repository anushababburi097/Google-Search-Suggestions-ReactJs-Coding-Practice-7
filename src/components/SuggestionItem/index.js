// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {googleUser, updatedDetailsInput} = props
  const {suggestion} = googleUser
  const onDeleteArrowIcon = () => {
    updatedDetailsInput(suggestion)
  }
  return (
    <li className="list-items-container">
      <p className="para">{suggestion}</p>
      <button type="button" onClick={onDeleteArrowIcon} className="arrow-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-image"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
