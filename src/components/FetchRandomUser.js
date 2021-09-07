import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://kkbusy.herokuapp.com/katowiceToKrakow?fbclid=IwAR3EgD9A0Lu0IKVY5ZXkkZPf8Bho0z-e9PHDnqpzgpwBta9wkBG00_R3Mbw";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        <div>{this.state.person.id}</div>
        <div>{this.state.person.stop}</div>
        <div>{this.state.person.price}</div>
        <div>{this.state.person.distance}</div>
      </div>
    );
  }
}
