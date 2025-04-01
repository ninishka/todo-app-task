import styled from "styled-components";

// export const TodoWrap = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// margin-top: 300px;
// `


export const TodoWrap = styled.div`
    width: 400px;
    margin: 50px auto;
    background: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 5px;
    text-align: center;
`;

export const TodoList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 10px 0;
`;

export const TodoItem = styled.li.withConfig({
    shouldForwardProp: (prop) => prop !== "completed",
})<{ completed: boolean }>`
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
    color: ${(props) => (props.completed ? "#ccc" : "black")};

    &:hover {
        background: #f5f5f5;
    }
`;

export const Input = styled.input`
    width: calc(100% - 20px);
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 10px;
`;

export const Button = styled.button`
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    margin-top: 10px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background: #0056b3;
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-size: 14px;
    color: #777;
`;

export const ClearButton = styled.button`
    background: none;
    border: none;
    color: #888;
    cursor: pointer;
    
    &:hover {
        color: black;
    }
`;

export const FilterButton = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>`
    background: ${(props) => (props.active ? "#007bff" : "transparent")};
    color: ${(props) => (props.active ? "white" : "#007bff")};
    border: 1px solid #007bff;
    padding: 5px 10px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 3px;

    &:hover {
        background: ${(props) => (props.active ? "#0056b3" : "#f0f0f0")};
    }
`;

