

import {signUpWithAuth ,signInWithAuth ,logOutWithAuth } from './authAction'
import {newStudentRegister , getAllStudents ,getSingleStudentDetails} from './studentAction'
import {newJobPost ,viewJobPost ,getAllJobs ,getSingleJobDetails} from './companyAction'
import {deleteStudentWithFirebase ,deleteJobWithFirebase} from './deleteAction'
export{
    signUpWithAuth,
    signInWithAuth,
    logOutWithAuth,
    getAllStudents,
    newStudentRegister,
    getSingleStudentDetails,
    newJobPost,
    viewJobPost,
    getAllJobs,
    getSingleJobDetails,
    deleteStudentWithFirebase

}