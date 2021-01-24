//import React from 'react';
import React, { useEffect, useState } from 'react';
const Form = () => {
  const [name, setName] = useState('rokaya')
  const [surname, setSurname] = useState('magdi')
  const [width, setWidth] = useState(window.innerWidth)


  function handelChangeName(e) {
    setName(e.target.value)
  }
  function handelChangeSurname(e) {
    setSurname(e.target.value)
  }
  useEffect(() => {
    document.title = name + ' ' + surname // componentDidMount + componentDidUpate
  })
  useEffect(() => {
    const handelResize = () => { setWidth(window.innerWidth) }  /// the update width state when change !=== componentDidMount
    window.addEventListener('resize', handelResize)

    return () => {
      window.removeEventListener('resize', handelResize) // same like componentwillUnmount
    }
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
      <div className="mt-4 ml-4">
        <strong>
          {width}
        </strong>
      </div>
    </div>
  );
}


export default Form;

