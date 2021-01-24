//import React from 'react';
import React, { useEffect, useState } from 'react';
const Form = () => {
  const [name, setName] = useState('rokaya')
  const [surname, setSurname] = useState('magdi')

  function handelChangeName(e) {
    setName(e.target.value)
  }
  function handelChangeSurname(e) {
    setSurname(e.target.value)
  }
  useEffect(() => {
    document.title = name + ' ' + surname
  })
  return (
    <div className="form-group col-md-4 mt-3">
      <label>My name</label>
      <input
        class="form-control"
        value={name}
        onChange={handelChangeName} />
      <label className="mt-4">sur name</label>
      <input
        class="form-control"
        value={surname}
        onChange={handelChangeSurname} />
    </div>
  );
}


export default Form;

