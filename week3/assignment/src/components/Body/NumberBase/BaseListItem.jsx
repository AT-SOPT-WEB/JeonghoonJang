import { ListItem } from "./BaseListItem.style";

const BaseListItem = ({ guess, result }) => {
  return (
    <ListItem>
      <div>
        {guess} - {result}
      </div>
    </ListItem>
  );
};

export default BaseListItem;
