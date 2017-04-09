import React ,{Component} from 'react'
import  {connect} from 'react-redux'
// import {StudentRegister} from './../../components'
import {newStudentRegister} from './../../store/actions'

function mapStateToProps(state){
    return {
          userAuth : state.AuthReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
          studentRegister : (studentData) => dispatch(newStudentRegister(studentData))
    }
}

class DashBoard extends Component{


    render(){
        return(
            <div>
                {console.log(...this.props)}
              {(this.props.children) ? React.cloneElement(this.props.children, this.props) : this.props.children}
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DashBoard)