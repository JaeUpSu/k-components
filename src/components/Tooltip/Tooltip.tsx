import "./tooltip.scss";

interface Props {
  children: React.ReactNode;
  contents: string;
}

export const Tooltip = ({ children, contents }: Props) => {
  return (
    <div className="box">
      {children}
      <div className="tooltip">{contents}</div>
    </div>
  );
};
