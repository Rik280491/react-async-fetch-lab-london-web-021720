// create your App component here
import React from "react";

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
            peopleInSpace: []
        };
	}

	componentDidMount() {
		fetch("http://api.open-notify.org/astros.json")
			.then((res) => res.json())
			.then((data) => {
				this.setState({
                    peopleInSpace: data
                });
			});
	}

	render() {}
}
