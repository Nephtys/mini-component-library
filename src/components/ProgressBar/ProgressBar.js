/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';


const SIZES = {
  large: {
    "--spacing": "4px",
    "--barHeight": "16px",
    "--containerHeight": "24px",
    "--borderRadius": "8px",
  },
  medium: {
    "--spacing": "0px",
    "--barHeight": "12px",
    "--containerHeight": "12px",
    "--borderRadius": "4px",
  },
  small: {
    "--spacing": "0px",
    "--barHeight": "8px",
    "--containerHeight": "8px",
    "--borderRadius": "4px",
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: var(--containerHeight);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);
  padding: var(--spacing);
`;

const BorderRoundingWrapper = styled.div`
  overflow: hidden;
  height: var(--barHeight);
  border-radius: 4px;
`;

const ProgressBarContent = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--barHeight);
`;

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return <Wrapper role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="Progress bar"
                  aria-valuenow={value}
                  style={styles}>
            <BorderRoundingWrapper>
              <ProgressBarContent style={{"--width": value + "%" }}/>
            </BorderRoundingWrapper>
          </Wrapper>;
};



export default ProgressBar;
