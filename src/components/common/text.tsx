import styled from 'styled-components';

export const DefaultText = styled.span`
    display: flex;
    color: ${props => props.theme.componentsTheme.textColorCommon};
    font-size: 14px;
    line-height: 16px;
`;

export const ThinText = styled(DefaultText)`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: ${props => props.theme.componentsTheme.thinTextColor};
`;

export const ToolBarText = styled.span`
    display: flex;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 16px;
    color: ${props => props.theme.componentsTheme.textColorCommon};
`;
