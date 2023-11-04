import styled from 'styled-components';

export const ProfileContainer = styled.div`
    width: 380px;
    margin: 50px auto;
    padding: 60px 50px;
    background-color: #cedce0;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
    width: 280px;
    margin: 0 auto;
    padding: 30px;
    background-color: #ffffff;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const ProfileImg = styled.img`
    border-radius: 50%;
    width: 150px;
    margin: 0 auto;
`;

export const Name = styled.p`
    font-weight: 700;
    font-size: 24px;
    margin: 20px 0 15px;
`;

export const Tag = styled.p`
    color: #9b9a9a;
    margin-bottom: 10px;
`;

export const Location = styled.p`
    color: #9b9a9a;
`;

export const StatsList = styled.ul`
    max-width: 340px;
    height: 80px;
    background-color: #e2f1f5;
    margin: 0 auto;
    display: flex;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-top: 1px solid #dbdbdb;
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% / 3);
    
    &:not(:last-child) {
        border-right: 1px solid #dbdbdb;
    }
`;

export const Label = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #9b9a9a;
`;

export const Quantity = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
`;