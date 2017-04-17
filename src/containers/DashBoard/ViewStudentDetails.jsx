import  {connect} from 'react-redux'
import {ViewStudentDetails} from './../../components'
import {getSingleStudentDetails}  from './../../store/actions'

function mapStateToProps(state){
    return {
       
        singleStudent: state.StudentReducer.singleStudent
    }
}

function mapDispatchToProps(dispatch){
    return {
       getStudentDetails: (id) => dispatch(getSingleStudentDetails(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewStudentDetails)