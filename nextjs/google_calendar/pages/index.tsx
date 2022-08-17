import type { NextPage } from "next";
import { Calendar, Header, SideBar } from "../components";
import { useAppSelector } from "../store";
import { Transition } from "react-transition-group";

const duration = 200;

const defaultStyle = {
  transition: `width ${duration}ms ease-in-out`,
};

const transitionStyles = {
  entering: { width: "265px" },
  entered: { width: "265px" },
  exiting: { width: "10px" },
  exited: { width: "10px" },
};

const Home: NextPage = () => {
  const { isSideOpen } = useAppSelector((state) => state.header);
  return (
    <div>
      {/* 헤더 */}
      <Header />
      <div className="flex">
        {/* 사이드바 */}
        {/* {isSideOpen ? <SideBar /> : null} */}
        <Transition in={isSideOpen} timeout={500}>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <SideBar />
            </div>
          )}
        </Transition>

        {/* 캘린더 */}
        <Calendar />
      </div>
    </div>
  );
};

export default Home;
