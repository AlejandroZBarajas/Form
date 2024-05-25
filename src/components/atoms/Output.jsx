import styled from "styled-components"

const styledOutput = styled.h2`
    font-weigth: 400;
    font-size: 1.3rem;
`;

function Output(props){
    return(
        <Output>{props.name}</Output>
    )
}

export default Output;