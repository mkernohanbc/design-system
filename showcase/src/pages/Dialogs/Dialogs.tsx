import { useState } from "react";
import { Key, Text } from "react-aria-components";
import { Row, Col } from "react-grid-system";

import {
  Button,
  Dialog,
  AlertDialog,
  DialogTrigger,
  Modal,
  Select,
} from "@bcgov/design-system-react-components";

type DialogVariant = "alert" | "generic";

const Dialogs = () => {
  // handler for variant toggle
  const [selectedVariant, setSelectedVariant] =
    useState<DialogVariant>("alert");

  return (
    <div className="component">
      <Row style={{ display: "flex", alignItems: "center" }}>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--layout-margin-small)",
          }}
        >
          <Select
            label="Pick a dialog type"
            description="Controls button and dialog components via useState"
            size="small"
            selectedKey={selectedVariant}
            onSelectionChange={(key: Key) =>
              setSelectedVariant(key as DialogVariant)
            }
            items={[
              { id: "alert", label: "Alert Dialog" },
              { id: "generic", label: "Dialog" },
            ]}
          />
        </Col>
        <Col style={{ display: "flex", justifyContent: "space-around" }}>
          <DialogTrigger>
            {selectedVariant === "alert" ? (
              <Button>Open an alert dialog</Button>
            ) : (
              <Button>Open a generic dialog</Button>
            )}
            <Modal isDismissable>
              {selectedVariant === "alert" ? (
                <AlertDialog></AlertDialog>
              ) : (
                <Dialog>
                  <div className="dialog">
                    <Text style={{ font: "var(--typography-bold-large-body" }}>
                      <b>Dialog component</b>
                    </Text>
                    <Text style={{ font: "var(--typography-regular-body)" }}>
                      The generic Dialog component provides an empty container,
                      in which you can compose your own UI.
                    </Text>
                  </div>
                </Dialog>
              )}
            </Modal>
          </DialogTrigger>
        </Col>
      </Row>
    </div>
  );
};

export default Dialogs;
