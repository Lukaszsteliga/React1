import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: []
  };

  async componentDidMount() {
    const url = "https://kkbusy.herokuapp.com/katowiceToKrakow?fbclid=IwAR3EgD9A0Lu0IKVY5ZXkkZPf8Bho0z-e9PHDnqpzgpwBta9wkBG00_R3Mbw";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data, loading: false });
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
      {this.state.people.map(person => (
        <div key={person.id}>
          <div>{person.id} {person.stop} {person.price} {person.distance}</div>
        </div>
      ))}
    </div>
  );
  }
}
