import { Button } from "./styles.js";
import propTypes from "prop-types";

function MasterButton({ children, theme, mobileSmall, ...props }) {
  return (
    <Button {...props} theme={theme} $mobileSmall={mobileSmall}>
      {children}
    </Button>
  );
}

MasterButton.propTypes = {
  children: propTypes.node.isRequired,
  theme: propTypes.string,
};

export default MasterButton;
