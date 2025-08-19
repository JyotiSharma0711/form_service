import axios from "axios"




export async function callMockService(domain:any,submissionData:any){
    
    // const submissionUrl = `${process.env.MOCK_SERVICE_URL?.replace("domain",domain)}/flow/new`
    const submissionUrl = `${process.env.BACKEND_URL}/flow/proceed`
    
    const mockSubmitData = {...submissionData, inputs:{}}
//     const mockSubmitData = {...submissionData, 
//               "json_path_changes": {
//     "$.message.intent.fulfillment.stops[?(@.type=='START')].location.city.code": "std:080"
//   },
//   "inputs": {
//     "city_code": "std:080"
//   }
//     }


    const result =  await axios.post(submissionUrl,mockSubmitData)

}