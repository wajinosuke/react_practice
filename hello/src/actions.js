import {appDispatcher} from './appDispatcher.js';

export const ActionType = {
    CHANGE_NAME: 'CHANGE_NAME',
    SUBMIT_NAME: 'SUBMIT_NAME'
};

export const Actions = {
    changeName : (name) => {
        console.log('start changeName');
        if (name === null) return;
        appDispatcher.dispatch({
            actionType: ActionType.CHANGE_NAME,
            value: name
        })
    },
    submitName: () => {
        console.log('start submitName');
        appDispatcher.dispatch({
            actionType: ActionType.SUBMIT_NAME
        })
    }
}
