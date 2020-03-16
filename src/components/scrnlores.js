import React, { useEffect, useRef } from 'react'
// import { gsap } from "gsap"; //  , Power4, Expo
import styled from 'styled-components';

// import School from '../../static/school.jpg'
// import Listen from '../../static/listening.jpg'

const StyledScrnLoRes = styled.svg`

    text {
        font-size: 150px;
        font-family: Times,serif;
        // fill: #eee;
    }
    #loreslines {      
      rect {
       height: 5px;
       width: 100%;
      }
     }
     
       
    #txt-main {
        fill: #fff;
      opacity:0.7;
     }

`;

const ScrnLoRes = ({ toggle }) => {
    console.log("from slider: toggle=", toggle)

    //   let tailGlitch = useRef(null) // 0%
    //   let centerGlitch = useRef(null) // 10%
    //   let headGlitch = useRef(null) // 20%

    //   useEffect(() => {

    //     gsap.set(tailGlitch, { attr: { 'offset': '0%' } })
    //     gsap.set(centerGlitch, { attr: { 'offset': '5%' } })
    //     gsap.set(headGlitch, { attr: { 'offset': '10%' } })

    //     const tl = gsap.timeline({ defaults: { delay: 0 } })
    //     tl.to(headGlitch, { duration: 4, attr: { 'offset': '100%' } })
    //       .to(centerGlitch, { duration: 4, attr: { 'offset': '95%' } }, '-=4')
    //       .to(tailGlitch, { duration: 4, attr: { 'offset': '90%' } }, '-=4')


    //   }, [toggle])
    return (
        <div className="lores-container">

            <StyledScrnLoRes
                width="100%"
                height="100%"
                viewBox="0 0 1000 1000" //TODO change to 600 600?
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="none">

                     
<rect id="bg" fill="#000" width="100%" height="100%"/>

  <filter id="blur2" filterUnits="userSpaceOnUse" width="100%">
   <feGaussianBlur stdDeviation="2" />
  </filter>
  
   <filter id="blur4" filterUnits="userSpaceOnUse" width="100%">
   <feGaussianBlur stdDeviation="4" />
  </filter>
   

  <filter id="filt-green" filterUnits="userSpaceOnUse" width="100%">
  <feColorMatrix
      type="matrix"
      values="1.2 0 0 0 0
              -0.2 2.7 0.3 0.1 0
              -0.1 0 0.5 -1.6 0
              0.1 -2.5 0 1 0.9 "/>
   <feGaussianBlur stdDeviation="22" />
  </filter>

  <filter id="filt-red" filterUnits="userSpaceOnUse">
   <feComponentTransfer in="SourceGraphic" result="trans">
    <feFuncR type="discrete" tableValues="1 1 0 0"></feFuncR>
   </feComponentTransfer>
   <feGaussianBlur in="trans" stdDeviation="8 0" />
  </filter>

  <filter id="filt-yellow" filterUnits="userSpaceOnUse">
   <feComponentTransfer in="SourceGraphic" >
    <feFuncR type="discrete" tableValues="1 1 0 0"></feFuncR>
    <feFuncG type="discrete" tableValues="1 0 0 0"></feFuncG>
   </feComponentTransfer>
   <feGaussianBlur  stdDeviation="6 0"  />
  </filter>
  
  


<clipPath id="loreslines" >
   <rect x="0" y="0" />   
   <rect x="0" y="04" />
   <rect x="0" y="12" />
   <rect x="0" y="20" />
   <rect x="0" y="28" />
   <rect x="0" y="36" />
   <rect x="0" y="44" />
   <rect x="0" y="52" />
   <rect x="0" y="60" />
   <rect x="0" y="68" />
   <rect x="0" y="76" />
   <rect x="0" y="84" />
   <rect x="0" y="92" />
   <rect x="0" y="100" />
   <rect x="0" y="108" />
   <rect x="0" y="116" />
   <rect x="0" y="124" />
   <rect x="0" y="132" />
   <rect x="0" y="140" />
   <rect x="0" y="148" />
   <rect x="0" y="156" />
   <rect x="0" y="164" />
   <rect x="0" y="172" />
   <rect x="0" y="180" />
   <rect x="0" y="188" />
   <rect x="0" y="196" />
   <rect x="0" y="204" />
   <rect x="0" y="212" />
   <rect x="0" y="220" />
   <rect x="0" y="228" />
   <rect x="0" y="236" />
   <rect x="0" y="244" />
   <rect x="0" y="252" />
   <rect x="0" y="260" />
   <rect x="0" y="268" />
   <rect x="0" y="276" />
   <rect x="0" y="284" />
   <rect x="0" y="292" />
   <rect x="0" y="300" />
   <rect x="0" y="308" />
   <rect x="0" y="316" />
   <rect x="0" y="324" />
   <rect x="0" y="332" />
   <rect x="0" y="340" />
  </clipPath>

<g clipPath="url(#loreslines)" >
  <text id="txt-green" x="60" y="120" filter="url(#filt-green)">Filtered Text</text>
  <text id="txt-red" x="60" y="120" filter="url(#filt-red)">Filtered Text</text>
  <text id="txt-yellow" x="60" y="120" filter="url(#filt-yellow)">Filtered Text</text>
 </g>
 
 <text id="txt-green-overlay" x="60" y="120" fill="#48ff00" fillOpacity="1" filter="url(#blur4)" >Filtered Text</text>
 
 <text id="txt-main" x="60" y="120"  filter="url(#blur4)" >Filtered Text</text> 
 


</StyledScrnLoRes>

        </div>

    );
}

