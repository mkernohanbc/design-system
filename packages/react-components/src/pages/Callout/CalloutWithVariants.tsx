import { Callout, Select } from "@/components";
import { useState } from "react";
import { Key } from "react-aria-components";

type CalloutVariant =
  | "lightGrey"
  | "lightBlue"
  | "lightGold"
  | "Blue"
  | "Grey"
  | "Black";

const CalloutWithVariants = () => {
  const [selectedVariant, setSelectedVariant] =
    useState<CalloutVariant>("lightGrey");

  return (
    <>
      <h2>Callout</h2>
      <Callout
        variant={selectedVariant}
        title="This is a callout"
        description="Use the dropdown to toggle between available themes."
        buttons={[
          <Select
            size="small"
            items={[
              { id: "lightGrey", label: "Light grey" },
              { id: "lightBlue", label: "Light blue" },
              { id: "lightGold", label: "Light gold" },
              { id: "Blue", label: "Blue" },
              { id: "Grey", label: "Grey" },
              { id: "Black", label: "Black" },
            ]}
            selectedKey={selectedVariant}
            onSelectionChange={(key: Key) =>
              setSelectedVariant(key as CalloutVariant)
            }
          />,
        ]}
      />
    </>
  );
};

export default CalloutWithVariants;
