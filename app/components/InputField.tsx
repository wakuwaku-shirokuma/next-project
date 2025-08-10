import styles from './inquires.module.css';

interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email';
  required?: boolean;
}

export function InputField({ id, name, label, type = 'text', required = false }: InputFieldProps) {
  return (
    <div className={styles.fieldGroup}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input id={id} name={name} type={type} required={required} className={styles.input} />
    </div>
  );
}