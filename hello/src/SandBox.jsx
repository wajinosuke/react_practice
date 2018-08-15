import React, { Component } from 'react';

export class SandBox extends Component {
    render() {
        const ImageCompo = (props) => {
            const title = props.title;
            const imgUrl = require('./test.png');
            const imgStyle = {
                'border': 'solid',
                'borderColor': '#030',
            };

            const body = (
                <div>
                    <h1>{title}</h1>
                    <p><img alt="img" style={imgStyle} src={imgUrl}></img></p>
                </div>
            );
            return body;
        }
        class ClockCompo extends Component {
            constructor(props) {
                super(props);

                this.state = {
                    now: (new Date()),
                    displayMode: props.displayMode
                };

                setInterval(() =>  {
                    const newState = {
                        now: (new Date())
                    };
                    this.setState(newState);
                });

            }
            getDatetimeFormat = (newDate) => {
                const year = newDate.getFullYear();
                const month = newDate.getMonth() + 1;
                const day = newDate.getDate();
                const hour = newDate.getHours();
                const minute = newDate.getMinutes();
                const second = newDate.getSeconds();
                return (
                    <p>{year}/{month}/{day} {hour}:{minute}:{second}</p>
                );
            }
            getTimeFormat = (newDate) => {
                const hour = newDate.getHours();
                const minute = newDate.getMinutes();
                const second = newDate.getSeconds();
                return (
                    <p>{hour}:{minute}:{second}</p>
                );
            }
            getDisplayTime = () => {
                switch (this.state.displayMode) {
                    case 'Time':
                        return this.getTimeFormat(this.state.now);
                    case 'Datetime':
                        return this.getDatetimeFormat(this.state.now);
                    default:
                        return (<div>error</div>);
                }
            }
            changeDisplayMode = () => {
                let newDisplayMode = '';
                switch (this.state.displayMode) {
                    case 'Time':
                        newDisplayMode = 'Datetime';
                        break;
                    case 'Datetime':
                        newDisplayMode = 'Time';
                        break;
                    default:
                        newDisplayMode = '';
                }
                const newState = {
                    displayMode: newDisplayMode,
                };
                this.setState(newState);
            }
            render = () => {
                return (
                    <div onClick={this.changeDisplayMode}>
                        {this.getDisplayTime()}
                    </div>
                );
            }
        }
        return (
            <div>
                <p>SandBox Test</p>
                <ImageCompo title="たいとる"></ImageCompo>
                <ClockCompo displayMode="Time"></ClockCompo>
            </div>
        );
    }
}