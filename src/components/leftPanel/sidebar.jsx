import {HomeIcon, InboxIcon, SavedIcon, SettingIcon} from "../../assets/icons.jsx";
import ProfileAvatar from "./ProfileAvatar.jsx";
// import SearchBar from "./SearchBar.jsx";
// import FeedCard from "./FeedCard.jsx";
import Feed from '../midViews/Feed.jsx'
import Inbox from '../midViews/Inbox.jsx'
import Favorite from '../midViews/Favorite.jsx'
import Settings from '../midViews/Settings.jsx'
import RightPanel from "../rightPanel/RightPanel.jsx";
import {
    HStack,
    Tab,
    TabList,
    TabPanels,
    Tabs,
    VStack,
    Text,
    TabPanel,
    Spacer, Flex
} from "@chakra-ui/react";


function createTab(data){
    return (
        data.map((item, index)=>{
            return(<Tab key={index} pr={2} py='10px' borderRadius='6px' my='5px' className='tabs'
                        color={'#a1a5a6'}
                        _selected={{color:'white', backgroundImage: 'linear-gradient(to right, #9d50bb, #7b38e3);'}}
                        justifyContent={'flex-start'}
                        >
                <HStack gap='4' justify='flex-start'>
                    <item.icon/>
                    <Text className='tab-text' textAlign='center' fontWeight='400'>{item.name}</Text>
                </HStack>
            </Tab>)
        })
    )
}


export default function SideBar() {

    const tabs = [
        {name: 'Home', icon: HomeIcon, panel: null},
        {name: 'Inbox', icon: InboxIcon, panel: null},
        {name: 'Favorite', icon: SavedIcon, panel: null},
        {name: 'Settings', icon: SettingIcon, panel: null},
    ]

    return (
        <>
            <Flex w='100%' height='100vh' p={2} px={8}>
                <Tabs isLazy variant='soft-rounded' orientation='vertical' height='100%' w='100%'>
                    <TabList id='tab-list'  my={5} minW='250px' mr={4}>
                        <ProfileAvatar/>
                        {createTab(tabs)}
                    </TabList>
                    {/*<Divider orientation="vertical" wi/>*/}
                    <Spacer/>
                    <TabPanels height='100%' w='90%' align='stretch' overflowY={'auto'} position='relative'>
                        <TabPanel  className='feed-panel' px={20} position='relative'>
                            <Feed/>
                        </TabPanel>
                        <TabPanel>
                            <Inbox/>
                        </TabPanel>
                        <TabPanel>
                            <Favorite/>
                        </TabPanel>
                        <TabPanel>
                            <Settings/>
                        </TabPanel>
                    </TabPanels>
                    <Spacer/>
                    <VStack id='right-pane' minW={'250px'} h={'100vh'}>
                        <RightPanel/>
                    </VStack>


                </Tabs>
            </Flex>
        </>
    )
}