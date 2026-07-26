import LeftPanel from "./LeftPannel";

const AuthLayout = ({ children }) => {
  return (
    <div
      className="
      min-h-screen
      bg-[#0b0b0b]
      grid
      lg:grid-cols-2
      "
    >

      <LeftPanel />

      <div
        className="
        flex
        justify-center
        items-center
        p-8
        lg:border-l
        border-zinc-700
        "
      >
        {children}
        {/* yaha children loginform hai  */}
      </div>

    </div>
  );
};

export default AuthLayout;