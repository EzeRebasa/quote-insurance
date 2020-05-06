import React from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types';

import { TransitionGroup, CSSTransition } from "react-transition-group";

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const QuoteResult = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const QuoteText = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Result = ({ quote }) => {
  return quote === 0 ? (
    <Message> Choose a brand, year and insurance type</Message>
  ) : (
    <QuoteResult>
      <TransitionGroup
        component="span"
        className="result"
      >
        <CSSTransition
            classNames="result"
            key={quote}
            timeout={{enter: 500, exit: 500}}
        >
          <QuoteText> The total is: $ <span> {quote} </span> </QuoteText>
        </CSSTransition>
      </TransitionGroup>
    </QuoteResult>
  );
};

Result.propTypes = {
    quote: PropTypes.number.isRequired
}

export default Result;
