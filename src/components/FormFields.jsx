import { EyeIcon, EyeSlashIcon } from "../assets/icons/regular/";
import { Field, useField } from "formik";
import { useCallback, useEffect, useId, useRef } from "react";
import { useToggle } from "../hooks/useToggle";
import { capitalise, toStrictBoolean } from "../utils/textUtils";
import { twMerge } from "tailwind-merge";

export const TextField = ({ field, className }) => {
  const meta = useField(field.name)[1];
  const id = useId();

  return (
    <div className="form-control">
      <label htmlFor={id} className="text-blue-400">
        {field.label}
      </label>
      <div className="form-field-container relative overflow-hidden  rounded-md before:bg-blue-600 dark:before:bg-slate-400">
        {field.icon}
        <Field
          name={field.name}
          id={id}
          type={field.type}
          placeholder={field?.placeholder}
          className={twMerge(
            `rounded-md border border-slate-200 bg-gray-50 py-2 pl-14 pr-2 text-base text-slate-700 shadow-inner placeholder:font-normal placeholder:text-slate-300 dark:bg-slate-500 dark:text-blue-100 dark:placeholder:text-blue-50`,
            className
          )}
        />
      </div>
      {!!meta.error && meta.touched ? (
        <span className="ml-2 text-sm text-red-600 before:content-['*'] dark:text-red-400">
          {meta.error}
        </span>
      ) : null}
    </div>
  );
};

export const InputField = ({ field, className, type, value, handleChange }) => {
  return (
    <div className="form-control">
      <div className="form-field-container relative overflow-hidden  rounded-md before:bg-blue-600 dark:before:bg-slate-400">
        {field.icon}
        <input
          name={field.name}
          type={type}
          onChange={handleChange}
          value={value}
          placeholder={field?.placeholder}
          className={twMerge(
            `rounded-md border border-slate-200 bg-gray-50 py-2 pl-14 pr-2 text-base text-slate-700 shadow-inner placeholder:font-normal placeholder:text-slate-300 dark:bg-slate-500 dark:text-blue-100 dark:placeholder:text-blue-100`,
            className
          )}
        />
      </div>
    </div>
  );
};

