import {Avatar, AvatarBadge, HStack, Image, Text, VStack} from "@chakra-ui/react";
import {useState} from "react";


export default function ProfileAvatar() {

    const [name, setName] = useState('Ravi Arya')
    const [handle, setHandle] = useState('@rvi_arya')
    const [posts, setPosts] = useState(10)
    const [followers, setFollowers] = useState(10)
    const [following, setFollowing] = useState(10)
    const [imgSrc, setImgSrc] = useState('https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1718112040~exp=1718112640~hmac=166975c61768b643134f0f394743b7e1af92993db5d1a00ae02b9f1a482865a3')

    return (
        <VStack spacing={1} color={'white'} mb={8} id='profile-avatar'>
            <Image src='logo.png' width={'150px'}/>
            <Avatar id='left-avatar' size='xl' m={2}  name={name} src={imgSrc}>
                <AvatarBadge id='left-avatar-badge' sx={{border:'0.2em solid #1f2525'}} boxSize='0.8em' bg='green.500' />
            </Avatar>
            <Text className='left-profile-detail' fontSize='sm'>{name}</Text>
            <Text className='left-profile-detail' fontSize='sm' color='#4A5568'>{handle}</Text>
            <HStack id='left-profile-detail' mt={2} spacingd={4} w='100%' justify={'space-around'} color='#EFEBF4'>
                <VStack spacing={0}>
                    <Text fontSize='sm'>{posts}</Text>
                    <Text fontSize='x-small'>Posts</Text>
                </VStack>
                <VStack spacing={0}>
                    <Text fontSize='sm'>{followers}</Text>
                    <Text fontSize='x-small'>Followers</Text>
                </VStack>
                <VStack spacing={0}>
                    <Text fontSize='sm'>{following}</Text>
                    <Text fontSize='x-small'>Following</Text>
                </VStack>
            </HStack>
        </VStack>
    )
}