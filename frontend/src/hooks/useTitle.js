import { useEffect } from 'react';

/**
 * @function useTitle
 * @desc A custom hook that sets the document's title to the provided value when the component mounts and restores the previous title when the component unmounts or the title changes.
 */
function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    return function cleanup() {
      return (document.title = prevTitle);
    };
  }, [title]);
}

export default useTitle;
