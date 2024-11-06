import $ from './typography.module.scss';

interface TitleProps {
  children: React.ReactNode;
}

export default function Body2({ children }: TitleProps) {
  return <p className={$.body2}>{children}</p>;
}
