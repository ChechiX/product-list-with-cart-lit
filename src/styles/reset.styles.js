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
  h3,
  p,
  hr {
    margin: 0;
  }

  img {
    display: block;
    block-size: auto;
    max-inline-size: 100%;
  }

  button {
    padding: 0;
    border: none;
    font-family: inherit;
  }

  hr {
    border: 1px solid var(--rose-100);
  }
`;
