import React, {Component} from "react";

export default class Cat extends Component {
    render() {
        return <div>
            {(this.getCat().then(response => console.log(response)))}
        </div>
    }
    async getCat() {
        const response = await fetch(`https://http.cat/${Math.round(Math.random() * 599 - 100)}`,

            {
                mode : 'no-cors',
                headers: {
                    "Access-Control-Allow-Origin": "*",
                }
            }
        );
        return await response.blob();
    }
}