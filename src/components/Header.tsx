import styled from "styled-components"

export default function Header() {
    return(
        <>
            <HeaderDiv>
                <h2>Solana Fácil</h2>
            </HeaderDiv>
        </>
    )
}

const HeaderDiv = styled.div`
    display: flex;
    background: #181818;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height: 4.5rem;
    width: 100vw;
    position: absolute;
    align-items: center;
    padding-left: 2rem;
    
    h2 {
        color: #FFC804;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-size: 1.8rem;
        font-weight: 800;

    }
`