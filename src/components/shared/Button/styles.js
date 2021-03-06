import styled from '@emotion/styled'
import { Link as LinkWouter } from 'wouter'

export const Link = styled(LinkWouter)`
  padding: 10px 25px;
  font-size: 16px;
  font-weight: 500;
  background-color: var(--header-color);
  border-radius: 4px;
  transition: .3s;
  text-transform: uppercase;
  letter-spacing: 4px;
  pointer-events: ${({ isLoading }) => isLoading && 'none' };

  :disabled {
    pointer-events: none;
    background-color: #333;
  }

  @media screen and (max-width: 768px) {
    :active {
      transform: translate(10px, -10px);
      box-shadow: -1px 1px 0 rgba(0, 0, 0, .6),
      -2px 2px 0 rgba(0, 0, 0, .6),
      -3px 3px 0 rgba(0, 0, 0, .6),
      -4px 4px 0 rgba(0, 0, 0, .6),
      -5px 5px 0 rgba(0, 0, 0, .6),
      -6px 6px 0 rgba(0, 0, 0, .6),
      -7px 7px 0 rgba(0, 0, 0, .6),
      -8px 8px 0 rgba(0, 0, 0, .6),
      -9px 9px 0 rgba(0, 0, 0, .6),
      -10px 10px 0 rgba(0, 0, 0, .6);
    }
  }

  @media screen and (min-width: 769px) {
    :hover {
      transform: translate(10px, -10px);
      box-shadow: -1px 1px 0 rgba(0, 0, 0, .6),
      -2px 2px 0 rgba(0, 0, 0, .6),
      -3px 3px 0 rgba(0, 0, 0, .6),
      -4px 4px 0 rgba(0, 0, 0, .6),
      -5px 5px 0 rgba(0, 0, 0, .6),
      -6px 6px 0 rgba(0, 0, 0, .6),
      -7px 7px 0 rgba(0, 0, 0, .6),
      -8px 8px 0 rgba(0, 0, 0, .6),
      -9px 9px 0 rgba(0, 0, 0, .6),
      -10px 10px 0 rgba(0, 0, 0, .6);
    }
  }
`

export const Btn = Link.withComponent('button')
