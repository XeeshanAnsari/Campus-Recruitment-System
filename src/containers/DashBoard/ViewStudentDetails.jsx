import  {connect} from 'react-redux'
import {ViewStudentDetails} from './../../components'
import {getSingleStudentDetails}  from './../../store/actions'

function mapStateToProps(state){
    return {
         student: state.StudentReducer.studentData
    }
}

function mapDispatchToProps(dispatch){
    return {
       getSingleStudentDetails: () => dispatch(getSingleStudentDetails())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewStudentDetails)