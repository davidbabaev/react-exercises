import React, { useState } from 'react'

export default function CheckListEx() {
    const [names, setNames] = useState(['dave', 'alice', 'nastya', 'adva']);
    const [selected, setSelected] = useState(['dave', 'nastya']);

    const [checkedName, setCheckedName] = useState('')
    const checkName = (name) => {
        setCheckedName(name)
    }

    return (
      <div>
          {names.map((name, index) => (
              <div key={index}>
                  <p>{name}</p>
                  <button
                      onClick={() => checkName(name)}
                  >Click</button>
              {checkedName === name && selected.includes(name) && (
                  <p>This name is selected! ✅</p>
              )}
              {checkedName === name && !selected.includes(name) && (
                <p>This name is NOT selected ❌</p>
              )}
              </div>
          ))}
      </div>
    )

    }

