import  {connect} from 'react-redux'
import {JobPostForm} from './../../components'
import {newJobPost} from './../../store/actions'

function mapStateToProps(state){
    return {
          userAuth : state.AuthReducer.userAuth,
          isAuth : state.AuthReducer.isAuthenticated
    }
}

function mapDispatchToProps(dispatch){
    return {
          jobPost : (data) => dispatch(newJobPost(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(JobPostForm)