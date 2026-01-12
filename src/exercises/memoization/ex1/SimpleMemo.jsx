import React, { memo } from 'react'

export default memo(function SimpleMemo({text}) {
    console.log('render');
    
  return (
    <div>
        <p>hello</p>
        <p>The Counter Value Is {text}</p>
    </div>
  )
});
