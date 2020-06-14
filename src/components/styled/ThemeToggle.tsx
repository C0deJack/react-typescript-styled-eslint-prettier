import React from 'react'
// import styled from 'styled-components';

// const StyledLink = styled.a`
//     input {
//         opacity: 0;
//         position: absolute;
        
//         &:checked + .label .ball{
//             transform: translatex(24px);
//         }
//     }

//     label {
//         display: flex;
//         position: relative;
//         background-color: #0407F2;
//         width: 50px;
//         height: 26px;
//         border-radius: 50px;
//         padding: 5px;
//         align-items: center;
//         justify-content: space-between;
//         transform: scale(1.2);
//         cursor: pointer;
        
//         .fa-moon {
//             color: #f1c40f;
//         }
//         .fa-sun {
//             color: #f39c12;
//         }
//         .ball {
//             width: 22px;
//             height: 22px;
//             background-color: #fff;
//             position: absolute;
//             border-radius: 50px;
//             top: 2px;
//             left: 2px;
//             transition: transform 0.2s linear;
//         }
//     }
// `;

export default function ThemeToggle() {
    return (
        <div>
            <input type="checkbox" className="checkbox" id="checkbox" />
            {/* <label for="checkbox" className="label">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <div className="ball"></div>
            </label> */}
        </div>
    )
}
