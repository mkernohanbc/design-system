import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Form,
  InlineAlert,
  TextField,
  TextArea,
} from "@bcgov/design-system-react-components";
import { Text } from "react-aria-components";

const ExampleForm = () => {
  const [isInvalid, SetInvalid] = useState(false);
  return (
    <Form
      className="form"
      onInvalid={() => {
        SetInvalid(true);
      }}
      onReset={() => {
        SetInvalid(false);
      }}
    >
      <div className="row">
        <div className="col">
          {isInvalid && <InlineAlert title="Invalid form" />}
          <Text>
            These input fields are wrapped in a <code>{"<Form>"}</code>{" "}
            component, which groups them for the purposes of data validation and
            submission.
          </Text>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TextField
            label="Name"
            isRequired
            description="Required inputs automatically show a 'required' indicator."
          />
        </div>
        <div className="col">
          <TextField
            label="Email address"
            type="email"
            description="A TextField supports standard HTML form validation."
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <CheckboxGroup
            label="Checkbox group"
            description="A checkbox group allows multiple selections."
          >
            <Checkbox value="1">Item 1</Checkbox>
            <Checkbox value="2">Item 2</Checkbox>
            <Checkbox value="3">Item 3</Checkbox>
            <Checkbox value="4">Item 4</Checkbox>
          </CheckboxGroup>
        </div>
        <div className="col">
          <RadioGroup
            label="Radio group"
            description="A radio group allows only one selection."
            isRequired
            defaultValue="1"
          >
            <Radio value="1">Item 1</Radio>
            <Radio value="2">Item 2</Radio>
            <Radio value="3">Item 3</Radio>
            <Radio value="4">Item 4</Radio>
          </RadioGroup>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TextArea
            label="Write a long message (but not too long)"
            description="If you set a maximum length, a character counter is shown."
            maxLength={100}
          />
        </div>
      </div>
      <ButtonGroup orientation="horizontal">
        <Button
          variant="primary"
          type="submit"
          onPress={() =>
            alert(
              "In a real form, this onPress() event would do something. But this is not a real form, so it doesn't do anything except trigger standard HTML form validation."
            )
          }
        >
          Submit
        </Button>
        <Button variant="secondary" type="reset">
          Reset
        </Button>
      </ButtonGroup>
    </Form>
  );
};

export default ExampleForm;
