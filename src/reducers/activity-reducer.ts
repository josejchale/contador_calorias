
import { Options } from '../types';


export type ActivityAction = 

{ type:'save-activity', payload:{newActivity:Options}} |
{type: 'set-activiteID', payload:{id:Options['id']}}


 export type activityState={
activities : Options[]
activeId : Options['id']
}



export const initialState : activityState = {

activities: [],
activeId : ''

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

    if (action.type==='set-activiteID'){

        return {
            ...state,
            activeID: action.payload.id
        }

    }
}