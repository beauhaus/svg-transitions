// import React, { useEffect, useRef } from 'react'
// import { gsap} from "gsap"; 

// import Glitchy from '../../static/glitchgif.gif'
// import Listen from '../../static/listening.jpg'



// const SimpleGrad = ({ toggle }) => {
//     console.log(">SimpleGrad: toggle: ", toggle)
//     let tailGlitch = useRef(null) // 0%
//     let centerGlitch = useRef(null) // 10%
//     let headGlitch = useRef(null) // 20%
     
//      useEffect(() => {
         
//         gsap.set(tailGlitch, { attr: { 'offset': '-15%' }})
//         gsap.set(centerGlitch, { attr:{'offset': '-10%'}})
//         gsap.set(headGlitch, { attr:{'offset': '-5%'}})
   
//          const tl = gsap.timeline({ defaults: {  delay: 0 } })
//          tl.to(headGlitch,  { duration: 4, attr:{'offset': '100%'}  })
//          .to(centerGlitch,  { duration: 4, attr:{'offset': '95%'}  }, '-=4')
//          .to(tailGlitch,  { duration: 4, attr:{'offset': '90%'}  }, '-=4')


//      }, [toggle])
//     return (
//         <svg viewBox="0 0 700 466" 
//          xmlns="http://www.w3.org/2000/svg" 
//          xmlnsXlink="http://www.w3.org/1999/xlink" 
//          preserveAspectRatio="none">
//             <linearGradient id="grad" x1="50%" x2="50%" y1="100%" y2="-10%" gradientUnits="userSpaceOnUse">
//                 <stop offset="0%" stopColor="#fff" id="leftstop" />

//                 <stop offset="-5%" stopColor="#fff" stopOpacity="1" ref={elem => tailGlitch = elem} />
//                 <stop offset="0%" stopColor="#000" stopOpacity="1" ref={elem => centerGlitch = elem} />
//                 <stop offset="5%" stopColor="#fff" stopOpacity="1" ref={elem => headGlitch = elem} />

//                 <stop offset="100%" stopColor="#fff" id="rightstop" />
//             </linearGradient>
//             <mask id="Mask">
//                 <rect x="-300" y="0" width="1200" height="600" fill="url(#grad)" />
//             </mask>
//             <image className="img-back" xlinkHref={Glitchy}  />
//             <image className="img-front" xlinkHref={Listen}  style={{ mixBlendMode: 'luminosity' }}/>
//             <image className="img-front" xlinkHref={Listen}  mask="url(#Mask)"  />
//         </svg>
//     )
// };

// export default SimpleGrad; 
