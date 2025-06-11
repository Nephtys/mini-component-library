import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};
  font-family: 'Roboto', sans-serif;
  font-size: var(--font-size);
`;

const SIZES = {
  small: {
    "--padding": "4px 4px 4px 24px",
    "--font-size": `${14 / 16}rem`,
    "--border-size": "1px",
  },
  large : {
    "--padding": "8px 8px 7px 36px",
    "--font-size": `${18/16}rem`,
    "--border-size": "2px",
  }
}

const InputElement = styled('input')`
  padding: var(--padding);
  border: none;
  border-bottom: var(--border-size) solid black;
  color: inherit;
  font-size: var(--font-size);
  font-weight: 700;
  
  ::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  pointer-events: none;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;

  ${InputElement}:hover + & {
    color: ${COLORS.black};
  }
`

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size];
  const labelId = `id-${Math.random().toString(36).slice(-6)}`;
  return <Wrapper style={styles}>
    <VisuallyHidden id={labelId}>{label}</VisuallyHidden>
    <InputElement aria-labelledby={labelId} placeholder={placeholder} style={{ width: width }} />
    <IconWrapper id={icon} size={size === "small" ? 16 : 24} />
  </Wrapper>;
};

export default IconInput;
