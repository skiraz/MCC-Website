import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext } from "react";
import { useState } from "react";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
const [expanded, setExpanded] = useState(true);

return (




<img
src="https://img.logoipsum.com/243.svg"
className={overflow-hidden transition-all ${ expanded ? "w-32" : "w-0" }}
alt=""
/>
<button
onClick={() => setExpanded((curr) => !curr)}
className="p-1.5 rounded-lg bg-gray-500 hover:bg-gray-700 border-2 border-green-700"
>
{expanded ? : }

    <SidebarContext.Provider value={{ expanded }}>
      <ul className="flex-1 px-3">{children}</ul>
    </SidebarContext.Provider>

    <div className="border-t flex p-3">
      <img
        src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
        alt=""
        className="w-10 h-10 rounded-md"
      />
      <div
        className={`
          flex justify-between items-center
          overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
      `}
      >
        <div className="leading-4">
          <h4 className="font-semibold">John Doe</h4>
          <span className="text-xs text-gray-600">johndoe@gmail.com</span>
        </div>
        <MoreVertical size={20} />
      </div>
    </div>
  </nav>
</aside>
);
}

export function SidebarItem({ icon, text, active, alert }) {
const { expanded } = useContext(SidebarContext);

return (
<li
className={relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${ active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-black text-gray-200" }}
>
{icon}
<span
className={overflow-hidden transition-all ${ expanded ? "w-52 ml-3" : "w-0" }}
>
{text}

{alert && (
<div
className={absolute right-2 w-2 h-2 rounded bg-indigo-400 ${ expanded ? "" : "top-2" }}
/>
)}

  {!expanded && (
    <div
      className={`
      absolute left-full rounded-md px-2 py-1 ml-6
      bg-gray-500 text-indigo-800 text-sm
      invisible opacity-20 -translate-x-3 transition-all
      group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
  `}
    >
      {text}
    </div>
  )}
</li>
);
}
`

`"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar, { SidebarItem } from "./components/sidebar";
import { useRouter } from "next/navigation";
import { LayoutDashboard } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
const router = useRouter();
return (



      <SidebarItem icon={<LayoutDashboard size={20} />} text={"Dashboard"} active />
      <SidebarItem icon={<LayoutDashboard size={20} />} text={"hell"} />
      <SidebarItem icon={<LayoutDashboard size={20} />} text={"ad"} />
      <SidebarItem icon={<LayoutDashboard size={20} />} text={"gd"} />
      <SidebarItem icon={<LayoutDashboard size={20} />} text={"g"} />
      <SidebarItem icon={<LayoutDashboard size={20} />} text={"Dashgaboard"} />

    </Sidebar>
  </aside>
  <main className="flex flex-col  overflow-y-scroll h-screen w-full flex-grow p-4">
    {children}
  </main>
</div>
);
}