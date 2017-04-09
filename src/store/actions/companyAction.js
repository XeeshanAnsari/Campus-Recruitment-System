import * as firebase from 'firebase'


export function newJobPost(data){
    return (dispatch) =>{
        dispatch(jobPost());
        firebase.database().ref('/').child('jobs/' + data.uid).set(data)
        .then(() =>{
            dispatch(jobPostWithSuccessFull(data))
        })
        .catch((error) =>{
            dispatch(jobPostWithRejected(error))
        })
    }
}


function jobPost(){
    return {
        type:'JOB_POST'
    }
}

function jobPostWithSuccessFull(job){
    return {
        type:'JOB_POST_WITH_SUCCESSFULL',
        job:job
    }
}
function jobPostWithRejected(error){
    return {
        type:'JOB_POST_WITH_REJECTED',
        error: error
    }
}
