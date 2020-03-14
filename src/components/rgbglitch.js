import React, { useEffect, useRef } from 'react'
// import { gsap } from "gsap"; //  , Power4, Expo
import styled from 'styled-components';

// import School from '../../static/school.jpg'
// import Listen from '../../static/listening.jpg'

const StyledRGBGlitch = styled.svg`
    text {
        font-size: 200px;
        font-family: 'Arial Black', 'Arial Bold', Gadget, sans-serif;
        // fill: #eee;
    }
    #lines {
        rect {
         height: 1.5px;
         width: 100%;
        }
       }
       
       #txt-main {
          fill: #fff;
       }
`;

const RGBGlitch = ({ toggle }) => {
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

            <StyledRGBGlitch
                viewBox="0 0 500 500" //TODO change to 600 600?
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100%"
                height="100%"
                preserveAspectRatio="none">
                <path id="bg" fill="slategrey" d="M0 0h500v500H0z" width="100%" height="100%" />

                <filter id="shft-rt-filter" filterUnits="userSpaceOnUse">
                    <description>right red</description>
                    <feGaussianBlur in="SourceAlpha" stdDeviation="5 0" result="blur" />
                    <feOffset in="blur" dx="10" dy="0" result="offsetBlur" />
                    <feFlood floodColor="red" floodOpacity="0.5" result="offsetColor" />
                    <feComposite in="offsetColor" in2="offsetBlur" operator="in" result="offsetBlur" />
                </filter>
                <filter id="shft-lt-filter" filterUnits="userSpaceOnUse">
                    <description>right red</description>
                    <feGaussianBlur in="SourceAlpha" stdDeviation="5 0" result="blur" />
                    <feOffset in="blur" dx="-10" dy="0" result="offsetBlur" />
                    <feFlood floodColor="green" floodOpacity="0.5" result="offsetColor" />
                    <feComposite in="offsetColor" in2="offsetBlur" operator="in" result="offsetBlur" />
                </filter>

                <clipPath id="lines">
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
                </clipPath>

                <text id="blur-txt-1" x="10" y="290" filter="url(#shft-rt-filter)">YES</text>
                <text id="blur-txt-2" x="10" y="290" filter="url(#shft-lt-filter)">YES</text>
                <text id="txt-main"  fill="#fff" clipPath="url(#lines)" x="10" y="290">YES
</text>
            </StyledRGBGlitch>

        </div>

    );
}

export default RGBGlitch;
