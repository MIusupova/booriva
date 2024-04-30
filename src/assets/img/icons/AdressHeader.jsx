import styles from "./../../../components/header/contacts/Contacts.module.sass";
const AdressHeader = () => {
  return (
    <div className={styles.adressHeader}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10C21 13.726 18.16 17.63 12.6 21.8C12.4269 21.9298 12.2164 22 12 22C11.7836 22 11.5731 21.9298 11.4 21.8C5.84 17.63 3 13.726 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1ZM12 3C10.1435 3 8.36301 3.7375 7.05025 5.05025C5.7375 6.36301 5 8.14348 5 10C5 12.71 7.118 15.836 11.448 19.306L12 19.742L12.552 19.306C16.882 15.836 19 12.71 19 10C19 8.14348 18.2625 6.36301 16.9497 5.05025C15.637 3.7375 13.8565 3 12 3ZM12 8C12.5304 8 13.0391 8.21071 13.4142 8.58579C13.7893 8.96086 14 9.46957 14 10C14 10.5304 13.7893 11.0391 13.4142 11.4142C13.0391 11.7893 12.5304 12 12 12C11.4696 12 10.9609 11.7893 10.5858 11.4142C10.2107 11.0391 10 10.5304 10 10C10 9.46957 10.2107 8.96086 10.5858 8.58579C10.9609 8.21071 11.4696 8 12 8Z" fill="#FDA3C4"/>
    </svg>
    </div>
  );
};
export default AdressHeader;
