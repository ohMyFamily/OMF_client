import $ from './typography.module.scss';

interface TitleProps {
  children: React.ReactNode;
}

export default function Title1({ children }: TitleProps) {
  return <h2 className={$.title1}>{children}</h2>;
}
