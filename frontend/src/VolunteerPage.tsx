import { NavLink } from 'react-router-dom'; // using correct router package
import styles from './VolunteerPage.module.css';

const VolunteerPage = () => {
  // const onGroupContainerClick = useCallback(() => {
  //   goto("vol");
  // }, [goto]);

  return (
    <div className={styles.volunteerPage}>
      <div className={styles.volunteerPageChild} />
      <div className={styles.volunteerPageItem} />
      <b className={styles.name}>Name</b>
      <b className={styles.email}>Email</b>
      <b className={styles.phone}>Phone</b>
      <b className={styles.hours}>Hours</b>
      <b className={styles.role}>Role</b>

      <div className={styles.component1}>
        <div className={styles.component1Child} />
        <div className={styles.searchVolunteers}>Search Volunteers</div>
      </div>

      <div className={styles.statusParent}>
        <b className={styles.status}>Status</b>
      </div>

      <div className={styles.cardVol}>
        <div className={styles.cardVolChild} />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.gillianBarnesWongParent}>
              <div className={styles.gillianBarnesWong}>Gillian Barnes-Wong</div>
              <div className={styles.gbarneswonggmailcom}>gbarneswong@gmail.com</div>
              <div className={styles.div}>(281) 214-3728</div>
            </div>
            <div className={styles.div1}>0</div>
          </div>
          <div className={styles.trainingInProgressWrapper}>
            <div className={styles.trainingInProgress}>Training in Progress</div>
          </div>
          <div className={styles.peerMentorWrapper}>
            <div className={styles.status}>Peer Mentor</div>
          </div>
        </div>
        <div className={styles.cardVolChild} />
      </div>

      {/* Bottom Nav */}
      <div className={styles.navDash}>
        <div className={styles.navDashChild} />
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.dashboard} ${styles.active}` : styles.dashboard
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/volunteer"
          className={({ isActive }) =>
            isActive ? `${styles.volunteers} ${styles.active}` : styles.volunteers
          }
        >
          Volunteers
        </NavLink>
      </div>
    </div>
  );
};

export default VolunteerPage;

