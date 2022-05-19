import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch('https://react-getting-started-48dec-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            navigate("/", { replace: true });
        })
        .catch((err) => {
            console.log('Cann\'t submit the form');
        });
    }
    return (
        <section>
            <h1>New meetup form</h1>
            <NewMeetupForm onAddMeetup={ addMeetupHandler } />
        </section>
    );
}

export default NewMeetupPage;
