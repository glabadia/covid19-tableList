import styled from "styled-components";

export const InfoBlock = styled.div`
  display: grid;
  color: ${props =>
    props.confirmed ? "steelblue" : props.deaths ? "#929292" : "green"};
  font-size: 2rem;
  padding: 2rem;
  /* margin-bottom: 0.5rem; */
  border-radius: 0.5rem;
  text-align: center;
  align-items: center;
  justify-items: center;
  background: #f2f2f2;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
`;

export const InfoGrid = styled.div`
  display: grid;
  margin: 0 0.5rem 0.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
`;

export const HeaderInfo = styled.div`
  background: #f2f2f2;
  border-radius: 0.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: ${props => (props.title ? "3rem" : "1rem")};
  padding: 1rem;
  margin: 0.5rem;
`;
