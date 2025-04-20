import { useAsync } from "react-use";
import { useClient } from "./client";
import styles from "./EventList.module.css";

export const Event = ({ id }: { id: string}) => {
    const state = useAsync(async () => {
        return await useClient().getEvent({ id })
    }, [id])

    return (
        <div className={styles.card1}>
            <div className={styles.frameGroup}>
                <div className={styles.monParent}>
                    <div className={styles.upcomingEvents}>{"Day"}</div>
                    <b className={styles.may26}>
                        <p className={styles.june}>{"Test"}</p>
                        <p className={styles.june}>{"Test"}</p>
                    </b>
                </div>
                <div className={styles.frameChild} />
                <div className={styles.familySupportGroupParent}>
                    <div className={styles.familySupportGroup1}>{"Support Group"}</div>
                    <div className={styles.pm3pmParent}>
                        <div className={styles.pm3pm}>{"11:10"}</div>
                        <div className={styles.frameItem} />
                        <div className={styles.filledSlots1}>{3}</div>
                    </div>
                </div>
            </div>
            <div className={styles.frameParent2}>
                <div className={styles.manageVolunteersContainer}>
                    <div className={styles.manageVolunteers}>Request Volunteers</div>
                </div>
                <img className={styles.rimoreFillIcon1} alt="" src="ri:more-fill.png" />
            </div>
        </div>
    );

}
