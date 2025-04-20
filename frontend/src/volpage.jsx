import React, { useCallback } from 'react';
import styles from './userpage.module.css'; // Ensure the file is renamed to userpage.module.css

const Userpage = ({ goto }) => {
  const onGroupContainerClick = useCallback(() => {
    goto("vol");
  }, [goto]);

  return (
    <div className={styles.finalEditVolPage}>
      <div className={styles.finalEditVolPageChild} />
      <div className={styles.finalEditVolPageItem} />
      <div className={styles.finalEditVolPageInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.finalEditVolPageChild1} />
      <div className={styles.finalEditVolPageChild2} />
      <div className={styles.finalEditVolPageChild3} />
      <b className={styles.christiJohnson}>Christi Johnson</b>
      <div className={styles.hours}>11.25 hours</div>
      <div className={styles.cjohnsongmailcom}>cjohnson@gmail.com</div>
      <div className={styles.thursdays10am5pm}>Thursdays: 10am–5pm</div>
      <div className={styles.fridays9am6pm}>Fridays: 9am–6pm</div>
      <div className={styles.div}>(530) 736-1725</div>
      <div className={styles.mandatedReporterCertificate}>Mandated Reporter Certificate</div>
      <div className={styles.peerLeaderCertificate}>Peer Leader Certificate</div>
      <div className={styles.tuesdayMay10}>Tuesday May 10, 2025</div>
      <div className={styles.peerMentorGroup}>Peer Mentor Group</div>
      <div className={styles.peerMentorGroup1}>Peer Mentor Group</div>
      <div className={styles.fridayMay4}>Friday May 4, 2025</div>
      <div className={styles.hours1}>2 hours</div>
      <div className={styles.hours2}>2 hours</div>
      <div className={styles.email}>Email</div>
      <div className={styles.preferredAvailability}>Preferred Availability</div>
      <div className={styles.loggedHours}>Logged Hours</div>
      <div className={styles.certifications}>Certifications</div>
      <div className={styles.phone}>Phone</div>

      <div className={styles.returnToVolunteersParent} onClick={onGroupContainerClick}>
        <div className={styles.returnToVolunteers}>Return to Volunteers</div>
      </div>

      <div className={styles.finalEditVolPageChild4} />

      <div className={styles.peerMentorWrapper}>
        <div className={styles.peerMentor}>Peer Mentor</div>
      </div>
      <div className={styles.availableWrapper}>
        <div className={styles.available}>Available</div>
      </div>

      <div className={styles.navDash}>
        <div className={styles.navDashChild} />
        <div className={styles.dashboard} onClick={() => goto("home")}>Dashboard</div>
        <div className={styles.volunteers} onClick={() => goto("vol")}>Volunteers</div>
        <div className={styles.coordinatorInfo}>Coordinator Info</div>
      </div>
    </div>
  );
};

export default Userpage;
