import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';

const customer = {
  'name': '길태우',
  'birthday': '941220',
  'gender': '남자',
  'job': '무직'
}

class App extends Component {
  render() {
    return (
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}

export default App;
