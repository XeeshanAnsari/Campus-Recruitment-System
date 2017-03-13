

const InitalState = {
   
    userInfo:{}
    

};


function DataReducer(state = InitalState , action){
    switch(action.type){
       

        case "CURRENT_USER_INFO":
           return (state ,{ userInfo:action.userInfo })    
       
          
        default:
           return state
    }
}

export default DataReducer