

import { BorderBottom, Search as SearchIcon } from "@mui/icons-material";
import { Box, InputBase, styled } from "@mui/material";


const Component = styled(Box)({
   background: '#fff',
   height: '45px',
   BorderBottom: '1px solid #f2f2f2',
   alignItems: 'center'
})
const Wrapper = styled(Box)({
    backgroundColor: '#f0f2f5',
    position: 'relative',
    width: '100%',
    borderRadius: '10px'
})
const Icon = styled(Box)({
    position: 'absolute',
    height: '100%',
    padding: '8px'
})
const InputField = styled(InputBase)({
    width: '100%',
    padding: '16px',
    paddingLeft:'65px',
    height: '15px'
})
const Search = ({setText}) => {

    return( 
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon />
                </Icon>
                <InputField 
                    placeholder="Search a New Chat"
                    onChange={(e) => setText(e.target.value)}
                />
            </Wrapper>
        </Component>
    )
}


export default Search;