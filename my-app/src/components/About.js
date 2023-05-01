import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode==='dark'?'white':'black',
        backgroundColor: props.mode==='dark'?'#70a0e7':"white",
        border:props.mode==="dark"?"solid 1px white":"solid 1px black"

    }

    // const[mystyle,setmystyle] = useState({
    //     color : 'black',
    //     backgroundColor:'white',
    // })
    //cls-cumulative layout shift

    // const[btnText,setbtnText] = useState('enable to dark mode')

    // let togglestyle = () =>{
    //     if(mystyle.color ===='black'){
    //         setmystyle({
    //             color:'white',
    //             backgroundColor : 'black',
    //             border:'1px solid white'
    //         })
    //         setbtnText("Enable light mode");
    //     }
    //     else{
    //         setmystyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setbtnText('enable dark mode')
    //     }
    // }

  return ( 
    <div className='container my-2' style={myStyle}>
             <h1>About Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                         <strong> Analyze your text here</strong>
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong> Free to use</strong>
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong> Browser Compatible </strong>
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse"  style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                </div>
                {/* <button className='btn btn-primary my-2' onClick={toggleStyle}>{btnText}</button> */}
    </div>
  )
}
