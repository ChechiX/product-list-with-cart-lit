import { css } from 'lit';

export const resetStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  p {
    margin: 0;
  }
`;
