import React, { useEffect } from 'react'
import './Button.scss'
import { Link } from 'react-router-dom'
import {
  isPathIgo,
  isPathZence,
  isPathBillGenius,
  isPathJoinMe,
  checkButtonSize,
  checkIgoButtonSize,
  checkBillButtonSize
} from '../Util'


const COLOR = [
  'color__white',
  'color__black',
  'color__primary',
  'color__secondary',
  'color__primary_igo',
  'color__secondary_igo',
];

const BORDER = [
  'border__secondary',
  'border__primary',
  'border__bill_blue',
  'border__bill_green',
  'border__primary_igo',
  'border__secondary_igo'
]

const STYLES = [
  'style__transparent',
  'style__primary',
  'style__primary_bill',
  'style__primary_igo',
  'style__secondary',
  'style__secondary_bill',
];

const SIZES = [
  'size__small',
  'size__medium',
  'size__large',
  'size__xlarge',
  'size__navbar'
];

const HOVER = [
  'hover__white',
  'hover__black',
  'hover__primary',
  'hover__primary_igo',
  'hover__primary_bill',
  'hover__secondary',
  'hover__secondary_igo',
  'hover__secondary_bill',
]

const EFFECT = [
  'effect__move_y'
]

export const Button = ({
  children,
  onClick,
  buttonSize,
  buttonStyle,
  buttonBorder,
  buttonColor,
  buttonHover,
  buttonEffect,
}) => {
  const buttonSizeByPath = () => {
    // if (checkSize.length === 0) {
    //   if (isPathBillGenius()) {
    //     checkBorder = 'border__primary_bill';
    //     checkColor = 'color__black'
    //     checkHover = 'hover__primary_bill'
    //     checkSize = checkButtonSize();
    //   }
    //   else if (isPathIgo()) {
    //     checkSize = checkIgoButtonSize();
    //   }
    //   else if (isPathZence()) {
    //     checkSize = checkButtonSize();
    //   }
    // }
    if (isPathBillGenius()) {
      return checkBillButtonSize();
    }
    else if (isPathIgo()) {
      return checkIgoButtonSize();
    }
    else if (isPathZence()) {
      return checkButtonSize();
    }
    else
      return checkButtonSize();
  }
  // let checkSize = '';
  // let checkSize = SIZES.includes(buttonSize)
  //   ? buttonSize
  //   : STYLES[0];
  // let checkSize = SIZES.includes(buttonSize)
  //   ? buttonSize
  //   : '';
  let checkSize = SIZES.includes(buttonSize)
    ? buttonSize
    : buttonSizeByPath()

  const checkStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  let checkBorder = BORDER.includes(buttonBorder)
    ? buttonBorder
    : STYLES[0];

  let checkColor = COLOR.includes(buttonColor)
    ? buttonColor
    : COLOR[0];

  let checkHover = HOVER.includes(buttonHover)
    ? buttonHover
    : STYLES[0];

  const checkEffect = EFFECT.includes(buttonEffect)
    ? buttonEffect
    : '';




  const buttonResize = () => {
    if (window.innerWidth <= 1024) {
      // console.log('<= 1024');
      checkSize = 'size__medium'
    }
  }



  const button = () => {
    // buttonSizeByPath()
    // if size has already been selected
    // if (checkSize.length === 0) {
    //   if (isPathBillGenius()) {
    //     checkBorder = 'border__primary_bill';
    //     checkColor = 'color__black'
    //     checkHover = 'hover__primary_bill'
    //     checkSize = checkButtonSize();
    //   }
    //   else if (isPathIgo()) {
    //     checkSize = checkIgoButtonSize();
    //   }
    //   else if (isPathZence()) {
    //     checkSize = checkButtonSize();
    //   }
    // }
    // useEffect(() => {
    //   checkButtonSize()
    // }, [])

    if (isPathBillGenius()) {
      checkBorder = 'border__primary_bill';
      checkColor = 'color__black'
      checkHover = 'hover__primary_bill'
    }
    else if (isPathJoinMe()) {
      checkBorder = 'border__primary_join';
      checkColor = 'color__black'
      checkHover = 'hover__primary_join'
    }

    return (
      <button
        className={`btn ${checkSize} ${checkStyle} ${checkBorder} ${checkColor} ${checkHover} ${checkEffect}`}
        // className={`btn ${() => checkButtonSize()} ${checkStyle} ${checkBorder} ${checkColor} ${checkHover} ${checkEffect}`}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }


  window.addEventListener('resize', buttonResize);


  return (
    <div>
      { button()}
    </div>
  )
}

export default Button;






































// import React from 'react'
// import './Button.scss'
// import { Link } from 'react-router-dom'

// const BORDER = [
//   'border__primary',
//   'border__secondary',
//   'border__bill_blue',
//   'border__bill_green'
// ]

// const STYLES = [
//   'btn__primary',
//   'btn__secondary',
//   'btn__outline',
//   'btn__transparent_white',
//   'btn__primaryBill',
//   'btn__secondaryBill'
// ];

// const SIZES = [
//   'btn__small',
//   'btn__medium',
//   'btn__large'
// ];

// export const Button = ({
//   children,
//   onClick,
//   buttonStyle,
//   buttonSize,
//   href
// }) => {
//   const checkStyle = STYLES.includes(buttonStyle)
//     ? buttonStyle
//     : STYLES[0];

//   const checkSize = SIZES.includes(buttonSize)
//     ? buttonSize
//     : STYLES[0]

//   console.log(checkStyle, checkSize)

//   const button = () => {
//     return (
//       <button
//         className={`btn ${checkStyle} ${checkSize}`}
//         onClick={onClick}
//       >
//         {children}
//       </button>
//     )
//   }

//   return (
//     <div>
//       { button()}
//     </div>
//   )
// }

// export default Button;























