import React from 'react'
import { Formik, Field, Form } from 'formik';

export default function FormikForm() {
    return (
        <Formik
            initialValues={{
                picked: '',
                toggle: false,
                checked: []
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {({ values }) => (
                <Form>
                    {/* Radio */}
                    <div id="my-radio-group">Radio</div>
                    <div role="group" aria-labelledby="my-radio-group">
                        <label>
                            <Field type="radio" name="picked" value="One" />
                            One
                        </label>
                        <label>
                            <Field type="radio" name="picked" value="Two" />
                            Two
                        </label>
                        <div>Picked: {values.picked}</div>
                    </div>

                    <div>Checkbox</div>
                    <label>
                        <Field type="checkbox" name="toggle" />
                        {`${values.toggle}`}
                    </label>
                    <div role="group" aria-labelledby="checkbox-group">
                        <label>
                            <Field type="checkbox" name="checked" value="One" />
                            One
                        </label>
                        <label>
                            <Field type="checkbox" name="checked" value="Two" />
                            Two
                        </label>
                        <label>
                            <Field type="checkbox" name="checked" value="Three" />
                            Three
                        </label>
                    </div>

                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}
