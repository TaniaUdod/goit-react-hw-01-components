import {
    ProfileContainer,
    Description,
    ProfileImg,
    Name,
    Tag,
    Location,
    StatsList,
    ListItem,
    Label,
    Quantity,
} from "./Profile.styled";

const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
    return (
        <ProfileContainer>
            <Description>
                <ProfileImg src={avatar} alt={username} />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>
            <StatsList>
                <ListItem>
                    <Label>Followers</Label>
                    <Quantity>{followers}</Quantity>
                </ListItem>
                <ListItem>
                    <Label>Views</Label>
                    <Quantity>{views}</Quantity>
                </ListItem>
                <ListItem>
                    <Label>Likes</Label>
                    <Quantity>{likes}</Quantity>
                </ListItem>
            </StatsList>
        </ProfileContainer>
    )
};

export default Profile;