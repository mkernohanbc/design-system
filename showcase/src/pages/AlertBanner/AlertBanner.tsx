import { useState } from "react";
import { Key } from "react-aria-components";

import { Select } from "@bcgov/design-system-react-components";
// importing unpublished component
import { AlertBanner } from "../../../../packages/react-components/src/components";

interface BannerState {
  [key: string]: boolean;
}

type AlertVariant = "info" | "success" | "warning" | "danger" | "black";

const AlertBannerWithVariants = () => {
  // handler for close button
  const handleClose = (bannerId: string) => {
    setBanner((prev) => ({ ...prev, [bannerId]: false }));
  };

  // handler for variant toggle
  const [banner, setBanner] = useState<BannerState>({
    banner1: true,
  });

  const [selectedVariant, setSelectedVariant] =
    useState<AlertVariant>("success");

  return (
    <>
      {banner.banner1 && (
        <AlertBanner
          variant={selectedVariant}
          onClose={() => handleClose("banner1")}
          isCloseable
        >
          <Select
            aria-label="Pick a variant"
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
          />{" "}
          This is an alert banner. Use the dropdown to toggle between available
          themes.
        </AlertBanner>
      )}
    </>
  );
};

export default AlertBannerWithVariants;
