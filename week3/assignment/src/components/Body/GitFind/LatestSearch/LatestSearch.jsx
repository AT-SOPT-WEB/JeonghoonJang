import { SearchList, ButtonWrapper } from "./LatestSearch.style";

const LatestSearch = ({ items, onClickItem, onDeleteItem }) => {
  return (
    <SearchList>
      <p>최근검색어</p>
      <div>
        {items.map((name) => (
          <ButtonWrapper key={name}>
            <button onClick={() => onClickItem(name)}>{name}</button>
            <span onClick={() => onDeleteItem(name)}>X</span>
          </ButtonWrapper>
        ))}
      </div>
    </SearchList>
  );
};

export default LatestSearch;
