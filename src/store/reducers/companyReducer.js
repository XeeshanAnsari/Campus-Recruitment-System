

const InitalState = {
     jobs:{},
     singleJob:{},
     isError: false,
     error:""     

};


function CompanyReducer(state = InitalState , action){
    switch(action.type){
        
        case "JOB_POST":
           return Object.assign({}, state ,{isError: false})
        case "JOB_POST_WITH_SUCCESSFULL":
           return Object.assign({}, state , {jobsData:action.job , isError: false})
       case "JOB_POST_WITH_REJECTED":
           return Object.assign({}, state ,{error: action.error , isError:true})    
          
        default:
           return state
    }
}

export default CompanyReducer