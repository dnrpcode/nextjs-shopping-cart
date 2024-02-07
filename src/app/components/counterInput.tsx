interface ICounterInput {
  value: number;
  onChange: (count: number) => void;
}

export default function CounterInput(props: ICounterInput) {
  const { value, onChange } = props;

  return (
    <div className="flex flex-row h-10 w-60 rounded-lg relative border-slate-400 text-l border-2 max-lg:my-4">
      <button
        onClick={() => {
          value > 1 && onChange(value - 1);
        }}
        className="hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer"
      >
        <span className="m-auto  font-thin">−</span>
      </button>
      <input
        disabled
        value={value}
        className="focus:outline-none text-center items-center w-20 border-slate-400 border-x-2"
      />
      <button
        onClick={() => onChange(value + 1)}
        className="hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
      >
        <span className="m-auto font-thin">+</span>
      </button>
    </div>
  );
}
