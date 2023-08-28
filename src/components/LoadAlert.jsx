import AlertStyles from './PhonebookCSS/Alert.module.css';

export const LoadAlert = () => {
  return (
    <div className={AlertStyles.alert}>
      <span className={AlertStyles.alertText}></span>
    </div>
  );
};
