import { connect} from 'react-redux'
import {ViewAllJobs} from './../../components'
import {getAllJobs} from './../../store/actions'
function mapStateToProps(state){
    return{
        jobsList: state.CompanyReducer.jobs,
        isAuth : state.AuthReducer.isAuthenticated

    }
}

function mapDispatchToProps(dispatch){
    return{
        getJobs: () => dispatch(getAllJobs())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllJobs)