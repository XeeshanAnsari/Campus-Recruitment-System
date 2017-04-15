import  {connect} from 'react-redux'
import {ViewStudentDetails} from './../../components'
import {getSingleStudentDetails}  from './../../store/actions'

function mapStateToProps(state){
    return {
        students: state.StudentReducer.studentsData,
        singleStudent: state.StudentReducer.singleStudent
    }
}

function mapDispatchToProps(dispatch){
    return {
       getSingleStudentDetails: (id) => dispatch(getSingleStudentDetails(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewStudentDetails)