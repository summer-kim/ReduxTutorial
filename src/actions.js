import * as actionType from './actionType';

const bugAdded = description =>({
   type : actionType.ADD_BUGS,
   payload : {// put as much as minimu, to payload
      description // description : description
   }
})

const bugRemoved = id =>({
   type : actionType.REMOVE_BUGS,
   payload : {
      id
   }
})

const bugResolved = id =>({
   type : actionType.RESOLVE_BUGS,
   payload : {
      id
   }
})

export {bugAdded, bugRemoved, bugResolved};