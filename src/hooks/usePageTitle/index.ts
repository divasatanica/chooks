import { useEffect, useRef } from 'react';
import { useUnmount } from '../useUnmount/index'

interface IUsePageTitleOption {
  preservePreTitle?: boolean;
}

const DEFAULT_OPTION: IUsePageTitleOption = {
  preservePreTitle: true
}

function usePageTitle(title: string, options: IUsePageTitleOption = DEFAULT_OPTION) {
  const preTitleRef = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title, options]);

  useUnmount(() => {
    if (options.preservePreTitle) {
      document.title = preTitleRef.current;
    }
  });
}

export {
  usePageTitle
}