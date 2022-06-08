import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input {
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        padding: 8px;
        font-weight: 500;
    }

    button {
        background-color: rgb(49, 134, 204);
        border: 1px solid rgb(49, 134, 204);
        padding: 8px 16px;
        margin: 0 16px;
        border-radius: 8px;
        color: #202020;
        transition: 0.2s ease-in-out;

        &:hover {
            background-color: #202020;
            border: 1px solid #ccc;
            box-shadow: 3px 2px 10px rgb(49, 134, 204);
            color: #ffff;
            
        }

        span {
            font-weight: bold;
            
        }
        
        }
    }
`;