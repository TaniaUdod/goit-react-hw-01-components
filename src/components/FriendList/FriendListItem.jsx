import { ListItem, Status, FriendImg, FriendName } from "./FriendList.styled";

export const FriendListItem = ({ avatar, name, isOnline, }) => {
    return (
        <ListItem>
            <Status style={{ backgroundColor: isOnline ? 'green' : 'red' }}></Status>
            <FriendImg src={avatar} alt={name} width="48" />
            <FriendName>{name}</FriendName>
        </ListItem>
    );
};