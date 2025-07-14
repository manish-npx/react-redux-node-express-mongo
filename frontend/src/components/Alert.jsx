import React from "react";
import toast, { Toaster } from "react-hot-toast";

/**
 * Renders an Alert component.
 *
 * @return {ReactElement} The rendered Alert component.
 */
const Alert = ({ variant, message }) => {
  const notify = () =>
    toast("Here is your toast.", {
      duration: 4000,
      position: "top-center",

      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });

  return (
    <Alert variant={variant} dismissible>
      {message}
    </Alert>
  );
};

export default Alert;
