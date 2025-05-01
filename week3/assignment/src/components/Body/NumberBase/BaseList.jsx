import BaseListItem from "./BaseListItem";
import { List } from "./BaseList.style.js";

const BaseList = ({ data }) => {
  return (
    <List>
      {data.map((item) => (
        <BaseListItem key={item.id} guess={item.guess} result={item.result} />
      ))}
    </List>
  );
};

export default BaseList;
