import React from "react";
import useTranslate from "../../hooks/useTranslate";

import english from "./locales/en-US.json";
import indo from "./locales/id.json";

const Product = () => {
  const { translate } = useTranslate(english, indo);

  return <div>{translate("title")}</div>;
};

export default Product;
