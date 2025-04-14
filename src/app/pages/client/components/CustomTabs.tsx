import { useRef, useState } from "react";
import { FloatingIndicator, Tabs } from "@mantine/core";

interface TabData {
  value: string;
  label: string;
  content: React.ReactNode;
}

interface CustomTabsProps {
  tabs: TabData[];
  listClassName?: string;
  tabClassName?: string;
}

const CustomTabs = ({ tabs, listClassName, tabClassName }: CustomTabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.value || "");
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>(tabs[0]?.value || null);
  const controlsRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const setControlRef = (val: string) => (node: HTMLButtonElement | null) => {
    if (node) {
      controlsRefs.current[val] = node;
    }
  };
  return (
    <Tabs variant="none" value={value} onChange={setValue}>
      <Tabs.List
        ref={setRootRef}
        className={`${listClassName} !relative rounded-md bg-[#EAD0A880] p-px`}
      >
        {tabs.map((tab) => (
          <Tabs.Tab
            key={tab.value}
            value={tab.value}
            ref={setControlRef(tab.value)}
            className={`!z-10 w-1/${tabs.length} rounded-md font-medium transition-colors duration-300 ease-in ${tabClassName} ${
              activeTab === tab.value ? "!text-white" : "!text-[#402905]"
            }`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </Tabs.Tab>
        ))}

        <FloatingIndicator
          target={value ? controlsRefs.current[value] : null}
          parent={rootRef}
          className="!rounded-md !border !border-gray-200 !bg-[#402905] !shadow-sm"
        />
      </Tabs.List>

      {tabs.map((tab) => (
        <Tabs.Panel key={tab.value} value={tab.value} pt="md">
          {tab.content}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};

export default CustomTabs;
