import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useApiCall } from "hooks/useApiCall";
import { useForm } from "hooks/useForm";
import { api } from "helpers/api";
import FormBlock from "components/Form/FormBlock";
import FormField from "components/Form/FormField";
import Input from "components/Inputs/Input";
import Dropdown from "components/Inputs/Dropdown";
import RadioBlock from "components/Inputs/RadioBlock";
import DateInput from "components/Inputs/DateInput";
import Button from "components/Button";
import bp from "assets/breakpoints";
import { submitData } from "store/formStateReducer";

const { mobile } = bp;
const FormBody = styled.form`
  margin: 3% 15%;
  position: relative;

  @media (max-width: ${mobile}) {
    margin: 3% 0;
  }
`;
const ButtonBlock = styled.div`
  width: 100%;
  text-align: center;
`;

const eventTypes = [
  { value: true, label: "Paid event" },
  { value: false, label: "Free event" },
];

const FormComponent = () => {
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch()
  const { me } = state; // means user was logged in early
  const {
    values,
    errors,
    isValid,
    updateField,
    validate,
  } = useForm({
    coordinator: { id: me.id },
  });

  const fetchData = useApiCall([
    { method: "get", url: api.items, storageKey: "items" },
    { method: "get", url: api.persons, storageKey: "persons" },
  ]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const send = (e) => {
    e.preventDefault();
    const isOk = validate(values);
    isOk && dispatch(submitData(values))
  };

  return (
    <FormBody onSubmit={send}>
      <FormBlock title="About">
        <FormField label="Title" error={errors.title} required>
          <Input
            value={values.title}
            onChange={(value) => updateField("title", value)}
            placeholder="Make it short and clear"
          />
        </FormField>
        <FormField label="Description" error={errors.description} required>
          <Input
            value={values.description}
            onChange={(value) => updateField("description", value)}
            placeholder="Write about your event, be creative"
            type="multiple"
          />
        </FormField>
        <FormField label="Category" error={errors.category_id}>
          <Dropdown
            value={values.category_id}
            onChange={(value) => updateField("category_id", value)}
            placeholder="Select category"
            options={state?.items.map(({ id, name }) => ({
              value: id,
              label: name,
            }))}
          />
        </FormField>

        <FormField label="Payment" error={errors.paid_event}>
          <RadioBlock
            blockName="payment"
            value={values.paid_event}
            options={eventTypes}
            onChange={(value) => updateField("paid_event", value === "true")}
          />
        </FormField>

        <FormField label="Reward" error={errors.revard}>
          <Input
            value={values.revard}
            onChange={(value) => updateField("revard", Number(value))}
            placeholder="Number"
            type="number"
            suffix="reward points for attendance"
          />
        </FormField>
      </FormBlock>

      <FormBlock title="Coordinator">
        <FormField label="Responsible" error={errors.coordinator?.id} required>
          <Dropdown
            value={values.coordinator?.id}
            onChange={(value) => {
              const currentPerson = state?.persons.find((i) => i.id === value);
              const { email } = currentPerson;
              updateField("coordinator", { id: value, email });
            }}
            options={state?.persons.map(({ id, name, lastname }) => ({
              value: id,
              label: `${name} ${lastname}`,
            }))}
            groups={{
              main: {
                label: "Me",
                value: { value: me.id, label: `${me.name} ${me.lastname}` },
              },
              rest: { label: "Other" },
            }}
          />
        </FormField>
        <FormField label="Email" error={errors.email}>
          <Input
            value={values.coordinator?.email}
            onChange={(value) => {
              const coord = { ...values.coordinator };
              updateField("coordinator", { ...coord, email: value });
            }}
            placeholder="Email"
            type="email"
          />
        </FormField>
      </FormBlock>

      <FormBlock title="When">
        <FormField label="Starts on" error={errors.date} required>
          <DateInput
            value={values.date}
            onChange={(value) => updateField("date", value)}
          />
        </FormField>

        <FormField label="Duration" error={errors.duration}>
          <Input
            value={values.duration && values.duration / 60}
            onChange={(value) => {
              updateField("duration", value * 60);
            }}
            placeholder="Number"
            type="number"
            suffix="hour"
          />
        </FormField>
      </FormBlock>
      <ButtonBlock>
        <Button htmlType="submit" disabled={!isValid}>
          {state.submitting ? "submitting" : "publish event"}
        </Button>
      </ButtonBlock>
    </FormBody>
  );
};

export default FormComponent;
