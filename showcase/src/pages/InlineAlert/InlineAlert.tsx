import { useState } from "react";
import { Key } from "react-aria-components";
import { Row, Col } from "react-grid-system";

import { InlineAlert, Select } from "@bcgov/design-system-react-components";

interface AlertState {
  [key: string]: boolean;
}

type InlineAlertVariant = "info" | "success" | "warning" | "danger";

const InlineAlertWithVariants = () => {
  // handler for close button
  const handleClose = (alertId: string) => {
    setAlert((prev) => ({ ...prev, [alertId]: false }));
  };

  // handler for variant toggle
  const [alert, setAlert] = useState<AlertState>({ alert1: true });

  const [selectedVariant, setSelectedVariant] =
    useState<InlineAlertVariant>("success");

  return (
    <>
      <Row
        className="component"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Col>
          <Select
            selectedKey={selectedVariant}
            onSelectionChange={(key: Key) =>
              setSelectedVariant(key as InlineAlertVariant)
            }
            size="small"
            label="Pick a variant"
            description="Controls inline alert via useState"
            items={[
              { id: "info", label: "Info theme" },
              { id: "success", label: "Success theme" },
              { id: "warning", label: "Warning theme" },
              { id: "danger", label: "Danger theme" },
            ]}
          />
        </Col>
        <Col>
          {alert.alert1 && (
            <InlineAlert
              variant={selectedVariant}
              title="Inline alert component"
              description="Use the dropdown menu to toggle between available themes."
              isCloseable
              onClose={() => handleClose("alert1")}
            />
          )}
        </Col>
      </Row>
    </>
  );
};

export default InlineAlertWithVariants;
