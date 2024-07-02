import { DELETE_EMPLOYEE_FAIL_REQUEST, DELETE_EMPLOYEE_MAKE_REQUEST, DELETE_EMPLOYEE_SUCCESS_REQUEST, EMPLOYEE_DETAIL_SUCCESS, FETCH_EMPLOYEE_FAIL_REQUEST, FETCH_EMPLOYEE_MAKE_REQUEST, FETCH_EMPLOYEE_SUCCESS_REQUEST, UPDATE_EMPLOYEE_DETAIL_FAIL, UPDATE_EMPLOYEE_DETAIL_REQUEST, UPDATE_EMPLOYEE_DETAIL_SUCCESS } from "./actionType"
import axios from "axios"
import {url} from "../utils/api"

export const fetchEmployee=()=>async(dispatch)=>{
try{
dispatch({
    type:FETCH_EMPLOYEE_MAKE_REQUEST
})
const {data}=await axios.get(`${url}/employees`)
//console.log(data,"data")
dispatch({
    type:FETCH_EMPLOYEE_SUCCESS_REQUEST,
    payload:data.data
})
}catch(err){
    window.alert(err)
    dispatch({
        type:FETCH_EMPLOYEE_FAIL_REQUEST,
        payload:err.message
    })
}
}

export const deleteEmployee=(id)=>async(dispatch)=>{
    //console.log(id,"iddlt")
    try{
        dispatch({
            type:DELETE_EMPLOYEE_MAKE_REQUEST
        })
         const dltdata=await axios.delete(`${url}/delete/${id}`)
       //console.log(dltdata,"dltdata")
        dispatch({
            type: DELETE_EMPLOYEE_SUCCESS_REQUEST,
            payload: id
        })
    }catch(err){
        dispatch({
            type:DELETE_EMPLOYEE_FAIL_REQUEST,
            payload:err.message
        })
    }
}

export const employeeDetail = (id) => async (dispatch) => {
    //console.log(id,'empdtlid')
    try {

        const { data } = await axios.get(`${url}/employee/${id}`)
        //console.log(data, "edit")
        dispatch({
            type: EMPLOYEE_DETAIL_SUCCESS,
            payload: data.data
        })
    } catch (err) {
        dispatch({
            type: FETCH_EMPLOYEE_FAIL_REQUEST,
            payload: err.message
        })
    }
}

export const updateDetail=(uData)=>async(dispatch)=>{
    //console.log(uData,"uDataedit")
try{
    dispatch({
        type:UPDATE_EMPLOYEE_DETAIL_REQUEST
    })
    const {data}=await axios.put(`${url}/update/${uData.id}`, uData)
    //console.log(data,"udata")
    dispatch({
        type:UPDATE_EMPLOYEE_DETAIL_SUCCESS,
        payload:data.data
    })
}catch(err){
    dispatch({
        type: UPDATE_EMPLOYEE_DETAIL_FAIL,
        payload: err.message
    })
}
}