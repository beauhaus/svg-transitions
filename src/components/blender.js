import React from 'react';
import styled from 'styled-components';

import School from '../../static/school.jpg'
import Listen from '../../static/listening.jpg'

const StyledBlender = styled.svg`
height: auto;
width: 40vw;
image {
    width: 100%;
}
`

const Blender = ({ bMode , flip}) => {
    console.log(">blender: bMode/flip: ", bMode, flip)
    return (

        <StyledBlender viewBox="0 0 500 600" width="80%" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none">
            {flip ==="A"? 
            <g>
                <image className="img-back" xlinkHref={Listen} width="80%" height="80%" />
                <image className="img-front" xlinkHref={School} width="80%" height="80%" style={{ mixBlendMode: bMode }} />
            </g>: 
            <g>
            <image className="img-back" xlinkHref={School} width="80%" height="80%" />
            <image className="img-front" xlinkHref={Listen} width="80%" height="80%" style={{ mixBlendMode: bMode }} />
            </g>}
        </StyledBlender>
    )
};

export default Blender; 
