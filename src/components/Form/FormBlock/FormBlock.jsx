import styled from "styled-components";
import colors from "assets/colors";

const FormBlockSection = styled.section`
  margin-bottom: 3%;
  padding: 2% 5%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const FormBlockSectionHeader = styled.h2`
  border-bottom: solid 1px ${colors.secondaryText};
  color: ${colors.titleColors};
`;

const FormBlock = ({ children, title }) => {
  return (
    <FormBlockSection>
      <FormBlockSectionHeader>{title}</FormBlockSectionHeader>
      {children}
    </FormBlockSection>
  );
};

export default FormBlock;
