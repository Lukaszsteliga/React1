import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: []
  };

  async componentDidMount() {
    const url = "https://kkbusy.herokuapp.com/krakowToKatowice";
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
      <h1>Rozkład jazdy:</h1>
      {this.state.people.map(person => (
        <div key={person.id}>
          <div>{person.id} {person.stop} {person.price} {person.distance}</div>
        </div>
      ))}
    </div>
  );
  }
}