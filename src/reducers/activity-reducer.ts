
import { Options } from '../types';


export type ActivityAction = 

{ type:'save-activity', payload:{newActivity:Options}}


type activityState={
activities : Options[]

}



export const initialState : activityState = {

activities: [],

}



export const activityReducer = (
state: activityState = initialState,
action: ActivityAction

) =>{
    if(action.type==='save-activity'){
        
        return{
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }
        
        
    }
}