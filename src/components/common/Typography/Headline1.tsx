import $ from './typography.module.scss';

interface TitleProps {
  children: React.ReactNode;
}

export default function Headline1({ children }: TitleProps) {
  return <h1 className={$.body2}>{children}</h1>;
}
