type PageSubTitleProps = {
  text: string;
};

const PageSubTitle = ({ text }: PageSubTitleProps) => {
  return <p className="font-bold text-left w-100 ">{text}</p>;
};

export default PageSubTitle;
