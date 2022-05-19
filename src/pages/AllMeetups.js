import { useState, useEffect } from 'react';
import meetups from '../dummy-data';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ loadedMeetups, setLoadedMeetups ] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-getting-started-48dec-default-rtdb.firebaseio.com/meetups.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const meetups = [];
                for(var key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    }
                    meetups.push(meetup);
                }
                setIsLoading(false);
                setLoadedMeetups(data);
            })
            .catch(err => {
                console.log('Cannot get all the meetups data');
            });
    }, []);
    /* 
    - If we omit the 2nd arg [], this fn will be executed whenever component does; Basically there's no difference    
    - empty array: Means there's no dependency; executed when the react component is rendered for the 1st time; subsequent updates to the component would not run this fn
    - [ isLoading ]: Whenever this state variable changes, then this fn will be executed
    
    */

    if(isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }
    console.log(meetups);
    return <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={ meetups }/>

    </section>
}

/* 
    <MeetupList meetups={ loadedMeetups }/>
    
*/
export default AllMeetupsPage;
