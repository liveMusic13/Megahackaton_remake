import { useContext } from 'react';
import { SearchTermContext } from '../providers/SearchTermProvider';

export const useSearchTerm = () => useContext(SearchTermContext);
