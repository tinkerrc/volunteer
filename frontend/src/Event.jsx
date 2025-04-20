import useClient from "./client";
import "./EventList.module.css";

export const Event = ({ id }) => {
    const state = useAsync(async () => {
        return await useClient().getEvent({ id })
    }, [id])

    // const Event = ({ date, day, title, time, slots, onClick }) => {
    return (
        <div className="card1">
            <div className="frameGroup">
                <div className="monParent">
                    <div className="upcomingEvents">{day}</div>
                    <b className="may26">
                        <p className="june">{date.split(' ')[0]}</p>
                        <p className="june">{date.split(' ')[1]}</p>
                    </b>
                </div>
                <div className="frameChild" />
                <div className="familySupportGroupParent">
                    <div className="familySupportGroup1">{title}</div>
                    <div className="pm3pmParent">
                        <div className="pm3pm">{time}</div>
                        <div className="frameItem" />
                        <div className="filledSlots1">{slots}</div>
                    </div>
                </div>
            </div>
            <div className="frameParent2">
                <div className="manageVolunteersContainer" onClick={onClick}>
                    <div className="manageVolunteers">Request Volunteers</div>
                </div>
                <img className="rimoreFillIcon1" alt="" src="ri:more-fill.png" />
            </div>
        </div>
    );

}
