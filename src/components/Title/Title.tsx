import styles from "./title.module.scss";
type Props = {
  title: string;
};

function Title({ title }: Props) {
  return <h2 className={styles.title}>{title}</h2>;
}

export default Title;
