type Props = {
  message: string;
};

export function SuccessBanner({ message }: Props) {
  if (!message) return null;

  return (
    <div className="success-banner">
      <span className="success-icon">✓</span>
      {message}
    </div>
  );
}
