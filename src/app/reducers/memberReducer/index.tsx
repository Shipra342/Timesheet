import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DropDownStruct ,DailyTaskStruct} from "./IMembersProps";

interface DsrDropdowndata {
    dsrDropdownData:DropDownStruct,
    dailyTaskData:DailyTaskStruct[],
}
const initialState: DsrDropdowndata = {
    dsrDropdownData: { projects:[],categories:[],status:[]},
    dailyTaskData:[]

}


export const memberSlice = createSlice({
    name:"taskinfo",
    initialState,
    reducers:{
        getTaskinfo:(state,action: PayloadAction<DropDownStruct> )=>{
            state.dsrDropdownData = action.payload
        },
        getAllTaskData:(state,action: PayloadAction<DailyTaskStruct>)=>{
            state.dailyTaskData.push(action.payload) 
        }
    }
})

export const {getTaskinfo,getAllTaskData } = memberSlice.actions;
export default memberSlice.reducer;