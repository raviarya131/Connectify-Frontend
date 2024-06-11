import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {SearchIcon} from "../../assets/icons.jsx";

export default function SearchBar() {
    return(<InputGroup maxWidth={'100%'} w={'600px'} sx={{border: 'none'}} bg='rgba(100,100,100,0.1)' color={'white'} borderRadius={'5px'}>
        <InputLeftElement pointerEvents='none'>
            <SearchIcon/>
        </InputLeftElement>
        <Input
            focusBorderColor={'transparent'}
            _placeholder={{ opacity: 0.5, color: 'white', fontWeight: '200'}}
            borderColor={'transparent'} borderRadius={'5px'} color={'white'} type='Search' placeholder='Search' />
    </InputGroup>)
}