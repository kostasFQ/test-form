import colors from "assets/colors";
import styled from "styled-components";

const StylesMessage = styled.div`
  width: 70%;
  background-color: #B1E7B2;
  border: 1px solid ${colors.secondaryText};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translateX(-50%);
  padding: 1em 2em;
  & header {
    font-size: 2em;
    font-weight: bolder;
    text-transform: capitalize;
    color: #2AC02F;
  }
`;

const Message = () => (
  <StylesMessage>
    <header>success</header>
    <p>Event has been created</p>
  </StylesMessage>
);

export default Message;
