import $ from './typography.module.scss';

interface TitleProps {
  children: React.ReactNode;
}

export default function Button1({ children }: TitleProps) {
  return <span className={$.button1}>{children}</span>;
}
