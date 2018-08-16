import React from 'react';
import { Actions } from './actions';
import { nameStore, messageStore } from './stores';

export class FluxTestCompo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', message: '' };
        nameStore.onChange = () => {
            this.setState({ name: nameStore.name });
        }
        messageStore.onChange = () => {
            this.setState({ message: messageStore.message });
        }
    }
    render() {
        console.log("start render FluxTestCompo");
        return (
            <div>
                <div>
                    <input
                        value={this.state.name}
                        onChange={(e) => Actions.changeName(e.target.value)} />
                    <button onClick={(e) => Actions.submitName()}>登録</button>
                </div>
                <div>{this.state.message}</div>
            </div>
        )
    }
}
