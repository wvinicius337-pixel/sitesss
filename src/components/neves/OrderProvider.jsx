import React, { createContext, useContext, useMemo, useReducer } from "react";
import { findMenuItem, formatBRL } from "./orderConfig";

const OrderContext = createContext(null);

const initial = { items: {}, name: "", obs: "" };

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      const id = action.id;
      const qty = (state.items[id] || 0) + 1;
      return { ...state, items: { ...state.items, [id]: qty } };
    }
    case "dec": {
      const id = action.id;
      const qty = (state.items[id] || 0) - 1;
      const items = { ...state.items };
      if (qty <= 0) delete items[id];
      else items[id] = qty;
      return { ...state, items };
    }
    case "remove": {
      const items = { ...state.items };
      delete items[action.id];
      return { ...state, items };
    }
    case "clear":
      return { items: {}, name: "", obs: "" };
    case "setName":
      return { ...state, name: action.value };
    case "setObs":
      return { ...state, obs: action.value };
    default:
      return state;
  }
}

export function OrderProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);

  const value = useMemo(() => {
    const lines = Object.entries(state.items)
      .map(([id, qty]) => {
        const item = findMenuItem(id);
        if (!item) return null;
        return { item, qty, subtotal: item.priceNum * qty };
      })
      .filter(Boolean);

    const count = lines.reduce((s, l) => s + l.qty, 0);
    const total = lines.reduce((s, l) => s + l.subtotal, 0);

    return {
      items: state.items,
      lines,
      count,
      total,
      name: state.name,
      obs: state.obs,
      add: (id) => dispatch({ type: "add", id }),
      dec: (id) => dispatch({ type: "dec", id }),
      remove: (id) => dispatch({ type: "remove", id }),
      clear: () => dispatch({ type: "clear" }),
      setName: (v) => dispatch({ type: "setName", value: v }),
      setObs: (v) => dispatch({ type: "setObs", value: v }),
      formattedTotal: formatBRL(total),
    };
  }, [state]);

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrder() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder precisa estar dentro de OrderProvider");
  return ctx;
}