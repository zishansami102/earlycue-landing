import { LayoutGrid, Star, Clock, MessageSquare, FileText, Image, Settings } from 'lucide-react';

export default function PanelSidebar() {
  const top = [
    { Icon: LayoutGrid, label: 'Radar' },
    { Icon: Star, label: 'Saved' },
    { Icon: Clock, label: 'History' },
    { Icon: MessageSquare, label: 'Chat', active: true },
    { Icon: FileText, label: 'Briefs' },
    { Icon: Image, label: 'Reels' },
  ];
  return (
    <div className="hidden w-14 flex-col items-center justify-between border-r border-line py-4 sm:flex">
      <div className="flex flex-col items-center gap-1">
        {top.map(({ Icon, label, active }) => (
          <span
            key={label}
            title={label}
            className={`flex h-9 w-9 items-center justify-center rounded-lg ${active ? 'bg-tint3 text-ink' : 'text-faint'}`}
          >
            <Icon size={17} strokeWidth={1.8} />
          </span>
        ))}
      </div>
      <span title="Settings" className="flex h-9 w-9 items-center justify-center rounded-lg text-faint">
        <Settings size={17} strokeWidth={1.8} />
      </span>
    </div>
  );
}