export default ScrnLoRes;

/*


 <svg viewBox="0 0 1000 1000" xmlns="https//www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" preserveAspectRatio="none">


  <rect id="bg" fill="#000" width="100%"/>
  <filter id="blur2" filterUnits="userSpaceOnUse">
   <feGaussianBlur stdDeviation="2" />
  </filter>
  
   <filter id="blur4" filterUnits="userSpaceOnUse">
   <feGaussianBlur stdDeviation="4" />
  </filter>
   

  <filter id="filt-green" filterUnits="userSpaceOnUse">
  <feColorMatrix
      type="matrix"
      values="1.2 0 0 0 0
              -0.2 2.7 0.3 0.1 0
              -0.1 0 0.5 -1.6 0
              0.1 -2.5 0 1 0.9 "/>
   <feGaussianBlur in="trans" stdDeviation="22" />
  </filter>

  <filter id="filt-red" filterUnits="userSpaceOnUse">
   <feComponentTransfer in="SourceGraphic" result="trans">
    <feFuncR type="discrete" tableValues="1 1 0 0"></feFuncR>
   </feComponentTransfer>
   <feGaussianBlur in="trans" stdDeviation="8 0" />
  </filter>

  <filter id="filt-yellow" filterUnits="userSpaceOnUse">
   <feComponentTransfer in="SourceGraphic" >
    <feFuncR type="discrete" tableValues="1 1 0 0"></feFuncR>
    <feFuncG type="discrete" tableValues="1 0 0 0"></feFuncG>
   </feComponentTransfer>
   <feGaussianBlur  stdDeviation="6 0"  />
  </filter>
  
  
 

  <clipPath id="lines" >
   <rect x="0" y="0" />   
   <rect x="0" y="04" />
   <rect x="0" y="12" />
   <rect x="0" y="20" />
   <rect x="0" y="28" />
   <rect x="0" y="36" />
   <rect x="0" y="44" />
   <rect x="0" y="52" />
   <rect x="0" y="60" />
   <rect x="0" y="68" />
   <rect x="0" y="76" />
   <rect x="0" y="84" />
   <rect x="0" y="92" />
   <rect x="0" y="100" />
   <rect x="0" y="108" />
   <rect x="0" y="116" />
   <rect x="0" y="124" />
   <rect x="0" y="132" />
   <rect x="0" y="140" />
   <rect x="0" y="148" />
   <rect x="0" y="156" />
   <rect x="0" y="164" />
   <rect x="0" y="172" />
   <rect x="0" y="180" />
   <rect x="0" y="188" />
   <rect x="0" y="196" />
   <rect x="0" y="204" />
   <rect x="0" y="212" />
   <rect x="0" y="220" />
   <rect x="0" y="228" />
   <rect x="0" y="236" />
   <rect x="0" y="244" />
   <rect x="0" y="252" />
   <rect x="0" y="260" />
   <rect x="0" y="268" />
   <rect x="0" y="276" />
   <rect x="0" y="284" />
   <rect x="0" y="292" />
   <rect x="0" y="300" />
   <rect x="0" y="308" />
   <rect x="0" y="316" />
   <rect x="0" y="324" />
   <rect x="0" y="332" />
   <rect x="0" y="340" />
  </clipPath>


  
  <g  clipPath="url(#lines)" >
  
   <text id="txt-green" x="60" y="120" filter="url(#filt-green)">Filtered Text</text>
   <text id="txt-red" x="60" y="120" filter="url(#filt-red)">Filtered Text</text>
   <text id="txt-yellow" x="60" y="120" filter="url(#filt-yellow)">Filtered Text</text>
  </g>
  <text id="txt-green-overlay" x="60" y="120" fill="#48ff00" fillOpacity="1" filter="url(#blur4)" >Filtered Text</text>
  
  <text id="txt-main" x="60" y="120"  filter="url(#blur4)" >Filtered Text</text> 
  

 </svg>

*/
