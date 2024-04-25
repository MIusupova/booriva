import styles from "./../../../components/header/contacts/Contacts.module.css";
const AdressHeader = () => {
  return (
    <div className={styles.adressHeader}>
      <svg
        width="18"
        height="21"
        viewBox="0 0 18 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 12.726 15.16 16.63 9.6 20.8C9.4269 20.9298 9.21637 21 9 21C8.78363 21 8.5731 20.9298 8.4 20.8C2.84 16.63 0 12.726 0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0ZM9 2C7.14348 2 5.36301 2.7375 4.05025 4.05025C2.7375 5.36301 2 7.14348 2 9C2 11.71 4.118 14.836 8.448 18.306L9 18.742L9.552 18.306C13.882 14.836 16 11.71 16 9C16 7.14348 15.2625 5.36301 13.9497 4.05025C12.637 2.7375 10.8565 2 9 2ZM9 7C9.53043 7 10.0391 7.21071 10.4142 7.58579C10.7893 7.96086 11 8.46957 11 9C11 9.53043 10.7893 10.0391 10.4142 10.4142C10.0391 10.7893 9.53043 11 9 11C8.46957 11 7.96086 10.7893 7.58579 10.4142C7.21071 10.0391 7 9.53043 7 9C7 8.46957 7.21071 7.96086 7.58579 7.58579C7.96086 7.21071 8.46957 7 9 7Z"
          fill="#FDA3C4"
        />
      </svg>
    </div>
  );
};
export default AdressHeader;
