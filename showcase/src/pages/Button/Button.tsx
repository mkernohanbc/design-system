import { useState } from "react";
import { Key } from "react-aria-components";

import { Button, Select, Switch } from "@bcgov/design-system-react-components";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "link";

const ButtonWithVariants = () => {
  // handler for variant toggle
  const [selectedVariant, setSelectedVariant] =
    useState<ButtonVariant>("primary");

  // handle for button switch
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(true);

  return (
    <div className="col component">
      <div className="row">
        <div className="col">
          <Select
            selectedKey={selectedVariant}
            onSelectionChange={(key: Key) =>
              setSelectedVariant(key as ButtonVariant)
            }
            size="small"
            label="Pick a variant"
            description="Controls button via useState"
            items={[
              { id: "primary", label: "Primary" },
              { id: "secondary", label: "Secondary" },
              { id: "tertiary", label: "Tertiary" },
              { id: "link", label: "Link" },
            ]}
          />
          <Switch
            defaultSelected
            onChange={(isSelected) => setIsButtonEnabled(isSelected)}
          >
            Enable/disable the button
          </Switch>
        </div>
        <div className="col">
          <Button
            variant={selectedVariant}
            isDisabled={!isButtonEnabled}
            onPress={() =>
              alert("Button events are configured using this onPress() event")
            }
          >
            This is a button
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonWithVariants;
