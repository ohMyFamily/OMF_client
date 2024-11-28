import $ from './typography.module.scss';

interface TitleProps {
  children: React.ReactNode;
}

export default function Caption1({ children }: TitleProps) {
  return <h3 className={$.caption1}>{children}</h3>;
}
