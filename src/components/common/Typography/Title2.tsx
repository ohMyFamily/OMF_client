import $ from './typography.module.scss';

interface TitleProps {
  children: React.ReactNode;
}

export default function Title2({ children }: TitleProps) {
  return <h2 className={$.title2}>{children}</h2>;
}
