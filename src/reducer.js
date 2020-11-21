import * as actionType from './actionType';
let lastId = 0;

function Reducer( state = [], action){
   switch (action.type){
      case actionType.ADD_BUGS :
         return [
            ...state,
            {
               id : ++lastId,
               description : action.payload.description,
               resolved : false
            }
         ]
      case actionType.REMOVE_BUGS :
         return state.filter( bug => ( bug.id !== action.payload.id))

      case actionType.RESOLVE_BUGS :
         return state.map( bug => (bug.id !== action.payload.id ? bug : {...bug, resolved : true}))

      default :
         return state;
   }
}

export default Reducer;