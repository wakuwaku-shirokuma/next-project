'use client';

import styles from '../components/inquires.module.css';
import { InputField } from '../components/InputField';
import { TextareaField } from '../components/TextareaField';
import { useInquire } from '../components/InquireContext';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export default function Inquires() {
  const { formData, setFormData, setStep } = useInquire();
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataObj = new FormData(e.currentTarget);
    
    const data = {
      email: formDataObj.get('email') as string,
      name: formDataObj.get('name') as string,
      message: formDataObj.get('message') as string,
    };

    setFormData(data);
    setStep('confirm');
    router.push('/inquires/confirm');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>お問い合わせ</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <InputField 
          id="email" 
          name="email" 
          label="メールアドレス" 
          type="email" 
          required 
          defaultValue={formData.email}
        />
        <InputField 
          id="name" 
          name="name" 
          label="お名前" 
          type="text" 
          required 
          defaultValue={formData.name}
        />
        <TextareaField 
          id="message" 
          name="message" 
          label="お問い合わせ内容" 
          rows={5} 
          required 
          defaultValue={formData.message}
        />
        <button type="submit" className={styles.submitButton}>確認する</button>
      </form>
    </div>
  );
}