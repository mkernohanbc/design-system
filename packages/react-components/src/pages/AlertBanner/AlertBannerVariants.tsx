import { useState } from "react";
import { Key } from "react-aria-components"; // Import Key type
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
          { id: "info", label: "Info" },
          { id: "success", label: "Success" },
          { id: "warning", label: "Warning" },
          { id: "danger", label: "Danger" },
          { id: "black", label: "Black" },
        ]}
      />
    </AlertBanner>
  );
};

export default AlertBannerWithVariants;
