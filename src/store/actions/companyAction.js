import * as firebase from 'firebase'


// start job post coding

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
// end job post coding


// get all jobs data form firebase
export function getAllJobs(){
     var jobs = []; 
     return (dispatch) =>{
         dispatch(getJobs())
           
         firebase.database().ref('/jobs/').on('value' , (snapshot) =>{
           
             var obj = snapshot.val();
             console.log();
             for(var data in obj){
                 jobs.push(obj[data])
             }   
             dispatch(getALlJobsWithSuccessFull(jobs))

         })
        //  .then(() => dispatch(getALlJobsWithSuccessFul(jobs)))
        //  .catch((error) => dispatch(getALlJobsWithRejected(error)))


     }
}

function getJobs(){
    return{
        type:"GET_JOBS"
    }
}

function getALlJobsWithSuccessFull(jobs){
    return{
        type:"GET_ALL_JOBS_WITH_SUCCESSFULL",
        jobs: jobs
    }
}
function getALlJobsWithRejected(error){
    return{
        type:"GET_ALL_JOBS_WITH_REJECTED",
        error: error
    }
}
// get single job data form reducers


export function getSingleJobDetails(id){
    return (dispatch) =>{
        
        dispatch(singleJobDetails())
         firebase.database().ref('/jobs/').child(id).on('value', (snapshot) =>{
              
              var job = snapshot.val();
              console.log(job)
             dispatch(singleJobDetailsWithSuccessFull(job))
         })
        // .then((job) => {
        //      dispatch(singleJobDetailsWithSuccessFull(job))
        // })
        // .catch((error) => {
        //     dispatch(singleJobDetailsWithRejected(error))
        // })

    }
}

function singleJobDetails(){
    return{
        type:"SINGLE_JOB_DETAILS"
    }
}
function singleJobDetailsWithSuccessFull(job){
   return{
        type : "SINGLE_JOB_DETAILS_WITH_SUCCESSFULL",
        job : job
   }
}
function singleJobDetailsWithRejected(error){
    return{
        type:"SINGLE_JOB_DETAILS_WITH_REJECTED",
        error: error
    }
}