import React from 'react'
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';

export default function FormikForm() {
    return (
        <div className="px-3">
            <Formik
                initialValues={{
                    picked: '',
                    toggle: false,
                    checked: [],
                    friends: [{
                        name: "",
                        email: "",
                        gender: "",
                    }],
                    selection: []
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values, setFieldValue }) => (
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
                        <hr />
                        <div>Checkbox</div>
                        <label>
                            <Field type="checkbox" name="toggle" />
                            {`${values.toggle}`}
                        </label>
                        <div className="d-flex" style={{ gap: 10 }}>
                            <div className="form-check" aria-labelledby="checkbox-group">
                                <label className="form-check-label" htmlFor="check-one">One</label>
                                <Field className="form-check-input" id="check-one" type="checkbox" name="checked" value="One" />
                            </div>
                            <div className="form-check" aria-labelledby="checkbox-group">
                                <label className="form-check-label" htmlFor="check-one">Two</label>
                                <Field className="form-check-input" type="checkbox" name="checked" value="Two" />
                            </div>
                            <div className="form-check" aria-labelledby="checkbox-group">
                                <label className="form-check-label" htmlFor="check-one">Three</label>
                                <Field className="form-check-input" type="checkbox" name="checked" value="Three" />
                            </div>
                        </div>
                        <hr />

                        <FieldArray name="friends">
                            {({ insert, remove, push }) => (
                                <div>
                                    {values.friends.length > 0 &&
                                        values.friends.map((friend, index) => (
                                            <div className="row" key={index}>
                                                <div className="col">
                                                    <label htmlFor={`friends.${index}.name`}>Name</label>
                                                    <Field
                                                        name={`friends.${index}.name`}
                                                        placeholder="Jane Doe"
                                                        type="text"
                                                    />
                                                    <ErrorMessage
                                                        name={`friends.${index}.name`}
                                                        component="div"
                                                        className="field-error"
                                                    />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor={`friends.${index}.email`}>Email</label>
                                                    <Field
                                                        name={`friends.${index}.email`}
                                                        placeholder="jane@acme.com"
                                                        type="email"
                                                    />
                                                    <ErrorMessage
                                                        name={`friends.${index}.name`}
                                                        component="div"
                                                        className="field-error"
                                                    />
                                                </div>
                                                <div className="col">
                                                    <div role="group" aria-labelledby="my-radio-gender-group">
                                                        <div id="my-radio-gender-group">Gender</div>
                                                        <label>
                                                            <Field type="radio" name={`friends.${index}.gender`} value="male" />
                                                            Male
                                                        </label>
                                                        <label>
                                                            <Field type="radio" name={`friends.${index}.gender`} value="female" />
                                                            Female
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        onClick={() => remove(index)}
                                                    >
                                                        &times;
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => push({ name: '', email: '', gender: "" })}
                                    >
                                        Add Friend
                                    </button>
                                </div>
                            )}
                        </FieldArray>
                        <hr />

                        {/* Multiple Selection */}
                        <Field className="form-select" component="select" name="selection" onChange={(event) => setFieldValue("selection", [].slice.call(event.target.selectedOptions).map(option => option.value))} multiple={true}>
                            <option value="apple">Apple</option>
                            <option value="orange">Orange</option>
                            <option value="melon">Melon</option>
                        </Field>

                        <hr />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
