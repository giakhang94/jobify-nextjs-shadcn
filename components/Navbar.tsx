import LinkDropDown from "./LinkDropdown";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./Toggle";

function Navbar() {
  return (
    <nav className="bg-muted py-4 sm:px-16 lg:px-24 px-4 flex  items-center justify-between w-full">
      <div>
        <LinkDropDown />
      </div>
      <div className="flex items-center gap-x-4">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}
export default Navbar;
