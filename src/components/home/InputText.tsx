
import styled from "styled-components"

export default function InputText(){
    return(
        <>
            <What>
            <input type="text" placeholder="tx or account address"/>
            </What>
        </>
    )
}

const What = styled.div`


    input {

        width: 50rem;
        height: 4rem;
        outline: none;
        border: none;
        padding-left: 2rem;
    }
`