import styles from "./button.module.scss";

const Button = (props) => {
    const { children, type = "button", isLoading, disabled,color ,...restProps } = props;
    return (
        <button className={styles.btn} style={{backgroundColor: color}} type={type} disabled={isLoading || disabled} {...restProps}>
            {isLoading ? "Loading..." : children}
        </button>
    );
};
//#17a23c
export default Button;
