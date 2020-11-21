import * as actions from './actions';
import store from './store';

store.dispatch(actions.bugAdded('BUG1'));
store.dispatch(actions.bugResolved(1));

console.log(store.getState());