import React from 'react'
import './SonarButton.css'

function SonarButton({ text, onClick }) {
  return (
    <div class="sonar-emitter" onClick={onClick}>
      {/* <p>POWERED BY IGO</p> */}
      <p>{text}</p>
      <div class="sonar-wave sonar-wave1"></div>
      <div class="sonar-wave sonar-wave2"></div>
    </div>
  )
}

export default SonarButton
