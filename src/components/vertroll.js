import React, { useEffect, useRef } from 'react'
// import styled from 'styled-components';
// import {Link} from 'gatsby'
import { gsap } from "gsap"; //  , Power4, Expo

import School from '../../static/school.jpg'
import Listen from '../../static/listening.jpg'
import Glitchy from '../../static/glitchgif.gif'


const VertRoll = ({ toggle }) => {
  console.log("from slider: toggle=", toggle)

  let tailGlitch = useRef(null) // 0%
  let centerGlitch = useRef(null) // 10%
  let headGlitch = useRef(null) // 20%

  useEffect(() => {

    gsap.set(tailGlitch, { attr: { 'offset': '0%' } })
    gsap.set(centerGlitch, { attr: { 'offset': '5%' } })
    gsap.set(headGlitch, { attr: { 'offset': '10%' } })

    const tl = gsap.timeline({ defaults: { delay: 0 } })
    tl.to(headGlitch, { duration: 4, attr: { 'offset': '100%' } })
      .to(centerGlitch, { duration: 4, attr: { 'offset': '95%' } }, '-=4')
      .to(tailGlitch, { duration: 4, attr: { 'offset': '90%' } }, '-=4')


  }, [toggle])
  return (
    <svg viewBox="0 0 600 600" xmlns="https//www.w3.org/2000/svg" width="100%" preserveAspectRatio="none">

      <linearGradient id="vertGrad" x1="50%" x2="50%" y1="100%" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fff" id="leftstop" />

        <stop offset="0%" stopColor="#fff" stopOpacity="1" ref={elem => tailGlitch = elem} />
        <stop offset="5%" stopColor="#000" stopOpacity="1" ref={elem => centerGlitch = elem} />
        <stop offset="10%" stopColor="#fff" stopOpacity="1" ref={elem => headGlitch = elem} />

        <stop offset="100%" stopColor="#fff" id="rightstop" />
      </linearGradient>

      <mask id="Mask">
        <rect x="-300" y="0" width="1200" height="600" fill="url(#vertGrad)" />
      </mask>

      {/* <filter id="vertFilter">
      <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
      <feFlood in="SourceGraphic"  flood-opacity="0.5" flood-color="red" result="flood" />
  <feOffset in="SourceGraphic" dx="-250" dy="0" result="off" />
  <feMerge>
   <feMergeNode in="flood" />
   <feMergeNode in="off" />
  </feMerge>

      </filter> */}

      <image className="img-back" xlinkHref={Glitchy} width="80%" height="80%" />
      <image className="img-front" xlinkHref={School} width="80%" height="80%" style={{ mixBlendMode: 'luminosity' }}/>
      <image className="img-front" xlinkHref={School} width="80%" height="80%" mask="url(#Mask)" />

    </svg>
  );
}

export default VertRoll; 
