import { CommandIcon } from "@/components/Shared/Icons";
import { useKBar } from "kbar";

const CommandBarInvoker = (): JSX.Element => {
  const { query } = useKBar();

  return (
    <button
      className="fixed bottom-8 right-8 rounded-md p-1 transition duration-200 hover:shadow-commandButton focus:outline-none focus-visible:shadow-commandButton"
      onClick={() => query.toggle()}
      aria-label="Command Bar"
    >
      <CommandIcon />
    </button>
  );
};

export default CommandBarInvoker;
