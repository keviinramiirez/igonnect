import React from 'react'

// function Label({ topPos }) {
function Label(props) {
  console.log(props)
  // const testRef = (i) => {
  //   setTimeout(() => {
  //     console.log('i', i, itemEls.current[i])
  //     console.log(itemEls.current[i] ? itemEls.current[i].offsetTop : -1)
  //     return itemEls.current[i] ? itemEls.current[i].offsetTop : 0
  //   }, 1000)
  // }

  console.log('topPos', props.topPos)

  return (
    <span className='freeLabel' style={{ top: props.topPos }}>
      Free
    </span>
  )
}

export default Label
