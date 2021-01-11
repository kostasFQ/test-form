import styled from "styled-components";
import colors from "assets/colors";

const Header = styled.header`
  width: 100%;
  height: 10vh;
  background-color: #004aa4;
  border-top: solid 10px #013574;
  color: ${colors.secondaryText};
  position: relative;
`;

const Text = styled.span`
  font-size: 4vh;
  position: absolute;
  left: 20%;
  bottom: 10%;
`;

const HeaderContainer = () => {
  return (
    <Header>
      <Text>New Event</Text>
    </Header>
  );
};

export default HeaderContainer;
