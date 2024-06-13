import { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./CamperRentForm.module.css";

export const CamperRentForm = () => {
  const nameField = useId();
  const emailField = useId();
  const dateField = useId();
  const commentField = useId();
  const [startDate, setStartDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format")
      .matches(
        /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Invalid email format"
      ),
    date: Yup.string().required("Date is required"),
    textarea: Yup.string(),
  });

  const handleDateChange = (date, setFieldValue) => {
    setStartDate(date);
    setFieldValue("date", date);
    setIsOpen(false);
  };

  const handleSubmit = (values) => {
    console.log(values);
    window.location.reload();
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formDesc}>
        <h3 className={styles.formTitle}>Book your campervan now</h3>
        <p className={styles.formDesc}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          date: "",
          comment: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form autoComplete="off" className={styles.form} action="/">
            <div className={styles.fields}>
              <div className={styles.formGroup}>
                <Field
                  placeholder={"Name"}
                  className={`${styles.formFiled} ${styles.nameFiled}`}
                  type="text"
                  name="name"
                  id={nameField}
                />
                <ErrorMessage
                  className={styles.error}
                  name="name"
                  component="span"
                />
              </div>
              <div className={styles.formGroup}>
                <Field
                  placeholder={"Email"}
                  className={styles.formFiled}
                  type="text"
                  name="email"
                  id={emailField}
                />
                <ErrorMessage
                  className={styles.error}
                  name="email"
                  component="span"
                />
              </div>
              <div className={styles.formGroup} style={{ position: "relative" }}>
                <Field
                  placeholder={"Booking date"}
                  className={`${styles.formFiled} ${styles.dateFiled}`}
                  type="text"
                  name="date"
                  id={dateField}
                  value={startDate ? startDate.toLocaleDateString() : ""}
                  readOnly
                />
                <CiCalendar
                  className={styles.calendarIcon}
                  onClick={() => setIsOpen(!isOpen)}
                />
                {isOpen && (
                  <div className={styles.datePickerWrapper}>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => handleDateChange(date, setFieldValue)}
                      inline
                      onClickOutside={() => setIsOpen(false)}
                    />
                  </div>
                )}
                <ErrorMessage
                  className={styles.error}
                  name="date"
                  component="span"
                />
              </div>
              <div className={styles.formGroup}>
                <Field
                  as="textarea"
                  placeholder={"Comment"}
                  className={`${styles.formFiled} ${styles.textareaField}`}
                  type="text"
                  name="textarea"
                  id={commentField}
                />
                <ErrorMessage
                  className={styles.error}
                  name="textarea"
                  component="span"
                />
              </div>
            </div>
            <div className={styles.btnGroup}>
              <button className={styles.btn} type="submit">
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
