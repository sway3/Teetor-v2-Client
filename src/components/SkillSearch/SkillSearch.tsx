import { useState, useEffect, ChangeEvent } from 'react';

import Fuse, { FuseResult } from 'fuse.js';
import {
  canHelpWithArray,
  professionArray,
} from '@/utils/constants/searchData';

interface SkillSearchProps {
  option: string;
  onResultChange: (thisProfession: string) => void;
}

export default function SkillSearch({
  option,
  onResultChange,
}: SkillSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<FuseResult<string>[]>([]);

  const searchOption =
    option === 'profession' ? professionArray : canHelpWithArray;

  const fuse = new Fuse(searchOption, {
    includeScore: true,
  });

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const dropdownHandler = () => {
    setQuery('');
  };

  useEffect(() => {
    const result = fuse.search(query);
    setResults(result);
  }, [query]);

  return (
    <>
      <input
        onChange={searchHandler}
        placeholder={
          option === 'profession'
            ? 'Enter your profession'
            : 'Enter your skills'
        }
        className="w-full border rounded-md border-gray-400 p-2"
      />
      {query && results.length > 0 && (
        <ul className="h-28 overflow-scroll border">
          {results.map((result: any, index: number) => (
            <li
              key={index}
              onClick={() => {
                onResultChange(result.item);
                dropdownHandler();
              }}
              className="p-2 bg-green-50 border-b"
            >
              {result.item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
