import { useState } from "react";
import { Key } from "react-aria-components";
import { AlertBanner, Select } from "@/components";

type AlertVariant = "info" | "success" | "warning" | "danger" | "black";

const AlertBannerWithVariants = () => {
  const [selectedVariant, setSelectedVariant] = useState<AlertVariant>("info");

  return (
    <AlertBanner variant={selectedVariant}>
      This is an alert banner. Use the dropdown to toggle between available
      themes.{" "}
      <Select
        selectedKey={selectedVariant}
        onSelectionChange={(key: Key) =>
          setSelectedVariant(key as AlertVariant)
        }
        size="small"
        items={[
          { id: "info", label: "Info theme" },
          { id: "success", label: "Success theme" },
          { id: "warning", label: "Warning theme" },
          { id: "danger", label: "Danger theme" },
          { id: "black", label: "Black theme" },
        ]}
      />
    </AlertBanner>
  );
};

export default AlertBannerWithVariants;
