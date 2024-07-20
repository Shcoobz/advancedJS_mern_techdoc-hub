import { useMemo, useState } from 'react';
import { SORTING } from '../config/constants';

export const useSortableUserData = (
  items,
  config = { key: null, direction: SORTING.DIRECTION.ascending }
) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    if (!items || items.length === 0) return [];

    const sortableItems = [...items];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        const aValue = a.props[sortConfig.key] || '';
        const bValue = b.props[sortConfig.key] || '';

        // console.log(`Comparing ${aValue} with ${bValue}`);

        if (aValue < bValue) {
          return sortConfig.direction === SORTING.DIRECTION.ascending ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === SORTING.DIRECTION.ascending ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableItems;
  }, [items, sortConfig]);

  function requestSort(key) {
    setSortConfig((prevConfig) => {
      let direction = SORTING.DIRECTION.ascending;
      if (
        prevConfig.key === key &&
        prevConfig.direction === SORTING.DIRECTION.ascending
      ) {
        direction = SORTING.DIRECTION.descending;
      }

      return { key, direction };
    });
  }

  function resetSort() {
    setSortConfig({ key: null, direction: SORTING.DIRECTION.ascending });
  }

  return { items: sortedItems, requestSort, resetSort, sortConfig };
};
