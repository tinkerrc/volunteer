import { useCallback } from 'react';
import React from 'react';
import styles from './userpage.module.css';


const userpage = () => {
  	
  	const onGroupContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
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
        				<img className={styles.weuibackFilledIcon} alt="" src="weui:back-filled.svg" />
      			</div>
      			<img className={styles.materialSymbolseditOutlineIcon} alt="" src="material-symbols:edit-outline.svg" onClick={onGroupContainerClick} />
      			<div className={styles.finalEditVolPageChild4} />
      			<div className={styles.peerMentorWrapper}>
        				<div className={styles.peerMentor}>Peer Mentor</div>
      			</div>
      			<div className={styles.availableWrapper}>
        				<div className={styles.available}>Available</div>
      			</div>
      			<img className={styles.image7Icon} alt="" src="image 7.png" />
      			<div className={styles.navDash}>
        				<div className={styles.navDashChild} />
        				<div className={styles.dashboard}>Dashboard</div>
        				<div className={styles.volunteers}>Volunteers</div>
        				<div className={styles.coordinatorInfo}>Coordinator Info</div>
      			</div>
    		</div>);
};

export default userpage;
