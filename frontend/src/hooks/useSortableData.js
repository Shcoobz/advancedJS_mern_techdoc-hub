import { useState, useMemo } from 'react';
import { REPLACEMENT, SORTING } from '../config/constants';

export const useSortableData = (
  items,
  config = { key: null, direction: SORTING.DIRECTION.ascending }
) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    if (!items) return REPLACEMENT.emptyArray;

    const sortableItems = [...items];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        const aValue = a.props[sortConfig.key] || REPLACEMENT.emptyString;
        const bValue = b.props[sortConfig.key] || REPLACEMENT.emptyString;

        if (aValue < bValue) {
          return sortConfig.direction === SORTING.DIRECTION.ascending
            ? SORTING.ORDER.descending
            : SORTING.ORDER.ascending;
        }

        if (aValue > bValue) {
          return sortConfig.direction === SORTING.DIRECTION.ascending
            ? SORTING.ORDER.ascending
            : SORTING.ORDER.descending;
        }

        return 0;
      });
    }

    return sortableItems;
  }, [items, sortConfig]);

  function requestSort(key) {
    let direction = SORTING.DIRECTION.ascending;

    if (sortConfig.key === key && sortConfig.direction === SORTING.DIRECTION.ascending) {
      direction = SORTING.DIRECTION.descending;
    }

    setSortConfig({ key, direction });
  }

  function resetSort() {
    setSortConfig({ key: null, direction: SORTING.DIRECTION.ascending });
  }

  return { items: sortedItems, requestSort, resetSort, sortConfig };
};
