import React from 'react';

export default function HomePageComponent() {
    
    return (
        <div className="p-3" style={{ fontSize: 18 }}>
            <section className="mb-2">
                <p>Formik is a react library for us to build form in a convenient way.</p>
                <a className="link-secondary" href="https://formik.org/docs/overview" target="_blank" rel="noreferrer">Fromik Offical Site</a>
            </section>
            <hr />
            <section className="mb-2">
                <h5>Credit:</h5>
                <div>DatePickerField - <a className="link-secondary" href="https://stackoverflow.com/questions/56312372/react-datepicker-with-a-formik-form#answer-58650742" target="_blank" rel="noreferrer">React-datepicker with a Formik form</a></div>
            </section>
            <section className="mt-5">
                <p>This site is for testing purpose.</p>
            </section>
        </div>
    )
}
