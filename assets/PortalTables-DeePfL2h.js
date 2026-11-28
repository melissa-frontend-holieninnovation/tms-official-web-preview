import{J as t}from"./FleetImpact-C_ObIj_o.js";import{bf as e,bd as o}from"./CarrierProvider-B3e0Qsan.js";const l=t.div`
  overflow-x: auto;
`,d=t.table`
  width: 100%;
  min-width: 720px;
  border-collapse: collapse;
  font-family: ${e.ui};
  font-size: 14px;

  th,
  td {
    padding: ${o.cell.padding[0]}px ${o.cell.padding[1]}px;
    border-bottom: 1px solid var(--color-border-subtle);
    text-align: left;
    vertical-align: top;
  }

  th {
    font-size: ${o.header.type.size}px;
    font-weight: ${o.header.type.weight};
    color: var(--color-text-secondary);
    background: var(--color-bg-sunken);
    white-space: nowrap;
  }

  td {
    color: var(--color-text-primary);
  }

  tbody tr:last-child td {
    border-bottom: none;
  }
`;export{d as P,l as T};
