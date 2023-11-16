import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
{
  'id': 1,
  // 'image' : 'https,
  'name' : '홍길동',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id': 2,
  // 'image' : 'https,
  'name' : '이재필',
  'birthday' : '931122',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id': 3,
  // 'image' : 'https,
  'name' : '노가다',
  'birthday' : '940912',
  'gender' : '남자',
  'job' : '현장직'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
            <Customer
              key={c.id}
              id={c.id}
              // image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            >
            </Customer>
            )
          })
        }
      </div>
    );
  }
}

export default App;
