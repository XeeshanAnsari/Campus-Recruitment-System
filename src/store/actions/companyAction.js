


export function newJobPost(data){
    return{
        type:'NEW_JOB_POST',
        value: data
    }
}

export function viewJobPost(data){
    return{
        type:'VIEW_JOB_POST',
        value: data
    }
}