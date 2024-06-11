import SearchBar from "./SearchBar.jsx";
import {Box, VStack} from "@chakra-ui/react";
import FeedCard from "./FeedCard.jsx";
import {feedData} from "../../../Sample Data/feed.js";

export default function Feed(){
    const data = feedData

    return (<VStack spacing={4} w='100%' h='100%' align='center' position='relative'>
        <SearchBar/>
        <Box maxWidth={'100%'} w={'600px'} fontSize={'18px'} color={'white'}>Feeds</Box>
        {data.map((item, index) => {
            return (
                <FeedCard key={index} name={item.name} handle={item.handle} dp={item.dp} imgSrc={item.imgSrc} text={item.text}/>)
        })}
    </VStack>)
}