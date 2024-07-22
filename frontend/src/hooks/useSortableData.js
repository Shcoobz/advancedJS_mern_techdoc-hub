import { useState, useMemo } from 'react';
import { REPLACEMENT, SORTING } from '../config/constants';

/**
 * @function useSortableData
 * @desc A custom hook that provides sorting functionality for a list of items. It manages the sort configuration and returns sorted items based on the current sort settings. It also provides functions to request sorting by a specific key and to reset the sorting configuration.
 */
export const useSortableData = (
  items,
  config = { key: null, direction: SORTING.DIRECTION.ascending }
) => {
  const [sortConfig, setSortConfig] = useState(config);

  /**
   * @function useMemo
   * @desc Returns a memoized version of the sorted items based on the current sort configuration.
   */
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

        return SORTING.ORDER.equal;
      });
    }

    return sortableItems;
  }, [items, sortConfig]);

  /**
   * @function requestSort
   * @desc Updates the sort configuration to sort items by the specified key in ascending or descending order.
   */
  function requestSort(key) {
    let direction = SORTING.DIRECTION.ascending;

    if (sortConfig.key === key && sortConfig.direction === SORTING.DIRECTION.ascending) {
      direction = SORTING.DIRECTION.descending;
    }

    setSortConfig({ key, direction });
  }

  /**
   * @function resetSort
   * @desc Resets the sort configuration to default (ascending order) with no sorting key.
   */
  function resetSort() {
    setSortConfig({ key: null, direction: SORTING.DIRECTION.ascending });
  }

  return { items: sortedItems, requestSort, resetSort, sortConfig };
};
