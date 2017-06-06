import { connect } from 'react-redux'
import { addTransaction } from '../store/transactions'
import MerchantView from '../components/MerchantView'

const mapStateToProps = (state) => ({
  transactions: state.transactions
})

const mapDispatchToProps = {
  addTransaction
}

export default connect(mapStateToProps, mapDispatchToProps)(MerchantView)
