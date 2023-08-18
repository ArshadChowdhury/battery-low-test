const TextInputField = (props) => {
  const {
    type,
    name,
    label,
    placeholder,
    value,
    onChange = () => {},
    className,
    onBlur,
    disabled,
  } = props;

  return (
    <>
      <label htmlFor={name} className="text-gray-950">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />
    </>
  );
};

export default TextInputField;
