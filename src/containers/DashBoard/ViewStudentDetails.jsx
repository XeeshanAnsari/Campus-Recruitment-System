import  {connect} from 'react-redux'
import {ViewStudentDetails} from './../../components'
import {getSingleStudentDetails}  from './../../store/actions'
import {deleteStudentWithFirebase}  from './../../store/actions'
function mapStateToProps(state){
    return {
       
        singleStudent: state.StudentReducer.singleStudent,
        userAuth : state.AuthReducer.userAuth,
        isAuth : state.AuthReducer.isAuthenticated
    }
}

function mapDispatchToProps(dispatch){
    return {
       deleteStudent: (id) => dispatch(deleteStudentWithFirebase(id)),
       getStudentDetails: (id) => dispatch(getSingleStudentDetails(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewStudentDetails)