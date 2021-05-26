import styled from "styled-components";

const StyledRunning = styled.div`
  background: ${(props) => props.theme.colors.lightgreen};
  padding: 3rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Paragraph = styled.div`
  text-align: left;
`;
export const PRTable = styled.table`
  border-collapse: collapse;
  width: 17rem;
  td,
  th {
    width: 50%;
    border-color: #000000;
    border-style: solid;
    border-width: 0 1px 1px 0;
    padding: 0.5rem;
    text-align: center;
  };
  td {
    border-bottom: 0;
  }
  td:nth-child(2){
    border-right: 0;
  };
  th:nth-child(2){
    border-right: 0;
  };
`;

export const SectionHead = styled.div`
  max-width: 17rem;
`;
export default StyledRunning;
