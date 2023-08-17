const TextAreaField = (props) => {
  const {
    type,
    name,
    label,
    placeholder,
    value,
    onChange = () => {},
    className,
    onBlur,
  } = props;

  return (
    <>
      <label htmlFor={name} className="text-gray-950">
        {label}
      </label>
      <textarea
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`${className} resize-none`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
};

export default TextAreaField;
