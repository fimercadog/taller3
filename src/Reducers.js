import { createSlice } from "@reduxjs/toolkit";

const estadoIni = {
    
    info: {
        token: '54654',
        userId:  'user0'
    },
   
    
    
} ;

const reducers = createSlice( {
    name: 'taller3',
    initialState: estadoIni,
    reducers: {
        
        
        setINFO: (state,action) => {
            state.info.token = action.payload ;
            
            
        }
        
       
    }
} ) ;

export const {setINFO} = reducers.actions ;
export default reducers.reducer ;