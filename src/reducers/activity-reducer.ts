
import { Options } from '../types';


export type ActivityAction = 

{ type:'save-activity', payload:{newActivity:Options}}


type activityState={
activities : Options[]
activeID : Options['id']
}



export const initialState : activityState = {

activities: [],
activeID : ''

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