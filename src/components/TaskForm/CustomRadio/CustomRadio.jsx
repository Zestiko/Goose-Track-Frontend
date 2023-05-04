import styles from './CustomRadio.module.scss';

const CustomRadio = ({ options, value, setFieldValue, theme }) => {
  return (
    <div className={`${styles.radioGroup} ${theme}`}>
      {options.map((option, index) => (
        <label
          className={`${styles.radioLabel} ${theme}  ${
            value === option.value ? styles.activeRadioInput : ''
          }`}
          key={index}
        >
          <input
            className={`${styles.radioInput} ${theme}`}
            type="radio"
            value={option.value}
            checked={value === option.value}
            onChange={() => setFieldValue('priority', option.value)}
          />
          <span
            className={`${styles.radioButton} ${
              value === option.value ? styles.active : ''
            } ${styles[option.color]} ${theme}`}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default CustomRadio;
