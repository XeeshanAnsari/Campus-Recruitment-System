import  {connect} from 'react-redux'
import {StudentRegister} from './../../components'
import {newStudentRegister} from './../../store/actions'

function mapStateToProps(state){
    return {
          userAuth : state.AuthReducer.userAuth
    }
}

function mapDispatchToProps(dispatch){
    return {
          studentRegister : (studentData) => dispatch(newStudentRegister(studentData))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentRegister)