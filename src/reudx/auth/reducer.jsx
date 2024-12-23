import { CLEAR_USER, ERROR_LOGIN, LOGIN, SUCCESS_LOGIN } from "./type"

const initialState={
    lodaing:false,
    access_token:null,
    success:null,
    userInfo:null
}

export default function authReducer(state=initialState,action){
    console.log('ac',action);
    
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                lodaing:true,
                access_token:null,
                success:null,
                userInfo:null
            }
        case SUCCESS_LOGIN:
            return {
                ...state,
                lodaing:false,
                access_token:action.res.access_token,
                success:true,
                userInfo:action.res.user
            }
        case ERROR_LOGIN:
            return {
                ...state,
                lodaing:false,
                access_token:null,
                success:false,
                userInfo:null
            }
        case CLEAR_USER:
                return {
                    ...state,
                    loading: false,
                    success: null,
                  };
            
        default:
        return  state
        
    }
}