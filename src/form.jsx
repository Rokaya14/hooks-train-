//import React from 'react';
import React, { useEffect, useState } from 'react';
const Form = () => {
  const name = useFormInput('rokaya') // name is Obj
  const surname = useFormInput('magdi')
  const width = useWindowWidth()
  useDocTitle(name.value + ' ' + surname.value)




  return (
    <div className="form-group col-md-4 mt-3">
      <label>My name</label>
      <input
        class="form-control"
        {...name} />
      <label className="mt-4">sur name</label>
      <input
        class="form-control"
        {...surname} />
      <div className="mt-4 ml-4">
        <strong>
          {width}
        </strong>
      </div>
    </div>
  );
}
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handelChange(e) {
    setValue(e.target.value)
  }
  return {
    value,
    onChange: handelChange
  }
}

function useDocTitle(title) {
  useEffect(() => {
    document.title = title // componentDidMount + componentDidUpate
  })
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handelResize = () => { setWidth(window.innerWidth) }  /// the update width state when change !=== componentDidMount
    window.addEventListener('resize', handelResize)

    return () => {
      window.removeEventListener('resize', handelResize) // same like componentwillUnmount
    }
  })
  return width;
}
export default Form;

