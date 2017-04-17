import  {connect} from 'react-redux'
import {ViewJobDetails} from './../../components'
import {getSingleJobDetails}  from './../../store/actions'

function mapStateToProps(state){
    return {
        job: state.CompanyReducer.singleJob
    }
}

function mapDispatchToProps(dispatch){
    return {
       getSingleJobDetails: (id) => dispatch(getSingleJobDetails(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewJobDetails)