'use client';

import styles from '../../components/inquires.module.css';
import Link from 'next/link';

export default function Thanks() {
  return (
    <div className={styles.container}>
      <div className={styles.thanksContainer}>
        <div className={styles.successIcon}>
          ✓
        </div>
        <h1 className={styles.title}>お問い合わせありがとうございました</h1>
        <p className={styles.thanksMessage}>
          お問い合わせを受け付けました。<br />
          内容を確認の上、3営業日以内にご返信いたします。
        </p>
        <Link href="/" className={`${styles.submitButton} ${styles.backButton}`}>
          トップページに戻る
        </Link>
      </div>
    </div>
  );
}