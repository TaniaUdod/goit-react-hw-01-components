import {
    StatisticsSection,
    Title,
    StatList,
    StatItem,
    Label,
    Percentage,
} from "./Statistics.styled";
import { getRandomHexColor } from "./getRandomHexColor";

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsSection>
            {title && <Title>{title}</Title>}
            <StatList>
                {stats.map(({id, label, percentage }) => (
                    <StatItem key={id} style={{backgroundColor: getRandomHexColor()}}>
                        <Label>{label}</Label>
                        <Percentage>{percentage}%</Percentage>
                    </StatItem>
                ))}
            </StatList>
        </StatisticsSection>
    )
}