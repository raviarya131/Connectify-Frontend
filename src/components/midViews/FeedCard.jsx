import {
    Avatar,
    Box,
    Button,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Heading,
    IconButton,
    Image,
    Text,
    Card,
    Spacer
} from "@chakra-ui/react";
import {LikeIcon, CommentIcon, SavedIcon} from "../../assets/icons.jsx";
import {useState} from "react";

export default function FeedCard(props) {

    const dpSrc = props.dp
    const name = props.name
    const handle = props.handle
    const imgSrc = props.imgSrc
    const text = props.text
    //
    // const [dpSrc, dpImgSrc] = useState('1192520.jpg')
    // const [name, setName] = useState('Hailee Steinfeld')
    // const [handle, setHandle] = useState('@halee___')
    // const [imgSrc, setImgSrc] = useState('post.jpg')


    return (<Card bg={'rgba(200,200,200,0.05)'} color={'#EAE8F4'} maxWidth={'100%'} w={'600px'} minW='300px' fontSize={'14px'}>
        <CardHeader>
            <Flex spacing='4'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name={name} src={dpSrc} />
                    <Box>
                        <Heading size='sm'>{name}</Heading>
                        <Text>{handle}</Text>
                    </Box>
                </Flex>
                {/*<IconButton*/}
                {/*    variant='ghost'*/}
                {/*    colorScheme='gray'*/}
                {/*    aria-label='See menu'*/}
                {/*    icon={<BsThreeDotsVertical />}*/}
                {/*/>*/}
            </Flex>
        </CardHeader>
        <CardBody py={0}>{
            imgSrc?<Image
                mb={4}
                borderRadius={4}
                objectFit='cover'
                src={imgSrc}
                alt='Chakra UI'
            />:<></>
        }
            {
                text? <Text>{text}</Text>:<></>
            }

        </CardBody>
        <CardFooter
            flexWrap='wrap'
            gap={2}
        >
            <div><LikeIcon/></div>
            <div><CommentIcon/></div>
            <Spacer/>
            <div><SavedIcon/></div>
        </CardFooter>
    </Card>)
}