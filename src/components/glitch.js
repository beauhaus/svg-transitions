import React, { useEffect, useRef } from 'react'
// import { gsap } from "gsap"; //  , Power4, Expo
import styled from 'styled-components';

// import School from '../../static/school.jpg'
// import Listen from '../../static/listening.jpg'

const StyledGlitch = styled.svg`
    text {
        font-size: 200px;
        font-family: 'Arial Black', 'Arial Bold', Gadget, sans-serif;
        fill: #eee;
    }
    .warp-grp {
        mix-blend-mode: multiply;

        text {
            fill: rgba(255,0,0,0.9);
        }
    }
    .bot-grp {
        mix-blend-mode: color-burn;

        text {
            fill: rgba(0,255,0,1);
            // transform: scale(1, 1.2);
        }
    }
    .top-grp {
        mix-blend-mode: color-burn;
        text {
            fill: hsla(231, 99%, 31%, 0.8);

            // transform: scale(1.3, 1.3);
            transform: scale(0.6, 2);
            
            transform-origin: 50% 50%;
        }
    }
`;

const Glitch = ({ toggle }) => {
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

            <StyledGlitch
                viewBox="0 0 500 500" //TODO change to 600 600?
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none">

                <filter id="midSliceFilter">
                    <description>warp filter 1</description>
                    <feTurbulence baseFrequency="0.015" numOctaves="1" result="turbulence_3" />
                    <feDisplacementMap in="SourceGraphic" in2="turbulence_3" scale="10" result="warp" />
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                </filter>

                <clipPath id="midslice">
                    <rect x="0" y="110" width="500" height="125" />
                </clipPath>
                <clipPath id="topslice">
                    <rect x="0" y="30" width="500" height="600" />
                </clipPath>
                <clipPath id="lowerslice">
                    <rect x="0" y="250" width="500" height="40" />
                </clipPath>
                <path className="bg" fill="#bcbcbc" d="M0 0h500v500H0z" width="100%" height="100%" />

                <g className="warp-grp" clip-path="url(#midslice)" filter="url(#midSliceFilter)">
                    <text x="15" y="290">YES</text>
                </g>
                <text className="txt-main" x="30" y="290">YES</text>
                <g className="warp-grp-2 bot-grp" clip-path="url(#lowerslice)"  filter="url(#midSliceFilter)">
                    {/* <path fill="#bcbcbc" d="M0 0h500v500H0z" /> */}
                    <text x="46" y="290" >YES</text>
                </g>
                <g className="warp-grp-2 top-grp" clip-path="url(#topslice)"  filter="url(#midSliceFilter)">
                    <text x="22" y="390" >YES</text>
                </g>
            </StyledGlitch>

        </div>

    );
}

export default Glitch;

/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">

 <filter id="upperSliceFilter">
  <feFlood in="SourceGraphic" flood-opacity="0.5" flood-color="red" result="flood" />
  <feOffset in="SourceGraphic" dx="-250" dy="0" result="off" />
  <feMerge>
   <feMergeNode in="flood" />
   <feMergeNode in="off" />
  </feMerge>
 </filter>

 <filter id="midSliceFilter">
  <description>warp-1</description>
  <feTurbulence baseFrequency="0.015" numOctaves="1" result="turbulence_3" />
  <feDisplacementMap in="SourceGraphic" in2="turbulence_3" scale="10" result="warp" />
 </filter>

 <filter id="midSliceFilter2">
  <feFlood in="SourceGraphic" flood-opacity="0.8" flood-color="navy" result="flood" />
  <feOffset in="SourceGraphic" dx="-100" dy="60" result="off" />

  <feTurbulence type="turbulence" baseFrequency="0.015" numOctaves="1" result="turbulence_3" />
  <feDisplacementMap in="off" in2="turbulence_3" scale="12" result="warp" />
  <feMerge>
   <!--    <feMergeNode in="flood" /> -->
   <feMergeNode in="warp" />
      <feMergeNode in="off" />
  </feMerge>
<!--   <feMorphology operator="dilate" radius="4" />
  <feMorphology operator="erode" radius="13" /> -->
 </filter>

 <filter id="lowerSliceFilter">
  <feOffset in="SourceGraphic" dx="-10" dy="10" />
 </filter>

 <clipPath id="upperslice">
  <rect x="0" y="160" width="500" height="3" />
 </clipPath>

 <clipPath id="midslice">
  <rect x="0" y="210" width="500" height="125" />
 </clipPath>

 <clipPath id="lowerslice">
  <rect x="0" y="250" width="500" height="40" />
 </clipPath>


  <g class="warp-grp" clip-path="url(#midslice)" filter="url(#midSliceFilter)">
<!--   <path fill="#f7931e" d="M0 0h500v500H0z" /> -->
  <text x="10" y="290" id="warp-txt-r">YES</text>
 </g>

 <text id="txt-main" fill="#eee" x="10" y="290">YES</text>

 <g clip-path="url(#upperslice)" filter="url(#upperSliceFilter)">
  <path  fill="#bcbcbc"  d="M0 0h500v500H0z" />
  <text fill="hsla(212, 100%, 58%, 0.959)" x="10" y="290">YES</text>
 </g>



 <g clip-path="url(#lowerslice)" transform="scale(1, 1.2)" filter="url(#lowerSliceFilter)">
  <path fill="#bcbcbc" d="M0 0h500v500H0z" />
  <text  fill="rgba(0,255,0,0.8)" x="10" y="290" fill="whitesmoke">YES</text>
 </g>
<!-- transform: scale(2, 0.5); /* Equal to scaleX(2) scaleY(0.5)
*/


