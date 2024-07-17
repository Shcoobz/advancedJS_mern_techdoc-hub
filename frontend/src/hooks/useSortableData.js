import { useState, useMemo } from 'react';

export const useSortableData = (
  items,
  config = { key: null, direction: 'ascending' }
) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    if (!items) return [];

    const sortableItems = [...items];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        const aValue = a.props[sortConfig.key] || '';
        const bValue = b.props[sortConfig.key] || '';
        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  function requestSort(key) {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    setSortConfig({ key, direction });
  }

  function resetSort() {
    setSortConfig({ key: null, direction: 'ascending' });
  }

  return { items: sortedItems, requestSort, resetSort, sortConfig };
};
