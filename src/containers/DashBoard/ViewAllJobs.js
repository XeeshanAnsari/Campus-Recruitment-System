import { connect} from 'react-redux'
import {ViewAllJobs} from './../../components'
import {getAllJobs} from './../../store/actions'
function mapStateToProps(state){
    return{
        jobs: state.CompanyReducer.jobs

    }
}

function mapDispatchToProps(dispatch){
    return{
        getAllJobs: () => dispatch(getAllJobs())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllJobs)