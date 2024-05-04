import { css, tags } from "./deps.js";

const style = css`
  & {
    display: block;
    position: fixed;
    top: 4rem;
    bottom: 0;
    right: 0rem;
    width: 100%;
    max-width: 16rem;
    translate: 100%;
    transition: translate 0.5s ease-in-out;
    color: var(--light);
    background-color: var(--dark-2);
  }

  &:focus-within {
    translate: 0%;
  }

  a {
    display: block;
    padding: 0.5rem;
  }

  a:hover {
    background-color: var(--dark-1);
  }

  > input {
    display: block;
    height: 0;
    outline: none;
  }
`;

const { a, input, nav } = tags;

/**
 * @param {string} url
 * @param {string} label
 */
const Link = (url, label) => a({ href: url }, label);

/**
 * @param  {...any} foos
 */
export const Menu = (...foos) =>
  nav(
    style,
    input({ id: "menu", tabindex: -1, "aria-hidden": "true" }),
    ...foos.map((foo) => Link(foo, foo)),
  );
