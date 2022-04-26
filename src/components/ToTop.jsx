import React from 'react'

function ToTop() {
  return (
    <div className="top" onClick={() => window.scrollTo(0,0)}>
        <img src={process.env.PUBLIC_URL + "/assets/arrow-icon.svg"} alt="arrow" />
    </div>
  )
}

export default ToTop