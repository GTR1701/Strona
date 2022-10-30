import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Panel from "../../pages/Panel/Panel";

const ProtectedComponent = ({ component, ...propsForComponent }) => {
  const { withAuthenticationRequired } = useAuth0();
  const Cp = withAuthenticationRequired(component);
  return <Cp />;
};

export default ProtectedComponent;
