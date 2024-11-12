import $ from './typography.module.scss';

interface TitleProps {
  children: React.ReactNode;
}

export default function Title3({ children }: TitleProps) {
  return <h2 className={$.title3}>{children}</h2>;
}
