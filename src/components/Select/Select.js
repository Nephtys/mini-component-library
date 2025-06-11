import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const NativeSelect = styled.select`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 1;
  `;

  const SelectWrapper = styled.div`
    position: relative;
    width: max-content;
    isolation: isolate;
    `;
  const StyledSelect = styled.div`
    padding: 12px 38px 12px 16px;
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.gray700};
    font-family: 'ROBOTO', sans-serif;
    border-radius: 8px;
    border: none;
    appearance: none;

    ${NativeSelect}:focus + & {
      outline: 5px auto -webkit-focus-ring-color;
    }

    ${NativeSelect}:hover + & {
      color: ${COLORS.black}
    }
  `;

  const ChevronIcon = styled(Icon)`
    position: absolute;
    top: 9px;
    right: 9px;
  `;

  return (
    <SelectWrapper>
      <NativeSelect value={value} onChange={onChange}>
      {children}
      </NativeSelect>
      <StyledSelect>
        {displayedValue}
        <ChevronIcon id="chevron-down" size={22} />
      </StyledSelect>
    </SelectWrapper>
  );
};

export default Select;
