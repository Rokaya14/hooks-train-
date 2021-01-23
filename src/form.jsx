//import React from 'react';
import React, { Component, useState } from 'react';
const Form = () => {
  const [name, setName] = useState('roka')
  function handelChange(e) {
    setName(e.target.value)
  }
  return (
    <div>
      <label>My name</label>
      <input value={name}
        onChange={handelChange} />
    </div>
  );
}
// class Form extends Component {
//   state = {
//     name: "rokaya"
//   }
//   handelChange = (e) => {
//     this.setState({ name: e.target.value })
//   }
//   render() {
//     return (
//       <div>

//         <label>My name</label>
//         <input
//           value={this.state.name}
//           onChange={this.handelChange}
//         />
//       </div>
//     );
//   }
// }

export default Form;

