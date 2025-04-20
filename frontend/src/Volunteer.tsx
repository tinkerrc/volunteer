import styles from './VolunteerPage.module.css';
interface VolunteerData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    hours: number;
}
// export const Volunteer = ({ firstName, lastName, email, phone, hours }: VolunteerData) => {
//     return <>
//         <div className={styles.cardVol}>
//             <div className={styles.cardVolChild} />
//             <div className={styles.frameParent}>
//                 <div className={styles.frameGroup}>
//                     <div className={styles.gillianBarnesWongParent}>
//                         <div className={styles.gillianBarnesWong}>{`${firstName} ${lastName}`}</div>
//                         <div className={styles.gbarneswonggmailcom}>{email}</div>
//                         <div className={styles.div}>{phone}</div>
//                     </div>
//                     <div className={styles.div1}>{hours}</div>
//                 </div>
//             </div>
//             <div className={styles.cardVolChild} />
//         </div>
//     </>
// }
export const Volunteer = ({ firstName, lastName, email, phone, hours }: VolunteerData) => {
    return <>
        <div className={styles.cardVol}>
            <div className={styles.cardVolChild} />
            <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                    <div className={styles.gillianBarnesWongParent}>
                        <div className={styles.gillianBarnesWong}>{`${firstName} ${lastName}`}</div>
                        <div className={styles.gbarneswonggmailcom}>{email}</div>
                        <div className={styles.div}>{phone}</div>
                    </div>
                    <div className={styles.div1}>{hours}</div>
                </div>
            </div>
            <div className={styles.cardVolChild} />
        </div>
    </>
}