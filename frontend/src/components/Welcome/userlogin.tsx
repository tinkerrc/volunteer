import { FunctionComponent, useCallback } from 'react';
import styles from './USERMANAGEMENTLOGIN.module.css';
import svgimage from "./tabler_heart.svg"
import flower from "./flower-back.png"
import logo from "./logo.png"


const USERMANAGEMENTLOGIN:FunctionComponent = () => {
  	
  	const onFrameContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
        <div className={styles.userC}>
    		<div className={styles.userManagementLogin}>
      			<div className={styles.userManagementLoginChild} />
      			<div className={styles.userManagementLoginItem} />
      			<img className={styles.image7Icon} alt="" src={logo} />
      			<img className={styles.userManagementLoginInner} alt="" src={flower} />
      			<div className={styles.rectangleDiv} />
      			<div className={styles.userManagementLoginChild1} />
      			<div className={styles.userManagementLoginChild2} />
      			<div className={styles.userManagementLoginChild3} />
      			<div className={styles.userManagementLoginChild4} />
      			<div className={styles.userManagementLoginChild5} />
      			<div className={styles.userManagementLoginChild6} />
      			<div className={styles.userManagementLoginChild7} />
      			<b className={styles.empoweringMentalHealth}>Empowering Mental Health — Together.</b>
      			<div className={styles.aboutNamiYolo}>About NAMI Yolo County</div>
      			<b className={styles.supportGroups}>Support Groups</b>
      			<b className={styles.inCrisis}>In Crisis</b>
      			<b className={styles.resources}>Resources</b>
      			<b className={styles.education}>Education</b>
      			<b className={styles.advocate}>Advocate</b>
      			<b className={styles.namiYoloCounty}>NAMI Yolo County serves residents throughout our county with free mental health support, online and in-person groups, resources and education. Our programs are for those living with mental health challenges and for the people who provide them with care and support.</b>
      			<div className={styles.rectangleParent}>
        				<div className={styles.groupChild} />
        				<div className={styles.coordinatorWrapper} onClick={onFrameContainerClick}>
          					<div className={styles.coordinator}>Coordinator</div>
        				</div>
        				<div className={styles.volunteerWrapper} onClick={onFrameContainerClick}>
          					<div className={styles.coordinator}>Volunteer</div>
        				</div>
      			</div>
      			<div className={styles.frameParent}>
        				<div className={styles.donateWrapper}>
          					<div className={styles.donate}>Donate</div>
        				</div>
        				<img className={styles.tablerheartIcon} alt="" src={svgimage} />
      			</div>
    		</div></div>);
};

export default USERMANAGEMENTLOGIN;
