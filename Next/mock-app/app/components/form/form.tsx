import React from 'react';
import styles from './form.module.css';

function Form() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>MINIMALISTIC FORM</header>
      <form id="form" className={styles.topBefore}>
        <input id="name" type="text" placeholder="NAME" className={styles.input} />
        <input id="email" type="text" placeholder="E-MAIL" className={styles.input} />
        <textarea id="message" placeholder="MESSAGE" className={styles.textarea}></textarea>
        <input id="submit" type="submit" value="GO!" className={styles.submit} />
      </form>
    </div>
  );
}

export default Form;
