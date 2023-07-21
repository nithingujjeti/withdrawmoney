import './index.css'

const DenominationItem = props => {
  const {denominationsList, balanceDeduction} = props
  const {value} = denominationsList

  const totalUpdate = () => {
    balanceDeduction(value)
  }

  return (
    <li className="card-list-container">
      <div>
        <button type="button" className="btn" onClick={totalUpdate}>
          {value}
        </button>
      </div>
    </li>
  )
}

export default DenominationItem
