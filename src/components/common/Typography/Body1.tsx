import $ from './typography.module.scss';

interface TitleProps {
  children: React.ReactNode;
}

export default function Body1({ children }: TitleProps) {
  return <p className={$.body1}>{children}</p>;
}
