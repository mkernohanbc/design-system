import { useState } from "react";
import { Key, Text } from "react-aria-components";

import {
  Button,
  Dialog,
  AlertDialog,
  DialogTrigger,
  Modal,
  Select,
} from "@bcgov/design-system-react-components";

type DialogType = "alert" | "generic";
type AlertDialogVariant = "info" | "confirmation" | "warning" | "error";

const Dialogs = () => {
  // handler for alert type toggle
  const [selectedType, setSelectedType] = useState<DialogType>("alert");

  // handler for alert dialog variant toggle
  const [selectedVariant, setSelectedVariant] =
    useState<AlertDialogVariant>("info");

  return (
    <div className="row component">
      <div className="col" style={{ width: "40%" }}>
        <Select
          label="Pick a dialog type"
          description="Controls button and dialog components via useState"
          size="small"
          selectedKey={selectedType}
          onSelectionChange={(key: Key) => setSelectedType(key as DialogType)}
          items={[
            { id: "alert", label: "Alert Dialog" },
            { id: "generic", label: "Dialog" },
          ]}
        />
      </div>
      <div className="row">
        <DialogTrigger>
          {selectedType === "alert" ? (
            <Button>Open an alert dialog</Button>
          ) : (
            <Button variant="secondary">Open a generic dialog</Button>
          )}
          <Modal isDismissable>
            {selectedType === "alert" ? (
              <AlertDialog
                variant={selectedVariant}
                title="This is an alert dialog"
                buttons={
                  <Select
                    label="Pick a variant"
                    items={[
                      { id: "info", label: "Information" },
                      { id: "confirmation", label: "Confirmation" },
                      { id: "warning", label: "Warning" },
                      { id: "error", label: "Error/destructive" },
                    ]}
                    selectedKey={selectedVariant}
                    onSelectionChange={(key: Key) =>
                      setSelectedVariant(key as AlertDialogVariant)
                    }
                  />
                }
              >
                It has a precomposed layout, including support for different
                themes.
              </AlertDialog>
            ) : (
              <Dialog>
                <div className="dialog">
                  <Text style={{ font: "var(--typography-bold-large-body" }}>
                    <b>Dialog component</b>
                  </Text>
                  <Text style={{ font: "var(--typography-regular-body)" }}>
                    The generic Dialog component provides an empty container, in
                    which you can compose your own UI.
                  </Text>
                </div>
              </Dialog>
            )}
          </Modal>
        </DialogTrigger>
      </div>
    </div>
  );
};

export default Dialogs;
