import { FilterContainer } from '../Filter/Filter.styled';
import { Input } from '../Phonebook/Phonebook.styled';
import propTypes from 'prop-types';

const Filter = ({ search, handleChange }) => {
  return (
    <FilterContainer>
      <Input
        type="text"
        value={search}
        placeholder="Filter by name..."
        onChange={handleChange}
      />
    </FilterContainer>
  );
};

Filter.propTypes = {
  search: propTypes.string,
  handleChange: propTypes.func.isRequired,
};

export default Filter;
