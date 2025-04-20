import useClient from "./client";

const Event_ = ({ id }) => {
    const state = useAsync(async () => {
        return await useClient().getEvent({ id })
    }, [id])

    // const Event = ({ date, day, title, time, slots, onClick }) => {
    return (
        <div className={styles.card1}>
            <div className={styles.frameGroup}>
                <div className={styles.monParent}>
                    <div className={styles.upcomingEvents}>{day}</div>
                    <b className={styles.may26}>
                        <p className={styles.june}>{date.split(' ')[0]}</p>
                        <p className={styles.june}>{date.split(' ')[1]}</p>
                    </b>
                </div>
                <div className={styles.frameChild} />
                <div className={styles.familySupportGroupParent}>
                    <div className={styles.familySupportGroup1}>{title}</div>
                    <div className={styles.pm3pmParent}>
                        <div className={styles.pm3pm}>{time}</div>
                        <div className={styles.frameItem} />
                        <div className={styles.filledSlots1}>{slots}</div>
                    </div>
                </div>
            </div>
            <div className={styles.frameParent2}>
                <div className={styles.manageVolunteersContainer} onClick={onClick}>
                    <div className={styles.manageVolunteers}>Request Volunteers</div>
                </div>
                <img className={styles.rimoreFillIcon1} alt="" src="ri:more-fill.png" />
            </div>
        </div>
    );

}
