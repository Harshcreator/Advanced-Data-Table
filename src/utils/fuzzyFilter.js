import Fuse from 'fuse.js';

export const fuzzyFilter = (rows, columnId, filterValue) => {
  const fuse = new Fuse(rows, {
    keys: [columnId],
    includeScore: true,
    threshold: 0.3, // Adjust this for fuzziness
  });

  const result = fuse.search(filterValue).map(({ item }) => item);

  return result;
};

export default fuzzyFilter;