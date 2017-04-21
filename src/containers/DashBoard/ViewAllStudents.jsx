import  {connect} from 'react-redux'
import {ViewAllStudents} from './../../components'
import {getAllStudents} from './../../store/actions'


function mapStateToProps(state){
    return {
         studentsList: state.StudentReducer.studentsData,
         isAuth : state.AuthReducer.isAuthenticated
    }
}

function mapDispatchToProps(dispatch){
    return {
          getAllStudents: () => dispatch(getAllStudents())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllStudents)