import { cn } from "@/lib/utils";

const Sidebar = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    ></div>
  );
};

export default Sidebar;
