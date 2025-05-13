type ButtonProps = {
  text: string;
  isFull: boolean;
  onClick?: () => void;
};

const Button = ({ text, isFull, onClick }: ButtonProps) => {
  return (
    <button
      className={`text-white w-100 px-4 py-2 rounded-md cursor-pointer ${
        isFull ? "bg-blue-500" : "bg-gray-500"
      }`}
      disabled={!isFull}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
