import { Divider } from "@/components";

export default function DividerPage() {
  return (
    <>
      <h2>Divider</h2>
      This is some text before the divider
      <Divider />
      This is some text after the divider
      <h3>Dashed divider</h3>
      This is some text before the divider
      <Divider isDashed />
      This is some text after the divider
    </>
  );
}
