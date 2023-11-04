import styled from 'styled-components';

export const StatisticsSection = styled.section`
    width: 380px;
    margin: 0 auto 70px;
    padding: 60px 50px;
    background-color: #cedce0;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
    width: 280px;
    margin: 0 auto;
    padding: 30px;
    background-color: #ffffff;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    color: #474747; 
`;

export const StatList = styled.ul`
    max-width: 340px;
    height: 80px;
    margin: 0 auto;
    display: flex;
`;

export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% / 5);
    &:first-child {
        border-bottom-left-radius: 8px;
    }
    &:last-child {
        border-bottom-right-radius: 8px;
    }
`;

export const Label = styled.span`
    color: #ffffff;
    font-size: 16px;
    margin-bottom: 5px;
`;

export const Percentage = styled.span`
    color: #ffffff;
    font-size: 20px;
    /* font-weight: 700; */
`;