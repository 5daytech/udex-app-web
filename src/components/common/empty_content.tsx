import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Column } from './column';
import { EmptyOrdersIcon } from './icons/empty_orders_icon';
import { DefaultText} from './text';

interface EmptyWrapperProps {
    alignAbsoluteCenter?: boolean;
}

interface Props extends HTMLAttributes<HTMLDivElement>, EmptyWrapperProps {
    text: string;
}

const EmptyContentWrapper = styled.div<EmptyWrapperProps>`
    align-items: center;
    color: ${props => props.theme.componentsTheme.lightGray};
    display: flex;
    font-size: 16px;
    font-weight: 500;
    height: 100%;
    justify-content: center;
    width: 100%;

    ${props =>
        props.alignAbsoluteCenter
            ? `
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
    `
            : ''}
`;

const EmptyOrdersIconWrapper = styled.span`
        margin-bottom: 2em;
`;


export const EmptyContent: React.FC<Props> = props => {
    const { text, ...restProps } = props;
    return <EmptyContentWrapper {...restProps}>
            <Column>
                <EmptyOrdersIconWrapper>
                    <EmptyOrdersIcon/>
                </EmptyOrdersIconWrapper>
                <DefaultText>{text}</DefaultText>
            </Column>
        </EmptyContentWrapper>
};
