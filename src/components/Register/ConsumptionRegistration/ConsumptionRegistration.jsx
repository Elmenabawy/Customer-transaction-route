import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const ConsumptionRegistration = ({ onSubmit, isLoading , currentPage }) => {
    const navigate = useNavigate();
    const consumptionValidationSchema = Yup.object().shape({
        january: Yup.number().required("January consumption is required"),
        february: Yup.number().required("February consumption is required"),
        march: Yup.number().required("March consumption is required"),
        april: Yup.number().required("April consumption is required"),
        may: Yup.number().required("May consumption is required"),
        june: Yup.number().required("June consumption is required"),
        july: Yup.number().required("July consumption is required"),
        august: Yup.number().required("August consumption is required"),
        september: Yup.number().required("September consumption is required"),
        october: Yup.number().required("October consumption is required"),
        november: Yup.number().required("November consumption is required"),
        december: Yup.number().required("December consumption is required"),
    });

    const formik = useFormik({
        initialValues: {
            january: "522",
            february: "751",
            march: "423",
            april: "542",
            may: "563",
            june: "356",
            july: "235",
            august: "523",
            september: "686",
            october: "214",
            november: "356",
            december: "808",
        },
        validationSchema: consumptionValidationSchema,
        onSubmit: (values) => {
            onSubmit(values);} // Pass the onSubmit function from the Register component
    });



    return (
        <div className="w-75 m-auto">
            <form onSubmit={formik.handleSubmit}>
                <h4 className='my-2'>Enter Consumption for Each Month :</h4>

                {/* Input fields for each month */}
                {/* January */}
                <label htmlFor="january" className="m-2">January Consumption :</label>
                <input
                    id="january"
                    name="january"
                    type="number"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.january}
                />
                {formik.errors.january && formik.touched.january && (
                    <div className="alert alert-danger p-2 mt-2">{formik.errors.january}</div>
                )}

                {/* Repeat the above pattern for other months */}
                {/* February */}
                <label htmlFor="february" className="m-2">February Consumption :</label>
                <input
                    id="february"
                    name="february"
                    type="number"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.february}
                />
                {formik.errors.february && formik.touched.february && (
                    <div className="alert alert-danger p-2 mt-2">{formik.errors.february}</div>
                )}

                {/* March */}
                <label htmlFor="march" className="m-2">March Consumption :</label>
                <input
                    id="march"
                    name="march"
                    type="number"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.march}
                />
                {formik.errors.march && formik.touched.march && (
                    <div className="alert alert-danger p-2 mt-2">{formik.errors.march}</div>
                )}

                {/* april */}
                <label htmlFor="april" className="m-2">april Consumption :</label>
                <input
                    id="april"
                    name="april"
                    type="number"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.april}
                />
                {formik.errors.april && formik.touched.april && (
                    <div className="alert alert-danger p-2 mt-2">{formik.errors.april}</div>
                )}
                {/* Repeat this pattern for other months */}
                {/* may */}
                <label htmlFor="may" className="m-2">may Consumption :</label>
                <input
                    id="may"
                    name="may"
                    type="number"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.may}
                />
                {formik.errors.may && formik.touched.may && (
                    <div className="alert alert-danger p-2 mt-2">{formik.errors.may}</div>
                )}
                {/* june */}
                <label htmlFor="june" className="m-2">june Consumption :</label>
                <input
                    id="june"
                    name="june"
                    type="number"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.june}
                />
                {formik.errors.june && formik.touched.june && (
                    <div className="alert alert-danger p-2 mt-2">{formik.errors.june}</div>
                )}
                {/* july */}
                <label htmlFor="july" className="m-2">july Consumption :</label>
                <input
                    id="july"
                    name="july"
                    type="number"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.july}
                />
                {formik.errors.july && formik.touched.july && (
                    <div className="alert alert-danger p-2 mt-2">{formik.errors.july}</div>
                )}
                {/* august */}
                <label htmlFor="august" className="m-2">august Consumption :</label>
                <input
                    id="august"
                    name="august"
                    type="number"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.august}
                />
                {formik.errors.august && formik.touched.august && (
                    <div className="alert alert-danger p-2 mt-2">{formik.errors.august}</div>
                )}
                {/* september */}
                <label htmlFor="september" className="m-2">september Consumption :</label>
                <input
                    id="september"
                    name="september"
                    type="number"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.september}
                />
                {formik.errors.september && formik.touched.september && (
                    <div className="alert alert-danger p-2 mt-2">{formik.errors.september}</div>
                )}
                {/* october */}
                <label htmlFor="october" className="m-2">october Consumption :</label>
                <input
                    id="october"
                    name="october"
                    type="number"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.october}
                />
                {formik.errors.october && formik.touched.october && (
                    <div className="alert alert-danger p-2 mt-2">{formik.errors.october}</div>
                )}
                {/* november */}
                <label htmlFor="november" className="m-2">november Consumption :</label>
                <input
                    id="november"
                    name="november"
                    type="number"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.november}
                />
                {formik.errors.november && formik.touched.november && (
                    <div className="alert alert-danger p-2 mt-2">{formik.errors.november}</div>
                )}
                {/* december */}
                <label htmlFor="december" className="m-2">december Consumption :</label>
                <input
                    id="december"
                    name="december"
                    type="number"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.december}
                />
                {formik.errors.december && formik.touched.december && (
                    <div className="alert alert-danger p-2 mt-2">{formik.errors.december}</div>
                )}

                

                {isLoading ? <button className="btn bg-main-dark text-white mt-3" type="button" disabled>
                        <i className="fas fa-spinner fa-spin me-2"></i>
                    </button> : <>
                        <button
                            className="btn bg-main-dark text-white mt-3"
                            type="submit"
                            disabled={!formik.isValid || !formik.dirty}
                        >
                            Submit
                        </button>
                    </>
                }


            </form>
        </div>
    );
}

export default ConsumptionRegistration;
