import {appDispatcher} from './appDispatcher.js';
import {ActionType} from './actions';

export const nameStore = {name: '', onChange: null};
export const messageStore = {message: '', onChange: null};

appDispatcher.register(payload => {
    if (payload.actionType === ActionType.CHANGE_NAME) {
        console.log('start Action CHANGE_NAME');
        nameStore.name =payload.value;
        nameStore.onChange();
    }
})
appDispatcher.register(payload => {
    console.log('Action Start');
    console.log(payload);
    if (payload.actionType === ActionType.SUBMIT_NAME) {
        console.log('start Action SUBMIT_NAME');
        messageStore.message = nameStore.name + 'さん、こんにちは';
        messageStore.onChange();
    }
})
