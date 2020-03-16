import React, { useEffect, useRef } from 'react'
// import { gsap } from "gsap"; //  , Power4, Expo
import styled from 'styled-components';

// import School from '../../static/school.jpg'
// import Listen from '../../static/listening.jpg'

const StyledScrnTxt = styled.svg`
    text {
        font-size: 200px;
        font-family: 'Arial Black', 'Arial Bold', Gadget, sans-serif;
        // fill: #eee;
    }
    #lines-scrntxt-1 {      
      rect {
       height: 2px;
       width: 100%;
      }
     }
     
       
    #txt-main {
        fill: #fff;
      opacity:0.9;
     }

`;

const ScrnTxt = ({ toggle }) => {
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
        <div className="img-container">

            <StyledScrnTxt
                viewBox="0 0 500 500" //TODO change to 600 600?
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100%"
                height="100%"
                preserveAspectRatio="none">

                     
  

<path id="bg" fill="#000" d="M0 0h500v500H0z" width="100%" height="100%" />

<filter id="blur" filterUnits="userSpaceOnUse">
 <feGaussianBlur stdDeviation="2" />
</filter>
 

<filter id="filt-green" filterUnits="userSpaceOnUse">
 <feComponentTransfer in="SourceGraphic" result="trans">
  <feFuncG type="discrete" tableValues="1 1 0 0"></feFuncG>
 </feComponentTransfer>
 <feGaussianBlur in="trans" stdDeviation="15" />
</filter>

<filter id="filt-red" filterUnits="userSpaceOnUse">
 <feComponentTransfer in="SourceGraphic" result="trans">
  <feFuncR type="discrete" tableValues="1 1 0 0"></feFuncR>
 </feComponentTransfer>
 <feGaussianBlur in="trans" stdDeviation="8" />
</filter>

<filter id="filt-yellow" filterUnits="userSpaceOnUse">
 <feComponentTransfer in="SourceGraphic" result="trans">
  <feFuncR type="discrete" tableValues="1 1 0 0"></feFuncR>
  <feFuncG type="discrete" tableValues="1 0 0 0"></feFuncG>
 </feComponentTransfer>
 <feGaussianBlur in="trans" stdDeviation="6 0" result="blur" />
</filter>

<clipPath id="lines-scrntxt-1" >
  <rect x="0" y="168" />
 <rect x="0" y="112" />
 <rect x="0" y="116" />
 <rect x="0" y="120" />
 <rect x="0" y="124" />
 <rect x="0" y="128" />
 <rect x="0" y="132" />
 <rect x="0" y="136" />
 <rect x="0" y="140" />
 <rect x="0" y="144" />
 <rect x="0" y="148" /> 
 <rect x="0" y="152" />
 <rect x="0" y="156" />
 <rect x="0" y="160" />
 <rect x="0" y="164" />
 <rect x="0" y="168" />
 <rect x="0" y="172" />
 <rect x="0" y="176" />
 <rect x="0" y="180" />
 <rect x="0" y="184" />
 <rect x="0" y="188" />
 <rect x="0" y="192" />
 <rect x="0" y="196" />
 <rect x="0" y="200" />
 <rect x="0" y="204" />
 <rect x="0" y="208" />
 <rect x="0" y="212" />
 <rect x="0" y="216" />
 <rect x="0" y="220" />
 <rect x="0" y="224" />
 <rect x="0" y="228" />
 <rect x="0" y="232" />
 <rect x="0" y="236" />
 <rect x="0" y="240" />
 <rect x="0" y="244" />
 <rect x="0" y="248" />
 <rect x="0" y="252" />
 <rect x="0" y="256" />
 <rect x="0" y="260" />
 <rect x="0" y="264" />
 <rect x="0" y="268" />
 <rect x="0" y="272" />
 <rect x="0" y="276" />
 <rect x="0" y="280" />
 <rect x="0" y="284" />
 <rect x="0" y="288" />
 <rect x="0" y="292" />
 <rect x="0" y="296" />
 <rect x="0" y="300" />
</clipPath>

<g clipPath="url(#lines-scrntxt-1)" >
 <text id="txt-green" x="20" y="280" filter="url(#filt-green)">YES</text>
 <text id="txt-red" x="20" y="280" filter="url(#filt-red)">YES</text>
 <text id="txt-yellow" x="20" y="280" filter="url(#filt-yellow)">YES</text>
</g>

<text id="txt-main" x="20" y="280" filter="url(#blur)" >YES</text> 
<text id="txt-green-overlay" x="20" y="280" fill="#48ff00" fillOpacity="0.2" filter="url(#blur)"  >YES</text>
 

</StyledScrnTxt>

        </div>

    );
}

export default ScrnTxt;
