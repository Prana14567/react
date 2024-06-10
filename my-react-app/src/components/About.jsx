import React, {useState} from 'react'



export default function About() {

    const [myStyle,setMyStyle]=useState({
        color:'white',
        backgroundColor:'black'
    })

    const [btnText,setBtnText]=useState('enable light mode')
    

    const toggleClick=()=>{
     if(myStyle.color=='white'){
        setMyStyle({
            color:'black',
            backgroundColor:'white',
            border:'3px solid black'
        });
        setBtnText('enable dark mode');
     }
     else{
        setMyStyle({
            color:'white',
            backgroundColor:'black',
            border:'3px solid white'
        })
        setBtnText('enable light mode');
     }

    }
  return (
    <div className='container my-4' style={myStyle} >
        <h1>About Us</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed my-3"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed my-3"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed my-3" style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
  <button type="button" className="btn btn-success my-3" onClick={toggleClick}>{btnText}</button>
</div>
    
  )
}
