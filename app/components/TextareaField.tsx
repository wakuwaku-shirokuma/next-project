import styles from './inquires.module.css';

interface TextareaFieldProps {
  id: string;
  name: string;
  label: string;
  rows?: number;
  required?: boolean;
}

export function TextareaField({ id, name, label, rows = 5, required = false }: TextareaFieldProps) {
  return (
    <div className={styles.fieldGroup}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <textarea id={id} name={name} required={required} rows={rows} className={styles.textarea} />
    </div>
  );
}