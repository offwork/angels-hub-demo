import { UIEvent, useState } from "react";

type VirtualScrollProps = {
  rowHeight: number;
  totalItems: number;
  items: JSX.Element[];
  visibleItemsLength: number;
  containerHeight: number;
};

export default function VirtualScroll({
  rowHeight,
  totalItems,
  items,
  visibleItemsLength,
  containerHeight,
}: VirtualScrollProps) {
  const totalHeight = rowHeight * totalItems;
  const [scrollTop, setScrollTop] = useState(0);
  const startNodeElem = Math.ceil(scrollTop / rowHeight);
  const visibleItems = items?.slice(startNodeElem, startNodeElem + visibleItemsLength);
  const offsetY = startNodeElem * rowHeight;

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    setScrollTop(e?.currentTarget?.scrollTop);
  };
  return (
    <div
      style={{
        height: containerHeight+"px",
        overflow: "auto",
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight+"px" }}>
        <div className="grid divide-y divide-white/35" style={{ transform: `translateY(${offsetY}px)` }}>{visibleItems}</div>
      </div>
    </div>
  );
}
