import styled from 'styled-components/native';

type ViewProps = {
    paddingTop: number,
};

const StyledSettingsView = styled.View<ViewProps>`
    flex: 1;
    padding-top: ${props => props.paddingTop}px;
`;

const StyledSettingsWrapper = styled.View`

`;

export {
    StyledSettingsView,
    StyledSettingsWrapper,
};