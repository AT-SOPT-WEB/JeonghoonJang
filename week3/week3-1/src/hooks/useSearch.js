import { useState } from "react";

const useSearch = (initialMembers) => {
  const [search, setSearch] = useState("");
  const [filteredMembers, setFilteredMemebers] = useState(initialMembers);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    const result = initialMembers.filter((member) =>
      member.name.includes(search)
    );
    setFilteredMemebers(result);
  };

  return { search, filteredMembers, handleSearchChange, handleSearch };
};

export default useSearch;
