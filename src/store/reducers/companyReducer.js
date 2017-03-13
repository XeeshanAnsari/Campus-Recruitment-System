

const InitalState = {
     jobDetails:{}

};


function CompanyReducer(state = InitalState , action){
    switch(action.type){
        
        case "NEW_JOB_POST":
           return (state , { jobDetails: action.value }) 
        case "VIEW_JOB_POST":
           return (state , { jobDetails: action.value }) 
          
        default:
           return state
    }
}

export default CompanyReducer