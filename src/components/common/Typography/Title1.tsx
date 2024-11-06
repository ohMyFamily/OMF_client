import $ from './typography.module.scss';

interface TitleProps {
  children: React.ReactNode;
}

export default function Title1({ children }: TitleProps) {
  return <h1 className={$.title1}>{children}</h1>;
}
