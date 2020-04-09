import React from 'react';
import { AutoField, AutoForm } from '../../../website/components/universal';
import { connectField } from 'uniforms';

import schema from './CompositeFieldSchema';

const SubmitField = props => (
  <input
    disabled={
      !!(props.error || props.disabled || props.submitting || props.validating)
    }
    type="submit"
  />
);

const Composite = () => (
  <section>
    <AutoField name="firstName" />
    <AutoField name="lastName" />
    <AutoField name="workExperience" />
  </section>
);

const CompositeField = connectField(Composite);

export default function ExampleOfSubmitField() {
  return (
    <AutoForm
      schema={schema}
      onSubmit={model => alert(JSON.stringify(model, null, 2))}
    >
      <CompositeField name="personA" />
      <hr />
      <CompositeField name="personB" />
      <br />
      <SubmitField />
    </AutoForm>
  );
}
