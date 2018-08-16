import * as React from 'react';

interface ICompo1Props {
    prop1: string;
};

interface ICompo1States {
    input1: string;
    state1: string;
}

class Compo1 extends React.Component<ICompo1Props, ICompo1States> {
    constructor(props: ICompo1Props) {
        super(props);
        const state: ICompo1States = {
            input1: 'default',
            state1: 'hoge',
        }
        this.state = state;
        console.log('constructer');
    }
    public componentWillMount() {
        console.log('componentWillMount')
    }
    public componentDidMount() {
        console.log('componentDidMount')
    }
    public componentWillReceiveProps(nextProps: ICompo1Props) {
        console.log('componentWillReceiveProps:next:' + nextProps.prop1);
        console.log('componentWillReceiveProps:this:' + this.props.prop1);
    }
    public shouldComponentUpdate(nextProps: ICompo1Props, nextStates: ICompo1States): boolean {
        console.log('shouldComponentUpdate:prop1:' + nextProps.prop1);
        console.log('shouldComponentUpdate:prop1:' + nextProps.prop1);
        console.log('shouldComponentUpdate:state1:' + nextStates.state1);
        console.log('shouldComponentUpdate:state1:' + nextStates.state1);
        if (nextProps.prop1 === 'fuga') {
            return false;
        } else {
            return true;
        }
    }
    public componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    public componentDidUpdate() {
        console.log('componentDidUpdate');
        console.log('------------------');
    }
    public componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    public render() {
        const handleChangeInput = (e: any) => {
            console.log('input: ' + e.target.value);
            this.setState({
                state1: e.target.value
            });
        }
        return (
            <div>
                <label>Compo1:
                <input type="text" onChange={handleChangeInput} /></label>
            </div>
        );
    }
}

export default Compo1;
