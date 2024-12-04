import { useState } from "react";
import { Key } from "react-aria-components";

import { Select } from "@bcgov/design-system-react-components";
// importing unpublished component
import { Callout } from "../../../../packages/react-components/src/components";

type CalloutVariant =
  | "lightGrey"
  | "lightBlue"
  | "lightGold"
  | "Blue"
  | "Grey"
  | "Black";

const CalloutWithVariants = () => {
  // handler for variant toggle
  const [selectedVariant, setSelectedVariant] =
    useState<CalloutVariant>("lightBlue");

  return (
    <div className="row component">
      <div className="col">
        <Select
          selectedKey={selectedVariant}
          onSelectionChange={(key: Key) =>
            setSelectedVariant(key as CalloutVariant)
          }
          label="Pick a variant"
          description="Controls callout via useState"
          size="small"
          items={[
            { id: "lightGrey", label: "Light grey" },
            { id: "lightBlue", label: "Light blue" },
            { id: "lightGold", label: "Light gold" },
            { id: "Blue", label: "Blue" },
            { id: "Grey", label: "Grey" },
            { id: "Black", label: "Black" },
          ]}
        />
      </div>
      <div className="col">
        <Callout
          variant={selectedVariant}
          title="This is the callout component"
          description="Use the dropdown menu to toggle between this component's themes."
        />
      </div>
    </div>
  );
};

export default CalloutWithVariants;
