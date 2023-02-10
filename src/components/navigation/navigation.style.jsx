import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

// screen size < 380px, navbar hidden
export const Container = styled.div`
  height: 60px;
  margin-buttom: 20px;
  color: #4a4a4a;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

//////////////////////////////////////////   LEFT   ////////////////////////////////////////////////////////
export const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  border: 1px solid lightgray;
`;

export const Input = styled.input`
  float: left;
  padding-left: 20px;
  border: 0px;
  ::placeholder {
    color: gray;
  }
`;

export const Search = styled(SearchIcon)`
  color: gray;
  font-size: 16px;
`;

export const Logo = styled.h1``;
//////////////////////////////////////////   Right   ////////////////////////////////////////////////////////

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;
export const MenuItem = styled.div`
  cursor: pointer;
  font-size: 14px;
  margin-left: 25px;
`;
export const LinkTo = styled(Link)`
  color: inherit;
`;
