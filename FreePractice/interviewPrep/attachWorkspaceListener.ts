const viewport = document.querySelector<HTMLElement>("#viewport");

interface PortConnectAction {
  type: "PORT_CONNECT";
  portId: string;
  nodeId: string;
}

interface NodeDragAction {
  type: "NODE_DRAG";
  nodeId: string;
}

interface CanvasPanAction {
  type: "CANVAS_PAN";
}

type DispatchPayload = PortConnectAction | NodeDragAction | CanvasPanAction;

type EventDispatcher = (payload: DispatchPayload) => void;

const attachWorkspaceListener = (
  viewport: HTMLElement | null,
  dispatcher: EventDispatcher,
) => {
  const handlePointerDown = (e: PointerEvent) => {
    if (!(e.target instanceof HTMLElement)) return;
    const portEl = e.target.closest<HTMLElement>(".port");
    if (portEl) {
      const nodeEl = portEl.closest<HTMLElement>(".node");
      const portId = portEl.dataset.portId;
      const nodeId = nodeEl?.dataset.nodeId;

      if (portId && nodeId) {
        dispatcher({ type: "PORT_CONNECT", portId, nodeId });
        return;
      }
    }
    const nodeEl = e.target.closest<HTMLElement>(".node");
    if (nodeEl) {
      const nodeId = nodeEl.dataset.nodeId;

      if (nodeId) {
        dispatcher({ type: "NODE_DRAG", nodeId });
        return
      }
    }
    dispatcher({ type: "CANVAS_PAN" });
  };

  viewport?.addEventListener("pointerdown", handlePointerDown);

return () => viewport?.removeEventListener("pointerdown", handlePointerDown);
};

attachWorkspaceListener(viewport, (payload) => {
  console.log(payload);
});
