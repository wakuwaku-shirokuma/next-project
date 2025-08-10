'use client';

import styles from '../../components/inquires.module.css';
import { useInquire } from '../../components/InquireContext';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export default function Confirm() {
  const { formData, setStep } = useInquire();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ここでメール送信の処理を行う
    console.log('送信データ:', formData);

    // 送信後はサンクスページにリダイレクト
    setStep('thanks');
    router.push('/inquires/thanks');
  };

  const handleBack = () => {
    setStep('form');
    router.push('/inquires');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>お問い合わせ内容確認</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>メールアドレス</label>
          <div className={styles.input} style={{ backgroundColor: '#f9f9f9' }}>{formData.email}</div>
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>お名前</label>
          <div className={styles.input} style={{ backgroundColor: '#f9f9f9' }}>{formData.name}</div>
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>お問い合わせ内容</label>
          <div className={styles.textarea} style={{ backgroundColor: '#f9f9f9', minHeight: '120px' }}>{formData.message}</div>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button type="button" onClick={handleBack} className={styles.submitButton} style={{ backgroundColor: '#6c757d' }}>
            戻る
          </button>
          <button type="submit" className={styles.submitButton}>送信する</button>
        </div>
      </form>
    </div>
  );
}
