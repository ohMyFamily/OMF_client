import $ from './typography.module.scss';

interface TitleProps {
  children: React.ReactNode;
}

export default function Body3({ children }: TitleProps) {
  return <p className={$.body3}>{children}</p>;
}
