import React from 'react';
import { Nav, NavbarContainer1, NavbarContainer2, NavLogo, Menu } from './HeaderElements';

const Header = () => {
    return (
        <>
            <Nav>
                <NavbarContainer1>
                    <NavLogo to="/">Happ</NavLogo>
                    <NavLogo to="/">Happ2</NavLogo>
                </NavbarContainer1>
                <NavbarContainer2>
                    <Menu to="/">홈</Menu>
                    <Menu to="/happydesign">행복디자인</Menu>
                    <Menu to="/community">커뮤니티</Menu>
                    <Menu to="/survey">서베이</Menu>
                    <Menu to="/more">더보기</Menu>
                </NavbarContainer2>
            </Nav>
        </>
    );
};

export default Header;
