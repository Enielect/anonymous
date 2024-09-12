type InputProps = {
  label: string;
  formName: string;
};

export function ProfileInput({ label, formName }: InputProps) {
  return (
    <div>
      <label htmlFor={formName} className="block mb-2 text-sm sm:text-base text-[#FEFEFEB2]">
        {/* Enter Email */}
        {label}
      </label>
      <input
        type={formName}
        name={formName}
        id={formName}
        className="bg-[#FEFEFE0D] border px-3 rounded-md w-full border-[#FEFEFE33] h-10 focus:outline-none"
      />
    </div>
  );
}
