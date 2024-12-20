import styles from "./../../../components/mobileMenu/MobileMenu.module.sass";

const MobileMenuBasket = ({isBasketOpen}) => {
  return (
    <svg
    isBasketOpen={isBasketOpen}
      className={styles.mobileMenuBasket}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.40103 11.8927C5.42784 11.5586 5.57953 11.2468 5.82587 11.0195C6.07222 10.7921 6.39515 10.6659 6.73036 10.666H25.269C25.6042 10.6659 25.9272 10.7921 26.1735 11.0195C26.4199 11.2468 26.5715 11.5586 26.5984 11.8927L27.7677 26.4527C27.7971 26.8196 27.7503 27.1887 27.6301 27.5366C27.51 27.8845 27.3191 28.2038 27.0694 28.4743C26.8198 28.7449 26.5169 28.9608 26.1797 29.1085C25.8426 29.2563 25.4785 29.3326 25.1104 29.3327H6.88902C6.52092 29.3326 6.15683 29.2563 5.81966 29.1085C5.4825 28.9608 5.17957 28.7449 4.92995 28.4743C4.68033 28.2038 4.48943 27.8845 4.36925 27.5366C4.24908 27.1887 4.20224 26.8196 4.23169 26.4527L5.39969 11.8927H5.40103Z"
        stroke={isBasketOpen ?  "current" : "#1F1F1F"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.3332 14.666V7.99935C21.3332 6.58486 20.7713 5.22831 19.7711 4.22811C18.7709 3.22792 17.4143 2.66602 15.9998 2.66602C14.5853 2.66602 13.2288 3.22792 12.2286 4.22811C11.2284 5.22831 10.6665 6.58486 10.6665 7.99935V14.666"
        stroke={isBasketOpen ?  "current" : "#1F1F1F"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default MobileMenuBasket;
