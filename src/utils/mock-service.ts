import axios from "axios"




export async function callMockService(domain:any,submissionData:any){
    
    // const submissionUrl = `${process.env.MOCK_SERVICE_URL?.replace("domain",domain)}/flow/new`
    const submissionUrl = `${process.env.BACKEND_URL}/flow/proceed`
    
    const mockSubmitData = {...submissionData, inputs:{}, json_path_changes:{}}


    const result =  await axios.post(submissionUrl,mockSubmitData)

}