export const TextAreaField = ({ field, className }) => {
  const [fieldData, meta] = useField(field.name);
  const { value } = meta;
  const id = useId()

  const { onBlur, onChange } = fieldData;

  return (
    <div className="form-control">
      <label htmlFor={id} className="text-blue-400">
        {field.label}
      </label>
      <div className="form-field-container relative overflow-hidden rounded-md before:bg-blue-600 dark:before:bg-slate-400">
        <textarea
          name={field.name}
          type={field.type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={field?.placeholder}
          id={id}
          className={twMerge(
            `rounded-md border border-slate-200 bg-gray-50 px-4 py-2 text-base text-slate-700 shadow-inner placeholder:font-normal placeholder:text-slate-300 dark:bg-slate-500 dark:text-blue-100 dark:placeholder:text-blue-100`,
            className
          )}
        />
      </div>
      {!!meta.error && meta.touched ? (
        <span className="ml-2 text-sm text-red-600 before:content-['*'] dark:text-red-400">
          {meta.error}
        </span>
      ) : null}
    </div>
  );
};

export const PasswordField = ({ field, className = "" }) => {
  const [show, toggleShow, setShow] = useToggle();
  const inputRef = useRef();
  const meta = useField(field.name)[1];
  const id = useId()

  const focusInput = () => {
    // const length = inputRef.current.value.length - 1
    inputRef.current.focus();
  };

  return (
    <div className="form-control">
      <label htmlFor={id} className="text-blue-400">
        {field.label}
      </label>
      <div className="form-field-container relative overflow-hidden  rounded-md before:bg-blue-600 dark:before:bg-slate-400">
        {field.icon}
        <Field
          name={field.name}
          id={id}
          innerRef={inputRef}
          placeholder={field?.placeholder}
          type={show ? "text" : "password"}
          className={twMerge(
            `rounded-md border border-slate-200 bg-gray-50 px-4 py-2 text-base text-slate-700 shadow-inner placeholder:font-normal placeholder:text-slate-300 dark:bg-slate-500 dark:text-blue-100 dark:placeholder:text-blue-100`,
            className
          )}
        />

        <EyeIcon
          className={`field-icon ${
            show ? "hide-toggle" : "show-toggle"
          } -right-1 top-0 -mb-1 text-indigo-500 dark:text-blue-100`}
          onClick={() => {
            setShow(true);
            focusInput();
          }}
        />
        <EyeSlashIcon
          className={`field-icon ${
            show ? "show-toggle" : "hide-toggle"
          } -right-1 top-0 -mb-1 text-indigo-500 dark:text-blue-100`}
          onClick={() => {
            setShow(false);
            focusInput();
          }}
        />
      </div>
      {meta.error && meta.touched ? (
        <span className="ml-2 text-sm text-red-600 before:content-['*'] dark:text-red-400">
          {meta.error}
        </span>
      ) : null}
    </div>
  );
};

export const CheckBoxInput = ({ className, onChange = () => {}, value }) => {
  return (
    <input
      type={"checkbox"}
      onChange={onChange}
      className={`rounded-sm border-2 border-cyan-400 shadow-inner checked:after:bg-cyan-400 dark:border-indigo-200 dark:bg-slate-700 dark:checked:after:bg-cyan-400 ${className}`}
      checked={value}
    />
  );
};

export const RadioInput = ({
  className,
  onClick = () => {},
  value,
  name,
  checked,
}) => {
  return (
    <input
      type={"radio"}
      onClick={onClick}
      name={name}
      onChange={(e) => {
        e.target.checked = checked;
      }}
      value={value}
      className={`border-2 border-cyan-400 shadow-inner checked:after:bg-cyan-400 dark:border-indigo-200 dark:bg-slate-700 dark:checked:after:bg-cyan-400 ${className}`}
      checked={checked}
    />
  );
};

export const CheckBoxField = ({ name, className = "", label = "" }) => {
  const [, meta, helpers] = useField(name);
  const { setValue, setTouched } = helpers;
  const { value } = meta;

  return (
    <div className="form-control">
      <div className="flex items-center gap-3">
        <CheckBoxInput
          className={`${className}`}
          onChange={(e) => {
            setTouched(true);
            setValue(e.target.checked);
          }}
          value={value}
        />{" "}
        <label className="text-base text-slate-500 dark:text-slate-400">
          {capitalise(label)}
        </label>
      </div>
      {meta.error && meta.touched ? (
        <span className="ml-2 text-sm text-red-600 before:content-['*'] dark:text-red-400">
          {meta.error}
        </span>
      ) : null}
    </div>
  );
};

export const RadioField = ({
  name,
  className = "",
  options = ["None"],
  label = "",
}) => {
  const [, meta, helpers] = useField(name);
  const { setValue, setTouched } = helpers;
  const { value } = meta;

  const optionsFunc = useCallback(() => {
    return options.map((option) => {
      return typeof option == "object"
        ? { title: option.title, value: option.value }
        : { title: option, value: option };
    });
  }, [options]);

  useEffect(() => {
    setTouched(true);
  }, []);

  return (
    <div className="form-control">
      <label htmlFor={name} className="text-blue-400">
        {label}{" "}
        {meta.error && meta.touched ? (
          <span className="ml-2 text-sm text-red-600 no-underline before:content-['*'] dark:text-red-400">
            {meta.error}
          </span>
        ) : null}
      </label>
      <div className="form-field-container relative mt-2 space-y-2 overflow-hidden rounded-md pl-4">
        {optionsFunc().map((field) => {
          return (
            <div className="flex items-center gap-3" key={field.title}>
              <RadioInput
                name={name}
                className={`${className}`}
                onClick={(e) => {
                  setTouched(true);
                  setValue(
                    typeof field.value == "boolean"
                      ? toStrictBoolean(e.target.value)
                      : e.target.value
                  );
                }}
                value={field.value}
                checked={value == field.value}
              />{" "}
              <label className="text-base text-slate-500 dark:text-slate-400">
                {capitalise(field.title)}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
