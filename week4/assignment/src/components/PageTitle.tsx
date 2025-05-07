type PageTitleProps = {
  text: string;
};

const PageTitle = ({ text }: PageTitleProps) => {
  return <p className="font-bold text-2xl">{text}</p>;
};

export default PageTitle;
