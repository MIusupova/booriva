import styles from "./../../../components/mobileMenu/MobileMenu.module.sass";

const MobileMenuHeart = () => {
  return (
    <svg
      className={styles.mobileMenuHeart}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.33317 4C5.65184 4 2.6665 6.95467 2.6665 10.6C2.6665 13.5427 3.83317 20.5267 15.3172 27.5867C15.5229 27.7118 15.759 27.778 15.9998 27.778C16.2406 27.778 16.4768 27.7118 16.6825 27.5867C28.1665 20.5267 29.3332 13.5427 29.3332 10.6C29.3332 6.95467 26.3478 4 22.6665 4C18.9852 4 15.9998 8 15.9998 8C15.9998 8 13.0145 4 9.33317 4Z"
        stroke="#1F1F1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default MobileMenuHeart;
