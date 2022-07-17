import React, { useReducer, useState } from 'react'

const Actions = {
    TOGGLE : "toggle"
}

function reducer(theme, action){
    switch(action.type){
        case Actions.TOGGLE:
            {   if(theme.mode === 'Dark')
                return {...theme, mode: "Light",  
                                    body: {...theme.body, backgroundColor: "white", color: "black"}, 
                                    header:{...theme.header, backgroundColor: "#aab8c1", color: "black"}}
            }
            return  {...theme, mode : "Dark", header:{backgroundColor: "#7e7575", color: "white"}, body:{ backgroundColor: "black", color: "white"}}
        default: 
            return theme;
    }


}

export default function AboutUs() {
    

    const [theme, dispatch]=useReducer(reducer, {mode : "Light", header:{backgroundColor: "#aab8c1", color: "black"}, body:{ backgroundColor: "white", color: "black"}});
    const [mode , setMode] = useState(true);

  return (
    <div className='container my-4'>
    <h1 className='my-2 text-center'>About Us</h1>
    <div className="accordion" id="accordionExample">
    <div className="accordion-item" style={theme.body}>
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button"  style ={theme.header} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div className="accordion-item" style={theme.body}>
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" style ={theme.header} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div className="accordion-item" style={theme.body}>
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button"style ={theme.header} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
      
    </div>
  </div>
  <div>
    <button className='my-3 mx-2 btn btn-dark' onClick={ () => {setMode(previousMode => !previousMode);dispatch({type : Actions.TOGGLE})}}>Enable {theme.mode ==="Light" ? "Dark" : "Light"}  mode</button>
  </div>
  </div>
  )
}

