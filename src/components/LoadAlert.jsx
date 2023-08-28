import AlertStyles from './PhonebookCSS/Alert.module.css';

export const Alert = () => {
  return (
    <div className={AlertStyles.alert}>
      <span className={AlertStyles.alertText}>Request in progress...</span>
    </div>
  );
};
