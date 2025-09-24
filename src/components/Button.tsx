type ButtonType = {
    text: string,
    style: string
}

export default function Button({text, style}: ButtonType) {
  return (
    <button className={`p-2 rounded-2xl shadow text-center ${style}`}>
      {text}
    </button>
  );
}
