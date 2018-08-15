import React, { Component } from 'react';

export class SandBox extends Component {
    render() {
        function ImageCompo(props) {
            const title = "初動"
            const imgUrl = "http://uta.pw//shodou/img/28/214/.PNG";

            const body = (
                <div>
                    <h1>{title}</h1>
                    <p><img src={imgUrl}></img></p>
                </div>
            );
            return body;
        }
        return (
            <div>
                <p>SandBox Test</p>
                <ImageCompo></ImageCompo>
            </div>
        );
    }
}