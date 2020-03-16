import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';

const StyledRetroScrnTxt = styled.svg`
opacity: 1;
`
const RetroScrnTxt = ({ toggle }) => {
    console.log(">RetroScrnTxt: ", toggle);

    //   let tailGlitch = useRef(null) // 0%

    //   useEffect(() => {

    //     gsap.set(tailGlitch, { attr: { 'offset': '0%' } })

    //     const tl = gsap.timeline({ defaults: { delay: 0 } })
    //     tl.to(headGlitch, { duration: 4, attr: { 'offset': '100%' } })

    //   }, [toggle])

    const yGridInc = 15;
    const SVGYRes = 500;
    const textStr = "yes";
    const textStrY = 250;
    const textStrX = 70;
    const horizGrid = Array.from({ length: Math.ceil(SVGYRes / yGridInc) }, (elem, idx) => ({ 'yInc': idx * yGridInc }))
    return (
        <div className="retrotxt-container">
            <StyledRetroScrnTxt viewBox="0 0 500 500"
                xmlns="https//www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100%"
                height="100%"
                preserveAspectRatio="none">

                <filter id="filt-green" filterUnits="userSpaceOnUse">
                    <feComponentTransfer in="SourceGraphic" result="trans">
                        <feFuncG type="discrete" tableValues="1 0 0 1"></feFuncG>
                    </feComponentTransfer>
                    <feGaussianBlur in="trans" stdDeviation="10 4" />
                </filter>

                <filter id="filt-red" filterUnits="userSpaceOnUse">
                    <feComponentTransfer in="SourceGraphic" result="trans">
                        <feFuncR type="discrete" tableValues="1 1 0 0"></feFuncR>
                    </feComponentTransfer>
                    <feGaussianBlur in="trans" stdDeviation="10 2" />
                </filter>

                <filter id="filt-yellow" filterUnits="userSpaceOnUse">
                    <feComponentTransfer in="SourceGraphic" >
                        <feFuncR type="discrete" tableValues="1 1 0 0"></feFuncR>
                        <feFuncG type="discrete" tableValues="1 0 0 0"></feFuncG>
                    </feComponentTransfer>
                    <feGaussianBlur stdDeviation="10 2" />
                </filter>
                <filter id="blur10-2" filterUnits="userSpaceOnUse">
                    <feGaussianBlur stdDeviation="10 2" />
                </filter>
                <filter id="blur4" filterUnits="userSpaceOnUse">
                    <feGaussianBlur stdDeviation="4" />
                </filter>
                <filter id="blur10" filterUnits="userSpaceOnUse">
                    <feGaussianBlur stdDeviation="10" />
                </filter>
                

                <rect id="bg" fill="#000" width="100%" height="100%" />
                <text x={textStrX-5} y={textStrY}  filter="url(#filt-red)">{textStr}</text>
                <text x={textStrX+5} y={textStrY}  filter="url(#filt-yellow)">{textStr}</text>
                <text x={textStrX} y={textStrY}  fill="lightgreen" filter="url(#blur10)">{textStr}</text>

                <g className="y-grid-retro-txt" filter="url(#blur10-2)">
                    {horizGrid.map((elem, idx) => (
                        <rect key={idx} y={elem.yInc} width="100%" height="7" />
                    ))}
                </g>
                <text x={textStrX} y={textStrY} fill="#fff" filter="url(#blur4)">{textStr}</text>
                <text x={textStrX} y={textStrY}  fill="lightgreen" filter="url(#blur10)">{textStr}</text>

            </StyledRetroScrnTxt>
        </div>
    )
}

export default RetroScrnTxt;