import { slide as Menu } from "react-burger-menu";

export default (props: any) => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Pairs
      </a>

      <a className="menu-item" href="/about">
        Users
      </a>

      <a className="menu-item" href="/services">
        Logout
      </a>

      <a className="menu-item" href="/contact">
        Support
      </a>
    </Menu>
  );
};
