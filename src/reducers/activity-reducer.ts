
import { options } from '../types';


export type ActivityAction = 

{ type:'save-activity', payload:{newActivity:options}}


type activityState={
activities : options[]
}



export const initialState : activityState = {

activities: []

}



export const activityReducer = (
state: activityState = initialState,
action: ActivityAction

) =>{
    if(action.type==='save-activity'){
        console.log('desde el type save-activity');
        //* Este codigo maneja la logica en el state
        console.log('desde el type de save-activity');
    }
}