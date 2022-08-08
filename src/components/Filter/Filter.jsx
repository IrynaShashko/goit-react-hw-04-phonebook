import { FilterContainer } from '../Filter/Filter.styled';
import { Input } from '../Phonebook/Phonebook.styled';
import propTypes from 'prop-types';

const Filter = ({ filter, handleChange }) => {
  return (
    <FilterContainer>
      <Input
        type="text"
        value={filter}
        placeholder="Filter by name..."
        onChange={handleChange}
      />
    </FilterContainer>
  );
};

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};

export default Filter;
