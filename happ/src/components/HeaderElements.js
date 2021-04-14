import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav`
    background-color: white;
    border: 1px solid;
    height: 160px;
    /* margin-top: -80x; */
    /* display: flex; */
    justify-content: center;
    /* align-items: center; */
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
`;

export const NavbarContainer1 = styled.div`
    border: 1px solid;
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    /* max-width: 1100px; */
`;

export const NavbarContainer2 = styled.div`
    border: 1px solid;
    display: flex;
    justify-content: space-around;
    height: 80px;
    z-index: 1;
    width: 720px;
    margin: 0px auto;
    /* padding: 0 120px; */
    /* max-width: 1100px; */
`;

export const NavLogo = styled(LinkR)`
    border: 1px solid;
    color: black;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 10px;
    font-weight: bold;
    text-decoration: none;
`;

export const Menu = styled(LinkR)`
    border: 1px solid;
    color: black;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 10px;
    font-weight: bold;
    text-decoration: none;
`;
