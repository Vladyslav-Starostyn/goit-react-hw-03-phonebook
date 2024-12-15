import { PropTypes } from 'prop-types';
import { FilterWrapper, FilterInput, FilterLabel } from './Filter.styled';

const Filter = ({ value, onFilterChange }) => {
  return (
    <FilterWrapper>
      <FilterLabel htmlFor="text">Finde contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
      />
    </FilterWrapper>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
