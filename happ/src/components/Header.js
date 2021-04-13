import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Happ
            </Link>
            <div>
                <Link to="/" className="item">
                    홈
                </Link>
                <Link to="/" className="item">
                    행복디자인
                </Link>
                <Link to="/" className="item">
                    커뮤니티
                </Link>
                <Link to="/" className="item">
                    서베이
                </Link>
                <Link to="/" className="item">
                    더보기
                </Link>
            </div>
            <div className="right menu">
                <Link to="/" className="item">
                    All Streams
                </Link>
            </div>
        </div>
    );
};

export default Header;
