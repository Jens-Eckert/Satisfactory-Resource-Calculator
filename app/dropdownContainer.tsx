import DropdownItem from "./dropdownItem";
import { promises as fs } from "fs";

export default async function DropdownContainer() {
  const file = await fs.readFile(process.cwd() + "/public/items.json", "utf-8");
  const data = JSON.parse(file);

  // console.log(data);

  return (
    <div className="h-28 w-44 overflow-y-scroll overflow-x-hidden bg-slate-400">
      {/* @ts-ignore */}
      {data.map((v) => {
        return <DropdownItem item={v} key={Math.random() * 1000} />;
      })}
    </div>
  );
}
