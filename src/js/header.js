import { css, tags } from "./deps.js";
import { MenuIcon } from "./icons/menu.js";

const style = css`
  & {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    height: 4rem;
    padding: 0 1rem;
    color: var(--light);
    background-color: var(--dark-1);
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.4rem;
  }

  img {
    width: 2rem;
    aspect-ratio: 1;
  }

  label {
    cursor: pointer;

    svg {
      width: 1.75rem;
    }
  }
`;

const { header, a, img, label } = tags;

export const Header = () =>
  header(
    style,
    a(
      { href: "/" },
      img({ src: "/apple-touch-icon.png", alt: "logo" }),
      "MyChords",
    ),
    label({ for: "menu" }, MenuIcon()),
  );
