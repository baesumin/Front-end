import React from 'react';
import {
    TodayHappyDiv,
    Box,
    TodayHappyContainer1,
    TodayHappyContainer1Text,
    TodayHappyContainer2,
    TodayHappyContainer1Box,
    MyCommunityDiv,
    AttentionHappyDesignDiv,
    CommonContainer1,
    CommonContainer1Text,
    CommonContainer1Box,
    NoticeDiv
} from './ScreenElements';
import { BsQuestionCircle } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const HomeScreen = () => {
    return (
        <div className="app-body">
            <img
                width={720}
                src={process.env.PUBLIC_URL + '/mainUI.jpg'}
                alt="copy url"
            />
            <TodayHappyDiv>
                <TodayHappyContainer1>
                    <TodayHappyContainer1Box />
                    <TodayHappyContainer1Text>
                        <p>#오늘 행복 어때?</p>★ 뽀기를 누르고 오른쪽으로 당겨보세요~ ★
                    </TodayHappyContainer1Text>
                    <TodayHappyContainer1Box>
                        <IconContext.Provider value={{ size: '3rem', color: '#F26f81' }}>
                            <div>
                                <BsQuestionCircle style={{ cursor: 'pointer' }} />
                            </div>
                        </IconContext.Provider>
                    </TodayHappyContainer1Box>
                </TodayHappyContainer1>
                <TodayHappyContainer2></TodayHappyContainer2>
            </TodayHappyDiv>
            <Box />
            <MyCommunityDiv>
                <CommonContainer1>
                    <CommonContainer1Text>나의 커뮤니티</CommonContainer1Text>
                    <CommonContainer1Box>
                        <IconContext.Provider value={{ size: '3rem', color: '#F26f81' }}>
                            <div>
                                <BsQuestionCircle style={{ cursor: 'pointer' }} />
                            </div>
                        </IconContext.Provider>
                    </CommonContainer1Box>
                </CommonContainer1>
            </MyCommunityDiv>
            <Box />
            <AttentionHappyDesignDiv>
                <CommonContainer1>
                    <CommonContainer1Text>관심 행복 디자인</CommonContainer1Text>
                    <CommonContainer1Box>
                        <IconContext.Provider value={{ size: '3rem', color: '#F26f81' }}>
                            <div>
                                <BsQuestionCircle style={{ cursor: 'pointer' }} />
                            </div>
                        </IconContext.Provider>
                    </CommonContainer1Box>
                </CommonContainer1>
            </AttentionHappyDesignDiv>
            <Box />
            <NoticeDiv></NoticeDiv>
        </div>
    );
};

export default HomeScreen;
