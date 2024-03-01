import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from 'yup';
import css from "./ContactForm.module.css"

const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
})

const initialValues = {
    username: "",
    number:"",
}

const ContactForm = ({handleUpdate}) => {
    const usernameId = useId();
    const numberId = useId();
    
    const handleSubmit = (values,actions)=> {
    handleUpdate(values);
    actions.resetForm();
    };
    
  return (
      <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}>
          <Form className={css.form}>
              <div className={css.inputWrapper}>
                  <label htmlFor={usernameId}>Name</label>
                  <Field className={css.contactInput} type="text" name="username" id={usernameId} placeholder="Enter name"></Field>
                  <ErrorMessage name="username" as="span" className={css.contactError}></ErrorMessage>

              </div>
               <div className={css.inputWrapper}>
                  <label htmlFor={numberId}>Number</label>
                  <Field className={css.contactInput} type="text" name="number" id={numberId} placeholder="Enter number"></Field>
                  <ErrorMessage   name="number" as="span" className={css.contactError}></ErrorMessage>
              </div>
              <button className={css.submitBtn} type="submit">Add Contact</button>
          </Form>
    </Formik>
  )
}

export default ContactForm