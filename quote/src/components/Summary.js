import React, { Fragment } from "react";
import styled from '@emotion/styled';
import { firstUppercase } from '../helper';

const SummaryContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;

const Summary = ({ data }) => {
  // Extract data
  const { brand, year, plan } = data;

  if (brand === "" || year === "" || plan === "") return null;

  return (
    <SummaryContainer>
      <h2> Summary of quote </h2>
      <ul>
  <li> Brand: {firstUppercase(brand)} </li>
        <li> Plan: {firstUppercase(plan)} </li>
        <li> Year: {year} </li>
      </ul>
    </SummaryContainer>
  );
};

export default Summary;
