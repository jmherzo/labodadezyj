import styles from "./emoji.module.css";

type EmojiProps = {
  symbol: string;
  label: string;
};

export function Emoji({ symbol, label }: EmojiProps) {
  return (
    <span role="img" aria-label={label} className={styles.emoji}>
      {symbol}
    </span>
  );
}
