import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({done}: ContainerProps)=>(
    `
    display: flex;
    background: linear-gradient(to right, #20212C, #17181F 80%);
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    label {
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    input {
        width: 25px;
        height: 25px;
        margin-right: 7px;
    }
`
));