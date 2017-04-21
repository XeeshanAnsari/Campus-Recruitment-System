import  {connect} from 'react-redux'
import {ViewJobDetails} from './../../components'
import {getSingleJobDetails ,deleteJobWithFirebase}  from './../../store/actions'

function mapStateToProps(state){
    return {
        job: state.CompanyReducer.singleJob,
        userAuth : state.AuthReducer.userAuth,
        isAuth : state.AuthReducer.isAuthenticated

    }
}

function mapDispatchToProps(dispatch){
    return {
       deleteJob : (id) => dispatch(deleteJobWithFirebase(id)),
       getSingleJobDetails: (id) => dispatch(getSingleJobDetails(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewJobDetails)