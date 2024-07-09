import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';

export function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <ResizablePanelGroup className="max-h-dvh" direction="horizontal">
      <ResizablePanel className="p-4" maxSize={10} minSize={2}>
        Menu
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>{children}</ResizablePanel>
    </ResizablePanelGroup>
  );
}
