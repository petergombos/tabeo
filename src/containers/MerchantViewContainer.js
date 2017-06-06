import { connect } from 'react-redux'
import { addTransaction } from '../store/transactions'
import MerchantView from '../components/MerchantView'

// Passing Props for Component
const mapStateToProps = (state) => ({
  transactions: state.transactions
})

// Passing Action Creators with Dispatch to Component
const mapDispatchToProps = {
  addTransaction
}

export default connect(mapStateToProps, mapDispatchToProps)(MerchantView)
